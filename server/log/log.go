package log

import (
	"os"

	"github.com/rs/zerolog"
)

var L *zerolog.Logger

func New(level zerolog.Level) *zerolog.Logger {
	zerolog.SetGlobalLevel(level)
	logger := zerolog.New(os.Stdout).With().Timestamp().Caller().Logger().Output(zerolog.ConsoleWriter{Out: os.Stderr, NoColor: false})
	L = &logger
	L.Info().Msg("logger initialized")
	return L
}
