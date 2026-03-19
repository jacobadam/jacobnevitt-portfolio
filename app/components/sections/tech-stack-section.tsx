import { TechIcon } from "../ui/tech-icon";
import {
  frontEndTechnologies,
  backEndTechnologies,
  toolsAndPlatforms,
} from "@/app/data/technologies";

export function TechStackSection() {
  return (
    <>
      <div className="flex flex-col p-4 mb-4 rounded-2xl gap-1 scale-100 hover:scale-101 opacity-80 hover:opacity-100 bg-white/5 hover:bg-white/10 backdrop-blur-xl hover:backdrop-blur-md border border-white/5 hover:border-white/20">
        <h2 className="flex font-semibold text-sm md:text-base text-white">
          Frontend
        </h2>
        <ul className="flex flex-row flex-wrap gap-4">
          {frontEndTechnologies.map((tech, key) => (
            <TechIcon key={key} iconPath={tech.icon} name={tech.name} />
          ))}
        </ul>
      </div>
      <div className="flex flex-col p-4 mb-4 rounded-2xl gap-1 scale-100 hover:scale-101 opacity-80 hover:opacity-100 bg-white/5 hover:bg-white/10 backdrop-blur-xl hover:backdrop-blur-md border border-white/5 hover:border-white/20">
        <h2 className="flex font-semibold text-sm md:text-base text-white">
          Backend
        </h2>
        <ul className="flex flex-row flex-wrap gap-4">
          {backEndTechnologies.map((tech, key) => (
            <TechIcon key={key} iconPath={tech.icon} name={tech.name} />
          ))}
        </ul>
      </div>
      <div className="flex flex-col p-4 mb-4 rounded-2xl gap-1 scale-100 hover:scale-101 opacity-80 hover:opacity-100 bg-white/5 hover:bg-white/10 backdrop-blur-xl hover:backdrop-blur-md border border-white/5 hover:border-white/20">
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
