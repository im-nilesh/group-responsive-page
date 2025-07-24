// src/components/ContactSection.js
import React from "react";
import "./ContactSection.css";

function ContactSection() {
  return (
    <section id="contact" className="contact-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Contact Me</h2>
        <div className="text-center">
          <p className="lead">Email: nadeem@example.com</p>
          <p className="lead">
            LinkedIn: <a href="#">linkedin.com/in/nadeem</a>
          </p>
          <p className="lead">
            GitHub: <a href="#">github.com/nadeem</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
