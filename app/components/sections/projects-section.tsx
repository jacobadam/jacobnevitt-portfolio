import { ProjectCard } from "../ui/project-card";
import { ProjectData } from "@/app/data/projects";

export function ProjectsSection() {
  return (
    <ul>
      {ProjectData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ul>
  );
}
