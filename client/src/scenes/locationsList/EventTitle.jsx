import React from "react";
import { Box } from "@mui/material";

const EventTitle = ({ event }) => {
  return (
    <Box
      className="card"
      marginTop={2}
      border={2}
      borderColor="black"
      bgcolor="#FFFFFF"
      width={450}
      height={80}
      borderRadius="25px"
      display="flex"
      alignItems="center"
      padding={2}>
      <img
        width="32"
        height="32"
        alt="Soccer"
        style={{ borderRadius: "10px" }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Soccer_Ball_-_The_Noun_Project.svg/512px-Soccer_Ball_-_The_Noun_Project.svg.png?20171218234600"
      />
      <div
        style={{
          borderLeft: "1px solid black",
          height: "80px",
          marginRight: "20px",
          marginLeft: "20px",
        }}></div>
      <img
        height="40"
        alt={event?.homeTeam}
        style={{ borderRadius: "10px", border: "2px solid black" }}
        src={event?.homeLogo}></img>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}>
        <h5 style={{ margin: "0", whiteSpace: "nowrap" }}>
          {event?.description}
        </h5>
        <h3 style={{ margin: "0" }}>{event?.time}</h3>
      </div>
      <img
        height="40"
        alt={event?.awayTeam}
        style={{ borderRadius: "10px", border: "2px solid black" }}
        src={event?.awayLogo}></img>
      <div
        style={{
          borderLeft: "1px solid black",
          height: "80px",
          marginRight: "20px",
          marginLeft: "20px",
        }}></div>
      <img
        height="32"
        alt="EUFA Euro 2024"
        style={{ borderRadius: "10px" }}
        src={event?.eventLogo}
      />
    </Box>
  );
};

export default EventTitle;
