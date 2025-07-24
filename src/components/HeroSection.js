// src/components/HeroSection.js
import React from "react";
import "./HeroSection.css";
import "bootstrap/dist/css/bootstrap.min.css";

function HeroSection() {
  return (
    <section id="hero" className="hero d-flex align-items-center">
      <div className="container text-center">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Nadeem</span>
        </h1>
        <p className="hero-subtitle">Frontend Developer | React Enthusiast</p>
        <a href="#projects" className="btn btn-primary mt-3">
          View Projects
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
