// src/components/ProjectsSection.js
import React from "react";
import "./ProjectsSection.css";
import GroupList from "./GroupList";

function ProjectsSection() {
  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <h2 className="text-center mb-5 text-white">My Projects</h2>
        <GroupList />
      </div>
    </section>
  );
}

export default ProjectsSection;
