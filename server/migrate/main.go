package main

import (
	"database/sql"
	"flag"
	"fmt"
	"galatea_server/common/log"

	_ "github.com/golang-migrate/migrate/v4/source/file"
	"github.com/rs/zerolog"
)

func main() {
	log.New(zerolog.InfoLevel)
	dsn := flag.String("dsn", "postgres://cotu:devdev@localhost:5432/cotu?sslmode=disable", "Database DSN")
	drop := flag.Bool("drop", false, "Drop database")
	flag.Parse()

	log.L.Info().Str("path", *dsn).Msg("connecting to db")
	conn, err := connect(*dsn)
	if err != nil {
		fmt.Printf("connect db: %s", err)
		return
	}

	log.L.Info().Str("path", *dsn).Msg("migrating db")
	err = run(conn, MigrationsFS, *drop)
	if err != nil {
		fmt.Printf("migrate db: %s", err)
		return
	}

}

// connect to db connection
func connect(dsnURI string) (*sql.DB, error) {
	conn, err := sql.Open("postgres", dsnURI)
	if err != nil {
		return nil, fmt.Errorf("open db: %w", err)
	}
	return conn, nil
}
