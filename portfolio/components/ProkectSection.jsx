"use client";

import React from "react";
import ProjectCard from "./ProjectCard";

const ProkectSection = ({ projects }) => {
  console.log(projects);
  return (
    <div className="w-fit flex h-fit space-x-7 p-5 justify-center items-center">
      {projects.map((project) => (
        <ProjectCard project={project}/>
      ))}
    </div>
  );
};

export default ProkectSection;
