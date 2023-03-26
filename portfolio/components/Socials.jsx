"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { navVariants } from "../utils/motion";
import code from "../public/assets/img/leetcode.png";

const Socials = () => {
  return (
    <motion.div
      className="h-fit w-[270px] p-2 flex justify-start items-start"
      variants={navVariants}
    >
      <motion.div className="shadow-md  bg-black bg-opacity-25 backdrop-blur-md  p-4 h-14  rounded-xl flex justify-center items-center  space-x-7">
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
        <div>
          <a href="">
            <img
              className="h-6 w-6 bg-white  rounded-lg "
              src={
                "https://cdn.icon-icons.com/icons2/2389/PNG/512/leetcode_logo_icon_145113.png"
              }
              alt=""
            />
          </a>
        </div>
        <div>
          <a href="">
            <img
              className="h-6 w-6 bg-white  rounded-lg "
              src={
                "https://cdn.icon-icons.com/icons2/2389/PNG/512/codewars_logo_icon_145389.png"
              }
              alt=""
            />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Socials;
