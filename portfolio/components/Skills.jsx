"use client";

import React from "react";
import { skills } from "../utils/Constants";
import SkillProgressInd from "./SkillProgressInd";
import "./skills.css";
import { styles } from "../src/app/style";
import { motion, Variants } from "framer-motion";

import { fadeIn, staggerContainer, navVariants } from "../utils/motion";
import { TypingText } from "./CustomText";
import ComputerCanvas from "./Model";

const Skills = () => {
  const percentage = 66;
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      className="w-full   min-h-[100vh]  background-skills flex flex-col justify-between items-center "
    >
      <motion.div
        className=" w-full flex justify-center items-center  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-t border-gray-100"
        variants={navVariants}
        initial="hidden"
        whileInView="show"
      >
        <TypingText
          title="S K I L L S"
          textStyles={`text-white ${styles.heroHeadText} drop-shadow-lg `}
        />
      </motion.div>
      <motion.div
        className="w-full h-96 opacity-25"
        variants={navVariants}
        initial="hidden"
        whileInView="show"
      >
        <ComputerCanvas />
      </motion.div>
      <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className="flex w-fit h-[500px] md:max-h-full flex-wrap p-4 overflow-y-scroll justify-center items-center"
      >
        {skills.map((skill) => (
          <SkillProgressInd techname={skill.name} progress={skill.progress} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
