import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EventsPage from './scenes/eventList/EventsPage';
import LocationPage from './scenes/locationsList/LocationPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<EventsPage />} />
      <Route path="/event/:id" element={<LocationPage />} />
    </Routes>
  );
};

export default App;