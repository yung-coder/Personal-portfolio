import React from "react";
import { client } from "../lib/client";
import Projects from "./Projects";

async function ProjectApi() {
  const getData = async () => {
    const query = '*[_type == "project"][0..3]';
    const project = await client.fetch(query);

    return { project };
  };
  const { project } = await getData();
  return (
    <>
      <Projects project={project}/>
    </>
  );
}

export default ProjectApi;
