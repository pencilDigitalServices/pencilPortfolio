import React from 'react';
import './Hero.css';
import underline from '../../images/Vector.svg';

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-heading-container">
          <h1 className="hero-heading">
            Your Next Project <span>Done Well</span>
            <img
              className="hero-heading-underline"
              src={underline}
              alt="line"
            />
          </h1>
        </div>
        <div className="hero-content-highlights">
          <div className="hero-cards">
            <h2> 4 Years</h2>
            <h5>of Experience</h5>
          </div>
          <div className="hero-cards">
            <h2>100+</h2>
            <h5>Projects Completed</h5>
          </div>
          <div className="hero-cards">
            <h2>100+</h2>
            <h5>Clients</h5>
          </div>
          <div className="hero-cards">
            <h2> From</h2>
            <h5>Different Countries</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
