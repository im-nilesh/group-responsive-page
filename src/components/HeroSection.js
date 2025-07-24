import React from "react";
import bannerImage from "../assets/Rectangle 2.png"; // Place your image accordingly

const HeroSection = () => {
  return (
    <header className="position-relative mb-4">
      <img
        src={bannerImage}
        alt="Computer Engineering"
        className="w-100"
        style={{ objectFit: "cover", maxHeight: "400px" }}
      />
      <div className="position-absolute bottom-0 text-white p-4 bg-dark bg-opacity-50 w-100">
        <h1 className="fs-2 fw-bold">Computer Engineering</h1>
        <p className="mb-0">142,765 Computer Engineers follow this</p>
      </div>
    </header>
  );
};

export default HeroSection;
