import React from "react";
import heroimage from "../assets/profilepic.jpg";
import notebookL from "../assets/notebookL.png";
import notebookM from "../assets/notebookM.png";
import mobileR from "../assets/mobileR.png";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div className="relative grid sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto overflow-hidden lg:overflow-visible p-3" id="hero">
      <img
        className="hidden md:block absolute z-[-1] w-[400px] bottom-[-40px] left-[0px]"
        src={notebookL}
        alt=""
      />
      <img
        className="absolute z-[-1] w-[300px] bottom-[280px] right-[300px]"
        src={notebookM}
        alt=""
      />
      <img
        className="absolute z-[-1] w-[195px] bottom-[365px] left-[300px]"
        src={mobileR}
        alt=""
      />

      <div className="glass py-12 px-2 sm:px-5 sm:py-3 col-span-2 my-auto z-[-1]">
        <h1 className=" text-white text-4xl  lg:text-8xl font-extrabold">
            <p className="md:mb-4 text-gray-500">I'm a</p>
          <TypeAnimation
            sequence={["Frontend Dev", 3000, "Coder", 3000, "Engineer", 3000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="font-bold mb-6 md:mb-0 md md:my-6 text-sm sm:text-lg md:text-3xl lg:text-xl max-w-[280px] md:max-w-[600px] text-gray-300">My name is Kishor B K and I am Web developer.</p>
      </div>

      <div className="absolute bottom-3 md:bottom-16 right-3 sm:right-10 h-[240px] sm:h-[100%] md:h-[350px] sm:w-[20%] rounded-xl overflow-hidden">
        <img src={heroimage} className="w-full h-full object-contain object-center" alt="" />
      </div>
    </div>
  );
}

export default Hero;
