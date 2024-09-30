'use client'

import { useState } from "react";
import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#a2790d]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex items-center justify-between m-auto">
        <div className="flex-1 md:flex-none flex items-center justify-between">
          <div className="hidden md:flex items-center justify-between w-full md:w-[700px] h-full bg-[#03001417] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="/" className="cursor-pointer">Home</a>
            <a href="#about-me" className="cursor-pointer">About me</a>
            <a href="#skills" className="cursor-pointer">Skills</a>
            <a href="#projects" className="cursor-pointer">Projects</a>
            <a href="#awards" className="cursor-pointer">Achievements</a>
            <a href="#contactme" className="cursor-pointer">Contact Me</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-200 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-row gap-10">
          {Socials.map((social) => (
            <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer">
            <Image
              src={social.src}
              alt={social.name}
              width={24}
              height={24}
            />
          </a>
          ))}
        </div>
        
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-[65px] left-0 w-full bg-[#000000] px-5 py-4 rounded-b-lg shadow-lg shadow-[#a2790d]/50 text-gray-200">
          <a href="/" className="block py-2">Home</a>
          <a href="#about-me" className="block py-2">About me</a>
          <a href="#skills" className="block py-2">Skills</a>
          <a href="#projects" className="block py-2">Projects</a>
          <a href="#awards" className="block py-2">Achievements</a>
          <a href="#contactme" className="block py-2">Contact Me</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;