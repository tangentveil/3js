import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { animateWithGsap } from "../utils/animation";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import gsap from "gsap";

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });

    animateWithGsap("#features_title", { y: 0, opacity: 1 });

    animateWithGsap(
      ".g_grow",
      {
        scale: 1,
        opacity: 1,
        ease: "power1",
      },
      { scrub: 5.5 }
    );

    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);

  return (
    <section className="h-full sm:py-32 py-20 sm:px-10 px-5 bg-zinc relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1
            id="features_title"
            className="text-gray-500 lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20"
          >
            Explore the full story.
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">iPhone.</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">
              Forged in titanium
            </h2>
          </div>

          <div className="flex items-center justify-center flex-col sm:px-10">
            <div className="relative h-[50vh] w-full flex items-center">
              <video
                playsInline
                className="w-full h-full object-cover"
                autoPlay
                preload="none"
                muted
                ref={videoRef}
                id="exploreVideo" 
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-col w-full relative">
              <div className="w-full flex flex-col md:flex-row gap-5 items-center">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore1Img}
                    alt="titanium"
                    className="w-full h-full object-cover object-center scale-150 opacity-0 g_grow"
                  />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore2Img}
                    alt="titanium 2"
                    className="w-full h-full object-cover object-center scale-150 opacity-0 g_grow"
                  />
                </div>
              </div>

              <div className="w-full flex items-center justify-center flex-col md:flex-row mt-10 md:mt-16 gap-5">
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-gray-500 max-w-md text-lg md:text-xl font-semibold opacity-0 translate-y-[100px] g_text">
                    iPhone 15 Pro is{" "}
                    <span className="text-white">
                      the first iPhone to feature an aerospace-grade titanium
                      design
                    </span>
                    , using the same alloy that spacecraft use for missions to
                    Mars.
                  </p>
                </div>

                <div className="flex-1 flex items-center justify-center">
                  <p className="text-gray-500 max-w-md text-lg md:text-xl font-semibold opacity-0 translate-y-[100px] g_text">
                    Titanium has one of the best strength-to-weight rations of
                    any metal, making these our{" "}
                    <span className="text-white">
                      lightest Pro models ever.
                    </span>
                    You'll notice the difference the moment you pick one up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
