import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Trending from "./components/Trending";
import Ariavan from "./components/Ariavan";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="bg-[#0A0C10]">
      <Navbar />
      <Hero />
      <Trending />
      <Ariavan />
      <Footer />
    </div>
  );
};

export default App;
