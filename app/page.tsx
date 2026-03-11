"use client";

import { useActiveSectionObserver } from "@/app/hooks/useActiveSectionObserver";

import { useClientWrapper } from "@/app/components/context/ClientWrapper";

export default function Home() {
  const { setActiveSection } = useClientWrapper();

  useActiveSectionObserver(setActiveSection);

  return (
    <>
      <section id="about">
        <h1 className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 font-semibold">
          About
        </h1>
        <div>
          AboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
          AboutAboutAboutAboutAboutAboutAbout
        </div>
      </section>
      <section id="techStack">
        <h1 className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 font-semibold">
          Tech Stack
        </h1>
        <div>
          Tech StackTech StackTech StackTech StackTech Stack Tech Stack Tech
          Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech
          Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech
          Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech
          Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech
          Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech
          Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech
          Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech
          Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech
          Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech
          Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech StackTech
          StackTech StackTech StackTech Stack Tech Stack Tech Stack Tech Stack
          Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech
          Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech
          Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech
          Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech
          Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech
          Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech
          Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech
          Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech
          Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech
          Stack Tech Stack Tech Stack Tech StackTech StackTech StackTech
          StackTech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack
          Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech
          Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech
          Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech
          Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech
          Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech
          Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech
          Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech
          Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech
          Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech
          Stack Tech StackTech StackTech StackTech StackTech Stack Tech Stack
          Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech
          Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech
          Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech
          Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech
          Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech
          Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech
          Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech
          Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech
          Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech Stack Tech
          Stack Tech Stack Tech Stack Tech Stack Tech Stack
        </div>
      </section>
      <section id="experience">
        <h1 className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 font-semibold">
          Experience
        </h1>
        <div>
          ExperienceExperienceExperienceExperienceExperience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          ExperienceExperienceExperienceExperienceExperience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          ExperienceExperienceExperienceExperienceExperience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          ExperienceExperienceExperienceExperienceExperience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          ExperienceExperienceExperienceExperienceExperience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          ExperienceExperienceExperienceExperienceExperience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          ExperienceExperienceExperienceExperienceExperience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          ExperienceExperienceExperienceExperienceExperience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          ExperienceExperienceExperienceExperienceExperience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          ExperienceExperienceExperienceExperienceExperience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          ExperienceExperienceExperienceExperienceExperience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          ExperienceExperienceExperienceExperienceExperience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          ExperienceExperienceExperienceExperienceExperience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          ExperienceExperienceExperienceExperienceExperience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          ExperienceExperienceExperienceExperienceExperience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          ExperienceExperienceExperienceExperienceExperience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          ExperienceExperienceExperienceExperienceExperience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          ExperienceExperienceExperienceExperienceExperience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          ExperienceExperienceExperienceExperienceExperience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          ExperienceExperienceExperienceExperienceExperience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          ExperienceExperienceExperienceExperienceExperience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          ExperienceExperienceExperienceExperienceExperience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          ExperienceExperienceExperienceExperienceExperience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          ExperienceExperienceExperienceExperienceExperience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          ExperienceExperienceExperienceExperienceExperience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          ExperienceExperienceExperienceExperienceExperience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          ExperienceExperienceExperienceExperienceExperience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          ExperienceExperienceExperienceExperienceExperience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          ExperienceExperienceExperienceExperienceExperience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          ExperienceExperienceExperienceExperienceExperience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          ExperienceExperienceExperienceExperienceExperience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          ExperienceExperienceExperienceExperienceExperience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          ExperienceExperienceExperienceExperienceExperience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          ExperienceExperienceExperienceExperienceExperience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          ExperienceExperienceExperienceExperienceExperience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          ExperienceExperienceExperienceExperienceExperience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
        </div>
      </section>
      <section id="projects">
        <h1 className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 font-semibold">
          Projects
        </h1>
        <div>
          ProjectsProjectsProjectsProjectsProjectsProjects Projects Projects
          Projects Projects Projects Projects Projects Projects Projects
          Projects Projects Projects Projects Projects Projects
          ProjectsProjectsProjectsProjectsProjectsProjects Projects Projects
          Projects Projects Projects Projects Projects Projects Projects
          Projects Projects Projects Projects Projects Projects
          ProjectsProjectsProjectsProjectsProjectsProjects Projects Projects
          Projects Projects Projects Projects Projects Projects Projects
          Projects Projects Projects Projects Projects Projects
          ProjectsProjectsProjectsProjectsProjectsProjects Projects Projects
          Projects Projects Projects Projects Projects Projects Projects
          Projects Projects Projects Projects Projects Projects
          ProjectsProjectsProjectsProjectsProjectsProjects Projects Projects
          Projects Projects Projects Projects Projects Projects Projects
          Projects Projects Projects Projects Projects Projects
          ProjectsProjectsProjectsProjectsProjectsProjects Projects Projects
          Projects Projects Projects Projects Projects Projects Projects
          Projects Projects Projects Projects Projects Projects
          ProjectsProjectsProjectsProjectsProjectsProjects Projects Projects
          Projects Projects Projects Projects Projects Projects Projects
          Projects Projects Projects Projects Projects Projects
          ProjectsProjectsProjectsProjectsProjectsProjects Projects Projects
          Projects Projects Projects Projects Projects Projects Projects
          Projects Projects Projects Projects Projects Projects
          ProjectsProjectsProjectsProjectsProjectsProjects Projects Projects
          Projects Projects Projects Projects Projects Projects ProjectsProjects
          Projects Projects Projects Projects Projects
          ProjectsProjectsProjectsProjectsProjectsProjects Projects Projects
          Projects Projects Projects Projects Projects Projects Projects
          Projects Projects Projects Projects Projects Projects
          ProjectsProjectsProjectsProjectsProjectsProjects Projects Projects
          Projects Projects Projects Projects Projects Projects Projects
          Projects Projects Projects Projects Projects Projects
          ProjectsProjectsProjectsProjectsProjectsProjects Projects Projects
          Projects Projects Projects Projects Projects Projects Projects
          Projects Projects Projects Projects Projects Projects
          ProjectsProjectsProjectsProjectsProjectsProjects Projects Projects
          Projects Projects Projects Projects Projects Projects Projects
          Projects Projects Projects Projects Projects Projects
          ProjectsProjectsProjectsProjectsProjectsProjects Projects Projects
          Projects Projects Projects Projects Projects Projects Projects
          Projects Projects Projects Projects Projects Projects
          ProjectsProjectsProjectsProjectsProjectsProjects Projects Projects
          Projects Projects Projects Projects Projects Projects Projects
          Projects Projects Projects Projects Projects Projects
          ProjectsProjectsProjectsProjectsProjectsProjects Projects Projects
          Projects Projects Projects Projects Projects Projects Projects
          Projects Projects Projects Projects Projects Projects
          ProjectsProjectsProjectsProjectsProjectsProjects Projects Projects
          Projects Projects Projects Projects Projects Projects Projects
          Projects Projects Projects Projects Projects Projects
          ProjectsProjectsProjectsProjectsProjectsProjects Projects Projects
          Projects Projects Projects Projects Projects Projects Projects
          Projects Projects Projects Projects Projects Projects
        </div>
      </section>
    </>
  );
}
