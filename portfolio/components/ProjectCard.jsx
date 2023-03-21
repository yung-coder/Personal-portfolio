import React from "react";
import { urlFor } from "../lib/client";

const ProjectCard = ({ project }) => {
  return (
    <a
      href="#"
      class="block backdrop-blur-md bg-opacity-20 rounded-md bg-black p-2 "
    >
      <img
        alt="Art"
        src={urlFor(project.image && project.image[0]).url()}
        class="h-48 w-96 object-cover sm:h-80 lg:h-96 rounded-md"
      />

      <h3 class="mt-4 text-lg font-bold text-white  sm:text-xl">
        {project.name}
      </h3>

      <p class="mt-2 max-w-sm text-gray-700">
        {project.description.slice(0, 125)}...
      </p>
      <div class="mt-4 gap-2 inline-flex items-center  text-indigo-600  ">
        <p class="font-medium sm:text-lg">Repo Link</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 transition group-hover:translate-x-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </a>
  );
};

export default ProjectCard;
