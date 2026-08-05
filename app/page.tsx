"use client";

import { useActiveSection } from "@/app/hooks/use-active-section";
import { useClientWrapper } from "@/app/components/provider/client-wrapper";
import { AboutSection } from "@/app/components/sections/about-section";
import { ProjectsSection } from "@/app/components/sections/projects-section";
import { ExperienceSection } from "@/app/components/sections/experience-section";
import { TechStackSection } from "@/app/components/sections/tech-stack-section";

export default function Home() {
  const { setActiveSection } = useClientWrapper();

  useActiveSection(setActiveSection);

  return (
    <>
      <section id="about" className="px-4 pt-2 pb-4 md:pb-8">
        <h1 className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-3 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 font-semibold text-xl">
          About
        </h1>
        <AboutSection />
      </section>

      <section id="projects" className="px-4 mt-8 pt-2 pb-4 md:mt-16 md:pb-6">
        <h1 className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-3 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 font-semibold text-xl">
          Projects
        </h1>
        <ProjectsSection />
      </section>
      <section id="experience" className="px-4 mt-8 pt-2 pb-4 md:mt-16 md:pb-6">
        <h1 className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-3 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 font-semibold text-xl">
          Experience
        </h1>
        <ExperienceSection />
      </section>
      <section id="tech-stack" className="px-4 mt-8 pt-2 pb-4 md:mt-16 md:pb-6">
        <h1 className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-3 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 font-semibold text-xl">
          Tech Stack
        </h1>
        <TechStackSection />
      </section>
    </>
  );
}
