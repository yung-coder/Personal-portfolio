import React from "react";
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import RadialSeparators from "../utils/Seprators";
import { motion, Variants } from "framer-motion";

const SkillProgressInd = ({ techname, progress }) => {
  return (
    <>
      {/* <motion.div whileHover={{ scale: 1.2 }} > */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        style={{ width: 170, height: 170, margin: "31px", cursor: "pointer" }}
      >
        <CircularProgressbarWithChildren
          value={progress}
          text={`${progress}%`}
          strokeWidth={10}
          styles={buildStyles({
            strokeLinecap: "butt",
            pathTransition: "none",
            pathColor: "#915EFF",
          })}
        >
          <RadialSeparators
            count={12}
            style={{
              background: "#fff",
              width: "2px",
              // This needs to be equal to props.strokeWidth
              height: `${10}%`,
            }}
          />

          <div style={{ fontSize: 12, marginTop: 53, color: "white" }}>
            <h1 className="font-bold text-sm">{techname}</h1>
          </div>
        </CircularProgressbarWithChildren>
      </motion.div>
      {/* </motion.div> */}
    </>
  );
};

export default SkillProgressInd;
