import { ProjectsClient } from "@sanity/client";
import Link from "next/link";
import React from "react";
import { client } from "../lib/client";
import ProkectSection from "./ProkectSection";

async function Projects() {
  const getData = async () => {
    const query = '*[_type == "project"]';
    const project = await client.fetch(query);

    return { project };
  };
  const { project } = await getData();
  return (
    <div className="max-h-full w-screen  md:h-screen  flex flex-col justify-center items-center">
      <div>
        <ProkectSection projects={project} />
      </div>
      <div className="mt-7 flex space-x-4">
        <h1 className="text-white">EXPLORE MORE PROJECTS</h1>
        <Link href={`/Projects`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
