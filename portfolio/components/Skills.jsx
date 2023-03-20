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
      className="w-full  min-h-[100vh]  background-skills flex flex-col justify-between items-center "
    >
      <TypingText
        title="S K I L L S"
        textStyles={`text-white ${styles.heroHeadText} drop-shadow-lg underline`}
      />
      <div className="w-full h-96 "> 
        <ComputerCanvas />
      </div>
      <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className="flex w-fit max-h-full flex-wrap  justify-center items-center"
      >
        {skills.map((skill) => (
          <SkillProgressInd techname={skill.name} progress={skill.progress} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
