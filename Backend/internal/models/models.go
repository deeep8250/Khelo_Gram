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
	Id           uint           `json:"id" gorm:"primaryKey" binding:"required"`
	Name         string         `json:"name" gorm:"not null" binding:"required"`
	Email        string         `json:"email" gorm:"unique;not null" binding:"required"`
	Phone        int            `json:"phone" gorm:"unique; not null" binding:"required"`
	Location     Location       `gorm:"foreignKey:OwnerId" `
	Password     string         `json:"-" gorm:"not null" binding:"not null , min=6"`
	CreatedAt    time.Time      `gorm:"autoCreateTime"`
	RefreshToken []RefreshToken `json:"-" gorm:"foreignKey:UserId"`
}

type Location struct {
	Id        uint      `json:"id" gorm:"primaryKey"`
	OwnerId   uint      `json:"user_id"`
	Pin       string    `json:"pin" gorm:"not null" binding:"min=6 , max=6"`
	State     string    `json:"state" gorm:"not null"`
	City      string    `json:"city" gorm:"not null"`
	Village   string    `json:"village" gorm:"not null"`
	OwnerType string    `json:"owner_type" gorm:"not null"`
	UpdatedAt time.Time `json:"updated_at" gorm:"autoUpdateTime"`
	CreatedAt time.Time `json:"created_at" gorm:"autoCreateTime"`
}

type Club struct {
	Id          uint      `json:"id" gorm:"primaryKey"`
	UserId      uint      `json:"user_id" gorm:"not null"`
	ClubName    string    `json:"club_name" gorm:"not null"`
	AadharNb    int64     `json:"aadhar_nb" gorm:"not null" binding:"min=12 max=12"`
	PublishedAt time.Time `json:"published_at" gorm:"not null"`
	IsVerified  bool      `json:"is_verified" gorm:"not null"`
	Location    Location  `json:"location" gorm:"foreignKey:OwnerId"`
	About       string    `json:"about" gorm:"not null"`
	ProfileImg  string    `json:"profile_img" gorm:"not null"`
}

type Tournaments struct {
	Id             uint      `json:"id" gorm:"primaryKey"`
	OrganizerId    uint      `json:"org_id" gorm:"not null"`
	CoverImage     string    `json:"cover_img" gorm:"not null"`
	TournamentName string    `json:"tournament_name" gorm:"not null"`
	Location       Location  `json:"location" gorm:"not null"`
	StartedAt      time.Time `json:"started_at" gorm:"not null"`
	EndedAt        time.Time `json:"ended_at" gorm:"not null"`
	EntryFees      int64     `json:"entry_fees" gorm:"not null"`
	TotalTeams     uint      `json:"total_teams" gorm:"not null"`
	MembersPerTeam uint      `json:"members_per_team" gorm:"not null"`
	AgeAllow       uint      `json:"age_allowed" gorm:"not null"`
	FirstPrize     int64     `json:"first_prize" gorm:"not null"`
	SecondPrize    int64     `json:"second_prize" gorm:"not null"`
	ThirdPrize     int64     `json:"third_prize" gorm:"not null"`
	OtherPrize     int64     `json:"other_prize" gorm:"not null"`
	Rules          string    `json:"rules" gorm:"not null"`
	CreateAt       time.Time `json:"created_at" gorm:"not null"`
	UpdatedAt      time.Time `json:"updated_at" gorm:"not null"`
	DeletedAt      time.Time `json:"deleted_at" gorm:"not null"`
	IsDeleted      bool      `json:"is_deleted" gorm:"not null"`
	IsEnded        bool      `json:"is_ended" gorm:"not null"`
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
