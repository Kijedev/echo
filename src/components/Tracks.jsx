import React from "react";
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
    <section className="relative w-full py-20 px-6 md:px-12 bg-linear-to-b from-[#0A0C10] via-pink-600/30 to-[#0A0C10] overflow-hidden">
      <div className="flex flex-col justify-center items-center lg:gap-8 gap-4 text-center px-4 sm:px-8 lg:px-32 pb-12 relative z-10">
        <h1 className="font-extrabold lg:leading-22 leading-8 text-[2rem] lg:text-[6rem] bg-linear-to-b from-[#FFFFFF] to-[#8F9092] bg-clip-text text-transparent">
          The Hottest Tracks of the Week: Only on Echo
        </h1>
        <p className="text-[#8F9092] max-w-xl text-lg leading-8">
          Say goodbye to interruptions and enjoy uninterrupted music streaming.
          With our ad-free platform, you’ll have access to millions of songs
        </p>
      </div>
      {/* <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[800px] h-[300px] bg-pink-600/30 blur-[180px]"></div>
      </div> */}

      <div className="relative z-10 max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-20 gap-10 lg:mt-20">
        {songs.map((song, i) => (
          <div
            key={i}
            className={`cursor-pointer bg-linear-to-b from-white/10 to-transparent border border-white/5 p-6 rounded-3xl shadow-xl backdrop-blur-xl flex flex-col items-center hover:-translate-y-6 transition ${
              song.id === 2 ? "lg:-translate-y-16" : ""
            }`}
          >
            {/* Image with Play button */}
            <div className="relative w-full rounded-2xl overflow-hidden mb-6">
              <img
                src={song.img}
                alt={song.title}
                className="w-full h-60 object-cover rounded-2xl"
              />
              {/* Play Button */}
              <button className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
                  <FaPlay />
                </div>
              </button>
            </div>

            {/* Text Info */}
            <div className="w-full">
              <h2 className="text-white text-xl font-extrabold">
                {song.title}
              </h2>
              <p className="text-[#777] text-sm mt-1">{song.artist}</p>

              <div className="flex items-center gap-2 mt-4 text-[#777] text-sm">
                <span className="text-lg">🎧</span>
                <span>{song.listens} Listens</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tracks;
