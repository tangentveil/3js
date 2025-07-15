import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Gsap = () => {
  // useGSAP(() => {
  //   gsap.to("#box", {
  //     x: 250,
  //     repeat: -1,
  //     yoyo: true,
  //     ease: "elastic",
  //     rotation: 180,
  //     duration: 2,
  //   });
  // }, []);

  // useGSAP(() => {
  //   gsap.from("#box", {
  //     x: 250,
  //     repeat: -1,
  //     yoyo: true,
  //     ease: "power1.inOut",
  //     rotation: 180,
  //     duration: 2,
  //   });
  // }, []);

  // useGSAP(() => {
  //   gsap.fromTo(
  //     "#box",
  //     {
  //       x: 0,
  //       rotation: 0,
  //       borderRadius: "0%",
  //     },
  //     {
  //       x: 550,
  //       repeat: -1,
  //       yoyo: true,
  //       borderRadius: "100%",
  //       ease: "elastic",
  //       rotation: 180,
  //       duration: 2,
  //     }
  //   );
  // }, []);

  // const timeline = gsap.timeline({
  //   repeat: -1,
  //   repeatDelay: 1,
  //   yoyo: true,
  // });

  // useGSAP(() => {
  //   timeline.to("#box", {
  //     x: 250,
  //     rotation: 360,
  //     borderRadius: "100%",
  //     duration: 2,
  //     ease: "back.inOut",
  //   });

  //   timeline.to("#box", {
  //     y: 250,
  //     scale: 2,
  //     rotation: 360,
  //     borderRadius: "100%",
  //     duration: 2,
  //     ease: "back.inOut",
  //   });

  //   timeline.to("#box", {
  //     x: 500,
  //     rotation: 360,
  //     borderRadius: "8px",
  //     duration: 2,
  //     ease: "back.inOut",
  //   });
  // });

  // useGSAP(() => {
  //   gsap.to(".stagger-box", {
  //     y: 250,
  //     rotation: 360,
  //     borderRadius: "100%",
  //     repeat: -1,
  //     yoyo: true,
  //     // stagger: 0.5,
  //     stagger: {
  //       amount: 1.5,
  //       grid: [2, 1],
  //       axis: "y",
  //       ease: "circ.inOut",
  //       from: "center",
  //     },
  //   });
  // }, []);

  // const scrollRef = useRef();

  // useGSAP(
  //   () => {
  //     const boxes = gsap.utils.toArray(scrollRef.current.children);

  //     boxes.forEach((box) => {
  //       gsap.to(box, {
  //         x: 150 * (boxes.indexOf(box) + 1),
  //         rotation: 360,
  //         borderRadius: "100%",
  //         scale: 1.5,
  //         scrollTrigger: {
  //           trigger: box,
  //           start: "bottom bottom",
  //           end: "top 20%",
  //           scrub: true,
  //         },
  //         ease: "power1.inOut",
  //       });
  //     });
  //   },
  //   { scrollRef }
  // );

  useGSAP(() => {
    gsap.to("#text", {
      ease: "power1,inOut",
      opacity: 1,
      y: 0,
      // delay: 1,
      // repeat: -1,
    });

    gsap.fromTo(
      ".para",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <div className="h-screen">
      {/* <button
        className="m-10 cursor-pointer bg-blue-500 px-10 py-2 text-white rounded-lg"
        onClick={() => {
          if (timeline.paused()) {
            timeline.play();
          } else {
            timeline.pause();
          }
        }}
      >
        Play/Pause
      </button> */}

      {/* <div id="box" className="w-48 h-48 bg-red-500 rounded-4xl mt-20" /> */}

      {/* <div className="flex gap-5 m-20">
        <div id="box" className="w-20 h-20 bg-red-200 rounded-lg stagger-box" />
        <div id="box" className="w-20 h-20 bg-red-300 rounded-lg stagger-box" />
        <div id="box" className="w-20 h-20 bg-red-400 rounded-lg stagger-box" />
        <div id="box" className="w-20 h-20 bg-red-500 rounded-lg stagger-box" />
        <div id="box" className="w-20 h-20 bg-red-600 rounded-lg stagger-box" />
        <div id="box" className="w-20 h-20 bg-red-700 rounded-lg stagger-box" />
        <div id="box" className="w-20 h-20 bg-red-800 rounded-lg stagger-box" />
      </div> */}

      {/* <div className="h-[70vh]"></div>

      <div className="mt-20 w-full h-screen" ref={scrollRef}>
        <div
          id="scroll-pink"
          className="scroll-box w-20 h-20 rounded-lg bg-pink-500"
        ></div>
        <div
          id="scroll-orange"
          className="scroll-box w-20 h-20 rounded-lg bg-orange-500"
        ></div>
      </div> */}

      <h1 className="opacity-0 translate-y-10 text-4xl font-bold" id="text">
        GsapText
      </h1>

      <p className="mt-5 text-gray-500 para">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora unde
        ipsum quos ab aliquam ea, mollitia dolorum qui, illum natus sequi, animi
        numquam dolores similique vel nisi tempore delectus ut! Pariatur nulla
        similique doloremque fugit, dolore eveniet provident sint odit!
      </p>

      <p className="mt-5 text-gray-500 para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
        aperiam!
      </p>
    </div>
  );
};

export default Gsap;
