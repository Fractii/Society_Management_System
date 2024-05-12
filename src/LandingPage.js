import React, { useState, useEffect } from 'react';
import './App.css';
import './LandingPage.css';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import axios from 'axios';
import { Link } from 'react-router-dom';

function LandingPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('https://localhost:443/api/Event.php');
      if (response.data.status === 1) {
        setEvents(response.data.events);
      } else {
        console.error('Failed to fetch events:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="carousel-container">
        <Carousel />
      </div>
      <div className="text-white mt-5">
        <h2>CURRENT EVENTS</h2>
        <div className="row" style={{ marginRight: '0px', marginTop: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {events.map(event => (
            <div key={event.id} style={{ width: '30%', marginBottom: '20px' }}>
              <h3>{event.EventName}</h3>
              <p>Details: {event.EventDetails}</p>
              {/* Include society name in the URL but hide it */}
              <Link to={`/RegisterUserForEvent?eventName=${encodeURIComponent(event.EventName)}&societyName=${encodeURIComponent(event.EventSocietyName)}`} className="register-link">Register</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
