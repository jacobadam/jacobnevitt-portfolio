"use client";

import { useActiveSectionObserver } from "@/app/hooks/use-active-section-observer";
import { useClientWrapper } from "@/app/components/provider/client-wrapper";
import { AboutSection } from "@/app/components/sections/about-section";
import { ProjectsSection } from "@/app/components/sections/projects-section";
import { ExperienceSection } from "@/app/components/sections/experience-section";
import { TechStackSection } from "@/app/components/sections/tech-stack-section";

export default function Home() {
  const { setActiveSection } = useClientWrapper();

  useActiveSectionObserver(setActiveSection);

  return (
    <>
      <section id="about" className="md:px-4 py-4 md:pb-8">
        <h1 className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-3 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 font-semibold text-xl">
          About
        </h1>
        <AboutSection />
      </section>

      <section id="projects" className="md:px-4 py-4 md:py-8">
        <h1 className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 font-semibold text-xl">
          Projects
        </h1>
        <ProjectsSection />
      </section>
      <section id="experience" className="md:px-4 py-4 md:py-8">
        <h1 className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 font-semibold text-xl">
          Experience
        </h1>
        <ExperienceSection />
      </section>
      <section id="tech-stack" className="md:px-4 py-4 md:py-8">
        <h1 className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 font-semibold text-xl">
          Tech Stack
        </h1>
        <TechStackSection />
      </section>
    </>
  );
}
