"use client";

import { useEffect, useEffectEvent } from "react";
import Link from "next/link";
import { navLink } from "@/types/nav.types";
import { useClientWrapper } from "@/app/components/provider/client-wrapper";
interface NavLinksProps {
  navLinks: navLink[];
}

export default function SideNav({ navLinks }: NavLinksProps) {
  const { activeSection, setActiveSection } = useClientWrapper();

  const handleClick = (hash: string) => {
    setActiveSection(hash);
  };

  const syncFromHash = useEffectEvent(() => {
    const id = window.location.hash.slice(1);
    setActiveSection(id);
  });

  useEffect(() => {
    syncFromHash();

    window.addEventListener("hashchange", syncFromHash);

    return () => {
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, []);

  return (
    <aside className="lg:sticky lg:h-screen top-0 px-4">
      <header className="flex flex-col max-w-2xl pt-4 lg:pb-12 lg:my-18 mb-10 lg:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-secondary">
          Jacob Nevitt
        </h1>
        <h2 className="text-xl md:text-2xl mb-3 text-white">
          Software Developer
        </h2>
        <h3 className="text-base mb-5 text-secondary-foreground max-w-sm">
          Frontend developer building clean, responsive, high-performance web
          apps at scale
        </h3>
        <div className="flex flex-row gap-4 mb-5 lg:mb-8">
          <a
            href="https://github.com/jacobadam"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="GitHub"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-primary-foreground hover:fill-secondary transition-colors duration-200"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>

          <a
            href="mailto:jacobnevitt@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Gmail"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-primary-foreground hover:fill-secondary transition-colors duration-200"
            >
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-1.356 1.472-2.204 2.645-1.522L12 10.273l9.355-6.338C22.528 3.253 24 4.101 24 5.457Z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/jacobnevitt/"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="LinkedIn"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-primary-foreground hover:fill-secondary transition-colors duration-200"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
        <a
          href="/jacob-nevitt-cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex w-fit items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-2.5 font-medium text-xs uppercase tracking-widest text-amber-500  transition-all hover:bg-white/10 hover:border-white/20 active:scale-95"
        >
          <span className="relative z-10">View CV</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
          >
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>

          <div className="absolute inset-0 rounded-full bg-blue-500/0 opacity-0 blur-xl transition-all duration-500 group-hover:bg-blue-500/10 group-hover:opacity-100" />
        </a>
      </header>

      <nav className="hidden lg:block mt-8">
        <ul className="flex flex-col gap-6">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link
                className="group flex items-center gap-4 w-fit"
                href={`#${item.href}`}
                onClick={() => handleClick(`${item.href}`)}
              >
                <span
                  className={`h-px transition-all duration-500 ${
                    activeSection === item.href
                      ? "w-16 bg-secondary"
                      : "w-8 bg-color-primary-foreground group-hover:w-16 group-hover:bg-secondary"
                  }`}
                ></span>
                <span
                  className={`uppercase text-xs tracking-widest transition-colors duration-300 font-semibold ${
                    activeSection === item.href
                      ? "text-secondary"
                      : "text-color-primary-foreground group-hover:text-secondary"
                  }`}
                >
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
