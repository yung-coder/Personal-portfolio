"use client";

import React from "react";
import { skills } from "../utils/Constants";
import SkillProgressInd from "./SkillProgressInd";
import "./skills.css";
import { styles } from "../src/app/style";
import { motion, Variants } from "framer-motion";

import { fadeIn, staggerContainer, navVariants } from "../utils/motion";
import { TypingText } from "./CustomText";

const Skills = () => {
  const percentage = 66;
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      className="w-full   max-h-full  background-skills flex flex-col justify-between items-center  "
    >
      <TypingText
        title="S K I L L S"
        textStyles={`text-white ${styles.heroHeadText} drop-shadow-lg underline`}
      />
      <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className="flex w-fit  max-h-full flex-wrap  justify-center items-center   "
      >
        {skills.map((skill) => (
          <SkillProgressInd techname={skill.name} progress={skill.progress} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
