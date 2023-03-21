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
    <div className="h-screen w-screen  flex justify-center items-center">
      <ProkectSection projects={project} />
    </div>
  );
}

export default Projects;
