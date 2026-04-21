import { TechCard } from "../ui/tech-card";
import { TechnologiesCardData } from "@/app/data/technologies";

export function TechStackSection() {
  return (
    <ul>
      {TechnologiesCardData.map((group) => (
        <TechCard key={group.title} technologyGroup={group} />
      ))}
    </ul>
  );
}
