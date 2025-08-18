import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import eventplanner from "@/public/eventplanner.png";
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
    title: "Full Stack Developer",
    location: "Calibort Technologies, Nashik",
    description:
      "Built scalable backend services with Node.js, Express, Sequelize, and MySQL (25% faster APIs). Developed responsive UIs in React + TypeScript, and managed end-to-end deployments on DigitalOcean with Nginx and PM2.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2025 – Aug 2025",
  },
  {
    title: "Junior Software Engineer",
    location: "Enkify Solutions, Bangalore",
    description:
      "Developed high-performance APIs with Node.js, Express, and MongoDB (20% faster load times). Created reusable React components, optimized database schemas, and improved feature delivery by 30%.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2024 – Feb 2025",
  },
  {
    title: "Software Developer Intern",
    location: "Nutshell Infosoft, Nashik",
    description:
      "Contributed to front-end development with React.js and Tailwind CSS, and assisted in backend APIs using Node.js and MongoDB. Gained experience in debugging, testing, and building modular features.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2023 – Dec 2023",
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
    githubLink: "https://github.com/AkkiD7/travel_agency_ui_ux",
  },
  {
    title: "Event Planner Web App",
    description:
      "Event Planner is a web app where users can plan events and invite their friends.",
    tags: ["Java", "HTML", "CSS", "Javascript", "SQL"],
    imageUrl: eventplanner,
    projectLink: "https://github.com/AkkiD7/Event-Planner-Project/tree/main/Planner-main",
    githubLink: "https://github.com/AkkiD7/Event-Planner-Project/tree/main/Planner-main",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Sequelize",
  "Tailwind CSS",
  "Material-UI",
  "Git",
  "Postman",
  "Swagger",
  "JWT",
  "Nginx",
  "PM2",
  "Linux",
  "AWS (S3, EC2)",
  "DigitalOcean",
  "Framer Motion",
] as const;

