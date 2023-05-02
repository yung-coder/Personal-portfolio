"use client";

import React from "react";
import { styles } from "../src/app/style";
import ComputerCanvas from "./models/Model";
import { motion, Variants } from "framer-motion";
import { TypingText } from "./CustomText";

import { fadeIn, staggerContainer, navVariants } from "../utils/motion";
import EarthCanvas from "./models/Earth";
import Socials from "./Socials";
import Head from "next/head";

const Hero = () => {
  return (
    <>
      {/* <Head>
        <meta
          name="image"
          property="og:image"
          content="https://learn.g2.com/hubfs/IT%20Portfolio%20Management@2x.png"
        ></meta>
      </Head> */}
      <section
        className={`h-screen   flex flex-col justify-center  items-center  md:flex-row `}
      >
        <div className="flex justify-center  space-x-3   md:w-1/2  w-full md:max-h-max h-full p-2 mt-6 md:p-0 md:mt-0">
          <motion.div
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            className="flex flex-col justify-center items-center mt-5"
          >
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 h-52 md:h-60 bg-[#915EFF]" />
          </motion.div>

          <div className="mt-3  flex justify-center items-center md:mt-0  md:flex-none ">
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
              <div className="flex flex-col justify-start items-start space-y-4">
                <motion.p
                  variants={fadeIn("up", "tween", 0.2, 1)}
                  className={`${styles.heroSubText} mt-2 text-white-100`}
                >
                  Web and Android app developer
                  <br className="sm:bloc" />
                  Open Source Contributor
                  <br className="sm:block " />
                  MERN | FLUTTER
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
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
              />
            </svg>
          </a>
        </motion.div>
        <div className="w-fit  h-96 md:h-full md:w-1/2">
          <EarthCanvas />
        </div>
      </section>
    </>
  );
};

export default Hero;
