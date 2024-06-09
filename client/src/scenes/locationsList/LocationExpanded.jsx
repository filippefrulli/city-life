import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import WebIcon from "@mui/icons-material/Web";

const LocationExpanded = ({ location }) => {
  return (
    <div
      style={{
        border: "2px solid black",
        borderRadius: "25px",
        padding: "20px",
        display: "flex",
        backgroundColor: "rgba(83, 144, 217, 0.6)",
        flexDirection: "column",
        alignItems: "flex-start", // Align items to the start
        width: "640px",
        height: "300px",
      }}>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between", // Add space between the h2 and the image
        }}>
        <div style={{ width: "35%" }}>
          <h2>{location.name}</h2>
          <div>
            <p style={{ marginBottom: "0" }}>Tickets required?</p>
            <p style={{ fontWeight: "bold", marginTop: "0" }}>
              {location.ticketRequired ? "Yes" : "No"}
            </p>
          </div>
        </div>
        <img
          src={location.image}
          alt={location.image}
          style={{
            width: "400px",
            height: "200px",
            borderRadius: "15px",
            border: "2px solid black",
            objectFit: "cover",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "10px",
          marginTop: "50px",
          alignItems: "center", // Align items vertically
        }}>
        <PhoneIcon style={{ marginLeft: "10px" }} />
        <span style={{ fontSize: "1.2em" }}>{location.phoneNumber}</span>
        <a
          style={{ paddingLeft: "32px", textDecoration: "none" }}
          href={location.mapsLink}
          target="_blank"
          rel="noopener noreferrer">
          <button
            style={{
              backgroundColor: "white",
              border: "2px solid black",
              borderRadius: "15px",
              padding: "10px 20px",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
            }}>
            <PlaceIcon style={{ fontSize: "1.5rem", marginRight: "6px" }} />
            Directions
          </button>
        </a>
        <a
          style={{ paddingLeft: "8px", textDecoration: "none" }}
          href={location.websiteLink}
          target="_blank"
          rel="noopener noreferrer">
          <button
            style={{
              backgroundColor: "white",
              border: "2px solid black",
              borderRadius: "15px",
              padding: "10px 20px",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
            }}>
            <WebIcon style={{ fontSize: "1.5rem", marginRight: "6px" }} />
            Website
          </button>
        </a>
      </div>
    </div>
  );
};

export default LocationExpanded;
