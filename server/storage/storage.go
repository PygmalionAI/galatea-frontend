package storage

import (
	"bytes"
	"context"
	"fmt"
	"galatea_server/log"
	"io"
	"os"
	"path"

	"github.com/minio/minio-go/v7"
)

// Console is a storage implementation that logs to stdout
type Console struct{ BaseDir string }

func (s *Console) Put(bucket, filename string, b []byte) (string, error) {
	log.L.Info().Str("bucket", bucket).Str("filename", filename).Str("content", string(b)).Msg("Nop.Put")
	return "console", nil
}
func (s *Console) Get(bucket, filename string) ([]byte, error) {
	log.L.Info().Str("bucket", bucket).Str("filename", filename).Msg("Nop.Get")
	return []byte("hello world"), nil
}

// File is a storage implementation that writes to the filesystem
type File struct{ BaseDir string }

func (s *File) Put(bucket, filename string, b []byte) (string, error) {
	err := os.MkdirAll(path.Join(s.BaseDir, bucket), 0755)
	if err != nil {
		return "", err
	}
	f, err := os.Create(path.Join(s.BaseDir, bucket, filename))
	if err != nil {
		return "", err
	}
	_, err = f.Write(b)
	if err != nil {
		return "", err
	}

	loc := path.Join(s.BaseDir, bucket, filename)

	return loc, nil
}

func (s *File) Get(bucket, filename string) ([]byte, error) {
	f, err := os.Create(path.Join(s.BaseDir, bucket, filename))
	if err != nil {
		return nil, err
	}
	return io.ReadAll(f)
}

// S3 is a storage implementation that writes to S3 (or minio in our case)
type S3 struct {
	*minio.Client
}

func (s *S3) Put(bucket, filename string, b []byte) (string, error) {
	ctx := context.Background()
	r := io.NopCloser(bytes.NewReader(b))
	_, err := s.PutObject(ctx, bucket, filename, r, int64(len(b)), minio.PutObjectOptions{})
	if err != nil {
		return "", err
	}
	loc := fmt.Sprintf("%s/%s/%s", s.Client.EndpointURL().String(), bucket, filename)
	return loc, nil
}

func (s *S3) Get(bucket, filename string) ([]byte, error) {
	ctx := context.Background()
	obj, err := s.GetObject(ctx, bucket, filename, minio.GetObjectOptions{})
	if err != nil {
		return nil, err
	}
	return io.ReadAll(obj)
}

// Storer is an interface for storing and retrieving files
type Storer interface {
	// Put stores a file
	Put(bucket, filename string, b []byte) (string, error)

	// Get retrieves a file
	Get(bucket, filename string) ([]byte, error)
}
