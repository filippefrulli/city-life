import React, { useState, useEffect } from "react";
import { getAllLocations } from "../../api/locations";
import LocationCard from "./LocationCard";
import LocationExpanded from "./LocationExpanded";

const LocationList = () => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [userLocation, setUserLocation] = useState({ lat: null, lon: null });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error getting user location", error);
      }
    );
  }, []);

  useEffect(() => {
    getAllLocations().then((res) => {
      const sortedLocations = [...res].sort((a, b) => {
        const distanceA = getDistanceFromLatLonInKm(
          userLocation.lat,
          userLocation.lon,
          a.latitude,
          a.longitude
        );

        const distanceB = getDistanceFromLatLonInKm(
          userLocation.lat,
          userLocation.lon,
          b.latitude,
          b.longitude
        );

        return distanceA - distanceB;
      });

      setLocations(sortedLocations);
    });
  }, [userLocation]);

  return (
    <div style={{ display: 'flex' }}>
      <div>
        {locations
          .filter((location) => location.name)
          .map((location, index) => (
            <LocationCard
              location={location}
              index={index}
              key={index}
              isSelected={selectedLocation?._id === location?._id}
              onSelect={setSelectedLocation}
            />
          ))}
      </div>
      {selectedLocation && (
        <div style={{ paddingTop: "14px", paddingLeft: "50px" }}>
          <LocationExpanded location={selectedLocation} />
        </div>
      )}
    </div>
  );
};

export default LocationList;

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1);
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}