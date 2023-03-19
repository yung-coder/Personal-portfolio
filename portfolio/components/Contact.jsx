"use client";

import React from "react";
import "./contact.css";
import PhoneCanvas from "./Phone";
import { motion } from "framer-motion";

import {
  slideIn,
  staggerContainer,
  fadeIn,
  navVariants,
} from "../utils/motion";
import { TypingText } from "./CustomText";
import { styles } from "../src/app/style";

const Contact = () => {
  return (
    <motion.div
      className="max-h-full w-full background-contact flex flex-col justify-center items-center "
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
    >
      <TypingText
        title="Contact"
        textStyles={`text-white ${styles.heroHeadText} drop-shadow-lg  underline`}
      />
      <div className="flex flex-col md:flex-row w-full h-screen">
        <motion.div
          className="w-1/2 flex justify-center items-center h-screen "
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
        >
          <motion.div
            className="p-5 flex flex-col space-y-6 bg-[#151030] bg-opacity-25 backdrop-blur-lg rounded drop-shadow-lg w-fit"
            variants={fadeIn("down", "spring", 1.3 * 0.5, 1)}
            initial="hidden"
            whileInView="show"
          >
            <div className="flex flex-col space-y-2">
              <h1 className="text-gray-400 text-sm">GET IN TOUCH</h1>
              <h2 className="text-white text-2xl">Contact</h2>
            </div>
            <form action="" className="flex flex-col space-y-3">
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Name</span>
                <input
                  type="text"
                  name="name"
                  class="block mb-2 text-sm font-medium text-white bg-[#151030]  rounded-md p-1"
                  placeholder="Enter you name"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Email</span>
                <input
                  type="text"
                  class="block mb-2 text-sm font-medium text-white bg-[#151030] rounded-md p-1"
                  placeholder="Enter you email"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  Your Message
                </span>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="bg-[#151030] text-white"
                ></textarea>
              </label>
            </form>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-1/2 h-screen cursor-pointer "
          variants={slideIn("left", "spring", 1 * 0.5, 1)}
          initial="hidden"
          whileInView="show"
        >
          <PhoneCanvas />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
