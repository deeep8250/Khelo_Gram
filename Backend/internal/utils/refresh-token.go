package utils

import (
	"crypto/rand"
	"crypto/sha256"
	"encoding/base64"
	"encoding/hex"
)

func GenerateRefreshToken() string {

	b := make([]byte, 32)
	rand.Read(b)

	token := base64.URLEncoding.EncodeToString(b)
	return token

}

func HashToken(token string) string {
	hash := sha256.Sum256([]byte(token))

	return hex.EncodeToString(hash[:])
}
