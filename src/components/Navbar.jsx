import React, { useState } from "react";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../Img/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Animation variants
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <>
      {/* FIXED NAVBAR */}
      <header className="fixed top-0 left-0 right-0 w-full flex justify-center pt-4 z-50">
        <nav className="w-[90%] flex items-center justify-between px-6 rounded-2xl bg-white/5 border border-white/20 backdrop-blur-xl">
          {/* Logo */}
          <div>
            <a href="#Home">
              <img src={Logo} alt="Logo" className="w-32" />
            </a>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 text-gray-300">
            <li className="hover:text-white transition cursor-pointer">
              <a href="#Home">Home</a>
            </li>
            <li className="hover:text-white transition cursor-pointer">
              <a href="#Tracks">New arrivals</a>
            </li>
            <li className="hover:text-white transition cursor-pointer">
              <a href="#Explore">Explore</a>
            </li>
            <li className="hover:text-white transition cursor-pointer">
              <a href="#Trending">Trending</a>
            </li>
            <li className="hover:text-white transition cursor-pointer">
              <a href="#Artists">Artists</a>
            </li>
          </ul>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-gray-300 hover:text-white transition">
              Log in
            </button>
            <button className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition">
              Sign Up
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <XIcon size={26} /> : <MenuIcon size={26} />}
          </button>
        </nav>
      </header>

      {/* MOBILE DROPDOWN */}
      <div className="fixed top-[90px] left-0 right-0 w-full flex justify-center z-40 md:hidden">
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              className="w-[90%] max-w-5xl mt-5 bg-white/10 border border-white/20 backdrop-blur-xl rounded-xl px-6 py-4 text-gray-200 space-y-4"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              <ul className="flex flex-col gap-4 mb-4">
                <li className="hover:text-white transition cursor-pointer">
                  <a href="#Home">Home</a>
                </li>
                <li className="hover:text-white transition cursor-pointer">
                  <a href="#Tracks">New arrivals</a>
                </li>
                <li className="hover:text-white transition cursor-pointer">
                  <a href="#Explore">Explore</a>
                </li>
                <li className="hover:text-white transition cursor-pointer">
                  <a href="#Trending">Trending</a>
                </li>
                <li className="hover:text-white transition cursor-pointer">
                  <a href="#Artists">Artists</a>
                </li>
              </ul>

              <hr className="border-white/10" />

              <button className="block w-full text-left hover:text-white transition">
                Log in
              </button>

              <button className="w-full text-left px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition">
                Sign Up
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Padding so content isn't hidden */}
      <div className="pt-24"></div>
    </>
  );
};

export default Navbar;
