import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import azureTerraformAksImg from "@/public/azure-terraform-aks.png";
import devops1 from "@/public/devops-pipeline.webp";
import acquisitionsApiImg from "@/public/acquisitions-api-devops.png";
import testAutomationQaImg from "@/public/test-automation-qa.png";
import spotifycloneImg from "@/public/spotifyclone.png";
import advportImg from "@/public/advport.png";
import flutterapp from "@/public/parkingappiot.jpg";
import animevault from "@/public/anime_vault.png";
import terportImg from "@/public/terport.png";

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
      "I completed my Master of Science in Computer Science under the PMSCS program from Jahangirnagar University.",
    icon: React.createElement(LuGraduationCap),
    date: " 2023-2025 ",
  },
  {
    title: "Internship",
    location: "A1QA",
    description:
      "Finished an internship at A1QA, gaining hands-on experience in software testing, Selenium, BDD, and Jenkins.",
    icon: React.createElement(CgWorkAlt),
    date: " 2023-2024 ",
  },
  {
    title: "MSc in Software Product Management and Business",
    location: "LUT University, Finland",
    description:
      "Currently pursuing a Master of Science (Technology) in Software Product Management and Business at LUT University, Finland.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2026 - Jul 2028",
  },
  {
    title: "Looking for a fulltime Job",
    location: "Finland & EU",
    description:
      "Actively seeking Software, DevOps, Cloud, and QA Automation roles in Finland and across the EU.",
    icon: React.createElement(CgWorkAlt),
    date: "2026 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Azure Cloud Platform IaC",
    category: "Cloud & DevOps",
    description:
      "Terraform blueprint provisioning Azure AKS, ACR, and Resource Groups in North Europe with OIDC, Calico policies, and Trivy CI governance.",
    tags: ["Terraform", "Azure", "AKS", "GitHub Actions", "Trivy", "IaC"],
    imageUrl: azureTerraformAksImg,
    url: "https://github.com/sowmikshovon/azure-cloud-platform-terraform",
  },
  {
    title: "DevOps CI/CD Pipeline",
    category: "Cloud & DevOps",
    description:
      "Multi-stage DevSecOps pipeline deploying containerized apps to Kubernetes with Jenkins, AWS, Docker, ArgoCD, SonarQube, OWASP, and Trivy.",
    tags: [
      "Jenkins",
      "AWS",
      "Docker",
      "Kubernetes",
      "ArgoCD",
      "SonarQube",
      "Trivy",
    ],
    imageUrl: devops1,
    url: "https://github.com/sowmikshovon/DevOps-pipeline-1",
  },
  {
    title: "Acquisitions API & CI/CD",
    category: "QA & Backend",
    description:
      "Containerized Node.js Express API with PostgreSQL, Drizzle ORM, JWT/Arcjet security, Jest suites, and multi-arch Docker GitHub Actions.",
    tags: [
      "Node.js",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
      "Jest",
      "Express",
    ],
    imageUrl: acquisitionsApiImg,
    url: "https://github.com/sowmikshovon/acquisitions",
  },
  {
    title: "Automated QA & Test Suite",
    category: "QA & Backend",
    description:
      "Java & Maven test automation framework using Selenium WebDriver, Page Object Model, TestNG, and Allure Reports, plus BDD & JUnit suites.",
    tags: ["Java", "Selenium", "BDD", "TestNG", "JUnit", "Allure", "Maven"],
    imageUrl: testAutomationQaImg,
    url: "https://github.com/sowmikshovon/test_automation",
  },
  {
    title: "Spotify Full-Stack Clone",
    category: "Full-Stack & IoT",
    description:
      "Full-stack music streaming platform with Next.js, TypeScript, Supabase PostgreSQL auth & storage, Stripe subscriptions, and Tailwind CSS.",
    tags: [
      "TypeScript",
      "Next.js",
      "React",
      "Supabase",
      "PostgreSQL",
      "Stripe",
    ],
    imageUrl: spotifycloneImg,
    url: "https://spotify-clone-seven-tau.vercel.app",
  },
  {
    title: "Advanced Portfolio",
    category: "Full-Stack & IoT",
    description:
      "TypeScript portfolio built with Next.js 16, React 19, Tailwind CSS v4, Framer Motion, React Email, Resend, and automated CI checks.",
    tags: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Resend",
    ],
    imageUrl: advportImg,
    url: "https://github.com/sowmikshovon/advanced-portfolio-nextjs",
  },
  {
    title: "IoT Parking Manager",
    category: "Full-Stack & IoT",
    description:
      "Flutter & Firebase app for smart parking spot booking with Google Maps, QR pass PDFs, and Bluetooth Serial control for Arduino/ESP32.",
    tags: ["Flutter", "Dart", "IoT", "Firebase", "Bluetooth", "Arduino"],
    imageUrl: flutterapp,
    url: "https://github.com/sowmikshovon/parking_manager_app_iot",
  },
  {
    title: "Anime Vault",
    category: "Full-Stack & IoT",
    description:
      "Server-rendered Next.js 14 app using Server Actions, infinite-scroll API fetching, TypeScript, Tailwind CSS, and Framer Motion.",
    tags: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    imageUrl: animevault,
    url: "https://anime-vault-peach.vercel.app/",
  },
  {
    title: "Terminal Portfolio",
    category: "Full-Stack & IoT",
    description:
      "Linux Bash-inspired CLI resume and project explorer built with JavaScript, HTML, and CSS for terminal-native navigation.",
    tags: ["Linux", "Bash", "JavaScript", "HTML", "CSS"],
    imageUrl: terportImg,
    url: "https://sowmikshovon.github.io/portfolio_terminal/",
  },
] as const;

