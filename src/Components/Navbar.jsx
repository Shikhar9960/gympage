import React, { useState } from 'react';
import './Navbar.css'; 
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">FITNESS CLUB</div>
        <button className="navbar-toggle" onClick={toggleNavbar}>
          <span className="navbar-icon">&#9776;</span>
        </button>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/">HOME</Link>
          <Link to="/Membership">MEMBERSHIP</Link>
          <Link to="/About">ABOUT</Link>
          <Link to="/Contact">CONTACT</Link>
          <Link to="/Registration">REGISTRATION</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

