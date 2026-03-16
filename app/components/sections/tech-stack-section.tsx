import { TechIcon } from "../ui/tech-icon";
import {
  frontEndTechnologies,
  backEndTechnologies,
  toolsAndPlatforms,
} from "@/app/data/technologies";

export function TechStackSection() {
  return (
    <div className="rounded-xl hover:bg-white/10 hover:backdrop-blur-md border border-primary hover:border-white/20 shadow-lg px-4 py-4">
      <div className="flex flex-row gap-12 mb-10">
        <span className="flex font-semibold text-xl text-white">Frontend</span>
        <ul className="flex flex-row flex-wrap gap-4">
          {frontEndTechnologies.map((tech, key) => (
            <TechIcon key={key} iconPath={tech.icon} name={tech.name} />
          ))}
        </ul>
      </div>
      <div className="flex flex-row gap-12 mb-10">
        <span className="flex font-semibold text-xl text-white">Backend</span>
        <ul className="flex flex-row flex-wrap gap-4">
          {backEndTechnologies.map((tech, key) => (
            <TechIcon key={key} iconPath={tech.icon} name={tech.name} />
          ))}
        </ul>
      </div>
      <div className="flex flex-row gap-12">
        <span className="flex font-semibold text-xl text-white">Backend</span>
        <ul className="flex flex-row flex-wrap gap-4">
          {toolsAndPlatforms.map((tech, key) => (
            <TechIcon key={key} iconPath={tech.icon} name={tech.name} />
          ))}
        </ul>
      </div>
    </div>
  );
}
