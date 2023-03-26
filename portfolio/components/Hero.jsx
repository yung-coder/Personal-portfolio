"use client";

import React from "react";
import { styles } from "../src/app/style";
import ComputerCanvas from "./models/Model";
import { motion, Variants } from "framer-motion";
import { TypingText } from "./CustomText";

import { fadeIn, staggerContainer, navVariants } from "../utils/motion";
import EarthCanvas from "./models/Earth";
import Socials from "./Socials";

const Hero = () => {
  return (
    <div
      className={`h-screen   w-screen flex flex-col justify-center  items-center  md:flex-row`}
    >
      <div className="flex justify-center  space-x-3  max-h-max  w-1/2 ">
        <motion.div
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          className="flex flex-col justify-center items-center mt-5"
        >
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 bg-[#915EFF]" />
        </motion.div>

        <div className="">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <div className="flex space-x-4">
              <TypingText
                title="Hi , I'm"
                textStyles={`text-white ${styles.heroHeadText} drop-shadow-lg `}
              />
              <TypingText
                title="Saksham"
                textStyles={`text-[#915EFF] ${styles.heroHeadText} drop-shadow-lg text-amber-300`}
              />
            </div>
            <div className="flex flex-col justify-start items-start">
              <motion.p
                variants={fadeIn("up", "tween", 0.2, 1)}
                className={`${styles.heroSubText} mt-2 text-white-100`}
              >
                I develope Web apps and
                <br className="sm:block hidden" />
                android apps
                <br className="sm:block hidden" />
              </motion.p>
              <motion.div variants={fadeIn("up", "tween", 0.2, 1)}>
                <Socials />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="mt-5 md:hidden w-full flex justify-center items-center"
        variants={fadeIn("up", "tween", 0.2, 1)}
      >
        <a href="#About">
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
      <div className="w-fit  h-96 md:h-full md:w-1/2">
        <EarthCanvas />
      </div>
    </div>
  );
};

export default Hero;
