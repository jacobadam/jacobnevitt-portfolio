import Image from "next/image";
import { ProjectData } from "@/app/data/projects";
import { Project } from "../../types/project.types";

export const ProjectCard = () => {
  return (
    <ul>
      {ProjectData.map((project: Project) => (
        <li key={project.id}>
          <div className="flex flex-col p-4 mb-4 rounded-2xl gap-1 scale-100 hover:scale-101 opacity-80 hover:opacity-100 bg-white/5 hover:bg-white/10 backdrop-blur-xl hover:backdrop-blur-md border border-white/5 hover:border-white/20">
            <h2 className="text-lg font-bold tracking-wide mb-2">
              {project.name}
            </h2>
            <div className="flex flex-col-reverse lg:flex-row flex-start grow-2 gap-4 mb-2">
              <div className="relative w-40 lg:w-1/4 h-20">
                <Image src={project.imageUrl} alt="" fill />
              </div>
              <div className="w-full lg:w-3/4">
                <p className="font-medium">{project.description}</p>
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
      ))}
    </ul>
  );
};
