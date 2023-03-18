import React from "react";
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import RadialSeparators from "./Seprators";

const SkillProgressInd = ({ techname }) => {
  return (
    <>
      <div style={{ width: 200, height: 200, margin: "31px" }}>
        <CircularProgressbarWithChildren
          value={80}
          text={`${80}%`}
          strokeWidth={10}
          styles={buildStyles({
            strokeLinecap: "butt",
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

          <div style={{ fontSize: 12, marginTop: 50, color: "white" }}>
            {techname}
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </>
  );
};

export default SkillProgressInd;
