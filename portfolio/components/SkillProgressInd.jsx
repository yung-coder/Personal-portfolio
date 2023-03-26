"use client";

import React from "react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import RadialSeparators from "../utils/Seprators";
import { motion } from "framer-motion";

const SkillProgressInd = ({ techname, progress }) => {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.2 }}
        className='w-[110px] h-[110px] md:w-[150px] md:h-[150px]  m-[31px] cursor-pointer'
      >
        <CircularProgressbarWithChildren
          value={progress}
          text={`${progress}%`}
          strokeWidth={10}
        >
          <div style={{ fontSize: 12, marginTop: 53, color: "white" }}>
            <h1 className="font-bold  text-[8px] md:text-sm">{techname}</h1>
          </div>
        </CircularProgressbarWithChildren>
      </motion.div>
    </>
  );
};

export default SkillProgressInd;
