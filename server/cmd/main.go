package main

import (
	"database/sql"
	"fmt"
	"galatea_server/db"
	"galatea_server/handlers"
	"galatea_server/log"
	"galatea_server/migrate"
	"net/http"
	"os"
	"time"

	"github.com/rs/zerolog"
	"github.com/urfave/cli/v2"
	"golang.org/x/net/http2"
	"golang.org/x/net/http2/h2c"
)

func main() {
	log.New(zerolog.DebugLevel)
	app := &cli.App{
		Version:  "dev",
		Compiled: time.Now(),
		Usage:    "Run galatea_server",
		Authors: []*cli.Author{
			{
				Name:  "Galatea Team",
				Email: "admin@pygmalion.chat",
			},
		},
		Flags: []cli.Flag{
			&cli.StringFlag{Name: "database_url", Usage: "Database DSN", EnvVars: []string{"DATABASE_URL"}, Value: "postgres://galatea:devdev@localhost:5432/galatea?sslmode=disable"},
			&cli.StringFlag{Name: "addr", Usage: "Host addr", EnvVars: []string{"ADDR"}, Value: ":8080"},
			&cli.BoolFlag{Name: "drop", Usage: "Drop database", EnvVars: []string{"DROP"}, Value: false},
			&cli.StringFlag{Name: "gotrue_url", Usage: "Auth server URL", EnvVars: []string{"GOTRUE_URL"}, Value: "gotrue:8081"},
			&cli.StringFlag{Name: "jwt_secret", Usage: "Shared secret with gotrue", EnvVars: []string{"JWT_SECRET"}, Value: "CHANGEME"},
		},
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
	// Initialize the database connection
	dsnURI := ctx.String("database_url")
	conn, err := connect(dsnURI)
	if err != nil {
		return fmt.Errorf("connect to database: %w", err)
	}

	dbConn, err := db.New(conn)
	if err != nil {
		return fmt.Errorf("new db: %w", err)
	}
	defer dbConn.Close()

	if ctx.Bool("drop") {
		err = migrate.Drop(conn)
		if err != nil {
			return fmt.Errorf("drop: %w", err)
		}
	}
	err = migrate.Migrate(conn)
	if err != nil {
		return fmt.Errorf("migrate: %w", err)
	}

	// Setup routes
	jwtsecret := ctx.String("jwt_secret")
	gotrueURL := ctx.String("gotrue_url")
	r := handlers.New(dbConn, jwtsecret, gotrueURL)
	addr := ctx.String("addr")
	log.L.Info().Str("addr", addr).Msg("listening")

	server := &http.Server{
		Addr:         addr,
		ReadTimeout:  5 * time.Second,
		WriteTimeout: 5 * time.Second,
		Handler:      h2c.NewHandler(r, &http2.Server{}),
	}

	err = server.ListenAndServe()
	if err != nil {
		return fmt.Errorf("listen and serve: %w", err)
	}
	return nil
}

func connect(dsn string) (*sql.DB, error) {
	log.L.Info().Msg("connecting to  db")
	conn, err := sql.Open("pgx", dsn)
	if err != nil {
		return nil, fmt.Errorf("connect to database: %w", err)
	}
	return conn, nil
}
