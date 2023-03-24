"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import { motion, Variants } from "framer-motion";
import { styles } from "../src/app/style";
import { TypingText } from "./CustomText";
import { navVariants } from "../utils/motion";

const ProductPage = ({ projects }) => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <motion.div
        className=" w-full flex justify-center items-center  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-t border-gray-100"
        variants={navVariants}
        initial="hidden"
        whileInView="show"
      >
        <TypingText
          title="P R O J E C T S"
          textStyles={`text-white ${styles.heroHeadText} drop-shadow-lg `}
        />
      </motion.div>
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
};

export default ProductPage;
