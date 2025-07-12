import { Canvas } from "@react-three/fiber";
import { workExperiences } from "../../utils/index.js";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useState } from "react";
import CanvasLoader from "../Components/CanvasLoader.jsx";
import Developer from "./Developer.jsx";

const Experience = () => {
  const [animationName, setAnimationName] = useState("idle");

  return (
    <section className="sm:px-10 px-5 my-20">
      <div className="w-full text-[#AFB0B6]">
        <h3 className="sm:text-4xl text-3xl font-semibold bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent">
          My Work
        </h3>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-12">
          <div className="col-span-1 rounded-lg bg-[#0E0E10] border border-[#1C1C21]">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={<CanvasLoader />}>
                <Developer
                  position-y={-3}
                  scale={3}
                  animationName={animationName}
                />
              </Suspense>
            </Canvas>
          </div>

          <div className="col-span-2 rounded-lg bg-[#0E0E10] border border-[#1C1C21">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map(
                ({ id, name, pos, duration, title, animation, icon }) => {
                  return (
                    <div
                      key={id}
                      className="grid grid-cols-[auto_1fr] items-start gap-5  transition-all ease-in-out duration-500 cursor-pointer hover:bg-[#1C1C21] rounded-lg sm:px-5 px-2.5 group"
                      onClick={() => setAnimationName(animation.toLowerCase())}
                      onPointerOver={() =>
                        setAnimationName(animation.toLowerCase())
                      }
                      onPointerOut={() => setAnimationName("idle")}
                    >
                      <div className="flex flex-col h-full justify-start items-center py-2">
                        <div className="rounded-3xl w-16 h-16 p-2 bg-[#1A1A1A">
                          <img
                            src={icon}
                            alt="logo"
                            className="w-full h-full"
                          />
                        </div>

                        <div className="flex-1 w-0.5 mt-4 h-full bg-[#1C1C21] group-hover:bg-[#3A3A49] group-last:hidden" />
                      </div>

                      <div className="sm:p-5 px-2.5 py-5">
                        <p className="font-bold text-[#62646C]">{name}</p>
                        <p className="text-sm mb-5">
                          {pos} -- {duration}
                        </p>

                        <p className="group-hover:text-white transition ease-in-out duration-500">
                          {title}
                        </p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
