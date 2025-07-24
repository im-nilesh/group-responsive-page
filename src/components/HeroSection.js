import React from "react";
import "./HeroSection.css";
import Rectangle from "../assets/Rectangle 2.png"; // Assuming the image is in the assets folder

const HeroSection = () => {
  return (
    <header className="hero position-relative mb-4">
      <img
        src={Rectangle}
        alt="Computer Engineering"
        className="w-100 hero-image"
      />
      <div className="hero-content position-absolute text-white">
        <h1 className="hero-title">Computer Engineering</h1>
        <p className="hero-subtitle">142,765 Computer Engineers follow this</p>
      </div>
    </header>
  );
};

export default HeroSection;