export const skillsData = [
  "Terraform",
  "Azure",
  "AKS",
  "AWS",
  "Docker",
  "Kubernetes",
  "ArgoCD",
  "GitHub Actions",
  "Jenkins",
  "CI/CD",
  "Linux",
  "Bash",
  "Ansible",
  "SonarQube",
  "Trivy",
  "OWASP",
  "Git",
  "Python",
  "Java",
  "Selenium",
  "BDD",
  "TestNG",
  "JUnit",
  "Allure",
  "Maven",
  "REST Assured",
  "Jest",
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "Express.js",
  "JavaScript",
  "Tailwind CSS",
  "Bootstrap",
  "Framer Motion",
  "PostgreSQL",
  "MongoDB",
  "Supabase",
  "MySQL",
  "Flutter",
  "Dart",
  "IoT",
  "Firebase",
  "Arduino",
] as const;

export const skillCategories = {
  "Cloud & DevOps": [
    "Terraform",
    "Azure",
    "AKS",
    "AWS",
    "Docker",
    "Kubernetes",
    "ArgoCD",
    "GitHub Actions",
    "Jenkins",
    "CI/CD",
    "Linux",
    "Bash",
    "Ansible",
    "SonarQube",
    "Trivy",
    "OWASP",
    "Git",
  ],
  "QA & Test Automation": [
    "Java",
    "Python",
    "Selenium",
    "BDD",
    "TestNG",
    "JUnit",
    "Allure",
    "Maven",
    "REST Assured",
    "Jest",
  ],
  "Backend & Databases": [
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Supabase",
    "MySQL",
    "Firebase",
  ],
  "Frontend & Product": [
    "TypeScript",
    "Next.js",
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Bootstrap",
    "Framer Motion",
    "Flutter",
    "Dart",
    "IoT",
    "Arduino",
  ],
} as const;

export const cvConfig = {
  externalUrl:
    process.env.NEXT_PUBLIC_CV_URL ||
    "https://drive.google.com/file/d/10Eeuk0-Sefn8RYVn4oB3ggZg-BI24QRs/view?usp=drive_link",
  fallbackLocalPath: "/SowmikShovonKarmakarCV.pdf",
  downloadFilename: "Sowmik_Shovon_Karmakar_CV.pdf",
  lastUpdated: "November 2026",
} as const;
