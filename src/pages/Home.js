import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-section">
        <h1 className="animated-title">Madhunamma Family</h1>
        <p className="subtitle">Together, Always Connected 💖</p>
      </div>
      <img
        src="https://cdn-icons-png.flaticon.com/512/3884/3884895.png"
        alt="Family"
        className="home-image"
      />
    </div>
  );
};

export default Home;
