package migrate

import (
	"database/sql"
	"embed"
	"errors"
	"fmt"
	"galatea_server/log"

	"github.com/golang-migrate/migrate/v4"
	pgxmigrate "github.com/golang-migrate/migrate/v4/database/pgx/v5"
	_ "github.com/golang-migrate/migrate/v4/source/file"
	"github.com/golang-migrate/migrate/v4/source/iofs"
)

//go:embed migrations/*
var fs embed.FS

func Drop(conn *sql.DB) error {
	driver, err := pgxmigrate.WithInstance(conn, &pgxmigrate.Config{})
	if err != nil {
		return fmt.Errorf("db instance: %w", err)
	}

	d, err := iofs.New(fs, "migrations")
	if err != nil {
		return fmt.Errorf("new iofs: %w", err)
	}
	m, err := migrate.NewWithInstance("iofs", d, "pgx", driver)
	if err != nil {
		return fmt.Errorf("new migrate instance: %w", err)
	}
	log.L.Info().Msg("dropping database")
	return m.Drop()

}

func Migrate(conn *sql.DB) error {
	driver, err := pgxmigrate.WithInstance(conn, &pgxmigrate.Config{})
	if err != nil {
		return fmt.Errorf("db instance: %w", err)
	}

	d, err := iofs.New(fs, "migrations")
	if err != nil {
		return fmt.Errorf("new iofs: %w", err)
	}
	m, err := migrate.NewWithInstance("iofs", d, "pgx", driver)
	if err != nil {
		return fmt.Errorf("new migrate instance: %w", err)
	}

	log.L.Info().Msg("migrating database (if any)")

	err = m.Up()
	if err != nil && !errors.Is(err, migrate.ErrNoChange) {
		return fmt.Errorf("run migration: %w", err)
	}
	if err != nil && errors.Is(err, migrate.ErrNoChange) {
		v, _, err := m.Version()
		if err != nil {
			return fmt.Errorf("get migration version: %w", err)
		}
		log.L.Info().Uint("version", v).Msg("no changes")
		return nil
	}
	v, _, err := m.Version()
	if err != nil {
		return fmt.Errorf("get migration version: %w", err)
	}
	log.L.Info().Uint("version", v).Msg("successfully migrated")
	return nil
}
