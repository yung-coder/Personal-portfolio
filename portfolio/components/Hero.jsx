"use client";

import React from "react";
import { styles } from "../src/app/style";
import ComputerCanvas from "./Model";
import { motion, Variants } from "framer-motion";
import { TypingText } from "./CustomText";

import { fadeIn, staggerContainer, navVariants } from "../utils/motion";
import EarthCanvas from "./Earth";

const Hero = () => {
  return (
    // <section className={`w-full h-screen  border `}>
    <div
      className={`h-screen flex flex-col justify-center  items-center  md:flex-row`}
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
            <div>
              <motion.p
                variants={fadeIn("up", "tween", 0.2, 1)}
                className={`${styles.heroSubText} mt-2 text-white-100`}
              >
                Front-end Webdeveloper <br className="sm:block hidden" />
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-full h-96 md:h-full md:w-1/2">
        <EarthCanvas />
      </div>

      {/* <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Adrian</span>  
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div> */}
    </div>
  );
};

export default Hero;
