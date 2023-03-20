import React from "react";
import { fadeIn, staggerContainer, navVariants } from "../utils/motion";
import { motion, Variants } from "framer-motion";

const ServiceCard = ({ title, img }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 4.4 * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card f"
    >
      <div className="backdrop-blur-2xl    rounded-[20px]  h-44 flex justify-evenly items-center flex-col shadow-sm shadow-gray-300 ">
        <img
          src={img}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
