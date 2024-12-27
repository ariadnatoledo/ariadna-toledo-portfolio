"use client";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

function Sidebar() {
  return (
    <div>
      <h3 className="my-4 text-3xl font-medium tracking-wider font-inconsolata">
        <span className="text-white-bold">Ariadna Toledo</span>
      </h3>
      <p className="px-2 py-1 my-3 rounded-full">Software Engineer</p>

      {/* Download Resume Button */}
      <a
        className="flex items-center justify-center w-8/12 py-2 my-2 text-white border-2 border-black rounded-full bg-gradient-to-r from-slate-500 to-blue-400"
        href="https://docs.google.com/document/d/13KFWhQZJEii5ENYqAweasJhoqJ0z8PUFtrQVUtArFZg/edit?usp=sharing"
        download="ariadna_toledo_resume"
      >
        <GiTie className="w-6 h-6" /> Resume
      </a>

      {/* Social Links */}
      <div className="flex w-9/12 mx-auto my-5 text-white justify-evenly md:w-full">
        <a href="https://github.com/ariadnatoledo">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/ariadnatoledo/">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* Location and Contact */}
      <div className="py-4 my-5" style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Montreal, Quebec</span>
        </div>
        <p className="my-2">ariadnatoledo1@gmail.com</p>
        <p className="my-2">+1 (236) 881-1373</p>
      </div>

      {/* Email Me Button */}
      <button
        className="flex items-center justify-center w-8/12 py-2 my-2 text-white border-2 border-black rounded-full bg-gradient-to-r from-slate-500 to-blue-400"
        onClick={() => (window.location.href = 'mailto:ariadnatoledo1@gmail.com')}
      >
        Email Me
      </button>
    </div>
  );
}

export default Sidebar;
