import { TechIcon } from "../ui/tech-icon";
import {
  frontEndTechnologies,
  backEndTechnologies,
  toolsAndPlatforms,
} from "@/app/data/technologies";

export function TechStackSection() {
  return (
    <>
      <div className="flex flex-row gap-16 md:py-4 lg:px-4 rounded-lg hover:bg-white/10 hover:backdrop-blur-md border border-primary hover:border-white/20 mb-12 md:mb-0">
        <h2 className="flex font-semibold text-sm md:text-base text-white">
          Frontend
        </h2>
        <ul className="flex flex-row flex-wrap gap-4">
          {frontEndTechnologies.map((tech, key) => (
            <TechIcon key={key} iconPath={tech.icon} name={tech.name} />
          ))}
        </ul>
      </div>
      <div className="flex flex-row gap-16 md:py-4 lg:px-4 rounded-lg hover:bg-white/10 hover:backdrop-blur-md border border-primary hover:border-white/20 mb-12 md:mb-0">
        <h2 className="flex font-semibold text-sm md:text-base text-white">
          Backend
        </h2>
        <ul className="flex flex-row flex-wrap gap-4">
          {backEndTechnologies.map((tech, key) => (
            <TechIcon key={key} iconPath={tech.icon} name={tech.name} />
          ))}
        </ul>
      </div>
      <div className="flex flex-row gap-16 md:py-4 lg:px-4 rounded-lg hover:bg-white/10 hover:backdrop-blur-md border border-primary hover:border-white/20">
        <h2 className="flex font-semibold text-sm md:text-base text-white">
          Tools & Platforms
        </h2>
        <ul className="flex flex-row flex-wrap gap-4">
          {toolsAndPlatforms.map((tech, key) => (
            <TechIcon key={key} iconPath={tech.icon} name={tech.name} />
          ))}
        </ul>
      </div>
    </>
  );
}
