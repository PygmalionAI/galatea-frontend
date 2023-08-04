package handlers

import (
	"encoding/json"
	"galatea_server/auth"
	"galatea_server/db"
	"net/http"

	"github.com/go-chi/chi/v4"
	"github.com/go-chi/chi/v4/middleware"
)

func New(dbConn *db.DB, jwtsecret string) chi.Router {
	jwtauth := auth.New(jwtsecret)

	r := chi.NewRouter()
	r.Use(middleware.RequestID)
	r.Use(middleware.RealIP)
	r.Use(middleware.Recoverer)

	// API endpoints
	r.Get("/api/health", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("OK"))
	})
	r.Get("/api/check", func(w http.ResponseWriter, r *http.Request) {
		headerString := r.Header.Get("Authorization")
		if headerString == "" {
			w.WriteHeader(http.StatusUnauthorized)
			w.Write([]byte("no token"))
			return
		}

		token := headerString[len("Bearer "):]
		claims, err := jwtauth.Parse(token)
		if err != nil {
			w.WriteHeader(http.StatusUnauthorized)
			w.Write([]byte(err.Error()))
			return
		}
		json.NewEncoder(w).Encode(claims)
	})
	return r
}
