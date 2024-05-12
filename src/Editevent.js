import React, { useState, useEffect } from "react";
import Sidebar from "./components/SideBar";
import axios from "axios";

export default function EditEvent() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch the user data from local storage
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData && userData.SocietyName) {
      fetchEvents(userData.SocietyName); // Pass society name to fetchEvents
    }
  }, []);

  const fetchEvents = async (societyName) => {
    try {
      const response = await axios.get(`https://localhost:443/api/Event.php`);
      const filteredEvents = response.data.events.filter(event => event.EventSocietyName === societyName);
      setEvents(filteredEvents);
    } catch (error) {
      console.error("Failed to fetch events:", error.message);
    }
  };

  return (
    <div className="container" style={{ marginLeft: '0px'}}>
      <div className="row">
        <div className="col-md-1" style={{ paddingLeft: '0px', paddingRight: '0px'}}>
          <Sidebar /> {/* Render the SideBar component */}
        </div>
        <div className="col-md-9">
          <p style={{ textAlign: 'left', fontWeight: 'bold' , marginTop: '20px', fontSize: '24px' , color: 'white' }}>Edit Event</p>
          <ul>
            {events.map(event => (
              <li key={event.id}>
                <h2 style={{ color: 'white' }}>{event.EventName}</h2>
                <p style={{ color: 'white' }}>Date: {event.EventDate}</p>
                <p style={{ color: 'white' }}>Time: {event.EventStartTime} - {event.EventEndTime}</p>
                <p style={{ color: 'white' }}>Society: {event.EventSocietyName}</p>
                <p style={{ color: 'white' }}>Budget: ${event.EventSocietyBudget}</p>
                <p style={{ color: 'white' }}>Details: {event.EventDetails}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
