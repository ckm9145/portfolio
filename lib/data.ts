import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaPencilAlt } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';


import Connor from '@/lib/images/Connor.jpg';
import homehop from '@/lib/images/homehop.png';
import plane from '@/lib/images/plane.jpg';


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "CDI Global- Analyst",
    location: "Chicago, IL",
    description:
      "Researched companies for global CDI partners, created teasers, and identified varied industry target companies. Collaborated with executives of industrial and commercial companies to facilitate buy and sell-side transactions.",
    icon: React.createElement(FaPencilAlt),
    date: "Summer 2023",
  },
  {
    title: "Student Researcher",
    location: "Evanston, IL",
    description:
      "As a student researcher at Tiilt Labs within the SportSense group, I have the privilege of working under the guidance of Professor Marcelo Worsley. SportSense is dedicated to exploring the transformative potential of merging athletic curiosity with STEM education.",
    icon: React.createElement(FaBook),
    date: "January 2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Airplane Case Study ",
    description:
      "Analyzed the 2019 Airline Delays/Cancellation dataset to identify factors causing delays and develop a model to predict flight delays, enhancing airline resource allocation and customer experience.",
    tags: ["Python", "Tableau", "EDA", "Featured Engineering", "Data Modeling"],
    imageUrl: plane,
  },
  {
    title: "HomeHop",
    description:
      "Developed an exclusive online portal for Northwestern University students, facilitating the advertisement and discovery of summer sublet opportunities in Evanston, IL.",
    tags: ["React", "Google Firebase", "TailWind", "HTML", "Flask"],
    imageUrl: homehop,
  },
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "SQL",
  "NumPy",
  "Git",
  "Tailwind",
  "Pandas",
  "Scitkit-learn",
  "AWS",
  "Github",
  "Google Firebase",
  "React",
  "Jest",
  "Django",
  "Framer Motion",
] as const;