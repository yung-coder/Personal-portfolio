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
  sectionVariants,
} from "../utils/motion";
import { services } from "../utils/Constants";
import ServiceCard from "./ServiceCard";
import Socials from "./Socials";
import { styles } from "../src/app/style";

const AboutMe = () => {
  return (
    <section className="text-white w-screen max-h-full md:h-screen   flex flex-col ">
      <motion.div
        className=" w-full flex justify-center items-center  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-t border-gray-100"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
      >
        <TypingText
          title="A B O U T M E"
          textStyles={`text-white ${styles.heroHeadText} drop-shadow-lg `}
        />
      </motion.div>
      <div className="md:flex-row md:h-screen  flex justify-center items-center flex-col p-5  md:space-x-6">
        <motion.div ariants={navVariants} initial="hidden" whileInView="show">
          <motion.a
            href="#"
            class="group relative block w-60 h-80 md:w-96  backdrop-blur-3xl"
            variants={fadeIn("up", "tween", 0.4, 2)}
          >
            <img
              alt="Developer"
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              class="absolute inset-0 h-80 w-96  object-cover opacity-75  rounded-2xl"
            />

            <div class="relative p-4 sm:p-6 lg:p-8">
              <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                Developer
              </p>

              <p class="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

              <div class="mt-36">
                <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p class="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Omnis perferendis hic asperiores quibusdam quidem voluptates
                    doloremque reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </motion.a>
        </motion.div>
        <motion.div
          className=" w-[350px] md:w-[800px] justify-center space-y-3 items-center md:justify-start md:items-start h-fit p-5 flex flex-col backdrop-blur-sm rounded-md shadow-2xl "
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
          <div className="flex  md:flex-row md:justify-center md:items-center md:space-x-3 md:space-y-0 mt-4 flex-row space-x-4 w-full p-5  overflow-scroll">
            {services.map((service) => (
              <ServiceCard title={service.title} img={service.img} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
