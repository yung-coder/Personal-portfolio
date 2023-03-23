"use client";

import React from "react";
import ProjectCard from "./ProjectCard";

const ProductPage = ({ projects }) => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
};

export default ProductPage;
