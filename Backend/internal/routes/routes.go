package routes

import (
	"Notes/internal/handlers"
	"Notes/internal/middleware"

	"github.com/gin-gonic/gin"
)

func Routes(r *gin.Engine) {
	r.POST("/login", handlers.Login)
	r.POST("/sign_up", handlers.SignUp)
	r.POST("/reset-refreshToken", handlers.GetRefreshToken)

	r.GET("/user-info", middleware.AuthMiddleware(), handlers.ProtectedRoute)

}
