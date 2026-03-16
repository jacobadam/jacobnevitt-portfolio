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
    <aside className="lg:sticky lg:h-screen top-0 md:px-4">
      <header className="flex flex-col max-w-3xl pt-4 lg:py-12">
        <h1 className="text-5xl font-bold mb-3">Jacob Nevitt</h1>
        <h2 className="text-2xl mb-4">Software Developer</h2>
        <h3 className="mb-3">
          Bridging the gap between design and functionality
        </h3>
      </header>

      <nav className="hidden lg:block">
        <ul className="flex flex-col max-w-3xl">
          {navLinks.map((item, index) => (
            <li key={index} className="mb-1">
              <Link
                className="group relative pb-0.5"
                href={`#${item.href}`}
                onClick={() => handleClick(`${item.href}`)}
              >
                <span className="uppercase text-sm font-light tracking-wide">
                  {item.title}
                </span>
                <span
                  className={`${
                    activeSection === item.href ? "scale-x-100" : "scale-x-0"
                  } absolute bg-secondary bottom-0 left-0 w-full h-0.5 origin-left group-hover:scale-x-100 transition-transform duration-700`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
