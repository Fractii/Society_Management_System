import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios

// Import the SideBar component
import SideBar from './components/SideBar';

export default function ProfilePage() {
    const [societies, setSocieties] = useState([]); // State to store society data

    useEffect(() => {
        // Fetch society data using Axios
        axios.get('https://localhost:443/api/update.php') // Replace 'http://your-api-url/update.php' with your actual API endpoint
            .then(response => {
                setSocieties(response.data); // Update state with fetched society data
            })
            .catch(error => {
                console.error('Error fetching society data:', error);
            });
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <div className="container" style={{ marginLeft: '0px'}}>
            <div className="row">
                <div className="col-md-2" style={{ padding: '0px'}}> 
                    <SideBar/> 
                </div>
                <div className="col-md-9"> 
                    <h2 style={{ color: 'white', fontWeight: 'bold', textAlign: 'left' , marginTop: '10px' }}>Profile</h2>
                    <div>
                        <ul style={{ color: 'white' }}>
                            {societies.map(society => (
                                <li key={society.id}>
                                    <p>Society Name: {society.SocietyName}</p>
                                    <p>Society Email: {society.SocietyEmail}</p>
                                    <p>President Name: {society.PresidentName}</p>
                                    <p>President Email: {society.PresidentEmail}</p>
                                    <p>Supervisor Name: {society.SupervisorName}</p>
                                    <p>Supervisor Email: {society.SupervisorEmail}</p>
                                    <p>Faculty / Field: {society.PresidentEmail}</p>
                                    <p>No of members: {society.PresidentEmail}</p>
                                    <p>Date: {society.PresidentEmail}</p>
                                    <p>Funding Body: {society.PresidentEmail}</p>
                                    <p>Password: {society.PresidentEmail}</p>
                                    <p>Description: {society.PresidentEmail}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
