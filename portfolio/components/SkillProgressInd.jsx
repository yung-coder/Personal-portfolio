import React from "react";
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import RadialSeparators from "./Seprators";

const SkillProgressInd = ({ techname, progress }) => {
  return (
    <>
      <div style={{ width: 180, height: 180, margin: "31px" }}>
        <CircularProgressbarWithChildren
          value={progress}
          text={`${progress}%`}
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

          <div style={{ fontSize: 12, marginTop: 53, color: "white" }}>
            <h1 className="font-bold text-sm">{techname}</h1>
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </>
  );
};

export default SkillProgressInd;
