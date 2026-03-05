"use client";
// import { useActiveSection } from "@/app/hooks/useActiveSection";

import { useClientWrapper } from "@/app/components/context/ClientWrapper";

export default function Home() {
  // const activeSection = useActiveSection();

  const { isActive, setIsActive } = useClientWrapper();

  console.log(isActive, "inside Page");

  const trueOrFalse = () => {
    return isActive ? setIsActive(false) : setIsActive(true);
  };

  return (
    <>
      <section id="about">
        <div>
          <button onClick={trueOrFalse}>CLICK ME!!!!</button>
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
      <section id="tech-stack">
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
        </div>
      </section>
      <section id="projects">
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
