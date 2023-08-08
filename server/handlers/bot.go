package handlers

import (
	"context"
	galateav1 "shared/go/pb/galatea/v1"

	connect "github.com/bufbuild/connect-go"
)

type Bot struct {
}

func (b *Bot) BotAll(context.Context, *connect.Request[galateav1.BotAllRequest]) (*connect.Response[galateav1.BotAllResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, ErrNotImplemented)
}
func (b *Bot) BotCreate(context.Context, *connect.Request[galateav1.BotCreateRequest]) (*connect.Response[galateav1.BotCreateResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, ErrNotImplemented)
}
func (b *Bot) BotUpdate(context.Context, *connect.Request[galateav1.BotUpdateRequest]) (*connect.Response[galateav1.BotUpdateResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, ErrNotImplemented)
}
func (b *Bot) BotDelete(context.Context, *connect.Request[galateav1.BotDeleteRequest]) (*connect.Response[galateav1.BotDeleteResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, ErrNotImplemented)
}
