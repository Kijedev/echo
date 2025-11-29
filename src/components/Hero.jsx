import React from "react";
import HeroImage from "../img/heroimg.svg";
import SpinBg from "../img/spin.png";

const Hero = () => {
  return (
    <section className="relative w-full bg-[#0A0C10] text-white overflow-hidden">
      {/* PAGE CONTENT */}
      <div className="relative z-10 px-4 sm:px-8 lg:px-32 py-12 flex flex-col lg:flex-row lg:justify-center items-center justify-between gap-8 lg:gap-0">
        {/* TEXT SECTION */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full">
          <h1 className="text-5xl max-w-full sm:text-6xl lg:text-[5rem] font-extrabold bg-linear-to-b from-[#FFFFFF] to-[#8F9092] bg-clip-text text-transparent">
            Music Without Limits
          </h1>
          <p className="mt-6 text-gray-300 text-sm sm:text-base max-w-md lg:max-w-lg">
            Say goodbye to interruptions and enjoy uninterrupted music
            streaming. With our ad-free platform, you'll have access to millions
            of songs.
          </p>

          <button className="mt-8 px-6 sm:px-8 py-2 sm:py-3 bg-pink-600 hover:bg-pink-700 rounded-lg font-semibold transition text-sm sm:text-base">
            Sign Up
          </button>
        </div>

        <div className="relative w-full flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] lg:w-full lg:h-full opacity-70 animate-spin-slow">
              <img
                src={SpinBg}
                alt="spinning gradient"
                className="w-full h-full object-cover"
              />
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

      <div className="flex flex-col justify-center items-center lg:gap-8 gap-4 text-center px-4 sm:px-8 lg:px-32 pb-12 relative z-10">
        <h1 className="font-extrabold lg:leading-28 text-[2rem] lg:text-[6rem] bg-linear-to-b from-[#FFFFFF] to-[#8F9092] bg-clip-text text-transparent">
          The Hottest Tracks of the Week: Only on Echo
        </h1>
        <p className="text-[#8F9092] max-w-xl text-lg leading-8">
          Say goodbye to interruptions and enjoy uninterrupted music streaming.
          With our ad-free platform, you’ll have access to millions of songs
        </p>
      </div>
    </section>
  );
};

export default Hero;
