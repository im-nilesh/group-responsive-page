// src/components/GroupCard.js
import React from "react";

function GroupCard({ title, desc, link }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <a
            href={link}
            className="btn btn-outline-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default GroupCard;
