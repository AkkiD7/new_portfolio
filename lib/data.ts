import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import eventplanner from "@/public/eventplanner.png";
import landingPage from "@/public/travel-agency.png";
import cavesstudio from "@/public/cavesstudio.png";
import ccm from "@/public/ccm.png";
import sunsolarpower from "@/public/sunsolarpower.png";
import {
  HiOutlineCode,
  HiOutlineServer,
  HiOutlineLightningBolt,
  HiOutlineCloudUpload,
} from "react-icons/hi";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  { name: "Services", hash: "#services" },

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

export const servicesData = [
  {
    title: "Web Application Development",
    description:
      "Build fast, scalable, and responsive web applications using React, Next.js, and modern frontend best practices.",
    icon: HiOutlineCode,
  },
  {
    title: "Backend & API Development",
    description:
      "Design and develop secure, high-performance REST APIs with Node.js, Express, and scalable database architecture.",
    icon: HiOutlineServer,
  },
  {
    title: "Performance & Optimization",
    description:
      "Improve application speed, optimize database queries, and refactor code for better performance and maintainability.",
    icon: HiOutlineLightningBolt,
  },
  {
    title: "Deployment & Maintenance",
    description:
      "Deploy applications on AWS, DigitalOcean, or Vercel with proper CI/CD, Nginx setup, and ongoing support.",
    icon: HiOutlineCloudUpload,
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Developer",
    location: "Empiric Business Solutions, Pune",
    description:
      "Currently working on a CRM system, building scalable backend APIs and modern frontend interfaces. Responsible for designing core modules, integrating business workflows, and improving performance and maintainability using React, Node.js, and relational databases.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2025 – Present",
  },
  {
    title: "Full Stack Developer",
    location: "Calibort Technologies, Nashik",
    description:
      "Built scalable backend services with Node.js, Express, Sequelize, and MySQL, improving API performance by 25%. Developed responsive UIs using React and TypeScript, and handled deployments using Nginx, PM2, and DigitalOcean.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2025 – Aug 2025",
  },
  {
    title: "Junior Software Engineer",
    location: "Delta India, Pune",
    description:
      "Developed high-performance APIs with Node.js, Express, and MongoDB, reducing load times by 20%. Created reusable React components, optimized database schemas, and improved overall feature delivery speed.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2023 – Jan 2025",
  },
  {
    title: "Software Developer Intern",
    location: "Nutshell Infosoft, Nashik",
    description:
      "Worked on frontend development using React.js and Tailwind CSS, and assisted with backend API development using Node.js and MongoDB. Gained hands-on experience in debugging, testing, and building modular features.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2023 – Dec 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Caves Studio Architect",
    featured: true,
    description:
      "Built a full-stack web platform that helps architects showcase their projects, receive client inquiries, and manage content through an admin dashboard to grow their business online.",
    tags: ["React.js", "Node.js", "MongoDB", "Twilio", "Ant Design"],
    imageUrl: cavesstudio,
    projectLink: "https://cavesstudio.com/",
    githubLink: "https://github.com/AkkiD7/construction_portal_frontend",
  },

  {
    title: "Solar Spark – Solar Energy Website",
    featured: true,
    description:
      "Designed and developed a modern solar energy website to promote solar solutions, generate customer leads, and build trust through a clean, responsive, and professional UI.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Responsive Design"],
    imageUrl: sunsolarpower,
    projectLink: "https://solar-spark-designs.vercel.app/",
    githubLink: "https://github.com/AkkiD7/solar-spark-designs",
  },

  {
    title: "Travel Agency UI/UX",
    featured: false,
    description:
      "Created a clean and responsive landing page for a travel agency to showcase tour packages, improve user engagement, and deliver a smooth browsing experience.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Prisma"],
    imageUrl: landingPage,
    projectLink: "https://landing-page-tan-seven.vercel.app/",
    githubLink: "https://github.com/AkkiD7/travel_agency_ui_ux",
  },

  {
    title: "Construction Management System",
    featured: false,
    description:
      "Developed a web application that allows construction firms to manage projects, present their work professionally, and communicate with clients via email and SMS notifications.",
    tags: ["React.js", "Node.js", "Nodemailer", "Twilio", "Vercel"],
    imageUrl: ccm,
    projectLink: "https://www.cavesconstruction.com/",
    githubLink: "https://github.com/AkkiD7/construction_portal_frontend",
  },

  {
    title: "Event Planner Web App",
    featured: false,
    description:
      "Built a web application that enables users to plan events, manage guest lists, send invitations, and organize event details with a simple and user-friendly interface.",
    tags: ["Java", "HTML", "CSS", "JavaScript", "SQL"],
    imageUrl: eventplanner,
    projectLink:
      "https://github.com/AkkiD7/Event-Planner-Project/tree/main/Planner-main",
    githubLink:
      "https://github.com/AkkiD7/Event-Planner-Project/tree/main/Planner-main",
  },
] as const;

export const skillsData = {
  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Material-UI",
    "Framer Motion",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Sequelize",
    "JWT",
  ],
  devops: [
    "Git",
    "Postman",
    "Swagger",
    "Nginx",
    "PM2",
    "Linux",
    "AWS (S3, EC2)",
    "DigitalOcean",
  ],
} as const


