package middleware

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/filippefrulli/city-life/models"
	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var collection *mongo.Collection

func init() {
	loadEnv()
	createDBInstance()
}

func loadEnv() {
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatalf("Error loading .env file")
	}
}

func createDBInstance() {
	dbUri := os.Getenv("DB_URI")
	dbName := os.Getenv("DB_NAME")
	collectionName := os.Getenv("DB_COLLECTION_NAME")

	clientOptions := options.Client().ApplyURI(dbUri)

	client, err := mongo.Connect(context.TODO(), clientOptions)

	if err != nil {
		log.Fatal(err)
	}

	err = client.Ping(context.TODO(), nil)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Connected to MongoDB!")

	collection = client.Database(dbName).Collection(collectionName)
	if collection == nil {
		log.Fatal("Failed to get collection")
	} else {
		fmt.Println("Collection instance created!")
	}

	_, delErr := collection.DeleteMany(context.Background(), bson.D{{}})
	if delErr != nil {
		log.Fatal(delErr)
	} else {
		fmt.Println("All events deleted successfully!")
	}

	importEvents()
	importLocations()
}

func importEvents() {
	file, err := os.Open("data/euroEvents.json")
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()

	var events []models.SoccerEvent
	if err := json.NewDecoder(file).Decode(&events); err != nil {
		log.Fatal(err)
	}

	for _, event := range events {
		_, err := collection.InsertOne(context.TODO(), bson.M{
			"_id":         primitive.NewObjectID(),
			"description": event.Description,
			"homeLogo":    event.HomeLogo,
			"awayLogo":    event.AwayLogo,
			"homeTeam":    event.HomeTeam,
			"awayTeam":    event.AwayTeam,
			"date":        event.Date,
			"time":        event.Time,
			"eventLogo":   event.EventLogo,
		})
		if err != nil {
			log.Fatal(err)
		} else {
			fmt.Println("Inserted event:", event)

		}
	}

	fmt.Println("Events imported successfully!")
}

func importLocations() {
	file, err := os.Open("data/locations.json")
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()

	var locations []models.Location
	if err := json.NewDecoder(file).Decode(&locations); err != nil {
		log.Fatal(err)
	}

	for _, location := range locations {
		_, err := collection.InsertOne(context.TODO(), bson.M{
			"_id":                 primitive.NewObjectID(),
			"name":                location.Name,
			"mapsLink":            location.MapsLink,
			"websiteLink":         location.WebsiteLink,
			"phoneNumber":         location.PhoneNumber,
			"seats":               location.Seats,
			"ticketRequired":      location.TicketRequired,
			"reservationRequired": location.ReservationRequired,
			"image":               location.Image,
			"latitude":            location.Latitude,
			"longitude":           location.Longitude,
		})
		if err != nil {
			log.Fatal(err)
		} else {
			fmt.Println("Inserted location:", location)

		}
	}

	fmt.Println("Locations imported successfully!")
}

/*
EVENT FUNCTIONS
*/

func GetAllEvents(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	payload := getAllEvents()
	json.NewEncoder(w).Encode(payload)
}

func GetEventById(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	vars := mux.Vars(r)
	id := vars["id"]
	event, err := getEventById(id)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(event)
}

func CreateEvent(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	var event models.SoccerEvent

	json.NewDecoder(r.Body).Decode(&event)
	createEvent(event)
	json.NewEncoder(w).Encode(event)
}

func AddLocationToEvent(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "PUT")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	params := mux.Vars(r)
	eventID, _ := primitive.ObjectIDFromHex(params["id"])
	locationID, _ := primitive.ObjectIDFromHex(params["locationId"])

	filter := bson.M{"_id": eventID}
	update := bson.M{"$push": bson.M{"locations": locationID}}
	_, err := collection.UpdateOne(context.Background(), filter, update)
	if err != nil {
		log.Fatal(err)
	}
}

func DeleteEvent(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	params := mux.Vars(r)
	deleteEvent(params["id"])
}

