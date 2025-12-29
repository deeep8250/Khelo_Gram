package main

import (
	"Notes/Database/db"
	"Notes/internal/routes"

	"github.com/gin-gonic/gin"
)

func main() {

	r := gin.Default()
	routes.Routes(r)
	db.Connect()
	r.Run()
}
