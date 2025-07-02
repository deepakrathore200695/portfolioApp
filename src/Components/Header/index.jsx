import React from 'react';
import { Link } from 'react-router-dom';

const index = () => {
  return (
    <nav style={{ width: '100%', height: '10vh', border: '1px solid #000'}}>
        <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </nav>
  )
}

export default index
