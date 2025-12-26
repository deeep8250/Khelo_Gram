//here we use polymorphic design
// : Polymorphic design is when a table uses the same column(s) to reference multiple different parent tables.

package models

import (
	"time"
)

type Login struct {
	Email    string `json:"email" binding:"required,email"`
	Password string `json:"password" binding:"required,min=6"`
}

type SignUp struct {
	Name     string `json:"name" binding:"required"`
	Email    string `json:"email" binding:"required,email"`
	Password string `json:"password"  binding:"required,min=6"`
}

type User struct {
	Id           uint           `json:"id" gorm:"primaryKey"`
	Name         string         `json:"name" gorm:"not null"`
	Email        string         `json:"email" gorm:"unique;not null"`
	Phone        int            `json:"phone" gorm:"unique; not null"`
	Location     Location       `gorm:"foreignKey:OwnerId"`
	Password     string         `json:"-" gorm:"not null"`
	CreatedAt    time.Time      `json:"created_at" gorm:"not null"`
	RefreshToken []RefreshToken `json:"-" gorm:"foreignKey:UserId"`
}

type Location struct {
	Id        uint      `json:"id" gorm:"primaryKey"`
	OwnerId   uint      `json:"user_id"`
	Pin       int64     `json:"pin" gorm:"not null" binding:"min=6 , max=6"`
	State     string    `json:"state" gorm:"not null"`
	Village   string    `json:"village" gorm:"not null"`
	OwnerType string    `json:"owner_type" gorm:"not null"`
	UpdatedAt time.Time `json:"updated_at" gorm:"not null"`
	CreatedAt time.Time `json:"created_at" gorm:"not null"`
}

type Club struct {
	Id          uint      `json:"id" gorm:"primaryKey"`
	UserId      uint      `json:"user_id" gorm:"not null"`
	Club_name   string    `json:"club_name" gorm:"not null"`
	AadharNb    int64     `json:"aadhar_nb" gorm:"not null" binding:"min=12 max=12"`
	PublishedAt time.Time `json:"published_at" gorm:"not null"`
	Is_Verified bool      `json:"is_verified" gorm:"not null"`
	Location    Location  `json:"location" gorm:"foreignKey:OwnerId"`
	About       string    `json:"about" gorm:"not null"`
	ProfileImg  string    `json:"profile_img" gorm:"not null"`
}

type RefreshToken struct {
	Id        uint      `gorm:"primaryKey"`
	UserId    uint      `gorm:"index"`
	TokenHash string    `gorm:"not null"`
	ExpireAt  time.Time `gorm:"not null"`
	CreatedAt time.Time `gorm:"not null"`
}

// When you add an index to a column, the database maintains a separate,
// ordered lookup structure that stores the values of that column along with pointers to the actual rows,
//  so the database can find matching rows quickly without scanning the entire table.

//  where it belongs to ?
//  The index belongs to the database itself and is stored on disk alongside the table, inside the database’s own storage files.
