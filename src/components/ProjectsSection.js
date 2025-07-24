import React from "react";
import "./ProjectsSection.css";

const projects = [
  { name: "Netflix Clone", link: "#", tech: "HTML, CSS" },
  { name: "Tic Tac Toe", link: "#", tech: "HTML, CSS, JavaScript" },
  { name: "Weather App", link: "#", tech: "HTML, CSS, API" },
  { name: "E-Commerce Website", link: "#", tech: "HTML, CSS, JavaScript" },
];

const ProjectsSection = () => (
  <div className="projects-section container text-center my-5">
    <h2>Projects</h2>
    <div className="row">
      {projects.map((project, index) => (
        <div key={index} className="col-md-3 mb-4">
          <div className="project-box p-3 shadow-sm">
            <h5>{project.name}</h5>
            <p>{project.tech}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              Live Link
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ProjectsSection;
