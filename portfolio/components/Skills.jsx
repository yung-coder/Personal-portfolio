"use client";

import React from "react";
import { skills } from "../utils/Constants";
import SkillProgressInd from "./SkillProgressInd";
import "./skills.css";

const Skills = () => {
  const percentage = 66;
  return (
    <div className="w-screen h-screen background-skills flex justify-between items-center border p-1">
      <div className="flex  flex-wrap border p-7">
        {skills.map((skill) => (
          <SkillProgressInd  techname={skill.name}/>
        ))}
      </div>
    </div>
  );
};

export default Skills;
