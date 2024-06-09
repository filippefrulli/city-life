import React, { useState, useEffect } from "react";
import TopBar from "../global/TopBar";
import LocationList from "./LocationList";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EventTitle from "./EventTitle";
import { getEventById } from "../../api/events";
import "./LocationsPage.css";

const LocationsPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        console.log("ID:", id);
        const fetchedEvent = await getEventById(id);
        setEvent(fetchedEvent);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEvent();
  }, [id]);

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <main className="content">
      <TopBar />
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ position: "relative" }}>
          <ArrowBackIosIcon
            onClick={goBack}
            style={{
              cursor: "pointer",
              fontSize: "2rem",
            }}
          />
        </div>
        <div style={{ paddingLeft: "164px" }}>
          <EventTitle event={event} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <div style={{ paddingTop: "100px" }}>
          <LocationList />
        </div>
      </div>
    </main>
  );
};

export default LocationsPage;
