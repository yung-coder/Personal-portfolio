import React from "react";
import ProductPage from "../../../components/ProductPage";
import { client } from "../../../lib/client";

async function page() {
  const getData = async () => {
    const query = '*[_type == "project"]';
    const project = await client.fetch(query);

    return { project };
  };
  const { project } = await getData();
  return (
    <div className="max-h-full w-screen border border-red-500 bg-[#050816] md:max-h-full flex flex-col justify-center items-center">
      <ProductPage projects={project}/>
    </div>
  );
}

export default page;
