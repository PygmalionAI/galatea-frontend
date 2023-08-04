package db

import (
	"context"
	"fmt"
	"galatea_server/common/log"

	"github.com/georgysavva/scany/v2/pgxscan"
	"github.com/jackc/pgx/v5"
)

type DB struct {
	*pgx.Conn
}

var Conn *DB

// New db connection. Run only once.
func New(dsnURI string) (*DB, error) {
	log.L.Info().Msg("connecting to  db")
	ctx := context.Background()
	conn, err := pgx.Connect(ctx, dsnURI)
	if err != nil {
		return nil, fmt.Errorf("unable to connect to database: %w", err)
	}
	var test int
	err = pgxscan.Get(ctx, conn, &test, `SELECT 1`)
	if err != nil {
		return nil, fmt.Errorf("unable to connect to database: %w", err)
	}

	Conn = &DB{conn}
	return Conn, nil
}

// Close closes the database connection.
func (db *DB) Close() {
	if db.Conn != nil {
		db.Conn.Close(context.Background())
	}
}
