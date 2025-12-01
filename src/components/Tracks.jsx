"use client";
import React from "react";
import { motion } from "framer-motion";
import Track1 from "../Img/Track1.png";
import Track2 from "../Img/Track2.png";
import Track3 from "../Img/Track3.png";
import { FaPlay } from "react-icons/fa";

const Tracks = () => {
  const songs = [
    {
      id: 1,
      title: "Sense",
      artist: "Mark Band",
      listens: "139K",
      img: Track1,
    },
    {
      id: 2,
      title: "Feel The Beats",
      artist: "Aurora Diane",
      listens: "321K",
      img: Track2,
    },
    {
      id: 3,
      title: "The Trance",
      artist: "Rita Mam Tina",
      listens: "144K",
      img: Track3,
    },
  ];

  return (
    <section
      className="relative w-full py-20 px-6 md:px-12 bg-linear-to-b from-[#0A0C10] via-pink-600/30 to-[#0A0C10] overflow-hidden"
      id="Tracks"
    >
      <motion.div
        className="flex flex-col justify-center items-center lg:gap-8 gap-4 text-center px-4 sm:px-8 lg:px-32 pb-12 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="font-extrabold lg:leading-22 leading-8 text-[2rem] lg:text-[6rem] bg-linear-to-b from-[#FFFFFF] to-[#8F9092] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          The Hottest Tracks of the Week: Only on Echo
        </motion.h1>

        <motion.p
          className="text-[#8F9092] max-w-xl text-lg leading-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Say goodbye to interruptions and enjoy uninterrupted music streaming.
          With our ad-free platform, you’ll have access to millions of songs
        </motion.p>
      </motion.div>

      {/* ==================== GRID WITH STAGGERED CARD ANIMATION ==================== */}
      <motion.div
        className="relative z-10 max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-20 gap-10 lg:mt-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2, // each card animates smoothly after the previous
            },
          },
        }}
      >
        {songs.map((song) => (
          <motion.div
            key={song.id}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
            className={`cursor-pointer bg-linear-to-b from-white/10 to-transparent border border-white/5 p-6 rounded-3xl shadow-xl backdrop-blur-xl flex flex-col items-center hover:-translate-y-6 duration-500 ease-in-out transition ${
              song.id === 2 ? "lg:-translate-y-16" : ""
            }`}
          >
            {/* ==================== IMAGE ANIMATION ==================== */}
            <motion.div
              className="relative w-full rounded-2xl overflow-hidden mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={song.img}
                alt={song.title}
                className="w-full h-60 object-cover rounded-2xl"
              />

              {/* Play Button */}
              <motion.button
                whileHover={{ scale: 1.15 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transition">
                  <FaPlay />
                </div>
              </motion.button>
            </motion.div>

            {/* ==================== TEXT ANIMATION ==================== */}
            <motion.div
              className="w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-white text-xl font-extrabold">
                {song.title}
              </h2>
              <p className="text-[#777] text-sm mt-1">{song.artist}</p>

              <motion.div
                className="flex items-center gap-2 mt-4 text-[#777] text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="text-lg">🎧</span>
                <span>{song.listens} Listens</span>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Tracks;
