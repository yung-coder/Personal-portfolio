"use client";

import { ProjectsClient } from "@sanity/client";
import Link from "next/link";
import React from "react";
import { client } from "../lib/client";
import { navVariants, sectionVariants } from "../utils/motion";
import ProkectSection from "./ProkectSection";
import { styles } from "../src/app/style";
import { motion, Variants } from "framer-motion";
import { TypingText } from "./CustomText";

function Projects({ project }) {
  return (
    <section className="max-h-full w-screen  md:h-screen  flex flex-col justify-center items-center">
      <motion.div
        className=" w-full flex justify-center items-center  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-t border-gray-100"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
      >
        <TypingText
          title="P R O J E C T S"
          textStyles={`text-white ${styles.heroHeadText} drop-shadow-lg `}
        />
      </motion.div>
      <div>
        <ProkectSection projects={project} />
      </div>
      <motion.div
        className="mt-7 flex space-x-4 h-28 md:h-full w-full justify-center items-center"
        variants={navVariants}
        initial="hidden"
        whileInView="show"
      >
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
      </motion.div>
    </section>
  );
}

export default Projects;
