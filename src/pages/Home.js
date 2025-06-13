// src/pages/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-section">
        <h1 className="animated-title">Madhunamma Family Hub</h1>
        <p className="subtitle">Together, Always Connected 💖</p>
      </div>
      <img
        src="https://cdn-icons-png.flaticon.com/512/3926/3926758.png"
        alt="Family Icon"
        className="home-image"
      />
      
      <footer className="footer-credit">
        © 2025 Madhunamma Family | Built with ❤️ by Abhilash Kalvacherla
      </footer>
    </div>
  );
};

export default Home;
