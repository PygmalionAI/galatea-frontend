package handlers

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"galatea_server/auth"
	"io"
	"net/http"
	"net/url"
	galateav1 "shared/go/pb/galatea/v1"

	connect "github.com/bufbuild/connect-go"
)

type Auth struct {
	*auth.JWT
	gotrueURL string
}
type ClaimContext string

func WithUserClaims(a *auth.JWT) connect.UnaryInterceptorFunc {
	fn := func(next connect.UnaryFunc) connect.UnaryFunc {
		return connect.UnaryFunc(func(ctx context.Context, req connect.AnyRequest) (connect.AnyResponse, error) {
			authHeader := req.Header().Get("Authorization")
			if authHeader == "" {
				return next(ctx, req)
			}
			if len(authHeader) < len("Bearer ") {
				return next(ctx, req)
			}
			token := authHeader[len("Bearer "):]
			claims, err := a.Parse(token)
			if err != nil {
				return next(ctx, req)
			}
			ctx = context.WithValue(ctx, ClaimContext("claims"), claims)
			return next(ctx, req)
		})
	}
	return fn
}

func UserClaimsFromContext(ctx context.Context) (*auth.TokenData, error) {
	claims, ok := ctx.Value(ClaimContext("claims")).(*auth.TokenData)
	if !ok {
		return nil, fmt.Errorf("no claims")
	}
	return claims, nil
}

func (a *Auth) SignIn(ctx context.Context, r *connect.Request[galateav1.SignInRequest]) (*connect.Response[galateav1.SignInResponse], error) {
	b, err := json.Marshal(map[string]interface{}{
		"email":    r.Msg.Email,
		"password": r.Msg.Password,
	})
	if err != nil {
		return nil, connect.NewError(connect.CodeInternal, err)
	}
	u, err := url.Parse(fmt.Sprintf("http://%s/token?grant_type=password", a.gotrueURL))
	if err != nil {
		return nil, connect.NewError(connect.CodeInternal, err)
	}
	result, err := http.DefaultClient.Post(u.String(), "application/json", bytes.NewReader(b))
	if err != nil {
		return nil, connect.NewError(connect.CodeInvalidArgument, err)
	}
	respb, err := io.ReadAll(result.Body)
	if err != nil {
		return nil, connect.NewError(connect.CodeInvalidArgument, err)
	}
	if result.StatusCode > 299 {
		return nil, connect.NewError(connect.CodeInvalidArgument, fmt.Errorf("status code %d: %s", result.StatusCode, string(respb)))
	}
	resp := &galateav1.SignInResponse{}
	err = json.Unmarshal(respb, resp)
	if err != nil {
		return nil, connect.NewError(connect.CodeInternal, err)
	}

	return connect.NewResponse(resp), nil
}
func (a *Auth) SignUp(ctx context.Context, r *connect.Request[galateav1.SignUpRequest]) (*connect.Response[galateav1.SignUpResponse], error) {
	b, err := json.Marshal(map[string]interface{}{
		"email":    r.Msg.Email,
		"password": r.Msg.Password,
	})
	if err != nil {
		return nil, connect.NewError(connect.CodeInternal, err)
	}
	u, err := url.Parse(fmt.Sprintf("http://%s/signup", a.gotrueURL))
	if err != nil {
		return nil, connect.NewError(connect.CodeInternal, err)
	}

	result, err := http.DefaultClient.Post(u.String(), "application/json", bytes.NewReader(b))
	if err != nil {
		return nil, connect.NewError(connect.CodeInvalidArgument, err)
	}

	respb, err := io.ReadAll(result.Body)
	if err != nil {
		return nil, connect.NewError(connect.CodeInvalidArgument, err)
	}
	if result.StatusCode > 299 {
		return nil, connect.NewError(connect.CodeInvalidArgument, fmt.Errorf("status code %d: %s", result.StatusCode, string(respb)))
	}
	resp := &galateav1.SignUpResponse{}
	err = json.Unmarshal(respb, resp)
	if err != nil {
		return nil, connect.NewError(connect.CodeInternal, err)
	}
	return connect.NewResponse(resp), nil
}
func (a *Auth) Verify(ctx context.Context, r *connect.Request[galateav1.VerifyRequest]) (*connect.Response[galateav1.VerifyResponse], error) {
	b, err := json.Marshal(map[string]interface{}{
		"type":  r.Msg.Type,
		"email": r.Msg.Email,
		"token": r.Msg.Token,
	})
	if err != nil {
		return nil, connect.NewError(connect.CodeInternal, err)
	}
	u, err := url.Parse(fmt.Sprintf("http://%s/verify", a.gotrueURL))
	if err != nil {
		return nil, connect.NewError(connect.CodeInternal, err)
	}
	result, err := http.DefaultClient.Post(u.String(), "application/json", bytes.NewReader(b))
	if err != nil {
		return nil, connect.NewError(connect.CodeInvalidArgument, err)
	}
	respb, err := io.ReadAll(result.Body)
	if err != nil {
		return nil, connect.NewError(connect.CodeInvalidArgument, err)
	}
	if result.StatusCode > 299 {
		return nil, connect.NewError(connect.CodeInvalidArgument, fmt.Errorf("status code %d: %s", result.StatusCode, string(respb)))
	}
	resp := &galateav1.VerifyResponse{}
	err = json.Unmarshal(respb, resp)
	if err != nil {
		return nil, connect.NewError(connect.CodeInternal, err)
	}
	return connect.NewResponse(resp), nil
}
func (a *Auth) Check(ctx context.Context, r *connect.Request[galateav1.CheckRequest]) (*connect.Response[galateav1.CheckResponse], error) {
	claims, err := UserClaimsFromContext(ctx)
	if err != nil {
		return nil, connect.NewError(connect.CodeUnauthenticated, err)
	}
	resp := &galateav1.CheckResponse{
		Email:     claims.Email,
		UserId:    claims.UserID,
		SessionId: claims.SessionID,
	}

	return connect.NewResponse(resp), nil
}
