package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Event struct {
	ID          primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Title       string             `json:"title,omitempty"`
	Category    CategoryType       `json:"category,omitempty"`
	HomeCountry string             `json:"homeCountry,omitempty"`
	AwayCountry string             `json:"awayCountry,omitempty"`
	Date        string             `json:"date,omitempty"`
	Time        string             `json:"time,omitempty"`
}

type CategoryType int

const (
	PublicViewing CategoryType = 1
	// Add more categories here...
)
