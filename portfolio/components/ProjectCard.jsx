import React from "react";
import { urlFor } from "../lib/client";

import { motion } from "framer-motion";

import { fadeIn, navVariants } from "../utils/motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.a
      variants={fadeIn("up", "tween", 0.4, 2)}
      href="#"
      className="block backdrop-blur-md bg-opacity-20 rounded-md bg-black p-2 m-4"
    >
      <img
        alt="Art"
        src={urlFor(project.image && project.image[0]).url()}
        className="h-48 w-96 object-cover sm:h-80 lg:h-96 rounded-md"
      />

      <h3 className="mt-4 text-lg font-bold text-white  sm:text-xl">
        {project.name}
      </h3>

      <p className="mt-2 max-w-sm text-gray-700">
        {project.description.slice(0, 125)}...
      </p>
      <div className="mt-4 gap-2 inline-flex items-center  text-indigo-600  ">
        <p className="font-medium sm:text-lg">Repo Link</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 transition group-hover:translate-x-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
