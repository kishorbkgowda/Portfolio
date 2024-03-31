import React from "react";
import mobile from "../assets/notebookM.png";
import aboutpic from "../assets/about2.jpg"
function About() {
  return (
    <div className="text-white gap-4 max-w-[1200px] mx-auto my-20 grid sm:grid-cols-3" id="about">
      <div className="sm:col-span-2 glass sm:py-16 my-auto text-left p-4 ">
        <div className="max-w-[80%] mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            I can optimize your website
          </h2>
          <p className="text-gray-200 text-[0.9rem] md:text-xl">
          I am a motivated and aspiring front-end developer with a passion for creating captivating web experiences. With a fresh perspective and a hunger to learn, I bring enthusiasm and dedication to every project I undertake.
          </p>
        </div>
      </div>

      <div className="hidden md:flex justify-center items-center sm:col-span-1 glass overflow-hidden">
        <img
          src={aboutpic}
          className="w-[200px] md:w-[50%] absolute rounded-lg"
          alt=""
        />
      </div>

      <div className="hidden md:flex justify-center items-center sm:col-span-1 glass overflow-hidden">
        <img src={mobile} className="sm:w-[80%] absolute" alt="" />
      </div>

      <div className="sm:hidden flex justify-between items-center overflow-hidden h-[200px] glass p-4">
        <img
          src={aboutpic}
          className="w-36"
          alt=""
        />
        <img 
        src={mobile} 
        className="w-52 " 
        alt="" />
      </div>

      <div className="sm:col-span-2 glass sm:py-16 my-auto text-left p-4">
        <div className="max-w-[80%] mx-auto">
          <p className="text-gray-200 text-[0.9rem] md:text-xl">
          My goal is to leverage my skills in HTML, CSS, and JavaScript to build sleek, responsive, and user-friendly websites that leave a lasting impression. Through my portfolio, I invite you to explore my journey, projects, and vision for the future of web development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
