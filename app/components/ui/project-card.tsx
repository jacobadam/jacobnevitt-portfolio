import Image from "next/image";
import { Project } from "../../types/project.types";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <li>
      <a href={project.href} rel="noopener noreferrer" target="_blank">
        <div className="group flex flex-col p-4 mb-4 rounded-lg scale-100 hover:scale-101 opacity-80 hover:opacity-100 bg-white/5 hover:bg-white/10 backdrop-blur-xl hover:backdrop-blur-md border border-white/5 hover:border-white/20">
          <div className="group text-white relative flex w-fit items-center gap-1 transition-all group-hover:text-secondary">
            <h2 className="text-base lg:text-lg font-bold tracking-wide">
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

          <div className="flex flex-col-reverse xl:flex-row gap-1 xl:gap-4 items-start mt-1 mb-2">
            <div className="w-full xl:w-2/5 flex justify-start">
              <div className="relative w-40 sm:w-48 md:w-56 xl:w-full aspect-video">
                <Image
                  src={project.imageUrl}
                  alt={`${project.name} screenshot`}
                  fill
                  className="object-contain rounded-md"
                  sizes="(min-width: 1280px) 40vw, 224px"
                />
              </div>
            </div>

            <div className="w-full xl:w-3/5 2xl:mt-1">
              <p className="text-sm">{project.description}</p>
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
      </a>
    </li>
  );
};
