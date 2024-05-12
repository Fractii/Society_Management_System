import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function RegisterUserForEvent() {
  const navigate = useNavigate();
  const location = useLocation();
  const eventName = new URLSearchParams(location.search).get('eventName');
  const societyName = new URLSearchParams(location.search).get('societyName');

  const [inputs, setInputs] = useState({
    eventName: eventName || '',
    societyName: societyName || '', 
    name: '',
    age: '',
    email: '',
    phonenumber: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs(prevInputs => ({ ...prevInputs, [name]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('https://localhost:443/api/RegisterUser.php', inputs)
      .then(function(response) {
        console.log(response.data);
        navigate("/");
      })
      .catch(function(error) {
        console.error('Error:', error);
      });
  }

  return (
    <div className="container">
      <h2 style={{ color: 'white', marginBottom: '20px', textAlign: 'center' }}>Register for {eventName}</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="form-group" style={{ marginBottom: '10px', width: '80%' }}>
          <label style={{ color: 'white' }}>Event Name:</label>
          <input type="text" name="eventName" value={inputs.eventName} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group" style={{ marginBottom: '10px', width: '80%' }}>
          <label style={{ color: 'white' }}>Society Name:</label>
          <input type="text" name="societyName" value={inputs.societyName} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group" style={{ marginBottom: '10px', width: '80%' }}>
          <label style={{ color: 'white' }}>Name:</label>
          <input type="text" name="name" value={inputs.name} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group" style={{ marginBottom: '10px', width: '80%' }}>
          <label style={{ color: 'white' }}>Age:</label>
          <input type="number" name="age" value={inputs.age} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group" style={{ marginBottom: '10px', width: '80%' }}>
          <label style={{ color: 'white' }}>Email:</label>
          <input type="email" name="email" value={inputs.email} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group" style={{ marginBottom: '10px', width: '80%' }}>
          <label style={{ color: 'white' }}>Phone Number:</label>
          <input type="text" name="phonenumber" value={inputs.phonenumber} onChange={handleChange} className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary" style={{ marginTop: '20px', backgroundColor: '#c4a464' }}>Register</button>
      </form>
      {/* Additional notice boxes */}
    </div>
  );
}

export default RegisterUserForEvent;
