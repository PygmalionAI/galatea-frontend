module galatea_server

go 1.20

replace shared v0.0.0 => ../shared

require (
	github.com/bufbuild/connect-go v1.10.0
	github.com/bufbuild/connect-grpcreflect-go v1.1.0
	github.com/davecgh/go-spew v1.1.1
	github.com/georgysavva/scany/v2 v2.0.0
	github.com/go-chi/chi/v4 v4.0.0-rc1
	github.com/golang-jwt/jwt/v5 v5.0.0
	github.com/golang-migrate/migrate/v4 v4.16.2
	github.com/rs/zerolog v1.30.0
	github.com/urfave/cli/v2 v2.25.7
	golang.org/x/net v0.10.0
	shared v0.0.0
)

require (
	github.com/cpuguy83/go-md2man/v2 v2.0.2 // indirect
	github.com/hashicorp/errwrap v1.1.0 // indirect
	github.com/hashicorp/go-multierror v1.1.1 // indirect
	github.com/jackc/pgerrcode v0.0.0-20220416144525-469b46aa5efa // indirect
	github.com/jackc/pgpassfile v1.0.0 // indirect
	github.com/jackc/pgservicefile v0.0.0-20221227161230-091c0ba34f0a // indirect
	github.com/jackc/pgx/v5 v5.4.2 // indirect
	github.com/mattn/go-colorable v0.1.12 // indirect
	github.com/mattn/go-isatty v0.0.16 // indirect
	github.com/russross/blackfriday/v2 v2.1.0 // indirect
	github.com/stretchr/testify v1.8.4 // indirect
	github.com/xrash/smetrics v0.0.0-20201216005158-039620a65673 // indirect
	go.uber.org/atomic v1.7.0 // indirect
	golang.org/x/crypto v0.10.0 // indirect
	golang.org/x/sys v0.9.0 // indirect
	golang.org/x/text v0.10.0 // indirect
	google.golang.org/protobuf v1.31.0 // indirect
)
