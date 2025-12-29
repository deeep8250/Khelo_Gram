package middleware

import (
	"Notes/internal/utils"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
)

func AuthMiddleware() gin.HandlerFunc {
	return func(ctx *gin.Context) {

		//  extract auth header
		authHeader := ctx.GetHeader("Authorization")
		if authHeader == "" {
			ctx.JSON(http.StatusUnauthorized, gin.H{
				"error": "authorization header missing",
			})
			ctx.Abort()
			return
		}

		// check the formation and remove the bearer string from the token
		parts := strings.Split(authHeader, " ")
		if len(parts) != 2 || !strings.EqualFold(parts[0], "Bearer") {
			ctx.JSON(http.StatusUnauthorized, gin.H{
				"error": "invalid authorization header format",
			})
			ctx.Abort()
			return
		}

		tokenString := parts[1]

		//parse the token and validate the signature
		token, err := jwt.ParseWithClaims(tokenString, &utils.Claims{}, func(t *jwt.Token) (interface{}, error) {
			//ensuring using correct signing method
			if _, ok := t.Method.(*jwt.SigningMethodHMAC); !ok {
				return nil, jwt.ErrSignatureInvalid
			}
			return utils.JWTsecret, nil
		})

		if err != nil || !token.Valid {
			ctx.JSON(http.StatusUnauthorized, gin.H{
				"error": "invalid or expired token",
			})
			ctx.Abort()
			return
		}

		// extract claims
		claims, ok := token.Claims.(utils.Claims)
		if !ok {
			ctx.JSON(http.StatusUnauthorized, gin.H{
				"error": "invalid token claims",
			})
			ctx.Abort()
			return
		}

		ctx.Set("user", claims)
		ctx.Next()

	}
}
