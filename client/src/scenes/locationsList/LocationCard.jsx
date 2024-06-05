import React from "react";
import { Box } from "@mui/material";

const LocationCard = ({ location }) => (
  <Box
    className="card"
    marginTop={2}
    border={2}
    borderColor="black"
    bgcolor="#FFFF99"
    width={450}
    height={100}
    borderRadius="25px"
    display="flex"
    alignItems="center"
    padding={2}>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: "16px",
        paddingRight: "16px",
      }}>
      <h5 style={{ margin: "0", whiteSpace: "nowrap" }}>{location.name}</h5>
      <h3 style={{ margin: "0" }}>{`${location.GPS.latitude}, ${location.GPS.longitude}`}</h3>
    </div>
    <div
      style={{
        borderLeft: "1px solid black",
        height: "80px",
        marginRight: "20px",
        marginLeft: "20px",
      }}></div>
  </Box>
);

export default LocationCard;