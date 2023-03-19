"use client";

import React from "react";
import "./contact.css";
import PhoneCanvas from "./Phone";

const Contact = () => {
  return (
    <div className="h-screen w-screen background-contact flex justify-center items-center ">
      <div className="w-1/2 flex justify-center items-center h-screen">
        <div className="p-5 flex flex-col space-y-6 bg-[#151030] bg-opacity-25 backdrop-blur-lg rounded drop-shadow-lg w-fit ">
          <div className="flex flex-col space-y-2">
            <h1 className="text-gray-400 text-sm">GET IN TOUCH</h1>
            <h2 className="text-white text-2xl">Contact</h2>
          </div>
          <form action="" className="flex flex-col space-y-3">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                class="block mb-2 text-sm font-medium text-white bg-[#151030]  rounded-md p-1 "
                placeholder="Enter you name"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="text"
                class="block mb-2 text-sm font-medium text-white bg-[#151030] rounded-md p-1"
                placeholder="Enter you email"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="bg-[#151030] text-white"
              ></textarea>
            </label>
          </form>
        </div>
      </div>
      <div className="w-1/2 h-screen cursor-pointer">
        <PhoneCanvas />
      </div>
    </div>
  );
};

export default Contact;
