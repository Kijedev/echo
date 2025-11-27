import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Ariavan from "./components/Ariavan";

const App = () => {
  return (
    <div className="bg-[#0A0C10]">
      <Navbar />
      <Ariavan />
      <Footer />
    </div>
  );
};

export default App;
