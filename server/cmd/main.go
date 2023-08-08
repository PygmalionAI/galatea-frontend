package main

import (
	"database/sql"
	"fmt"
	"galatea_server/db"
	"galatea_server/handlers"
	"galatea_server/log"
	"galatea_server/migrate"
	"galatea_server/storage"
	"net/http"
	"os"
	"time"

	"github.com/minio/minio-go/v7"
	"github.com/minio/minio-go/v7/pkg/credentials"
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
			&cli.StringFlag{Category: "Server:", Name: "addr", Usage: "Host addr", EnvVars: []string{"ADDR"}, Value: ":8080"},

			&cli.StringFlag{Category: "Database:", Name: "database_url", Usage: "Database DSN", EnvVars: []string{"DATABASE_URL"}, Value: "postgres://galatea:devdev@localhost:5432/galatea?sslmode=disable"},
			&cli.BoolFlag{Category: "Database:", Name: "drop", Usage: "Drop database", EnvVars: []string{"DROP"}, Value: false},

			&cli.StringFlag{Category: "Authentication", Name: "gotrue_url", Usage: "Auth server URL", EnvVars: []string{"GOTRUE_URL"}, Value: "gotrue:8081"},
			&cli.StringFlag{Category: "Authentication", Name: "jwt_secret", Usage: "Shared secret with gotrue", EnvVars: []string{"JWT_SECRET"}, Value: "CHANGEME"},

			&cli.StringFlag{Category: "Storage:", Name: "storage_bucket", Usage: "Bucket name to store images", EnvVars: []string{"STORAGE_BUCKET"}, Value: "images"},
			&cli.StringFlag{Category: "Storage:", Name: "storage_mode", Value: "s3", EnvVars: []string{"STORAGE_MODE"}, Usage: "Storage mode (local, console, s3)"},
			&cli.StringFlag{Category: "Storage:", Name: "storage_base_dir", Value: "./data", EnvVars: []string{"STORAGE_BASE_DIR"}, Usage: "Base dir for local storage"},
			&cli.BoolFlag{Category: "Storage:", Name: "storage_s3_use_ssl", Value: false, EnvVars: []string{"STORAGE_S3_USE_SSL"}, Usage: "Use SSL for object storage"},
			&cli.StringFlag{Category: "Storage:", Name: "storage_s3_url", Value: "minio:9000", EnvVars: []string{"STORAGE_S3_URL"}, Usage: "Endpoint for object storage"},
			&cli.StringFlag{Category: "Storage:", Name: "storage_s3_key", Value: "galatea", EnvVars: []string{"STORAGE_S3_KEY"}, Usage: "Key for object storage"},
			&cli.StringFlag{Category: "Storage:", Name: "storage_s3_secret", Value: "devdevdev", EnvVars: []string{"STORAGE_S3_SECRET"}, Usage: "Secret for object storage"},
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

	// Connect to object storage
	var st storage.Storer
	storageMode := ctx.String("storage_mode")
	log.L.Info().Str("mode", storageMode).Msg("Setting up storage")
	switch storageMode {
	case "local":
		st = &storage.File{
			BaseDir: ctx.String("storage_base_dir"),
		}
	case "s3":
		storageConn, err := minio.New(
			ctx.String("storage_s3_url"),
			&minio.Options{
				Creds:  credentials.NewStaticV4(ctx.String("storage_s3_key"), ctx.String("storage_s3_secret"), ""),
				Secure: ctx.Bool("storage_s3_use_ssl"),
			})
		if err != nil {
			return fmt.Errorf("new minio: %w", err)
		}

		st = &storage.S3{Client: storageConn}
	default:
		st = &storage.Console{}
	}

	// Setup routes
	jwtsecret := ctx.String("jwt_secret")
	gotrueURL := ctx.String("gotrue_url")
	r := handlers.New(dbConn, jwtsecret, gotrueURL, ctx.String("storage_bucket"), st)
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
