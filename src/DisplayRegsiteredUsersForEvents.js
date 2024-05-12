import React, { useState, useEffect } from "react";
import Sidebar from "./components/SideBar";
import axios from "axios";

export default function EditEvent() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudentInfo();
  }, []);

  const fetchStudentInfo = () => {
    axios.get(`https://localhost:443/api/RegisterUser.php`)
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error('Error fetching student information:', error);
      });
  };

  return (
    <div className="container" style={{ marginLeft: '0px'}}>
      <div className="row">
        <div className="col-md-1" style={{ paddingLeft: '0px', paddingRight: '0px'}}>
          <Sidebar /> {/* Render the SideBar component */}
        </div>
        <div className="col-md-11">
          {/* Display student information */}
          <h2 style={{ color: 'white' }}>Student Information</h2>
          {students.map((student, index) => (
            <div key={index} style={{ marginBottom: '20px', backgroundColor: '#f0f0f0', borderRadius: '5px', padding: '10px' }}>
              <h3 style={{ color: '#333', marginBottom: '10px' }}>{student.EventName}</h3>
              <p style={{ margin: 0 }}>Society Name: {student.SocietyName}</p>
              <p style={{ margin: 0 }}>Name: {student.Name}</p>
              <p style={{ margin: 0 }}>Age: {student.Age}</p>
              <p style={{ margin: 0 }}>Email: {student.Email}</p>
              <p style={{ margin: 0 }}>Phone Number: {student.PhoneNumber}</p>
              {/* Add more student information fields as needed */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
