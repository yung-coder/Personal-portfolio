"use client";

import React from "react";
import { skills } from "../utils/Constants";
import SkillProgressInd from "./SkillProgressInd";
import "./skills.css";

const Skills = () => {
  const percentage = 66;
  return (
    <div className="w-screen h-screen  background-skills flex justify-between items-center border p-1">
      <div className="flex  w-fit  max-h-screen flex-wrap border justify-center items-center   overflow-y-scroll p-10">
        {skills.map((skill) => (
          <SkillProgressInd techname={skill.name} progress={skill.progress} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
