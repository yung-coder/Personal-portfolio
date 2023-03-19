"use client";

import React, { useRef, useState } from "react";
import "./contact.css";
import PhoneCanvas from "./Phone";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  slideIn,
  staggerContainer,
  fadeIn,
  navVariants,
} from "../utils/motion";
import { TypingText } from "./CustomText";
import { styles } from "../src/app/style";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_ed7a0i9",
        "template_raoy7ye",
        {
          from_name: form.name,
          to_name: "Saksham Chandel",
          from_email: form.email,
          to_email: "chandel.sanjeev5@gmail.com",
          message: form.message,
        },
        "mW7tMDSy2F8rUY1Ig"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="min-h-[100vh] w-screen background-contact flex flex-col justify-center items-center ">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className=" flex w-full justify-center  items-center"
      >
        <TypingText
          title="Contact"
          textStyles={`text-white ${styles.heroHeadText} drop-shadow-lg `}
        />
      </motion.div>
      <div className="flex  flex-col md:flex-row w-full justify-center items-center">
        <div className="w-1/2  p-5 flex justify-center items-center">
          <motion.div
            className="p-4 flex flex-col space-y-6 bg-[#151030] bg-opacity-25 backdrop-blur-lg rounded drop-shadow-lg w-fit"
            variants={fadeIn("down", "spring", 1.3 * 0.5, 1)}
            initial="hidden"
            whileInView="show"
          >
            <div className="flex flex-col space-y-2">
              <h1 className="text-gray-400 text-sm">GET IN TOUCH</h1>
              <h2 className="text-white text-2xl">Contact</h2>
            </div>
            <form
              action=""
              className="flex flex-col space-y-3"
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  class="block mb-2 text-sm font-medium text-white bg-[#151030]  rounded-md p-1"
                  placeholder="Enter you name"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Email</span>
                <input
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  class="block mb-2 text-sm font-medium text-white bg-[#151030] rounded-md p-1"
                  placeholder="Enter you email"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  Your Message
                </span>
                <textarea
                  style={{ resize: "none" }}
                  name="message"
                  id=""
                  cols="30"
                  rows="7"
                  value={form.message}
                  onChange={handleChange}
                  className="bg-[#151030] text-white"
                ></textarea>
              </label>

              <button
                type="submit"
                className="bg-red-500 py-2 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md "
              >
                Send
              </button>
            </form>
          </motion.div>
        </div>
        <motion.div
          className="w-1/2   h-screen"
          variants={slideIn("left", "spring", 1 * 0.5, 1)}
          initial="hidden"
          whileInView="show"
        >
          <PhoneCanvas />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
