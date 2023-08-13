import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import web1 from "../public/web1.png";
// import web2 from "../public/web2.png";
// import web3 from "../public/web3.png";
// import web4 from "../public/web4.png";
// import web5 from "../public/web5.png";
// import web6 from "../public/web6.png";
// import web7 from "../public/web7.png";
import museumofcandyImg from "@/public/museumofcandy.png";
import gptthreeImg from "@/public/gptthree.png";
import gerichtImg from "@/public/gericht.png";
import spotifycloneImg from "@/public/spotifyclone.png";
import terportImg from "@/public/terport.png";
import portvoneImg from "@/public/portvone.png";
import advportImg from "@/public/advport.png";

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
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const educationData = [
  {
    title: "SSC",
    location: "Amtali A.K. Pilot Model High School",
    description:
      "I Passed Secondary School Certificate (SSC) from Amtali A.K. Pilot Model High School in 2015.",
    icon: React.createElement(LuGraduationCap),
    date: " 2015 ",
  },
  {
    title: "HSC",
    location: "Amtali Govt. College",
    description:
      "I Passed Higher Secondary Certificate (HSC) from Amtali Govt. College in 2017.",
    icon: React.createElement(LuGraduationCap),
    date: " 2017 ",
  },
  {
    title: "BSc",
    location: "BRAC University",
    description:
      "I completed my Bachelor in Science in Computer Science from BRAC University in 2022.",
    icon: React.createElement(LuGraduationCap),
    date: " 2017-2022 ",
  },
  {
    title: "Skill Improvement",
    location: "Dhaka, Bangladesh",
    description:
      "After graduation I took some time to learn more skills by developing some personal projects.",
    icon: React.createElement(FaReact),
    date: " 2022-2023 ",
  },
  {
    title: "Looking for a Job",
    location: "Dhaka, Bangladesh",
    description: "Right now I am actively looking for a job.",
    icon: React.createElement(CgWorkAlt),
    date: " 2023-present ",
  },
] as const;

export const projectsData = [
  {
    title: "Museum Of Candy",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies. (Click image for demo)",
    tags: ["HTML", "CSS", "gh-pages"],
    imageUrl: museumofcandyImg,
    url: "https://sowmikshovon.github.io/Museum-of-Candy/",
  },
  {
    title: "Gpt-3",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination. (Click image for demo)",
    tags: ["React", "CSS", "HTML", "Figma", "gh-pages"],
    imageUrl: gptthreeImg,
    url: "https://sowmikshovon.github.io/gpt3_react/",
  },
  {
    title: "Gericht",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits. (Click image for demo)",
    tags: ["React", "CSS", "HTML", "Figma", "gh-pages"],
    imageUrl: gerichtImg,
    url: "https://sowmikshovon.github.io/restrurant_react/",
  },
  {
    title: "Spotify-clone",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits. (Click image for demo)",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux",
      "PostgreSQL",
      "Tailwind",
      "Stripe",
      "SupaBase",
      "Vercel",
    ],
    imageUrl: spotifycloneImg,
    url: "https://spotify-clone-2-omega.vercel.app/",
  },
  {
    title: "Terminal Portfolio",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits. (Click image for demo)",
    tags: ["JavaScript", "HTML", "CSS", "gh-page"],
    imageUrl: terportImg,
    url: "https://sowmikshovon.github.io/portfolio_terminal/",
  },
  {
    title: "Portfolio-V1",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits. (Click image for demo)",
    tags: ["React", "Next.js", "Tailwind", "Vercel"],
    imageUrl: portvoneImg,
    url: "https://sowmik-portfolio-v1.vercel.app/",
  },
  {
    title: "Advanced Portfolio",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits. (Click image for demo)",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Framer-motion",
      "React Email",
      "Resend",
      "Vercel",
    ],
    imageUrl: advportImg,
    url: "#",
  },
] as const;

export const skillsData = [
  "Java",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "Next.js",
  "Vite",
  "Node.js",
  "Git",
  "Tailwind",
  "SCSS",
  "MongoDB",
  "Express",
  "Redux",
  "MySQL",
  "PostgreSQL",
  "Framer Motion",
  "Android Development",
  "Bash",
  "Docker",
  "Kubernetes",
  "ASW",
] as const;
