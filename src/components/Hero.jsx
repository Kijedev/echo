"use client";
import React from "react";
import { motion } from "framer-motion";
import HeroImage from "../img/heroimg.png";
import SpinBg from "../img/spin.png";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative w-full bg-[#0A0C10] text-white overflow-hidden"
    >
      {/* PAGE CONTENT */}
      <div className="relative z-10 px-4 sm:px-8 lg:px-32 py-12 flex flex-col lg:flex-row lg:justify-center items-center justify-between gap-8 lg:gap-0">

        {/* TEXT SECTION */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full">
          <h1 className="text-5xl max-w-full sm:text-6xl lg:text-[5rem] font-extrabold bg-linear-to-b from-[#FFFFFF] to-[#8F9092] bg-clip-text text-transparent">
            Music Without Limits
          </h1>

          <p className="mt-6 text-gray-300 text-sm sm:text-base max-w-md lg:max-w-lg">
            Say goodbye to interruptions and enjoy uninterrupted music streaming.
            With our ad-free platform, you'll have access to millions of songs.
          </p>

          <button className="mt-8 px-6 sm:px-8 py-2 sm:py-3 bg-pink-600 hover:bg-pink-700 rounded-lg font-semibold transition text-sm sm:text-base">
            Sign Up
          </button>
        </div>

        {/* IMAGE SECTION */}
        <div className="relative w-full flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] lg:w-full lg:h-full opacity-70 animate-spin-slow">
              <img src={SpinBg} alt="spinning gradient" className="w-full h-full object-cover" />
            </div>
          </div>

          <div>
            <img
              src={HeroImage}
              alt="Hero"
              className="img-fade-bottom relative z-100 w-[300px] lg:w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
