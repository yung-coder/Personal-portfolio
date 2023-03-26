"use client";

import React, { useState } from "react";

import { motion } from "framer-motion";

import { navVariants } from "../utils/motion";



const Navbar = () => {
  const [toogle, setoogle] = useState(false);
  return (
    <motion.nav
      className="  text-white flex items-center   w-full p-5 "
      variants={navVariants}
      initial="hidden"
      whileInView="show"
    >
      <div className="flex w-full  justify-between items-center mx-auto p-3">
        <div className="flex flex-col ">
          <h1 className="text-xl text-amber-300 font-bold italic  tracking-wider">
            Saksham
          </h1>
          <h2 className="text-amber-300 text-xs">the developer</h2>
        </div>
        <div className="">
          <ul className="hidden md:flex  cursor-pointer  font-bold  justify-center items-center space-x-4">
            <li className=" tracking-wide text-gray-400 hover:text-white">
              <a href="#About">About</a>
            </li>
            <li className=" tracking-wide text-gray-400 hover:text-white">
              <a href="#skills">Skills</a>
            </li>
            <li className=" tracking-wide text-gray-400 hover:text-white">
              <a href="#Project">Portfolio</a>
            </li>
            <li className=" tracking-wide text-gray-400 hover:text-white">
              <a href="#Contact">Contact</a>
            </li>
          </ul>
          <div className="block md:hidden">
            {!toogle ? (
              <>
                <svg
                  onClick={() => setoogle(true)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </>
            ) : (
              <>
                <svg
                  onClick={() => setoogle(false)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </>
            )}
            <div
              className={`${
                !toogle ? "hidden" : "flex"
              } p-6  backdrop-blur-3xl absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-transparent`}
            >
              <ul className="flex  flex-col justify-center space-y-5 p-0.5">
                <li className="cursor-pointer">
                  <a href="#About">About</a>
                </li>
                <li className="cursor-pointer">
                  <a href="#skills">Skills</a>
                </li>
                <li className="cursor-pointer">
                  <a href="#Project">Portfolio</a>
                </li>
                <li className="cursor-pointer">
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
