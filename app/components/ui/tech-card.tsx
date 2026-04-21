import { TechIcon } from "../ui/tech-icon";
import { TechnologyGroup } from "@/app/types/technologies.types";

type TechCardProps = {
  technologyGroup: TechnologyGroup;
};

export const TechCard = ({ technologyGroup }: TechCardProps) => {
  return (
    <li>
      <div className="flex flex-col p-4 mb-4 rounded-lg gap-1 scale-100 hover:scale-101 opacity-80 hover:opacity-100 bg-white/5 hover:bg-white/10 backdrop-blur-xl hover:backdrop-blur-md border border-white/5 hover:border-white/20">
        <h2 className="flex font-bold text-sm md:text-sm text-white mb-2">
          {technologyGroup.title}
        </h2>
        <ul className="flex flex-row flex-wrap gap-4">
          {technologyGroup.technologies.map((tech, key) => (
            <TechIcon key={key} iconPath={tech.icon} name={tech.name} />
          ))}
        </ul>
      </div>
    </li>
  );
};
