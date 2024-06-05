import React from 'react';
import TopBar from './TopBar';
import SearchBar from './SearchBar';
import EventList from './EventList';

const LocationsPage = () => {
  return (
    <main
      className="content"
      style={{ paddingLeft: "120px", paddingRight: "120px" }}>
      <TopBar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}>
      </div>
      <div style={{ paddingTop: "30px" }}>
        <LocationsList />
      </div>
    </main>
  );
};

export default LocationsPage;