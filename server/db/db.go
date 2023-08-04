package db

import (
	"context"
	"database/sql"
	"fmt"
	"galatea_server/log"

	"github.com/georgysavva/scany/v2/sqlscan"
)

type DB struct {
	*sql.DB
}

var Conn *DB

// New db connection. Run only once.
func New(conn *sql.DB) (*DB, error) {
	log.L.Info().Msg("connecting to  db")
	ctx := context.Background()
	var test int
	err := sqlscan.Get(ctx, conn, &test, `SELECT 1`)
	if err != nil {
		return nil, fmt.Errorf("unable to connect to database: %w", err)
	}

	Conn = &DB{conn}
	return Conn, nil
}

// Close closes the database connection.
func (db *DB) Close() {
	if db.DB != nil {
		db.DB.Close()
	}
}
