package handlers

import (
	"galatea_server/server/internal/db"
	"net/http"

	"github.com/go-chi/chi/v4"
	"github.com/go-chi/chi/v4/middleware"
)

func New(dbConn *db.DB) chi.Router {
	r := chi.NewRouter()
	r.Use(middleware.RequestID)
	r.Use(middleware.RealIP)
	r.Use(middleware.Recoverer)

	// API endpoints
	r.Get("/api/health", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("OK"))
	})

	return r
}
