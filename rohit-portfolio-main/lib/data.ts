import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecomImg from "@/public/ecom.png";
import jamandplayImg from "@/public/jamandplay.png";
import trelloImg from "@/public/trello.png";
import landingPage from "@/public/travel-agency.png";
import caption from '@/public/captionme.png'
import discord from '@/public/discord.png'

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
    title: "Caption-Me",
    description:
      "Caption Me is a tool that allows users to upload a video, transcribe it, edit the timeframe and words, and add captions with desired colors.",
    tags: ["Next.js", "AWS", "Ratelimiter", "Redis", "Upstash", "Typescript"],
    imageUrl: caption,
    projectLink: 'https://caption-me.vercel.app/',
    githubLink: 'https://github.com/rohitt-gupta/caption-me',
  },
  {
    title: "Team Chat application",
    description:
      "Caption Me is a tool that allows users to upload a video, transcribe it, edit the timeframe and words, and add captions with desired colors.",
    tags: ["Next.js", "AWS", "Ratelimiter", "Redis", "Upstash", "Typescript"],
    imageUrl: discord,
    projectLink: 'https://discord-clone-rho-dun.vercel.app/',
    githubLink: 'https://github.com/rohitt-gupta/discord-clone',
  },
  {
    title: "Ecommerce: Admin and Client",
    description:
      "Full stack ecommerce app with multiple stores functionality exposing public APIs for client app. ",
    tags: ["Next.js", "Tailwind", "shad-cn", "MySQL", "Prisma", "Typescript"],
    imageUrl: ecomImg,
    projectLink: 'https://ecom-dashboard-five.vercel.app/',
    githubLink: 'https://github.com/rohitt-gupta/ecommerce-store',
  },
  {
    title: "Travel Agency UI/UX",
    description:
      "SImple landing page desgin using nextjs and tailwindcss. ",
    tags: ["Next.js", "Tailwind", "shad-cn", "MySQL", "Prisma", "Typescript"],
    imageUrl: landingPage,
    projectLink: 'https://landing-page-tan-seven.vercel.app/',
    githubLink: 'https://github.com/rohitt-gupta/landing-page',
  },
  {
    title: "Jam and Play",
    description:
      "Learn the art and science of creating music, with Jam and Play's comprehensive courses",
    tags: ["React", "TypeScript", "Headless UI", "Next.js", "Tailwind", "Framer-motion"],
    imageUrl: jamandplayImg,
    projectLink: 'https://www.jamandplay.com/',
    githubLink: '',
  },
  {
    title: "TaskFlow:The Trello Clone",
    description:
      "A simple yet beautiful todo app with drag ad drop functionality, backed by appwrite cloud for seamless data integration.  ",
    tags: ["React", "Next.js", "Appwrite", "Tailwind", "React-beautiful-dnd"],
    imageUrl: trelloImg,
    projectLink: 'https://trello-clone-xjcj.vercel.app/',
    githubLink: 'https://github.com/rohitt-gupta/trello-clone',
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