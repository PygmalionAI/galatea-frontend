package main

import (
	"fmt"
	"galatea_server/common/log"
	"galatea_server/server/internal/db"
	"galatea_server/server/internal/handlers"
	"net/http"
	"os"
	"time"

	// "github.com/go-chi/chi/v4/middleware"
	"github.com/rs/zerolog"
	"github.com/urfave/cli/v2"
)

// Variable passed in at compile time using `-ldflags`
var (
	Version          string // -X main.Version=$(git describe --tags --abbrev=0)
	GitHash          string // -X main.GitHash=$(git rev-parse HEAD)
	GitBranch        string // -X main.GitBranch=$(git rev-parse --abbrev-ref HEAD)
	BuildDate        string // -X main.BuildDate=$(date -u +%Y%m%d%H%M%S)
	UnCommittedFiles string // -X main.UnCommittedFiles=$(git status --porcelain | wc -l)"
)

func main() {
	log.New(zerolog.DebugLevel)
	app := &cli.App{
		Version:  Version,
		Compiled: time.Now(),
		Usage:    "Run galatea_server",
		Authors: []*cli.Author{
			{
				Name:  "Galatea Team",
				Email: "admin@pygmalion.chat",
			},
		},
		Flags:  []cli.Flag{},
		Action: run,
	}

	err := app.Run(os.Args)
	if err != nil {
		fmt.Println("run app:", err)
		os.Exit(1)
	}
}

func run(ctx *cli.Context) error {
	log.L.Info().Msg("starting server")

	// r.Use(middleware.RequestID)
	// r.Use(middleware.RealIP)

	// Initialize the database connection
	dsnURI := "postgres://galatea:devdev@localhost:5432/galatea"
	dbConn, err := db.New(dsnURI)
	if err != nil {
		log.L.Fatal().Msgf("unable to connect to database: %v", err)
	}
	defer dbConn.Close()

	// Setup routes
	r := handlers.New(dbConn)
	err = http.ListenAndServe(":8080", r)
	if err != nil {
		log.L.Fatal().Msgf("listen and serve: %v", err)
	}
	return nil
}
