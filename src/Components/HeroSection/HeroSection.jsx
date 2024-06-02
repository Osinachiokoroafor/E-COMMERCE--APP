import React from 'react'
import './HeroSection.css'

 function HeroSection() {
  return (
    <div className="hero-box">
      <div className="hero-row1">
        <img className="wider-width1" src="images/col-md-4.png" alt="hero" />
        <div className="hero-col">
          <img className="wider-width2" src="images/card-item (2).png" alt="hero" />
          <div className="hero-row1">
            <img className="wider-width3" src="images/card-item (4).png" alt="hero" />
            <img className="wider-width3" src="images/card-item (3).png" alt="hero" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;