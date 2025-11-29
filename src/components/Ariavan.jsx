import React from "react";
import Woman from "../Img/woman.svg";
import { FaPlay } from "react-icons/fa";
import Image1 from "../Img/image1.png";
import Image2 from "../Img/image2.png";
import Image3 from "../Img/image3.png";
import Image4 from "../Img/image4.png";
import Image5 from "../Img/image5.png";
import Image6 from "../Img/image6.png";

const Ariavan = () => {
  return (
    <section className="relative w-full min-h-screen px-6 md:px-12 bg-linear-to-b from-[#0A0C10] to-transparent overflow-hidden flex items-center py-[25%]">
      <div className="bg-[#0A0C10] w-[400px] h-[500px] relative top-0 blur-[200px]"></div>
      {/* ===== Background Gradient Blobs ===== */}
      <div className="absolute top-72 left-0 w-[600px] h-[600px] bg-[#801F60] blur-[140px] rounded-full"></div>
      <div className="absolute bottom-72 right-0 w-[700px] h-[700px] bg-blue-600/40 blur-[140px] rounded-full"></div>

      {/* ===== Main Content Row ===== */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 items-center w-full max-w-[1400px] mx-auto">
        {/* ---------- LEFT: Artist Text ---------- */}
        <div className="text-white space-y-6 absolute z-50 left-[-20%]">
          <h1 className="text-5xl md:text-[6rem] font-extrabold leading-20">
            Aria Van <br /> Rose
          </h1>

          <p className="text-slate-300 max-w-md leading-relaxed">
            Aria Van Rose is a rising star in the music industry captivating
            audiences with her powerful vocals and emotive performances.
          </p>
        </div>

        {/* ---------- CENTER: Artist Image ---------- */}
        <div className="absolute left-[10%] flex justify-center">
          <div
            className="w-[300px] md:w-[420px] lg:w-[550px] rounded-2xl overflow-hidden bg-linear-to-b from-gray-800 via-transparent
           to-transparent backdrop-blur-xl border border-white/20"
          >
            <img
              src={Woman}
              alt="Aria Van Rose"
              className="w-full h-full object-cover img-fade-bottom"
            />
          </div>
        </div>

        {/* ---------- RIGHT: Song List Card ---------- */}
        <div className="absolute right-[10%] bg-white/5 p-6 rounded-2xl backdrop-blur-xl border border-white/20 shadow-xl w-full max-w-md mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-white font-semibold text-lg">Latest Songs</h3>
            <button className="text-slate-400 text-sm hover:text-cyan-400">
              View all
            </button>
          </div>

          {/* Song List */}
          <div className="space-y-6">
            {[
              { title: "Echoes Of Yesterday", img: Image1, time: "2:56" },
              { title: "Chasing Dreams", img: Image2, time: "3:49" },
              { title: "The Sound Of Silence", img: Image3, time: "4:02" },
              { title: "Love In The Dark", img: Image4, time: "3:54" },
              { title: "Shadows Of The Past", img: Image5, time: "3:56" },
              { title: "Broken Promises", img: Image6, time: "3:33" },
            ].map((song, idx) => (
              <div key={idx} className="flex items-center justify-between">
                {/* Song Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={song.img}
                    className="w-12 h-12 rounded-lg object-cover"
                    alt=""
                  />
                  <div>
                    <p className="text-white font-medium">{song.title}</p>
                    <p className="text-slate-400 text-sm">Aria Van Rose</p>
                  </div>
                </div>

                {/* Duration + Play Button */}
                <div className="flex items-center gap-3">
                  <span className="text-slate-400 text-sm">{song.time}</span>
                  <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:scale-110 transition">
                    <FaPlay className="text-sm" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ariavan;
