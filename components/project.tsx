"use client";

import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  category,
  description,
  tags,
  imageUrl,
  url,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.65, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-4 sm:mb-8 last:mb-0"
    >
      <section className="relative max-w-[44rem] overflow-hidden rounded-2xl border border-black/10 bg-white/80 shadow-sm backdrop-blur-sm transition hover:bg-white hover:shadow-md sm:min-h-[21.5rem] sm:pr-8 sm:group-even:pl-8 sm:group-even:pr-0 dark:border-white/10 dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/[0.11]">
        <div className="flex h-full flex-col px-5 pb-7 pt-5 sm:max-w-[52%] sm:pl-9 sm:pr-2 sm:pt-8 sm:group-even:ml-[20rem]">
          <div className="mb-2 flex items-center justify-between gap-2">
            <span className="rounded-full border border-black/10 bg-gray-100/90 px-2.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wider text-gray-700 dark:border-white/15 dark:bg-white/10 dark:text-gray-200">
              {category}
            </span>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-gray-600 transition hover:text-gray-950 dark:text-gray-300 dark:hover:text-white"
              aria-label={`Open ${title}`}
            >
              View
              <BsArrowUpRight className="text-[0.65rem]" />
            </a>
          </div>

          <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-white/75">
            {description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-1.5 sm:mt-auto sm:pt-4">
            {tags.map((tag) => (
              <li
                className="rounded-full bg-black/[0.75] px-2.5 py-1 text-[0.68rem] uppercase tracking-wider text-white dark:bg-white/15 dark:text-white/85"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>

          <a href={url} target="_blank" rel="noopener noreferrer">
            <Image
              src={imageUrl}
              alt={`${title} project preview`}
              quality={95}
              className="absolute -right-40 top-8 hidden w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:-left-40 group-even:right-[initial] group-even:group-hover:translate-x-3 group-even:group-hover:rotate-2 sm:block"
            />
          </a>
        </div>
      </section>
    </motion.div>
  );
}
