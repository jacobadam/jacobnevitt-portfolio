import { TechIcon } from "../ui/tech-icon";
import {
  frontEndTechnologies,
  backEndTechnologies,
  toolsAndPlatforms,
} from "@/app/data/technologies";

export function TechStackSection() {
  return (
    <div className="rounded-xl hover:bg-white/10 hover:backdrop-blur-md border border-primary hover:border-white/20 shadow-lg md:px-4 md:py-4">
      <div className="flex flex-row gap-12 mb-10">
        <h2 className="flex font-semibold text-sm md:text-base text-white">
          Frontend
        </h2>
        <ul className="flex flex-row flex-wrap gap-4">
          {frontEndTechnologies.map((tech, key) => (
            <TechIcon key={key} iconPath={tech.icon} name={tech.name} />
          ))}
        </ul>
      </div>
      <div className="flex flex-row gap-12 mb-10">
        <h2 className="flex font-semibold text-sm md:text-base text-white">
          Backend
        </h2>
        <ul className="flex flex-row flex-wrap gap-4">
          {backEndTechnologies.map((tech, key) => (
            <TechIcon key={key} iconPath={tech.icon} name={tech.name} />
          ))}
        </ul>
      </div>
      <div className="flex flex-row gap-12">
        <h2 className="flex font-semibold text-sm md:text-base text-white">
          Backend
        </h2>
        <ul className="flex flex-row flex-wrap gap-4">
          {toolsAndPlatforms.map((tech, key) => (
            <TechIcon key={key} iconPath={tech.icon} name={tech.name} />
          ))}
        </ul>
      </div>
    </div>
  );
}
