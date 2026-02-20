"use client";

import { useEffect, useEffectEvent, useState } from "react";
import Link from "next/link";

import { navLink } from "@/types/nav.types";

interface navLinksProps {
  navLinks: navLink[];
}

export default function SideNav({ navLinks }: navLinksProps) {
  const [activeSection, setActiveSection] = useState<string>("");

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
    <aside className="sticky top-0 h-screen">
      <header className="flex flex-col justify-center items-center max-w-3xl py-20">
        <h1 className="text-5xl font-bold mb-2">Jacob Nevitt</h1>
        <h2 className="text-2xl mb-2">Software Developer</h2>
        <h3>
          Bridging the gap between design and functionality one line of code at
          a time
        </h3>
      </header>

      <nav>
        <ul className="flex flex-col justify-center items-center max-w-3xl">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link
                className="group relative pb-0.5"
                href={`#${item.href}`}
                onClick={() => handleClick(`${item.href}`)}
              >
                <span>{item.title}</span>
                <span
                  className={`${
                    activeSection === item.href ? "scale-x-100" : "scale-x-0"
                  } absolute bg-current bottom-0 left-0 w-full h-0.5 origin-left group-hover:scale-x-100 transition-transform duration-700`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
