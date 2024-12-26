import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecomImg from "@/public/ecom.png";
import jamandplayImg from "@/public/jamandplay.png";
import trelloImg from "@/public/trello.png";
import landingPage from "@/public/travel-agency.png";
import cavesstudio from "@/public/cavesstudio.png";
import ccm from "@/public/ccm.png";

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
    title: "Software Developer",
    location: "Caves Infotech, Nashik",
    description:
      "I'm now a software developer. My stack includes React, Node.js, JavaScript, Tailwind and Framer-motion.",
    icon: React.createElement(FaReact),
    date: "Sept 2023 - present",
  },
  {
    title: "Software Developer Intern",
    location: "Nutshell Infosoft, Nashik",
    description:
      "Started as a front end web developer using Reactjs and Material UI. Majorly worked on bug fixing, refactoring and folder structure.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2023 - Aug 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Caves Studio Architect",
    description:
      "Caves Studio Architect is a platform for architects to showcase their work and get leads.",
    tags: ["React.js", "NodeJS", "Twilio", "JavaScript", "MongoDB", "Antd"],
    imageUrl: cavesstudio,
    projectLink: "https://cavesstudio.com/",
    githubLink: "https://github.com/AkkiD7/construction_portal_frontend",
  },
  {
    title: "Construction Management",
    description:
      "Construction Management is a site where users can manage and shwocase their construction projects.",
    tags: [
      "React.js",
      "Vercel",
      "NodeMailer",
      "NodeJS",
      "Twilio",
      "Javascript",
    ],
    imageUrl: ccm,
    projectLink: "https://www.cavesconstruction.com/",
    githubLink: "https://github.com/AkkiD7/construction_portal_frontend",
  },

  {
    title: "Travel Agency UI/UX",
    description: "SImple landing page desgin using nextjs and tailwindcss. ",
    tags: ["Next.js", "Tailwind", "shad-cn", "MySQL", "Prisma", "Typescript"],
    imageUrl: landingPage,
    projectLink: "https://landing-page-tan-seven.vercel.app/",
    githubLink: "https://github.com/rohitt-gupta/landing-page",
  },
  {
    title: "Event Planner Web App",
    description:
      "Event Planner is a web app where users can plan events and invite their friends.",
    tags: ["Java", "HTML", "CSS", "Javascript", "SQL"],
    imageUrl: landingPage,
    projectLink: "https://landing-page-tan-seven.vercel.app/",
    githubLink: "https://github.com/rohitt-gupta/landing-page",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "PHP",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "SQL",
  "PostgreSQL",
  "Open Source",
  "Framer Motion",
] as const;
