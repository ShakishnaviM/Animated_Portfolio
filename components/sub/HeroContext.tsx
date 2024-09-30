"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContext = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="h-full flex flex-col-reverse md:flex-row items-center justify-center md:px-20 px-10 w-full z-[20]"
    >
      {/* Text and introduction section */}
      <div className="h-full w-full flex flex-col md:gap-5 justify-center md:m-auto m-0 text-start">
        {/* Titles Section */}
        <div className="flex flex-col md:flex-row md:gap-5 gap-2 md:mt-[160px] mt-[100px]">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#a2790d] opacity-[0.9]"
          >
            <SparklesIcon className="text-[#b48811] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px] font-bold text-[#bb9b49]">
              DevOps Engineer&nbsp;
            </h1>
          </motion.div>

          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#a2790d] opacity-[0.9]"
          >
            <SparklesIcon className="text-[#b48811] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px] font-bold">
              Software Engineer&nbsp;
            </h1>
          </motion.div>

          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#a2790d] opacity-[0.9]"
          >
            <SparklesIcon className="text-[#b48811] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px] font-bold">
              Fullstack Developer &nbsp;
            </h1>
          </motion.div>

          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#a2790d] opacity-[0.9]"
          >
            <SparklesIcon className="text-[#b48811] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px] font-bold">
              UI/UX Enthusiast&nbsp;
            </h1>
          </motion.div>
        </div>

        {/* Greeting and Introduction */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-row gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hello
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
              I am Shakishnavi
            </span>
          </span>
        </motion.div>

        {/* Intro paragraph */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm md:text-lg text-white my-5 max-w-[800px]"
        >
          Fueled by a deep interest in turning ideas into innovative software solutions, I have developed a strong foundation in fullstack projects. In the process of building software solutions during my academic and personal projects, I have demonstrated strong problem-solving skills, an ability to work collaboratively in teams, and a commitment to continuous learning.
        </motion.p>

        {/* Contact Me Button */}
        <motion.a
          variants={slideInFromLeft(1)}
          href="mailto:shaki27@gmail.com"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] bg-gradient-to-r from-yellow-500 to-orange-500"
        >
          Contact Me
        </motion.a>
      </div>

      {/* Image section (hidden on smaller screens) */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center md:mt-[160px] hidden md:flex"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContext;
