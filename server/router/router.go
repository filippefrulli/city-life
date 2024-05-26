package router

import (
	"github.com/filippefrulli/city-life/middleware"

	"github.com/gorilla/mux"
)

func Router() *mux.Router {
	r := mux.NewRouter()

	r.HandleFunc("/api/events", middleware.GetAllEvents).Methods("GET", "OPTIONS")
	r.HandleFunc("/api/event", middleware.CreateEvent).Methods("POST", "OPTIONS")
	r.HandleFunc("/api/event/{id}", middleware.GetEvent).Methods("GET", "OPTIONS")
	r.HandleFunc("/api/event/{id}", middleware.UpdateEvent).Methods("PUT", "OPTIONS")
	r.HandleFunc("/api/event/{id}", middleware.DeleteEvent).Methods("DELETE", "OPTIONS")

	return r
}
