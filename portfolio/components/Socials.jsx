import React from "react";
import { motion, Variants } from "framer-motion";
import {
  fadeIn,
  staggerContainer,
  navVariants,
  textContainer,
  textVariant,
  textVariant2,
  slideIn,
} from "../utils/motion";

const Socials = () => {
  return (
    <motion.div
      className="h-fit p-5 w-[260px] flex justify-center items-center"
      variants={navVariants}
    >
      <motion.div
        className="shadow-md  bg-black bg-opacity-25 backdrop-blur-md p-4 h-60 rounded-xl flex justify-center items-center space-y-5 flex-col"
      >
        <div>
          <a href="">
            <img
              className="h-6 w-6"
              src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png"
              alt=""
            />
          </a>
        </div>
        <div>
          <a href="">
            <img
              className="h-6 w-6"
              src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
              alt=""
            />
          </a>
        </div>
        <div>
          <a href="">
            <img
              className="h-6 w-6"
              src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
              alt=""
            />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Socials;
