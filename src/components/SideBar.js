import React from 'react';
import { FaUser, FaCalendarAlt, FaFileAlt, FaUsers } from 'react-icons/fa'; // Import FaUsers icon
import { Link } from 'react-router-dom'; // Import Link from React Router
import './SideBar.css'; // Import CSS file for styling
import logout from '../Logout'; // Import logout function

function SideBar() {
  const handleLogout = () => {
    logout(); // Call the logout function when the logout text is clicked
  };

  return (
    <div className="sidebar">
      {/* Link to the profile page */}
      <Link to="/profile" className="icon-container">
        <FaUser className="icon-style" />
      </Link>
      {/* Link to the RegisterEvent page */}
      <Link to="/registerevent" className="icon-container">
        <FaCalendarAlt className="icon-style" />
      </Link>
      {/* Link to the EditEvent page */}
      <Link to="/editevent" className="icon-container">
        <FaFileAlt className="icon-style" />
      </Link>
      {/* Link to the DisplayRegsiteredUsersForEvents page */}
      <Link to="/displayregisteredusersforevents" className="icon-container">
        <FaUsers className="icon-style" /> {/* Use FaUsers icon */}
      </Link>
      <div className="logout-text-container">
        <p className="logout-text" onClick={handleLogout}>
          Logout
        </p>
      </div>
    </div>
  );
}

export default SideBar;
