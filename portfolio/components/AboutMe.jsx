"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { TypingText } from "./CustomText";

import {
  fadeIn,
  staggerContainer,
  navVariants,
  textContainer,
  textVariant,
  textVariant2,
} from "../utils/motion";
import { services } from "../utils/Constants";
import ServiceCard from "./ServiceCard";
import Socials from "./Socials";

const AboutMe = () => {
  return (
    <div className="text-white w-screen max-h-full md:h-screen md:flex-row  flex justify-center items-center flex-col p-5">
      <motion.div ariants={navVariants} initial="hidden" whileInView="show">
        <Socials />
      </motion.div>
      <motion.div
        className=" w-[350px] md:w-[800px] justify-center items-center md:justify-start md:items-start h-fit p-5 flex flex-col backdrop-blur-sm rounded-md shadow-2xl "
        variants={navVariants}
        initial="hidden"
        whileInView="show"
      >
        <div className="flex flex-col">
          <h2 className="text-sm text-gray-400">INTRODUCTION</h2>
          <h1 className="text-2xl  font-bold">Overview</h1>
        </div>
        <motion.div
          variants={textContainer}
          initial="hidden"
          whileInView="show"
          className="w-full flex flex-wrap mt-4"
        >
          <TypingText
            title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            nesciunt, quia magnam fuga molestias pariatur explicabo minima
            exercitationem ex ab architecto impedit temporibus, assumenda hic
            ratione neque reprehenderit autem delectus adipisci fugiat? Cumque,
            ipsa?"
            textStyles="break-all text-gray-400"
          />
        </motion.div>
        <div className="flex p-4 justify-center items-center md:flex-row  md:space-x-3 md:space-y-0 mt-4 flex-col space-y-4">
          {services.map((service) => (
            <ServiceCard title={service.title} img={service.img} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
