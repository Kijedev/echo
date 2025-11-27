import React, { useState } from "react";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* FIXED NAVBAR */}
      <header className="fixed top-0 left-0 right-0 w-full flex justify-center pt-4 z-50">
        <nav
          className="
            w-[90%] max-w-7xl
            flex items-center justify-between
            px-6 py-4 rounded-2xl
            bg-white/5 border border-white/20
            backdrop-blur-xl
          "
        >
          {/* Logo */}
          <div className="text-white text-2xl font-semibold flex items-center gap-1">
            echo<span className="text-pink-500">))</span>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 text-gray-300">
            <li className="hover:text-white transition cursor-pointer">Home</li>
            <li className="hover:text-white transition cursor-pointer">New arrivals</li>
            <li className="hover:text-white transition cursor-pointer">Trending</li>
            <li className="hover:text-white transition cursor-pointer">Artists</li>
          </ul>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-gray-300 hover:text-white transition">Log in</button>
            <button className="
              px-4 py-2 rounded-xl
              bg-white/10 border border-white/20
              text-white font-medium hover:bg-white/20 transition
            ">
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

      {/* MOBILE DROPDOWN (separate from navbar) */}
      <div className="fixed top-[76px] left-0 right-0 w-full flex justify-center z-40 md:hidden">
        {open && (
          <div
            className="
              w-[90%] max-w-5xl
              bg-white/10 border border-white/20 backdrop-blur-xl
              rounded-xl px-6 py-4
              text-gray-200 space-y-4
            "
          >
            <p className="hover:text-white transition cursor-pointer">Home</p>
            <p className="hover:text-white transition cursor-pointer">New arrivals</p>
            <p className="hover:text-white transition cursor-pointer">Trending</p>
            <p className="hover:text-white transition cursor-pointer">Artists</p>

            <hr className="border-white/10" />

            <button className="block w-full text-left hover:text-white transition">
              Log in
            </button>

            <button className="
              w-full text-left px-4 py-2 rounded-xl
              bg-white/10 border border-white/20
              text-white font-medium hover:bg-white/20 transition
            ">
              Sign Up
            </button>
          </div>
        )}
      </div>

      {/* Prevent main content from hiding behind navbar */}
      <div className="pt-24"></div>
    </>
  );
};

export default Navbar;
