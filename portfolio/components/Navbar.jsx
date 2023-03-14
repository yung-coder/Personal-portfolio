"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [toogle, setoogle] = useState(false);
  return (
    <nav className="bg-black text-white flex items-center fixed w-full p-1 ">
      <div className="flex w-full  justify-between mx-auto p-3">
        <div className="">
          <h1>Saksham | Developer</h1>
        </div>
        <div className="">
          <ul className="hidden md:flex  justify-center items-center space-x-4">
            <li>About</li>
            <li>Work </li>
            <li>Contact</li>
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
                  className="w-6 h-6"
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
                  className="w-6 h-6"
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
              } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="flex  flex-col justify-center space-y-5 p-0.5">
                <li>About</li>
                <li>Work </li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
