"use client";

import React from "react";
import { styles } from "../src/app/style";
import ComputerCanvas from "./Model";
import { motion, Variants } from "framer-motion";
import { TypingText } from "./CustomText";

import { fadeIn, staggerContainer } from "../utils/motion";

const Hero = () => {
  return (
    // <section className={`w-full h-screen  border `}>
    <div
      className={`border border-blue-500 h-screen flex justify-center space-x-5 items-center`}
    >
      <div className="flex space-x-2 ">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 bg-[#915EFF]" />
        </div>

        <div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <div className="flex space-x-8">
              <TypingText
                title="Hi , I'm"
                textStyles={`text-white ${styles.heroHeadText}`}
              />
              <TypingText
                title="Saksham"
                textStyles={`text-[#915EFF] ${styles.heroHeadText}`}
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

      <div className="w-[400px] h-96">
        <ComputerCanvas />
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
