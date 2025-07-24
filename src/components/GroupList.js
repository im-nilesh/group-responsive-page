import React from "react";
import Follow1 from "../assets/Follow1.png";
import Follow2 from "../assets/Follow2.png";
import Follow3 from "../assets/Follow3.png";
import Follow4 from "../assets/Follow4.png";
import Vector from "../assets/Vector.png";
import location1 from "../assets/locationSimbol.png";
import location2 from "../assets/locationSimbol2.png";
import location3 from "../assets/locationSimbol3.png";

const groups = [
  { name: "Leisure", img: Follow1 },
  { name: "Activism", img: Follow2 },
  { name: "MBA", img: Follow3 },
  { name: "Philosophy", img: Follow4 },
];

const GroupList = () => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="d-flex align-items-center mb-3">
          <img src={location1} className="me-2" alt="location" />
          <input
            type="text"
            className="form-control border-0 p-0"
            placeholder="Enter Your Location"
          />
          <button className="btn btn-link p-0">
            <img src={location2} alt="edit" />
          </button>
        </div>
        <hr className="thick-line" />
        <div className="d-flex align-items-center text-muted small mb-4">
          <img src={location3} className="me-2" alt="info" />
          <span>
            Your location will help us serve better and extend a personalised
            experience.
          </span>
        </div>
        <div className="recommended-groups">
          <h6 className="d-flex align-items-center mb-4">
            <img src={Vector} className="me-2" alt="like" />
            RECOMMENDED GROUPS
          </h6>
          {groups.map((group) => (
            <div
              key={group.name}
              className="d-flex align-items-center justify-content-between mb-4"
            >
              <div className="d-flex align-items-center">
                <img
                  src={group.img}
                  alt={group.name}
                  className="rounded-circle me-3"
                  width="36"
                  height="36"
                />
                <span>{group.name}</span>
              </div>
              <button className="btn btn-light rounded-pill px-3">
                Follow
              </button>
            </div>
          ))}
          <button className="btn btn-link text-primary text-decoration-none w-100 text-end">
            See More...
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupList;
