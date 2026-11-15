import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 dark:text-gray-400">
      <div className="mb-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-medium">
        <Link
          href="/cv"
          className="transition hover:text-gray-900 hover:underline dark:hover:text-white"
        >
          Web CV
        </Link>
        <a
          href="/api/cv"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-gray-900 hover:underline dark:hover:text-white"
        >
          Download CV (PDF)
        </a>
        <a
          href="https://github.com/sowmikshovon"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-gray-900 hover:underline dark:hover:text-white"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/sowmikshovon"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-gray-900 hover:underline dark:hover:text-white"
        >
          LinkedIn
        </a>
      </div>
      <small className="mb-2 block text-xs">
        &copy; 2026 Sowmik Shovon Karmakar. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        Next.js 16 (App Router &amp; Server Actions), React 19, TypeScript,
        Tailwind CSS v4, Framer Motion, React Email, Resend, and Vercel.
      </p>
    </footer>
  );
}
