import React, { useState } from "react";
import Sidebar from "./components/SideBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RegisterEvent() {

  const navigate = useNavigate();
  const [inputs, setInputs] = useState({})

  const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
      event.preventDefault();

      axios.post('https://localhost:443/api/Event.php', inputs).then(function(response){
          console.log(response.data);
          navigate("/Editevent");
      });
      
  }

  return (
    <div className="container" style={{ marginLeft: '0px'}}>
      <div className="row">
        <div className="col-md-1" style={{ paddingLeft: '0px', paddingRight: '0px'}}>
          <Sidebar /> {/* Render the SideBar component */}
        </div>
        <div className="col-md-9">
          <p style={{ textAlign: 'left', fontWeight: 'bold' , marginTop: '20px', fontSize: '24px' , color: 'white' }}>Register Event</p>
          <div className="text-white">
            <form onSubmit={handleSubmit} method="POST">
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <h6 className="text-start">Event Name</h6>
                    <input onChange={handleChange} type="text" className="form-control" id="eventName" name="eventname" placeholder="Event Name" required />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <h6 className="text-start">Event Date</h6>
                    <input onChange={handleChange} type="date" className="form-control" id="eventDate" name="eventdate" required />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 mt-4">
                  <div className="form-group">
                    <h6 className="text-start">Event Start Time</h6>
                    <input onChange={handleChange} type="time" className="form-control" id="eventStartTime" name="eventstarttime" required />
                  </div>
                </div>
                <div className="col-sm-6 mt-4">
                  <div className="form-group">
                    <h6 className="text-start">Event End Time</h6>
                    <input onChange={handleChange} type="time" className="form-control" id="eventEndTime" name="eventendtime" required />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 mt-4">
                  <div className="form-group">
                    <h6 className="text-start">Event Society Name</h6>
                    <input onChange={handleChange} type="text" className="form-control" id="eventSocietyName" name="eventsocietyname" placeholder="Event Society Name" required />
                  </div>
                </div>
                <div className="col-sm-6 mt-4">
                  <div className="form-group">
                    <h6 className="text-start">Event Society Budget</h6>
                    <input onChange={handleChange} type="text" className="form-control" id="eventSocietyBudget" name="eventsocietybudget" placeholder="Event Society Budget" required />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 mt-4">
                  <div className="form-group">
                    <h6 className="text-start">Event Details</h6>
                    <textarea onChange={handleChange} className="form-control" id="eventDetails" rows="3" name="eventdetails" placeholder="Event Details" required></textarea>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12 d-flex justify-content-end">
                  <button type="submit" name="submit" id="submit" style={{ backgroundColor: '#c4a464', color: 'white' }}>Register</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
