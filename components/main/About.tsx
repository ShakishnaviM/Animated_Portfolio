// AboutMe.tsx
"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "../sub/SwitchButton"; // Ensure this component accepts props correctly
import image from "../../public/bg.png";

// Define types for education and work experience items
interface EducationItem {
  year: string;
  institution: string;
  details: string;
  GPA: string;
}

interface WorkExperienceItem {
  year: string;
  company: string;
  position: string;
  location: string;
}

// Update TAB_DATA type
const TAB_DATA: {
  education: EducationItem[];
  workExperience: WorkExperienceItem[];
} = {
  education: [
    {
      year: "2022 | Present",
      institution: "Sabaragamuwa University of Sri Lanka",
      details: "B.Sc. (Hons) in Computing and Information Systems",
      GPA: "Current GPA - 3.63",
    },
    {
      year: "2018 | 2020",
      institution: "Ramanathan Hindu Ladies College, Colombo-04",
      details: "G.C.E Advanced Level",
      GPA: "Combined Mathematics - A, Physics - C, Chemistry - C",
    },
    {
      year: "2016 | 2017",
      institution: "St Anne's Girls Maha Vidyalaya",
      details: "G.C.E Ordinary Level",
      GPA: "8A's and 1B",
    },
  ],
  workExperience: [
    {
      year: "December 2023 | Present",
      company: "Thrive 360 - Startup Company",
      position: "Web Developer (Freelancing)",
      location: "Colombo, Sri Lanka",
    },
    {
      year: "April 2024 | Present",
      company: "MTV/ MBC Channels Pvt Ltd - (Shakthi TV)",
      position: "Television Host (Freelancing)",
      location: "Araliya Uyana Rd, Pannipitiya 10230, Sri Lanka",
    },
    {
      year: "October 2021 | July 2022",
      company: "Acent Services",
      position: "Sales Executive",
      location: "302, Galle Road, Colombo 04, Sri Lanka",
    },
  ],
};

const AboutMe = () => {
  const [tab, setTab] = useState<"education" | "workExperience">("education");
  const [, startTransition] = useTransition();

  // Handle tab change
  const handleTabChange = (id: "education" | "workExperience") => {
    startTransition(() => {
      setTab(id);
    });
  };

  // Choose active data based on selected tab
  const activeData =
    tab === "education" ? TAB_DATA.education : TAB_DATA.workExperience;

  return (
    <section
      id="about-me"
      className="flex flex-col items-center min-h-[100vh] justify-center"
    >
      <h1 className="text-[50px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
        About Me
      </h1>

      <div className="h-full md:max-w-[80%] md:ml-50 w-full text-left flex md:flex-row flex-col md:justify-start gap-10 items-center">
        {/* Tabs and Content */}
        <div className="flex flex-col md:m-auto w-full m-auto justify-center md:justify-start">
          {/* Tab buttons */}
          <div className="flex justify-center flex-row md:gap-10 gap-3 flex-nowrap relative z-50">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("workExperience")}
              active={tab === "workExperience"}
            >
              Work Experience
            </TabButton>
          </div>

          {/* Active Tab Content */}
          <div className="mt-8 md:w-[85%] w-full px-10 md:px-0 min-h-40 text-gray-400 flex gap-3 flex-col md:justify-items-start">
  {/* Map through the activeData */}
  {activeData.map((item, index) => (
    <div
      key={index}
      className="p-6 text-white rounded-lg shadow-lg"
      style={{
        background: "linear-gradient( 180deg, rgba(158, 117, 12, 0.69) 0%, rgba(129, 107, 50, 0.853) 100% ), rgba(180,136,17, 0.24)",
      }}
    >
      <h3 className="font-bold text-lg">{item.year}</h3>

      {/* Conditionally render properties based on item type */}
      {"institution" in item ? (
        <>
          <h4 className="font-semibold">{item.institution}</h4>
          <p>{item.details}</p>
          <p>{item.GPA}</p>
        </>
      ) : (
        <>
          <h4 className="font-semibold">{item.company}</h4>
          <p>{item.position}</p>
          <p>{item.location}</p>
        </>
      )}
    </div>
  ))}
</div>

        </div>
        <hr className="min-w-36 h-1 bg-gray-300 hidden md:block rotate-90" />

        <Image
          src={image}
          alt="profile"
          width={400}
          height={400}
          className="rounded-full  shadow-lg"
        />
      </div>
    </section>
  );
};

export default AboutMe;
