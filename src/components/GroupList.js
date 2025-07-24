// src/components/GroupList.js
import React from "react";
import GroupCard from "./GroupCard";

const projects = [
  {
    title: "Project One",
    desc: "A frontend project built with React and Bootstrap.",
    link: "#",
  },
  {
    title: "Project Two",
    desc: "A responsive landing page using HTML, CSS, and JS.",
    link: "#",
  },
  {
    title: "Project Three",
    desc: "A portfolio website with smooth scroll and custom design.",
    link: "#",
  },
];

function GroupList() {
  return (
    <div className="row">
      {projects.map((project, index) => (
        <GroupCard key={index} {...project} />
      ))}
    </div>
  );
}

export default GroupList;
