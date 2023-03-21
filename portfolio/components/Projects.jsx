import React from "react";
import { client } from "../lib/client";

const getData = async () => {
  const query = '*[_type == "project"]';
  const project = await client.fetch(query);

  return { project };
};

async function Projects() {
  const data = await getData();
  console.log(data , 'data');
  return <div>Projects</div>;
}

export default Projects;
