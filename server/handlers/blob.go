package handlers

import (
	"context"
	"galatea_server/storage"
	galateav1 "shared/go/pb/galatea/v1"

	"github.com/bufbuild/connect-go"
	"github.com/gofrs/uuid/v5"
)

// Blob contains handlers for binary data over the wire
type Blob struct {
	bucket string
	storage.Storer
}

// ImageUpload uploads an image to the blob store (minio/s3/console/nop)
func (b *Blob) ImageUpload(ctx context.Context, r *connect.Request[galateav1.ImageUploadRequest]) (*connect.Response[galateav1.ImageUploadResponse], error) {
	id, err := uuid.DefaultGenerator.NewV4()
	if err != nil {
		return nil, err
	}
	u, err := b.Put(b.bucket, id.String(), r.Msg.Image)
	if err != nil {
		return nil, err
	}
	return &connect.Response[galateav1.ImageUploadResponse]{
		Msg: &galateav1.ImageUploadResponse{
			Url: u,
		},
	}, nil
}
