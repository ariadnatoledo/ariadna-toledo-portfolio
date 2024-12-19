"use client";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";


function Sidebar() {
  return (
    <div>
      <img
        src="/ari-headshot.jpg"
        alt="user avatar"
        className="w-32 h-32 rounded-full mx-auto"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-inconsolata">
        <span className="text-slate-700">Ariadna Toledo</span>
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
        Software Engineer
      </p>
      <a
        className="px-2 py-1 my-3 bg-gray-200 rounded-full flex items-center justify-center"
        href=""
        download="name"
      >
        <GiTie className="w-6 h-6" /> Download Resume
      </a>

      <div className="flex justify-evenly my-5 text-green-500 w-9/12 md:w-full mx-auto">
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      <div className="my-5 py-4 bg-gray-200" style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Montreal, Quebec</span>
        </div>
        <p className="my-2">ariadnatoledo1@gmail.com</p>
        <p className="my-2">+1 (236) 881-1373</p>
      </div>
      <button className="bg-gradient-to-r from-slate-500 to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2"
onClick={() => (window.location.href = 'mailto:ariadnatoledo1@gmail.com')}
>
        Email Me
      </button>
      <button className="bg-gradient-to-r from-slate-500 to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2">
        Toggle Theme
      </button>
    </div>
  );
}

export default Sidebar;

