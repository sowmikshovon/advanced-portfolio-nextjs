"use client";

import Intro from "@/components/intro";
import { motion } from "framer-motion";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Educations from "@/components/educations";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <motion.main
      className="flex flex-col items-center px-4"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Educations />
      <Contact />
    </motion.main>
  );
}
