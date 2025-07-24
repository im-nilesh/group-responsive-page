import React from "react";
import "./HeroSection.css";
import HeroImage from "../assets/Rectangle 2.png";

const HeroSection = () => {
  return (
    <header className="hero position-relative">
      <img
        src={HeroImage}
        alt="Computer Engineering"
        className="w-100 hero-image"
      />
      <div className="hero-overlay">
        <h1 className="hero-title">Computer Engineering</h1>
        <p className="hero-subtitle">142,765 Computer Engineers follow this</p>
      </div>
    </header>
  );
};

export default HeroSection;
