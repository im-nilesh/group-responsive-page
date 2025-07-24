// src/components/AboutSection.js
import React from "react";
import "./AboutSection.css";

function AboutSection() {
  return (
    <section id="about" className="about-section py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-4">About Me</h2>
        <p className="lead">
          I'm a passionate frontend developer focused on creating engaging and
          responsive user experiences. I love turning ideas into reality using
          modern technologies like React and Bootstrap.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
