import Image from "next/image";
import { ProjectData } from "@/app/data/projects";
import { Project } from "../../types/project.types";

export const ProjectCard = () => {
  return (
    <ul>
      {ProjectData.map((project: Project) => (
        <a
          key={project.id}
          href={project.href}
          rel="noopener noreferrer"
          target="_blank"
        >
          <li key={project.id}>
            <div className="group flex flex-col p-4 mb-4 rounded-lg gap-3 scale-100 hover:scale-101 opacity-80 hover:opacity-100 bg-white/5 hover:bg-white/10 backdrop-blur-xl hover:backdrop-blur-md border border-white/5 hover:border-white/20">
              <div className="group relative flex w-fit items-center gap-1 transition-all group-hover:text-secondary mb-2">
                <h2 className="text-lg lg:text-xl font-bold tracking-wide">
                  {project.name}
                </h2>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
              <div className="flex flex-col-reverse lg:flex-row flex-start gap-4 items-start mb-2">
                <div className="relative w-40 lg:w-1/4 h-28">
                  <Image
                    src={project.imageUrl}
                    alt=""
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="w-full lg:w-3/4">
                  <p className="text-base">{project.description}</p>
                </div>
              </div>
              <ul className="flex flex-row gap-2 flex-wrap">
                {project.technologies.map((tech) => (
                  <li
                    className="text-sm backdrop-blur-md text-amber-500 bg-secondary-foreground/10 rounded-2xl py-0.5 px-2"
                    key={tech}
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </a>
      ))}
    </ul>
  );
};
