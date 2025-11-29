import React from "react";
import Headphones from "../Img/headphones.svg";

const FooterCard = () => {
  return (
    <div className="w-full flex justify-center items-center py-6 sm:py-10 bg-linear-to-b from-[#0A0C10] to-transparent">
      <div className="bg-linear-to-b from-[#872064] via-[#441537] to-transparent relative w-[95%] sm:w-[90%] max-w-6xl rounded-lg sm:rounded-2xl lg:rounded-[30px] overflow-hidden flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 py-8 sm:py-12 lg:py-20 gap-6 sm:gap-8 lg:gap-0">
        {/* Left Text Section */}
        <div className="w-full lg:w-auto max-w-xl">
          <h1 className="bg-linear-to-b from-[#FFFFFF] to-[#BA9EB2] bg-clip-text text-transparent text-3xl sm:text-4xl lg:text-6xl font-bold leading-16">
            Do not Miss A<br />
            Beat!
          </h1>

          <p className="text-gray-300 text-sm sm:text-base lg:text-md mt-4 sm:mt-6 leading-relaxed">
            Do not miss out on the latest music news, exclusive offers and
            promotions, and new releases by signing up for our newsletter. Stay
            in the loop with the freshest music and be the first to know about
            upcoming events, artist spotlights, and more. Sign up now and never
            miss a beat.
          </p>

          {/* Email Input */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 mt-6 sm:mt-10">
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border-b border-gray-400 text-white flex-1 sm:w-72 px-0 py-2 text-sm sm:text-base focus:outline-none"
            />

            {/* Send Button */}
            <div className="relative cursor-pointer">
              <div className="absolute inset-0 rounded-full blur-xl opacity-40 bg-white"></div>
              <button className="cursor-pointer relative z-10 w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className="sm:w-5 sm:h-5"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12l14 0" />
                  <path d="M12 5l7 7l-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Headphone Image */}
        <div className="shrink-0 w-full sm:w-60 lg:w-[420px]">
          <img
            src={Headphones}
            alt="Headphones"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterCard;
