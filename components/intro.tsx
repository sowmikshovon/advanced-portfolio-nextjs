"use client";

import Image from "next/image";
import React from "react";
import image1 from "../public/Untitled-3.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsFileEarmarkText, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const DOMAIN_PILLARS = [
  "Cloud & IaC (Azure / Terraform)",
  "DevSecOps & CI/CD",
  "QA Test Automation",
  "Full-Stack TypeScript",
] as const;

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[52rem] text-center sm:mb-0 scroll-mt-[500rem]"
      id="home"
    >
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-1.5 text-xs font-medium text-gray-700 shadow-sm backdrop-blur-md dark:border-white/15 dark:bg-white/10 dark:text-gray-200"
      >
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        Tampere, Finland · MSc @ LUT University · Open to Finland &amp; EU Roles
      </motion.div>

      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={image1}
              alt="Sowmik Shovon Karmakar portrait"
              priority={true}
              className="h-[10.5rem] w-[8.75rem] rounded-full object-cover border-[0.35rem] border-white shadow-xl dark:border-white/20"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute bottom-0 right-[-0.5rem] text-3xl"
            aria-hidden="true"
          >
            ✅
          </motion.span>
        </div>
      </div>

      <motion.div
        className="mb-8 mt-6 px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-5xl">
          Sowmik Shovon Karmakar
        </h1>
        <p className="mt-3 text-lg font-medium text-gray-700 dark:text-gray-200 sm:text-2xl">
          Cloud, DevSecOps &amp; QA Automation Engineer
        </p>
        <p className="mx-auto mt-4 max-w-[42rem] text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg">
          Pursuing an MSc in Software Product Management &amp; Business at LUT
          University in Finland. I architect Terraform/Azure infrastructure,
          automated QA frameworks, and full-stack TypeScript applications for
          reliable production delivery across Europe.
        </p>

        <ul className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {DOMAIN_PILLARS.map((pillar) => (
            <li
              key={pillar}
              className="rounded-full border border-black/10 bg-white/75 px-3.5 py-1 text-xs font-medium text-gray-700 shadow-xs backdrop-blur-sm dark:border-white/15 dark:bg-white/10 dark:text-gray-200"
            >
              {pillar}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="flex flex-wrap items-center justify-center gap-2.5 px-4 text-base font-medium"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-6 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-100 transition dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-6 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-100 transition borderBlack dark:bg-white/10 dark:text-white"
          href="/api/cv"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV{" "}
          <HiDownload className="opacity-70 group-hover:translate-y-0.5 transition" />
        </a>

        <Link
          href="/cv"
          className="group bg-white/90 px-6 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-100 transition borderBlack dark:bg-white/10 dark:text-white"
        >
          <BsFileEarmarkText className="opacity-70" />
          View Web CV
        </Link>

        <a
          className="bg-white p-3.5 text-gray-700 flex items-center justify-center rounded-full focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/75 dark:hover:text-white"
          href="https://linkedin.com/in/sowmikshovon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          <BsLinkedin className="text-lg" />
        </a>

        <a
          className="bg-white p-3.5 text-gray-700 flex items-center justify-center rounded-full text-[1.25rem] focus:scale-110 hover:text-gray-950 hover:scale-110 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/75 dark:hover:text-white"
          href="https://github.com/sowmikshovon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
