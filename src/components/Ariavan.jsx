import React from "react";
import { motion } from "framer-motion";
import Woman from "../Img/woman.png";
import { FaPlay } from "react-icons/fa";
import Image1 from "../Img/image1.png";
import Image2 from "../Img/image2.png";
import Image3 from "../Img/image3.png";
import Image4 from "../Img/image4.png";
import Image5 from "../Img/image5.png";
import Image6 from "../Img/image6.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const Ariavan = () => {
  return (
    <section
      className="relative w-full min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 bg-linear-to-b from-[#0A0C10] to-transparent overflow-hidden flex items-center py-12 sm:py-16 lg:py-[23%]"
      id="Artists"
    >
      {/* Background blur */}
      <div className="hidden lg:block bg-[#0A0C10] w-[400px] h-[500px] relative top-0 blur-[200px]"></div>
      <div className="absolute top-72 left-0 w-[600px] h-[600px] bg-[#801F60] blur-[140px] rounded-full"></div>
      <div className="absolute bottom-72 right-0 w-[700px] h-[700px] bg-blue-600/40 blur-[140px] rounded-full"></div>

      <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-3 items-center w-full max-w-[1400px] mx-auto gap-8 lg:gap-0">
        {/* LEFT: Artist Text */}
        <motion.div
          className="text-white space-y-4 sm:space-y-6 text-center lg:text-left lg:absolute lg:left-[-20%] lg:z-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[6rem] font-extrabold leading-tight lg:leading-20 lg:max-w-lg">
            Aria Van Rose
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-md leading-relaxed mx-auto lg:mx-0">
            Aria Van Rose is a rising star in the music industry captivating
            audiences with her powerful vocals and emotive performances.
          </p>
        </motion.div>

        {/* CENTER: Artist Image */}
        <motion.div
          className="w-full hidden lg:flex justify-center lg:absolute lg:left-[-15%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="w-[250px] sm:w-[320px] md:w-[400px] lg:w-[550px] h-auto rounded-2xl overflow-hidden bg-linear-to-b from-gray-800 via-transparent to-transparent backdrop-blur-xl border border-white/20">
            <img
              src={Woman}
              alt="Aria Van Rose"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT: Song List Card */}
        <motion.div
          className="bg-white/5 p-4 sm:p-6 rounded-2xl backdrop-blur-xl border border-white/20 shadow-xl w-full max-w-md mx-auto lg:absolute lg:right-[10%] lg:max-w-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-white font-semibold text-base sm:text-lg">
              Latest Songs
            </h3>
            <button className="text-slate-400 text-xs sm:text-sm hover:text-cyan-400">
              View all
            </button>
          </div>

          {/* Song List */}
          <div className="space-y-4 sm:space-y-6">
            {[
              { title: "Echoes Of Yesterday", img: Image1, time: "2:56" },
              { title: "Chasing Dreams", img: Image2, time: "3:49" },
              { title: "The Sound Of Silence", img: Image3, time: "4:02" },
              { title: "Love In The Dark", img: Image4, time: "3:54" },
              { title: "Shadows Of The Past", img: Image5, time: "3:56" },
              { title: "Broken Promises", img: Image6, time: "3:33" },
            ].map((song, idx) => (
              <motion.div
                key={idx}
                className="flex items-center justify-between"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
              >
                <div className="flex items-center gap-2 sm:gap-4 flex-1">
                  <img
                    src={song.img}
                    className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg object-cover shrink-0"
                    alt=""
                  />
                  <div className="min-w-0">
                    <p className="text-white font-medium text-sm sm:text-base truncate">
                      {song.title}
                    </p>
                    <p className="text-slate-400 text-xs sm:text-sm">
                      Aria Van Rose
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-2">
                  <span className="text-slate-400 text-xs sm:text-sm whitespace-nowrap">
                    {song.time}
                  </span>
                  <button className="w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-white flex items-center justify-center hover:scale-110 transition shrink-0">
                    <FaPlay className="text-xs sm:text-sm" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Ariavan;
