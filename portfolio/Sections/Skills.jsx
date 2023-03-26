"use client";

import React from "react";
import { skills } from "../utils/Constants";
import SkillProgressInd from "../components/SkillProgressInd";
import "../custom-css/skills.css";
import { styles } from "../src/app/style";
import { motion } from "framer-motion";

import {
  fadeIn,
  staggerContainer,
  navVariants,
  sectionVariants,
} from "../utils/motion";
import { TypingText } from "../components/CustomText";
import ComputerCanvas from "../components/models/Model";

const Skills = () => {
  const percentage = 66;
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      className="w-full   min-h-[100vh]  background-skills flex flex-col justify-between items-center "
      id="skills"
    >
      <motion.div
        className=" w-full flex justify-center items-center  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-t border-gray-100"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
      >
        <TypingText
          title="S K I L L S"
          textStyles={`text-white ${styles.heroHeadText} drop-shadow-lg`}
        />
      </motion.div>
      <motion.div
        className="w-fit md:w-full h-96 opacity-25"
        variants={navVariants}
        initial="hidden"
        whileInView="show"
      >
        <ComputerCanvas />
      </motion.div>
      <motion.div
        className="mt-5 md:hidden w-full flex justify-center items-center"
        variants={fadeIn("up", "tween", 0.2, 1)}
      >
        <a href="#Project">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-white animate-bounce"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
            />
          </svg>
        </a>
      </motion.div>
      <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className="flex scrolbar-color  w-fit h-[500px] backdrop-blur-2xl opacity-30  md:backdrop-blur-0 md:opacity-0 md:border-none md:max-h-full flex-wrap p-4 overflow-y-scroll justify-center items-center"
      >
        {skills.map((skill, i) => (
          <SkillProgressInd
            techname={skill.name}
            progress={skill.progress}
            key={i}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
