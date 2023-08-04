package auth

import (
	"fmt"

	"github.com/golang-jwt/jwt/v5"
)

type JWT struct {
	secret string
}

func New(secret string) *JWT {
	return &JWT{secret: secret}
}

type TokenData struct {
	UserID    string `json:"user_id"`
	SessionID string `json:"session_id"`
	Email     string `json:"email"`
}

func (j *JWT) Parse(tokenString string) (*TokenData, error) {
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		return []byte(j.secret), nil
	})

	if err != nil {
		return nil, fmt.Errorf("parse token: %w", err)
	}

	claims, ok := token.Claims.(jwt.MapClaims)
	if !token.Valid {
		return nil, fmt.Errorf("invalid token")
	}
	if !ok {
		return nil, fmt.Errorf("invalid claims")
	}
	return &TokenData{
		UserID:    claims["sub"].(string),
		SessionID: claims["session_id"].(string),
		Email:     claims["email"].(string),
	}, nil
}
