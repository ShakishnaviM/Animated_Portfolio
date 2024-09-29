import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#a2790d]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        

        <div className="w-[700px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto bg-[#03001417] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
          <a href="/" className="cursor-pointer">
              Home
            </a>
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a href="#awards" className="cursor-pointer">
              Achievements
            </a>
            <a href="#contactme" className="cursor-pointer">
              Contact Me
            </a>
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
    </div>
  );
};

export default Navbar;