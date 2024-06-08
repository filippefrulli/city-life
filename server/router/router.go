package router

import (
	"github.com/filippefrulli/city-life/middleware"

	"github.com/gorilla/mux"
)

func Router() *mux.Router {
	r := mux.NewRouter()

	r.HandleFunc("/api/events", middleware.GetAllEvents).Methods("GET", "OPTIONS")
	r.HandleFunc("/api/event/{id}", middleware.GetEventById).Methods("GET", "OPTIONS")
	r.HandleFunc("/api/event", middleware.CreateEvent).Methods("POST", "OPTIONS")
	r.HandleFunc("/api/event/{id}", middleware.DeleteEvent).Methods("DELETE", "OPTIONS")

	r.HandleFunc("/api/event/{id}/location/{locationId}", middleware.AddLocationToEvent).Methods("PUT", "OPTIONS")

	r.HandleFunc("/api/locations", middleware.GetAllLocations).Methods("GET", "OPTIONS")
	r.HandleFunc("/api/locations/{id}", middleware.GetLocationsOfEvent).Methods("GET", "OPTIONS")
	r.HandleFunc("/api/location", middleware.CreateLocation).Methods("POST", "OPTIONS")

	// r.HandleFunc("/api/location/{id}", middleware.GetLocation).Methods("GET", "OPTIONS")
	// r.HandleFunc("/api/location/{id}", middleware.UpdateLocation).Methods("PUT", "OPTIONS")
	// r.HandleFunc("/api/location/{id}", middleware.DeleteLocation).Methods("DELETE", "OPTIONS")

	return r
}
