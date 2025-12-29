package utils

import (
	"time"

	"github.com/golang-jwt/jwt/v5"
)

var JWTsecret = []byte("secret-signature")

type Claims struct {
	UserId uint   `json:"user_id"`
	Email  string `json:"email"`
	Name   string `json:"name"`
	jwt.RegisteredClaims
}

func GenerateJwt(id uint, email, Name string) (string, error) {
	claims := &Claims{
		UserId: id,
		Email:  email,
		Name:   Name,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(15 * time.Minute)),
			IssuedAt:  jwt.NewNumericDate(time.Now()),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(JWTsecret)
}
