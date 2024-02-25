// Home.js

import React from 'react';
import './home.css'; // Import the CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Our Application</h1>
        <p>Experience the Future of Facial Recognition Technology</p>
        <button className="cta-button">Get Started</button>
      </div>
      <div className="features-section">
        {/* <h2>Key Features</h2> */}
        <div className="feature-card">
          <h3>Real-time Face Detection</h3>
          <p>Experience seamless face detection powered by AI</p>
        </div>
        <div className="feature-card">
          <h3>Interactive User Interface</h3>
          <p>Engage with our intuitive and user-friendly interface</p>
        </div>
      </div>
      <div className="testimonial-section">
        <h2>What Our Users Say</h2>
        <div className="testimonial">
          <p>"Explore the beauty of face recognition today through our several dynamic features"</p>
          <span>- John Doe, CEO</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
