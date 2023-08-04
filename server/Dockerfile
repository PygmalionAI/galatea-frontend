# syntax=docker/dockerfile:1

## Build

FROM golang:1.20rc3-alpine AS build
RUN apk add gcc g++

WORKDIR /app
ADD . ./
RUN go mod download
RUN rm -rf ./dist
RUN mkdir ./dist
RUN go build -o ./dist/galatea_server ./cmd/main.go

## Deploy

FROM alpine:3.17.1

WORKDIR /
COPY --from=build /app/dist/galatea_server /galatea_server

COPY ./CHECKS /
ENTRYPOINT ["/galatea_server", "serve"]