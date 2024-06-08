import React, { useState, useEffect } from "react";
import TopBar from "../global/TopBar";
import LocationList from "./LocationList";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EventTitle from "./EventTitle";
import { getEventById } from "../../api/events";

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
    <main
      className="content"
      style={{ paddingLeft: "120px", paddingRight: "120px" }}>
      <TopBar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <ArrowBackIosIcon
          onClick={goBack}
          style={{
            cursor: "pointer",
            paddingTop: "16px",
            paddingLeft: "170px",
            fontSize: "2rem",
            position: "absolute",
            left: 0,
          }}
        />
        <EventTitle event={event} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <div style={{ paddingTop: "30px", paddingLeft: "50px" }}>
          <LocationList /> {/* Pass the setSelectedLocation function as a prop */}
        </div>
      </div>
    </main>
  );
};

export default LocationsPage;