import { ProjectData } from "@/app/data/projects";
import { Project } from "../../types/project.types";

export const ProjectCard = () => {
  return (
    <ul>
      {ProjectData.map((project: Project) => (
        <li key={project.id}>
          <div className="lg:shadow-2xl md:p-4 rounded-lg hover:bg-white/10 hover:backdrop-blur-md border border-primary hover:border-white/20 mb-12 md:mb-8">
            <h2 className="text-lg font-bold tracking-wide mb-2">
              {project.name}
            </h2>
            <p className="font-medium">{project.description}</p>
            <ul className="flex flex-row gap-2 flex-wrap">
              {project.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
};
