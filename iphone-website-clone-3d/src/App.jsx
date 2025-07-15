import React from "react";
import Gsap from "./GSAP/GSAP";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/HIghlights";

const App = () => {
  return (
    <main className="bg-black">
      {/* <Gsap /> */}
      <Navbar />
      <Hero />
      <Highlights />
    </main>
  );
};

export default App;
