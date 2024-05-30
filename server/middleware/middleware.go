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
		fmt.Println("Collection instance created! ")
	}
}

// GetAllEvents is a function that returns all events
func GetAllEvents(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	payload := getAllEvents()
	json.NewEncoder(w).Encode(payload)
}

func CreateEvent(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	var event models.Event

	json.NewDecoder(r.Body).Decode(&event)
	createEvent(event)
	json.NewEncoder(w).Encode(event)
}

// GetEvent is a function that returns a single event
func GetEvent(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
}

// UpdateEvent is a function that updates an event
func UpdateEvent(w http.ResponseWriter, r *http.Request) {

}

// DeleteEvent is a function that deletes an event
func DeleteEvent(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	params := mux.Vars(r)
	deleteEvent(params["id"])
}

func getAllEvents() []primitive.M {
	cur, err := collection.Find(context.Background(), bson.D{{}})
	if err != nil {
		log.Fatal(err)
	}

	var events []primitive.M
	for cur.Next(context.Background()) {
		var event bson.M
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

func createEvent(event models.Event) {
	_, err := collection.InsertOne(context.TODO(), event)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Inserted event:", event)
}

// func getEvent(id string) models.Event {
// 	var event models.Event
// 	objID, _ := primitive.ObjectIDFromHex(id)
// 	filter := bson.M{"_id": objID}
// 	err := collection.FindOne(context.Background(), filter).Decode(&event)
// 	if err != nil {
// 		log.Fatal(err)
// 	}
// 	return event
// }

func deleteEvent(id string) {
	objID, _ := primitive.ObjectIDFromHex(id)
	filter := bson.M{"_id": objID}
	d, err := collection.DeleteOne(context.Background(), filter)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Deleted document", d.DeletedCount)
}
