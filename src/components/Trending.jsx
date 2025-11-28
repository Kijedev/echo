"use client";
import Artist1 from "../Img/Artist 1.svg";
import Artist2 from "../Img/Artist 2.svg";
import Artist3 from "../Img/Artist 3.svg";
import Artist4 from "../Img/Artist 4.svg";
import Artist5 from "../Img/Artist 5.svg";

export default function Home() {
  const artists = [
    {
      id: 1,
      name: "Luna Blaze",
      songs: 16,
      image: Artist1,
    },
    {
      id: 2,
      name: "Esther D",
      songs: 32,
      image: Artist2,
    },
    {
      id: 3,
      name: "Scarlet Rose",
      songs: 26,
      image: Artist3,
    },
    {
      id: 4,
      name: "Noah West",
      songs: 23,
      image: Artist4,
    },
    {
      id: 5,
      name: "Nova Star",
      songs: 11,
      image: Artist5,
    },
  ];

  return (
    <main className="min-h-screen bg-linear-to-b from-[#0A0C10] via-[#0A0C10] to-[#162D4C]">
      <div className="px-56 mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-[6rem] font-bold bg-linear-to-b from-[#FFFFFF] to-[#8F9092] bg-clip-text text-transparent mb-4">
            Trending Artists
          </h1>
          <p className="text-[#7D7E80] text-lg leading-relaxed max-w-1xl mx-auto">
            Discover the hottest and most popular artists in the industry today.
            Keep your music library fresh and up-to-date with our curated
            selection of trending musicians, bands, and singers. From emerging
            talents to established stars, we've got you covered.
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-5 gap-8 mb-12 lg:mt-48">
          {artists.map((artist) => (
            <div
              key={artist.id}
              className={`group cursor-pointer transition-all ease-in-out duration-1s hover:scale-110 bg-linear-to-b from-[#0A0C10] to-transparent rounded-2xl p-4 border border-gray-800 ${
                artist.id === 1 || artist.id === 3 || artist.id === 5
                  ? "-translate-y-20"
                  : ""
              }`}
            >
              {/* Artist Image */}
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src={artist.image || "/placeholder.svg"}
                  alt={artist.name}
                  className="object-contain transition-transform"
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
            </div>
          ))}
        </div>

        {/* See All Button */}
        <div className="flex justify-center pb-20">
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            See All (382)
          </button>
        </div>
      </div>
    </main>
  );
}
