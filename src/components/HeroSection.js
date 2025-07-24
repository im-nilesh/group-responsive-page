import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <header className="hero position-relative mb-4">
      <img
        src="./images/Rectangle 2.png"
        alt="Computer Engineering"
        className="w-100 hero-image"
      />
      <div className="hero-content position-absolute bottom-0 text-white p-4">
        <h1>Computer Engineering</h1>
        <p>142,765 Computer Engineers follow this</p>
      </div>
    </header>
  );
};

export default HeroSection;
