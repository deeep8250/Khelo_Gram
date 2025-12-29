package db

import (
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

var DB *gorm.DB

func Connect() {
	godotenv.Load(".env")
	dsn := fmt.Sprintf(
		"host=%s user=%s password=%s dbname=%s port=%s sslmode=%s",
		os.Getenv("DB_HOST"),
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_NAME"),
		os.Getenv("DB_PORT"),
		os.Getenv("DB_SSLMODE"),
	)

	var err error
	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{Logger: logger.Default.LogMode(logger.Info)})
	if err != nil {
		log.Fatal("DB connection failed : ", err.Error())
	}

	sqlConn, err := DB.DB()
	if err != nil {
		log.Fatal("Cant get the DB from GORM ", err.Error())
	}
	if err = sqlConn.Ping(); err != nil {
		log.Fatalf("❌ Database ping failed: %v", err)
	} else {
		fmt.Println("✅ Database ping successful")
	}

}
