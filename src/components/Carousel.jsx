"use client";

import React from "react";
import { motion } from "framer-motion";
import { Carousel, Card } from "../components/ui/apple-cards-carousel";
import MusicCover1 from "../Img/MusicCover1.svg";
import MusicCover2 from "../Img/MusicCover2.svg";
import MusicCover3 from "../Img/MusicCover3.svg";
import MusicCover4 from "../Img/MusicCover4.svg";
import MusicCover5 from "../Img/MusicCover5.jpeg";
import MusicCover6 from "../Img/MusicCover6.jpeg";

const AppleCardsCarouselDemo = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <motion.div
      className="w-full h-full py-10"
      id="Explore"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col gap-5 lg:pl-32 px-5">
        <h1 className="lg:text-[5rem] text-[2rem] lg:leading-20 leading-10 font-extrabold bg-linear-to-b from-[#FFFFFF] to-[#8F9092] bg-clip-text text-transparent">
          Explore Endless <br /> Music Libraries
        </h1>
        <p className="text-[#7D7E80] max-w-2xl">
          Say goodbye to interruptions and enjoy uninterrupted music streaming.
          With our ad-free platform, you’ll have access to millions of songs
        </p>
      </div>
      <Carousel items={cards} />
    </motion.div>
  );
};

const DummyContent = ({ title, category, description, image }) => {
  // Render a content panel tailored to the clicked card
  return (
    <div className="bg-[#F5F5F7] dark:bg-black/50 p-6 md:p-14 rounded-3xl mb-4">
      <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
        {title} <span className="text-sm text-gray-500">• {category}</span>
      </h2>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-sans max-w-3xl mx-auto mb-6">
        {description}
      </p>

      {image && (
        <img
          src={image}
          alt={`${title} visual`}
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      )}
    </div>
  );
};

const data = [
  {
    category: "312 Songs",
    title: "Hip Hop.",
    src: MusicCover1,
    content: (
      <DummyContent
        title="Hip Hop Essentials"
        category="312 Songs"
        description={
          "A deep dive into iconic beats and lyricism — curated for hip hop heads. Explore classic albums, exclusive interviews, and fresh playlists to keep your head nodding."
        }
        image={MusicCover1}
      />
    ),
  },
  {
    category: "814 Songs",
    title: "Soul.",
    src: MusicCover2,
    content: (
      <DummyContent
        title="Soul Vibes"
        category="814 Songs"
        description={
          "Smooth vocals and warm instrumentation — perfect for relaxed evenings. Discover hidden gems and essential soul records from across the decades."
        }
        image={MusicCover2}
      />
    ),
  },
  {
    category: "375 Songs",
    title: "Summer Hits",
    src: MusicCover3,
    content: (
      <DummyContent
        title="Summer Hits"
        category="375 Songs"
        description={
          "Sun-soaked anthems and beach-ready bangers to make every day feel like a vacation. Curated for pool parties and road trips."
        }
        image={MusicCover3}
      />
    ),
  },

  {
    category: "731 Songs",
    title: "R&B.",
    src: MusicCover4,
    content: (
      <DummyContent
        title="R&B Classics"
        category="731 Songs"
        description={
          "Soulful melodies and timeless grooves — from slow jams to contemporary R&B. Handpicked tracks for romance and late-night drives."
        }
        image={MusicCover4}
      />
    ),
  },
  {
    category: "492 Songs",
    title: "AfroBeats.",
    src: MusicCover5,
    content: (
      <DummyContent
        title="AfroBeats Pulse"
        category="492 Songs"
        description={
          "High-energy rhythms and vibrant melodies from across Africa. Dancefloor-ready tracks and rising stars you need to hear."
        }
        image={MusicCover5}
      />
    ),
  },
  {
    category: "240 Songs",
    title: "Amapiano",
    src: MusicCover6,
    content: (
      <DummyContent
        title="Amapiano Grooves"
        category="240 Songs"
        description={
          "Amapiano's signature log-drum patterns and chilled atmospheres — the freshest cuts and essential classics."
        }
        image={MusicCover6}
      />
    ),
  },
];

export default AppleCardsCarouselDemo;
