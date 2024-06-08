import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

const LocationCard = ({ location, onSelect }) => {
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

  let distance = null;
  if (userLocation.lat && userLocation.lon) {
    distance = getDistanceFromLatLonInKm(
      userLocation.lat,
      userLocation.lon,
      location.latitude,
      location.longitude
    );
  }

  return (
    <Box
      className="card"
      marginTop={2}
      border={2}
      borderColor="black"
      bgcolor="#99CC99"
      width={380}
      height={60}
      borderRadius="25px"
      display="flex"
      alignItems="center"
      padding={2}
      onClick={() => onSelect(location)} // Add an onClick handler that calls onSelect with the location
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "16px",
          flex: "0 0 67%", // This will make the div take up 70% of the width
        }}>
        <h3 style={{ margin: "0", whiteSpace: "nowrap" }}>{location.name}</h3>
      </div>
      <div
        style={{
          borderLeft: "1px solid black",
          height: "80px",
          marginRight: "20px",
          marginLeft: "20px",
        }}></div>
      <div
        style={{
          paddingRight: "16px",
          flex: "0 0 33%", // This will make the div take up 30% of the width
        }}>
        <h3
          style={{
            margin: "0",
          }}>
          {distance ? `${distance.toFixed(2)} km` : "Loading..."}
        </h3>
      </div>
    </Box>
  );
};

export default LocationCard;

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
