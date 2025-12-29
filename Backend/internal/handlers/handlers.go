package handlers

import (
	"Notes/Database/db"
	"Notes/internal/models"
	"Notes/internal/utils"
	"errors"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

func SignUp(c *gin.Context) {

	//taking the user input as json
	var user models.SignUp
	err := c.ShouldBindJSON(&user)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}

	//checking that user already exist or not
	db := db.DB
	err = db.Where("email=?", user.Email).First(&user).Error

	if err == nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "user already exist",
		})
		return
	}
	// error.is take two things one is the var that hold error anothe thing is the expected error
	//  so we flip that by ! mean if any error but not errrecordnotfound appear then execute

	if !errors.Is(err, gorm.ErrRecordNotFound) {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": err.Error(),
		})
		return
	}

	// hash the password

	hashPass, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "failed to hash password",
		})
		return
	}

	user.Password = string(hashPass)

	db.Create(user)

}

func Login(c *gin.Context) {

	var input models.Login
	err := c.ShouldBindJSON(&input)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "invalid request",
		})
		return
	}

	var User models.User
	Validation := db.DB.Where("email=?", User.Email).Find(&User)
	if Validation.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": Validation.Error,
		})
		return
	}

	if Validation.RowsAffected == 0 {
		c.JSON(http.StatusUnauthorized, gin.H{
			"error": "invalid user",
		})
		return
	}

	err = bcrypt.CompareHashAndPassword([]byte(User.Password), []byte(input.Password))
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{
			"error": "invalid password",
		})
		return
	}

	token, err := utils.GenerateJwt(User.Id, User.Email, User.Name)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "jwt generate failed",
		})
	}

	refreshToken := utils.GenerateRefreshToken()
	UserRefreshToken := &models.RefreshToken{
		UserId:    User.Id,
		TokenHash: refreshToken,
		ExpireAt:  time.Now().Add((24 * 7) * time.Hour),
		CreatedAt: time.Now(),
	}

	db.DB.Create(UserRefreshToken)

	c.JSON(http.StatusOK, gin.H{
		"refresh-token": refreshToken,
		"access-token":  token,
	})
}

func GetRefreshToken(c *gin.Context) {

	type RefreshTokenRequest struct {
		RefreshToken string `json:"refresh_token"`
	}

	var refreshToken RefreshTokenRequest

	//  accepting the refresh token from the frontend
	err := c.ShouldBindJSON(&refreshToken)
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{
			"error": err.Error(),
		})
		return
	}

	// hashing the refresh -token
	hashRefreshToken := utils.HashToken(refreshToken.RefreshToken)

	//finding the particular user's  refresh token table
	var RefreshToken models.RefreshToken
	result := db.DB.Where("token_hash=?", hashRefreshToken).First(&RefreshToken)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": result.Error,
		})
		return
	}

	// check the expiration time

	if RefreshToken.ExpireAt.Before(time.Now()) {
		c.JSON(http.StatusUnauthorized, gin.H{
			"error": "token is expired",
		})
		return
	}

	//get the user
	var user models.User
	resultUser := db.DB.First(&user, RefreshToken.UserId)
	if resultUser.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": resultUser.Error,
		})
		return

	}
	// generating the new access token from the user credentials
	NewjwtKey, err := utils.GenerateJwt(user.Id, user.Email, user.Name)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": err.Error(),
		})
		return
	}
	// generate the new refresh token
	NewRefreshToken := utils.GenerateRefreshToken()

	//store  the hash of refresh token in db
	NewHashRefreshToken := utils.HashToken(NewRefreshToken)

	//  delete the already inserted or old refresh token first
	db.DB.Delete(&RefreshToken)

	NewRefreshTokenRow := &models.RefreshToken{
		UserId:    user.Id,
		TokenHash: NewHashRefreshToken,
		CreatedAt: time.Now(),
		ExpireAt:  time.Now().Add((24 * 7) * time.Hour),
	}

	db.DB.Save(&NewRefreshTokenRow)

	//returning  the raw refresh token and access token
	c.JSON(http.StatusOK, gin.H{
		"access-token": NewjwtKey,
		"refrsh-token": NewRefreshToken,
	})

}
