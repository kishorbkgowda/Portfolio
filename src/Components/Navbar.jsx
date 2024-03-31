import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
function Navbar() {
  const [nav, setnav] = useState(false);

  const handlenav = () => {
    setnav(!nav);
  };
  return (
    <div className="h-[96px] glass-nav md:backdrop-blur-xl px-8 text-gray-300 bg-orange-800 max-w-[1200px] flex justify-between items-center mx-auto my-5 mb-12">
      <h1 className="text-xl font-bold">Kishor B K</h1>
      <ul className="hidden md:flex gap-6 text-xl cursor-pointer">
        <li>
          <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} offset={-30} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" duration={500} spy={true} smooth={true} offset={-30}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" spy={true} smooth={true} offset={-30} duration={500}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div
        onClick={handlenav}
        className="block md:hidden text-gray-300 fixed right-10 top-10 z-50"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <div
        className={
          nav
            ? "text-gray-300 z-40 fixed left-0 top-0 w-full bg-[#232323] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <ul className="p-8 text-4xl ml-20 z-10 flex flex-col gap-1 cursor-pointer">
          <li>
            <Link to="hero" spy={true} smooth={true} offset={-510} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              duration={500}
              offset={-30}
              spy={true}
              smooth={true}
            >Skills</Link>
          </li>
          <li>
            <Link to="work" spy={true} smooth={true} offset={0} duration={500}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
