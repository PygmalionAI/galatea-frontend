package handlers

import (
	"bytes"
	"encoding/json"
	"errors"
	"galatea_server/auth"
	"galatea_server/db"
	"galatea_server/log"
	"galatea_server/storage"
	"io"
	"net/http"
	"shared/go/connect/galatea/v1/galateav1connect"

	"github.com/bufbuild/connect-go"
	grpcreflect "github.com/bufbuild/connect-grpcreflect-go"
	"github.com/go-chi/chi/v4"
	"github.com/go-chi/chi/v4/middleware"
)

var ErrNotImplemented = errors.New("not implemented")

// ErrorObject is used by the front end react-fetching-library
type ErrorObject struct {
	Message string `json:"message"`
}

// WithError handles the error returned from our custom Handler signature and makes it compatible with stdlib
func WithError(next func(w http.ResponseWriter, r *http.Request) (int, error)) func(w http.ResponseWriter, r *http.Request) {
	fn := func(w http.ResponseWriter, r *http.Request) {
		contents, _ := io.ReadAll(r.Body)
		r.Body = io.NopCloser(bytes.NewReader(contents))
		code, err := next(w, r)
		if err != nil {
			log.L.Err(err)
			errObj := &ErrorObject{Message: err.Error()}
			jsonErr, wErr := json.Marshal(errObj)
			if wErr != nil {
				log.L.Err(wErr)
				http.Error(w, `{"message":"JSON failed, please contact IT.","error_code":"00001"}`, code)
				return
			}
			http.Error(w, string(jsonErr), code)
			return
		}
	}
	return fn
}
func New(dbConn *db.DB, jwtsecret string, gotrueURL string, imageBucketName string, storer storage.Storer) chi.Router {
	jwtauth := auth.New(jwtsecret)
	log.L.Info().Msg("Prepare routes")
	interceptors := connect.WithInterceptors(WithUserClaims(jwtauth))
	authPath, authHandler := galateav1connect.NewAuthServiceHandler(&Auth{jwtauth, gotrueURL}, interceptors)
	blobPath, blobHandler := galateav1connect.NewImageUploadServiceHandler(&Blob{imageBucketName, storer}, interceptors)
	r := chi.NewRouter()
	r.Use(middleware.RequestID)
	r.Use(middleware.RealIP)
	r.Use(middleware.Recoverer)
	r.Use(middleware.Logger)
	r.Mount(authPath, authHandler)
	r.Mount(blobPath, blobHandler)
	r.Get("/api/health", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("OK"))
	})

	log.L.Info().Msg("Prepare reflection service")
	reflector := grpcreflect.NewStaticReflector(
		galateav1connect.AuthServiceName,
	)
	r.Mount(grpcreflect.NewHandlerV1(reflector))
	r.Mount(grpcreflect.NewHandlerV1Alpha(reflector))
	return r
}