func GetLocationsOfEvent(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	vars := mux.Vars(r)
	eventID, err := primitive.ObjectIDFromHex(vars["id"])
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	locations, err := getLocationsOfEvent(eventID)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(locations)
}

func getAllEvents() []models.SoccerEvent {
	if collection == nil {
		log.Fatal("Collection is nil")
	}

	cur, err := collection.Find(context.Background(), bson.D{{}})
	if err != nil {
		log.Fatal(err)
	}
	if cur == nil {
		log.Fatal("Cursor is nil")
	}

	var events []models.SoccerEvent
	for cur.Next(context.Background()) {
		var event models.SoccerEvent
		if err := cur.Decode(&event); err != nil {
			log.Fatal(err)
		}
		events = append(events, event)
	}

	if err := cur.Err(); err != nil {
		log.Fatal(err)
	}
	cur.Close(context.Background())

	return events
}

func getEventById(id string) (models.SoccerEvent, error) {
	if collection == nil {
		log.Fatal("Collection is nil")
	}

	objID, _ := primitive.ObjectIDFromHex(id)
	filter := bson.M{"_id": objID}
	var event models.SoccerEvent
	err := collection.FindOne(context.Background(), filter).Decode(&event)
	if err != nil {
		return models.SoccerEvent{}, err
	}

	return event, nil
}

func createEvent(event models.SoccerEvent) {
	event.ID = primitive.NewObjectID()
	_, err := collection.InsertOne(context.TODO(), event)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Inserted event:", event)
}

func deleteEvent(id string) {
	objID, _ := primitive.ObjectIDFromHex(id)
	filter := bson.M{"_id": objID}
	d, err := collection.DeleteOne(context.Background(), filter)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Deleted document", d.DeletedCount)
}

func getLocationsOfEvent(eventId primitive.ObjectID) ([]models.Location, error) {
	if collection == nil {
		log.Fatal("Collection is nil")
	}

	// Find the event with the given ID
	eventFilter := bson.D{{Key: "_id", Value: eventId}}
	var event models.SoccerEvent
	err := collection.FindOne(context.Background(), eventFilter).Decode(&event)
	if err != nil {
		return nil, err
	}

	// Convert ObjectIDs to interface slice for the $in operator
	var locationIDs []interface{}
	for _, id := range event.Locations {
		locationIDs = append(locationIDs, id)
	}

	// Find all locations with IDs in the event's location list
	locationFilter := bson.D{{Key: "_id", Value: bson.D{{Key: "$in", Value: locationIDs}}}}
	cur, err := collection.Find(context.Background(), locationFilter)
	if err != nil {
		return nil, err
	}

	// Decode the location data
	var locations []models.Location
	for cur.Next(context.Background()) {
		var location models.Location
		if err := cur.Decode(&location); err != nil {
			return nil, err
		}
		locations = append(locations, location)
	}

	if err := cur.Err(); err != nil {
		return nil, err
	}
	cur.Close(context.Background())

	return locations, nil
}

/*
LOCATIONS FUNCTIONS
*/

func GetAllLocations(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	payload := getAllLocations()
	json.NewEncoder(w).Encode(payload)
}

func CreateLocation(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	var location models.Location

	json.NewDecoder(r.Body).Decode(&location)
	createLocation(location)
	json.NewEncoder(w).Encode(location)
}

func createLocation(event models.Location) {
	_, err := collection.InsertOne(context.TODO(), event)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Inserted location:", event)
}

func getAllLocations() []models.Location {
	if collection == nil {
		log.Fatal("Collection is nil")
	}

	cur, err := collection.Find(context.Background(), bson.D{{}})
	if err != nil {
		log.Fatal(err)
	}
	if cur == nil {
		log.Fatal("Cursor is nil")
	}

	var locations []models.Location
	for cur.Next(context.Background()) {
		var location models.Location
		if err := cur.Decode(&location); err != nil {
			log.Fatal(err)
		}
		locations = append(locations, location)
	}

	if err := cur.Err(); err != nil {
		log.Fatal(err)
	}
	cur.Close(context.Background())

	return locations
}
