import React, { useState, useEffect } from "react";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { getAllLocations } from "../../api/locations";

const LocationList = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getAllLocations().then((res) => {
        setLocations(res);
    });
  }, []);

  return (
    <div>
      {Object.entries(
        locations.reduce((groups, location) => {
          const date = location.date;
          if (!groups[date]) {
            groups[date] = [];
          }
          groups[date].push(location);
          return groups;
        }, {})
      ).map(([date, locations]) => (
        <div key={date}>
          <h3 style={{ paddingTop: "30px", margin: "0" }}>
            {new Date(date).toLocaleDateString("en-US", {
              weekday: "long",
              day: "numeric",
              month: "long",
            })}
          </h3>
          <Divider style={{ width: 400, backgroundColor: "black" }} />
          {locations
            .filter((location) => location.description)
            .map((location, index) => (
                <LocationCard location={location} index={index} />
            ))}
        </div>
      ))}
    </div>
  );
};

export default LocationList;
