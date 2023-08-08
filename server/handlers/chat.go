package handlers

import (
	"context"
	galateav1 "shared/go/pb/galatea/v1"

	connect "github.com/bufbuild/connect-go"
)

type Chat struct {
}

func (c *Chat) ChatAll(context.Context, *connect.Request[galateav1.ChatAllRequest]) (*connect.Response[galateav1.ChatAllResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, ErrNotImplemented)
}
func (c *Chat) ChatGet(context.Context, *connect.Request[galateav1.ChatGetRequest]) (*connect.Response[galateav1.ChatGetResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, ErrNotImplemented)
}
func (c *Chat) ChatCreate(context.Context, *connect.Request[galateav1.ChatCreateRequest]) (*connect.Response[galateav1.ChatCreateResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, ErrNotImplemented)
}
func (c *Chat) ChatDelete(context.Context, *connect.Request[galateav1.ChatDeleteRequest]) (*connect.Response[galateav1.ChatDeleteResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, ErrNotImplemented)
}
func (c *Chat) ChatSendMessage(context.Context, *connect.Request[galateav1.ChatSendMessageRequest]) (*connect.Response[galateav1.ChatSendMessageResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, ErrNotImplemented)
}
func (c *Chat) ChatSubscribe(context.Context, *connect.Request[galateav1.ChatSubscribeRequest], *connect.ServerStream[galateav1.ChatSubscribeResponse]) error {
	return connect.NewError(connect.CodeUnimplemented, ErrNotImplemented)
}
