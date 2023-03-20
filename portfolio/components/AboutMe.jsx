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

const AboutMe = () => {
  return (
    <div className="text-white w-screen h-screen  flex justify-center items-center ">
      <motion.div
        className=" w-[800px]  justify-start items-start  h-fit p-5 flex flex-col backdrop-blur-sm rounded-md shadow-2xl"
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
        <div className="flex p-4 space-x-3 mt-4">
          {services.map((service) => (
            <ServiceCard  title={service.title} img={service.img}/>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
