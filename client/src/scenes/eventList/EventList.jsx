import React, { useState, useEffect } from "react";
import { getAllEvents } from "../../api/events";
import EventCard from "./EventCard";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getAllEvents().then((res) => {
      setEvents(res);
    });
  }, []);

  return (
    <div>
      {Object.entries(
        events.reduce((groups, event) => {
          const date = event.date;
          if (!groups[date]) {
            groups[date] = [];
          }
          groups[date].push(event);
          return groups;
        }, {})
      ).map(([date, events]) => (
        <div key={date}>
          <h3 style={{ paddingTop: "30px", margin: "0" }}>
            {new Date(date).toLocaleDateString("en-US", {
              weekday: "long",
              day: "numeric",
              month: "long",
            })}
          </h3>
          <Divider style={{ width: 400, backgroundColor: "black" }} />
          {events
            .filter((event) => event.description)
            .map((event, index) => (
              <Link
                to={{
                  pathname: `/event/${event._id}`,
                }}
                key={index}>
                <EventCard event={event} index={index} />
              </Link>
            ))}
        </div>
      ))}
    </div>
  );
};

export default EventList;
