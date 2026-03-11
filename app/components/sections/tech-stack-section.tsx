import { TechIcon } from "../ui/tech-icon";
import { frontEndTechnologies } from "@/app/data/technologies";

export function TechStackSection() {
  return (
    <>
      <h2>Frontend</h2>
      <ul className="flex flex-row flex-wrap gap-4 max-w-2xl">
        {frontEndTechnologies.map((tech, key) => (
          <TechIcon key={key} iconPath={tech.icon} name={tech.name} />
        ))}
      </ul>
    </>
  );
}
