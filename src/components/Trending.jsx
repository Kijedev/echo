"use client";
import { motion } from "framer-motion";
import Artist1 from "../Img/Artist 1.png";
import Artist2 from "../Img/Artist 2.png";
import Artist3 from "../Img/Artist 3.png";
import Artist4 from "../Img/Artist 4.png";
import Artist5 from "../Img/Artist 5.png";

export default function Home() {
  const artists = [
    { id: 1, name: "Luna Blaze", songs: 16, image: Artist1 },
    { id: 2, name: "Esther D", songs: 32, image: Artist2 },
    { id: 3, name: "Scarlet Rose", songs: 26, image: Artist3 },
    { id: 4, name: "Noah West", songs: 23, image: Artist4 },
    { id: 5, name: "Nova Star", songs: 11, image: Artist5 },
  ];

  return (
    <main className="min-h-screen bg-linear-to-b from-[#0A0C10] via-[#162D4C] to-[#0A0C10]">
      <div className="px-4 sm:px-6 lg:px-10">

        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[6rem] font-bold bg-linear-to-b from-white to-[#8F9092] bg-clip-text text-transparent mb-4">
            Trending Artists
          </h1>
          <p className="text-[#7D7E80] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto px-2 sm:px-0">
            Discover the hottest and most popular artists in the industry today.
            Keep your music library fresh and up-to-date with our curated
            selection of trending musicians, bands, and singers.
          </p>
        </motion.div>

        {/* Artists Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-4 lg:gap-4 mb-12 lg:mt-48"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15, // smooth stagger animation
              },
            },
          }}
        >
          {artists.map((artist) => (
            <motion.div
              key={artist.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.04, transition: { duration: 0.25 } }}
              className={`group cursor-pointer rounded-2xl p-4 sm:p-6 lg:p-8 bg-white/5 border border-white/10 backdrop-blur-2xl transition-all duration-300 ${
                artist.id === 1 || artist.id === 3 || artist.id === 5
                  ? "lg:-translate-y-16"
                  : ""
              }`}
            >
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-44 sm:h-48 lg:h-56 xl:h-64 object-contain transition-transform"
                />
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-white font-bold mb-1 text-center">
                  {artist.name}
                </h3>
                <p className="text-gray-400 text-sm text-center mb-4">
                  {artist.songs} songs
                </p>
                <button className="w-full text-white text-sm font-medium flex items-center justify-center gap-2">
                  Explore <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* See All Button */}
        <motion.div
          className="flex justify-center pb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            See All (382)
          </button>
        </motion.div>

      </div>
    </main>
  );
}
