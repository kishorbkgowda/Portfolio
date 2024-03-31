import React from "react";
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/proj4.png";

function Work() {
  const projects = [
    {
      id: 1,
      img: proj1,
      title: "E-Commerce Website",
      live: "https://majestic-basbousa-c96ea9.netlify.app/",
    },
    {
      id: 2,
      img: proj2,
      title: "Study Sync Clone",
      live: "https://splendid-halva-6392b9.netlify.app/",
    },
    {
      id: 3,
      img: proj3,
      title: "Currency Converter",
      live: "https://grand-baklava-d376b6.netlify.app/",
    },
    {
      id: 4,
      img: proj4,
      title: "Tap Music",
      live: "https://clever-griffin-4e8caa.netlify.app/",
    },
  ];
  return (
    <div
      className="max-w-[1200px] mx-auto grid grid-cols-2 gap-4 glass p-6 my-16"
      id="work"
    >
      <div className="col-span-2 my-4">
        <h1 className="text-4xl  text-gray-300 text-center py-3">My Work</h1>
      </div>
      {projects.map((project) => (
        <div
          key={project.id}
          className="glass transform transition-transform hover:scale-105 duration-300 overflow-hidden shadow-lg h-[200px] group relative"
        >
          <img src={project.img} className="w-full h-full object-cover" />
          <div className="group-hover:opacity-90 opacity-0 bg-[#232323] absolute transition-opacity duration-300 inset-0 flex justify-center items-center gap-5">
            <span className="text-xl md:text-2xl font-bold text-white mb-4">
              {project.title}
            </span>
            <div className="mb-4">
              <a
                href={project.live}
                target="_blank" className="p-2 sm:px-5 sm:py-2 rounded-xl font-bold text-xl bg-white text-black hover:bg-transparent hover:text-white transition-all duration-300"
              >
                Live
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Work;
