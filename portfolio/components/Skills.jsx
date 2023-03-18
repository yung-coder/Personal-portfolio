"use client";

import React from "react";
import "./skills.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  const percentage = 66;
  return (
    <div className="w-screen h-screen background-skills">
      <div style={{ width: 200, height: 200 }}>
        <CircularProgressbar value={66} />
      </div>
    </div>
  );
};

export default Skills;
