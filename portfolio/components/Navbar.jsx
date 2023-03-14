"use client";

import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white flex items-center fixed w-full p-1 ">
      <div className="flex w-full  justify-between mx-auto p-3">
        <div className="">
          <h1>Saksham | Developer</h1>
        </div>
        <div className="">
          <ul className="flex  justify-center items-center space-x-4">
            <li>About</li>
            <li>Work </li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
