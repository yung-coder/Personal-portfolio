"use client";

import React, { useRef, useState } from "react";
import "../custom-css/contact.css";
import PhoneCanvas from "../components/models/Phone";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  slideIn,
  staggerContainer,
  fadeIn,
  navVariants,
  sectionVariants,
} from "../utils/motion";
import { TypingText } from "../components/CustomText";
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
          toast.success(
            "Thank you. I will get back to you as soon as possible.",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            }
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error("Sorry, Please wait and try again", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section className="min-h-[100vh] w-full background-contact flex flex-col justify-center items-center" id="Contact">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className=" flex w-full justify-center  items-center"
      >
        <motion.div
          className=" w-full flex justify-center items-center  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-t border-gray-100"
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
        >
          <TypingText
            title="Contact"
            textStyles={`text-white ${styles.heroHeadText} drop-shadow-lg `}
          />
        </motion.div>
      </motion.div>
      <div className="flex  flex-col md:flex-row w-full justify-center items-center">
        <div className="w-1/2  p-5 flex justify-center items-center">
          <motion.div
            className="p-4 flex flex-col space-y-6 bg-[#151030] bg-opacity-25 backdrop-blur-lg rounded drop-shadow-lg w-80"
            variants={fadeIn("down", "spring", 2 * 0.5, 1)}
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
                  className="block mb-2 text-sm font-medium text-white bg-[#151030]  rounded-md p-1"
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
                  className="block mb-2 text-sm font-medium text-white bg-[#151030] rounded-md p-1"
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
        <motion.a
          className="w-1/2   h-screen   flex flex-col justify-center space-y-4 items-center"
          variants={slideIn("left", "spring", 1 * 0.5, 1)}
          initial="hidden"
          href="tel:7807717169"
          whileInView="show"
        >
          <div className="animate-pulse flex justify-center items-center flex-col mt-5 ">
            <h1 className="text-white">TAP TO CALL</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="call-animation h-72 w-72 backdrop-blur-md">
            <PhoneCanvas />
          </div>
        </motion.a>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <motion.div
        className="w-full h-fit flex justify-end items-end p-3"
        variants={fadeIn("up", "tween", 0.2, 1)}
      >
        <a href="#home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 text-white bg-[#151030] rounded-lg p-2 animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
