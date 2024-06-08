import React, { useState, useEffect } from "react";
import { getAllLocations } from "../../api/locations";
import LocationCard from "./LocationCard";
import LocationExpanded from "./LocationExpanded";

const LocationList = () => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null); // Add a state for the selected location

  useEffect(() => {
    getAllLocations().then((res) => {
      setLocations(res);
    });
  }, []);

  return (
    <div style={{ display: 'flex' }}> {/* Add a flex container */}
      <div> {/* Add a flex item for the list */}
        {locations
          .filter((location) => location.name)
          .map((location, index) => (
            <LocationCard
              location={location}
              index={index}
              key={index}
              onSelect={setSelectedLocation} // Pass setSelectedLocation as the onSelect prop
            />
          ))}
      </div>
      {selectedLocation && (
        <div style={{ paddingTop: "30px", paddingLeft: "50px" }}> {/* Add a flex item for the expanded location */}
          <LocationExpanded location={selectedLocation} /> {/* Conditionally render the LocationExpanded component */}
        </div>
      )}
    </div>
  );
};

export default LocationList;