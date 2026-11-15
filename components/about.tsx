"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

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
        I am currently pursuing an{" "}
        <span className="font-medium">
          MSc (Tech) in Software Product Management and Business at LUT
          University (Lahti Campus, Finland, Aug 2026 - Jul 2028)
        </span>
        , building on my{" "}
        <span className="font-medium">
          MSc in Computer Science (PMSCS) at Jahangirnagar University
        </span>
        ,{" "}
        <span className="font-medium">
          BSc in Computer Science at BRAC University
        </span>
        , and{" "}
        <span className="font-medium">
          QA Automation experience at A1QA
        </span>
        . My work bridges software product strategy with hands-on engineering
        across{" "}
        <span className="font-medium">
          Cloud and DevSecOps (Terraform, Azure AKS, AWS, Docker, Kubernetes,
          ArgoCD, Jenkins, GitHub Actions)
        </span>
        ,{" "}
        <span className="font-medium">
          Test Automation (Java, Python, Selenium, BDD, TestNG, Allure)
        </span>
        , and{" "}
        <span className="font-medium">
          Full-Stack TypeScript development (Next.js, React, Node.js,
          PostgreSQL)
        </span>
        .
      </p>
      <p>
        I am passionate about{" "}
        <span className="font-medium">
          building resilient, automated systems
        </span>{" "}
        and translating complex user and business requirements into reliable
        software products. I am actively seeking{" "}
        <span className="font-medium">
          DevOps, Cloud, QA Automation, and Software Engineering opportunities
          in Finland and across Europe
        </span>
        . Outside of engineering, I enjoy travel, photography, exploring
        emerging technologies,{" "}
        <span className="font-medium">space exploration🚀 and horology⌚</span>.
      </p>
    </motion.section>
  );
}
