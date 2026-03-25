import { ExperienceCard } from "../ui/experience-card";
import { ExperienceCardData } from "@/app/data/experience";

export function ExperienceSection() {
  return (
    <ul>
      {ExperienceCardData.map((experience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}
    </ul>
  );
}
