package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type SoccerEvent struct {
	ID          primitive.ObjectID   `json:"_id,omitempty" bson:"_id,omitempty"`
	Description string               `json:"description,omitempty"`
	HomeLogo    string               `json:"homeLogo,omitempty"`
	AwayLogo    string               `json:"awayLogo,omitempty"`
	HomeTeam    string               `json:"homeTeam,omitempty"`
	AwayTeam    string               `json:"awayTeam,omitempty"`
	Date        string               `json:"date,omitempty"`
	Time        string               `json:"time,omitempty"`
	EventLogo   string               `json:"eventLogo,omitempty"`
	Locations   []primitive.ObjectID `json:"locations,omitempty"`
}

type Location struct {
	ID                  primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Name                string             `json:"name,omitempty"`
	MapsLink            string             `json:"mapsLink,omitempty"`
	WebsiteLink         string             `json:"websiteLink,omitempty"`
	PhoneNumber         string             `json:"phoneNumber,omitempty"`
	Seats               int                `json:"seats,omitempty"`
	TicketRequired      bool               `json:"ticketRequired,omitempty"`
	ReservationRequired bool               `json:"reservationRequired,omitempty"`
	Image               string             `json:"image,omitempty"`
	Latitude            float64            `json:"latitude,omitempty" bson:"latitude,omitempty"`
	Longitude           float64            `json:"longitude,omitempty" bson:"longitude,omitempty"`
}
