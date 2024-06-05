import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NewPage from './NewPage';
import EventsPage from './scenes/eventList/eventsPage';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={EventsPage} />
      <Route path="/event/:id" component={LocationsPage} />
    </Router>
  );
};

export default App;