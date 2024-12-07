import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import museumofcandyImg from "@/public/museumofcandy.png";
import DIceGameDOM from "@/public/DIceGameDOM.png";
import gptthreeImg from "@/public/gptthree.png";
import gerichtImg from "@/public/gericht.png";
import spotifycloneImg from "@/public/spotifyclone.png";
import terportImg from "@/public/terport.png";
import portvoneImg from "@/public/portvone.png";
import advportImg from "@/public/advport.png";
import animevault from "@/public/anime_vault.png";

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
      "I completed my Bachelor of Science (BSc) in Computer Science (CS) from BRAC University in 2022.",
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
    title: "PMSCS",
    location: "Jahangirnagar University",
    description:
      "I am currently pursuing Professional Masters of Science in Computer Science (PMSCS) from Jahangirnagar University",
    icon: React.createElement(LuGraduationCap),
    date: " 2023-2024 ",
  },
  {
    title: "InternShip",
    Location: "A1QA",
    description:
      "Finished Internship at A1QA and learnt about software testing, Selenium, BDD, JENKINS, etc.",
    icon: React.createElement(CgWorkAlt),
    date: " 2023-2024 ",
  },
  {
    title: "Looking for a fulltime Job",
    location: "Dhaka, Bangladesh",
    description: "Right now I am actively looking for a job.",
    icon: React.createElement(CgWorkAlt),
    date: " 2024-present ",
  },
] as const;

export const projectsData = [
  {
    title: "Museum Of Candy",
    description:
      "A simple HTML and CSS project developed to practice basic web design principles.",
    tags: ["HTML", "CSS", "gh-pages"],
    imageUrl: museumofcandyImg,
    url: "https://sowmikshovon.github.io/Museum-of-Candy/",
  },
  {
    title: "Dice_Game_DOM",
    description:
      "A simple dice game developed to practice DOM manipulation with JavaScript.",
    tags: ["JavaScript", "HTML", "CSS", "gh-pages"],
    imageUrl: DIceGameDOM,
    url: "https://sowmikshovon.github.io/DIce_Game_DOM/",
  },
  {
    title: "Gpt-3",
    description:
      "First intro to React and some advanced HTML and CSS practice. Also converting figma design to resposive webpage.",
    tags: ["React", "CSS", "HTML", "Figma", "gh-pages"],
    imageUrl: gptthreeImg,
    url: "https://sowmikshovon.github.io/gpt3_react/",
  },
  {
    title: "Gericht",
    description:
      "Advanced reuseable components and more advanced figma design conversion with more advanced HTML and CSS",
    tags: ["React", "CSS", "HTML", "Figma", "gh-pages"],
    imageUrl: gerichtImg,
    url: "https://sowmikshovon.github.io/restrurant_react/",
  },
  {
    title: "Spotify-clone",
    description:
      "A full stack music playing application with dedicated signup, payment and upload feature. First time using Next.JS, tailwind and TypeScript.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux",
      "PostgreSQL",
      "Tailwind",
      "Stripe",
      "Supabase",
      "Vercel",
    ],
    imageUrl: spotifycloneImg,
    url: "https://spotify-clone-2-omega.vercel.app/",
  },
  {
    title: "Terminal Portfolio",
    description:
      "A attempt to create linux bash inspired portfolio to showcase developed projects. Simple JS, HTML and CSS was used.",
    tags: ["JavaScript", "HTML", "CSS", "gh-page"],
    imageUrl: terportImg,
    url: "https://sowmikshovon.github.io/portfolio_terminal/",
  },
  {
    title: "Portfolio-V1",
    description:
      "1st iteration of a fullfledged portfolio website. Single page with manual dark mode control.",
    tags: ["React", "Next.js", "Tailwind", "Vercel"],
    imageUrl: portvoneImg,
    url: "https://sowmik-portfolio-v1.vercel.app/",
  },
  {
    title: "Advanced Portfolio",
    description:
      "Current portfoilio website with automatic darkmode option. Using technologies like framer motion, React email, resend for the first time.",
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
  {
    title: "Anime Vault",
    description:
      "A light single page webpage designed with React, NextJS, Tailwind, TypeScript, Framer-Motion. The page scrolls infinitely and fetches data from an api",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Framer-motion",
      "Server-Action",
      "Vercel",
    ],
    imageUrl: animevault,
    url: "https://anime-vault-peach.vercel.app/",
  },
] as const;

export const skillsData = [
  "Java",
  "Python",
  "Linux",
  "Bash",
  "Git",
  "Docker",
  "Kubernetes",
  "Ansible",
  "Jenkins",
  "CI/CD",
  "Selenium",
  "Allure",
  "BDD",
  "Junit",
  "TestNG",
  "Maven",
  "AWS",
  "JavaScript",
  "Node.js",
  "ExpressJS",
  "HTML",
  "CSS",
  "JQuery",
  "React",
  "TypeScript",
  "Next.js",
  "Vite",
  "Tailwind",
  "Bootstap",
  "SCSS",
  "MongoDB",
  "Redux",
  "MySQL",
  "PostgreSQL",
  "Framer Motion",
  "Android Development",
] as const;
