"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I have had passion for <span className="font-medium">Programming</span>{" "}
        for a very long time, that&apos;s why I pursued BSc in{" "}
        <span className="font-medium">Computer Science (CS)</span> from{" "}
        <span className="font-medium">BRAC University</span>. After completing
        graduation, I started working on improving my{" "}
        <span className="font-medium">skills</span> by developing some{" "}
        <span className="font-medium">personal projects</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core focus
        is <span className="font-medium">Software development</span>. I am also
        familiar with Web development, DevOps, and Software Quality Assurance. I
        am always looking to learn new technologies. I am currently looking for
        a <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        traveling, watching youtube, movies, series, and photography. I also
        enjoy <span className="font-medium">researching new things</span> that I
        happened to come upon while watching something. I am currently learning
        about{" "}
        <span className="font-medium">space exploration🚀 and watches⌚</span>.
      </p>
    </motion.section>
  );
}
