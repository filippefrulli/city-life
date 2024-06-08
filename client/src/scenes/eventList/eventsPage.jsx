import React from 'react';
import TopBar from '../global/TopBar';  
import SearchBar from './SearchBar';
import EventList from './EventList';

const EventsPage = () => {
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
        <SearchBar />
      </div>
      <div style={{ paddingTop: "30px" }}>
        <EventList />
      </div>
    </main>
  );
};

export default EventsPage;