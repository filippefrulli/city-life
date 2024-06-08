import React from 'react';

const LocationExpanded = ({ location }) => {
  return (
    <div style={{
      border: '1px solid black',
      borderRadius: '10px',
      padding: '20px',
      margin: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <h2>{location.name}</h2>
      <p>{location.name}</p>
      {/* Display other information about the location */}
    </div>
  );
};

export default LocationExpanded;