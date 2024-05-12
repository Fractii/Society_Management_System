import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function NavBar() {
  return (
    <Navbar 
      style={{ 
        backgroundColor: '#c4a464', // Set background color of the navbar
        position: 'fixed', // Fix the navbar position so it stays at the top
        width: '100%', // Make the navbar span the entire width of the viewport
        zIndex: '1000' // Ensure the navbar remains on top of other content
      }}
    > 
      <Container fluid>
        <Navbar.Brand className="mr-auto" href="#home" style={{ color: 'white', marginLeft: '10px' }}>
          <strong>Society Management System</strong>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <div className="d-flex align-items-center">
            <p style={{ color: 'white', marginRight: '10px', marginTop: '15px', fontSize: '0.8em' }}>( Only for societies )</p>
            <Link to="/login" style={{ marginRight: '10px' }}>
              <Button style={{ backgroundColor: '#00264d' }}>Login</Button>
            </Link>
            <Link to="/signup">
              <Button style={{ backgroundColor: '#00264d' }}>Signup</Button>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
