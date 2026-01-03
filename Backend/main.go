package main

import (
	"Notes/Database/db"
	"Notes/internal/middleware"
	"Notes/internal/routes"

	"github.com/gin-gonic/gin"
)

func main() {

	r := gin.Default()
	r.Use(middleware.CORS())
	routes.Routes(r)
	db.Connect()
	r.Run()
}
