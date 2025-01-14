"use client";

import Image from "next/image";
import React from "react";
import image1 from "../public/Untitled-3.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[500rem]"
      id="home"
    >
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
              alt="Sowmik Portrait"
              priority={true}
              className="h-[11rem] w-[9rem] rounded-full object-cover border-[0.35rem] border-white shadow-xl"
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
          >
            ✅
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/*<span className="font-bold">Hello, I&apos;m Sowmik Shovon.</span>{" "}
        I&apos;m a <span className="font-bold">Software developer</span> just{" "}
        <span className="font-bold">finished Graduation</span> and looking for a{" "}
        <span className="font-bold">job</span>. I enjoy building{" "}
        <span className="italic">
          websites, web applications, android applications and automate
        </span>
        . My focus is{" "}
        <span className="underline">
          Software development, Web development,and Devops
        </span>
        .*/}
        <span className="font-bold">Hello, I&apos;m Sowmik Shovon.</span>{" "}
        Motivated and eager{" "}
        <span className="font-bold">
          Junior DevOps and Test Automation Engineer
        </span>{" "}
        with a foundational understanding of{" "}
        <span className="font-bold">
          automation practices and CI/CD pipelines.
        </span>{" "}
        Recently completed relevant coursework and hands-on projects that{" "}
        <span className="underline">
          fostered skills in scripting and test frameworks
        </span>
        . Proficient in working with{" "}
        <span className="underline">
          version control systems and willing to learn quickly in a fast-paced
          environment.
        </span>{" "}
        Enthusiastic about collaborating with development and operations teams
        to streamline processes and enhance software quality.{" "}
        <span className="underline">
          Ready to contribute innovative ideas and a fresh perspective, while
          further developing technical expertise in a dynamic team setting
        </span>
        .
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className=" group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition borderBlack dark:bg-white/10"
          href="/SowmikShovonKarmakarResume.pdf"
          download
        >
          Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition cursor-pointer" />
        </a>

        <a
          className="bg-white px-7 py-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://linkedin.com/in/sowmikshovon"
          target="-blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white px-7 py-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/sowmikshovon"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
