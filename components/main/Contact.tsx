"use client";

import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";


const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="font-bold text-[16px]">Find me on</div>
          <div className=" h-auto flex flex-row gap-20 items-center justify-start">
            <div
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/shakishnavi-murugan-717bb5286/",
                  "_blank"
                )
              }
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </div>
            <p
              onClick={() => {
                window.open("https://github.com/ShakishnaviM", "_blank");
              }}
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </p>
            <p onClick={() => {
                window.open("https://medium.com/@shakishnavi27", "_blank");
              }}
            className="flex flex-row items-center my-[15px] cursor-pointer">
              <img src="/medium.jpg" alt="medium" height={20} width={30}/>
              <span className="text-[15px] ml-[6px]">Medium</span>
            </p>
          </div>

          <div className="text-[15px] text-center">
            &copy; 2024 ShakishnaviM. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;