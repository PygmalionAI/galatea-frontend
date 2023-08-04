package migrate

import (
	"database/sql"
	"embed"
	"errors"
	"fmt"
	"galatea_server/common/log"

	"github.com/golang-migrate/migrate/v4"
	"github.com/golang-migrate/migrate/v4/database/postgres"
	"github.com/golang-migrate/migrate/v4/source/iofs"
)

//go:embed migrations/*
var MigrationsFS embed.FS

func Migrate(conn *sql.DB, fs embed.FS, drop bool) error {
	driver, err := postgres.WithInstance(conn, &postgres.Config{})
	if err != nil {
		return fmt.Errorf("db instance: %w", err)
	}
	dir, err := fs.ReadDir(".")
	if err != nil {
		return fmt.Errorf("read dir: %w", err)
	}
	fmt.Println(dir[0].Name())
	d, err := iofs.New(fs, "migrations")
	if err != nil {
		return fmt.Errorf("new iofs: %w", err)
	}
	m, err := migrate.NewWithInstance("iofs", d, "postgres", driver)
	if err != nil {
		return fmt.Errorf("new migrate instance: %w", err)
	}
	if drop {
		return m.Drop()
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
