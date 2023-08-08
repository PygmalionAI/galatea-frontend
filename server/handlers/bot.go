package handlers

import (
	"context"
	"galatea_server/db"
	"galatea_server/jet/galatea/public/model"
	"galatea_server/jet/galatea/public/table"
	galateav1 "shared/go/pb/galatea/v1"

	connect "github.com/bufbuild/connect-go"
	"github.com/go-jet/jet/v2/postgres"
)

type Bot struct {
}

func (b *Bot) BotAll(ctx context.Context, r *connect.Request[galateav1.BotAllRequest]) (*connect.Response[galateav1.BotAllResponse], error) {
	u, err := UserClaimsFromContext(ctx)
	if err != nil {
		return nil, err
	}

	result := []*model.Bots{}
	err = table.Bots.
		SELECT(table.Bots.AllColumns).
		WHERE(table.Bots.OwnerID.EQ(postgres.String(u.UserID))).
		Query(db.Conn.DB, &result)

	if err != nil {
		return nil, err
	}

	resp := &galateav1.BotAllResponse{
		Bots: []*galateav1.Bot{},
	}
	for _, record := range result {
		resp.Bots = append(resp.Bots, &galateav1.Bot{
			Id:          record.ID.String(),
			Name:        record.Name,
			Description: record.Description,
			AvatarUrl:   record.AvatarURL,
		})
	}

	return nil, connect.NewError(connect.CodeUnimplemented, ErrNotImplemented)
}
func (b *Bot) BotCreate(ctx context.Context, r *connect.Request[galateav1.BotCreateRequest]) (*connect.Response[galateav1.BotCreateResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, ErrNotImplemented)
}
func (b *Bot) BotUpdate(ctx context.Context, r *connect.Request[galateav1.BotUpdateRequest]) (*connect.Response[galateav1.BotUpdateResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, ErrNotImplemented)
}
func (b *Bot) BotDelete(ctx context.Context, r *connect.Request[galateav1.BotDeleteRequest]) (*connect.Response[galateav1.BotDeleteResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, ErrNotImplemented)
}
