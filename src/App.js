import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import ProfilePage from './ProfilePage';
import RegisterEvent from './Registerevent';
import Login from './Login';
import EditEvent from './Editevent';
import Signup from './Signup';
import RegisterUserForEvent from './RegisterUserForEvent';
import DisplayRegsiteredUsersForEvents from './DisplayRegsiteredUsersForEvents';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/registerevent" element={<RegisterEvent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/editevent" element={<EditEvent />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/registeruserforevent" element={<RegisterUserForEvent />} />
          <Route path="/displayregisteredusersforevents" element={<DisplayRegsiteredUsersForEvents />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
