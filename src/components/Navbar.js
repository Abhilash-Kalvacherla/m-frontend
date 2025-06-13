// src/components/Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-logo">Madhunamma Family</div>
      <ul className="navbar-links">
        <li className={location.pathname === '/' ? 'active' : ''}><Link to="/">Home</Link></li>
        <li className={location.pathname === '/gallery' ? 'active' : ''}><Link to="/gallery">Gallery</Link></li>
        <li className={location.pathname === '/family-tree' ? 'active' : ''}><Link to="/family-tree">Family Tree</Link></li>
        <li className={location.pathname === '/events' ? 'active' : ''}><Link to="/events">Events</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
