import React from "react";
import Home from "./pages/Home";
import Canvas from "./canvas/index";
import Customizer from "./pages/Customizer";

const App = () => {
  return (
    <main className="relative w-full h-screen overflow-hidden transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
};

export default App;
