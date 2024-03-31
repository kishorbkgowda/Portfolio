import React from "react";
import css from "../assets/css.png";
import html from "../assets/html.png";
import js from "../assets/javascript.png";
import ts from "../assets/tailwind.png";
import reactjs from "../assets/react.png";
import java from "../assets/java.png";
import sql from "../assets/Mysql.png";
import git from "../assets/Git.png";
import github from "../assets/Github.png";

function Skills() {
  const skill = [css, html, js, ts, reactjs, java, sql, git, github];

  return (
    <div className="max-w-[1200px] mx-auto text-center glass p-3" id="skills">
    <h1 className="text-2xl text-white sm:text-4xl p-6">My Skills</h1>
      <div className="flex justify-between items-center gap-4 flex-wrap p-3">
        {skill.map((ski, index) => {
          return (
            <div key={index} className="max-w-28 glass p-4 hover:scale-105 transition-all duration-500">
              <img src={ski} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
