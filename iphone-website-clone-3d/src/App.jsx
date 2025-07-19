import React from "react";
import Gsap from "./GSAP/GSAP";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/HIghlights";
import Model from "./components/Model";

import * as Sentry from "@sentry/react";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

const App = () => {
  // return <button onClick={() => {throw new Error("This is your first error!");}}>Break the world</button>;

  return (
    <main className="bg-black">
      {/* <Gsap /> */}
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
};

// export default Sentry.withProfiler(App);
export default App;
