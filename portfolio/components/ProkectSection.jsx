"use client";

import React from "react";
import ProjectCard from "./ProjectCard";

import { motion } from "framer-motion";

import { navVariants } from "../utils/motion";

const ProkectSection = ({ projects }) => {
  return (
    <motion.div
      className="w-fit flex  flex-col  h-fit md:space-y-0 md:space-x-7 md:flex-row space-y-7 p-5 justify-center items-center"
      variants={navVariants}
      initial="hidden"
      whileInView="show"
    >
      {projects.map((project , i) => (
        <ProjectCard project={project} key={i}/>
      ))}
    </motion.div>
  );
};

export default ProkectSection;
