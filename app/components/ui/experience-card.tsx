import { ExperienceCardData } from "@/app/data/experience";
import { Experience } from "@/app/types/experience.types";

export const ExperienceCard = () => {
  function highlightText(text: string, keywords: string[]) {
    const parts = text.split(new RegExp(`(${keywords.join("|")})`, "gi"));

    return parts.map((part, i) =>
      keywords.some((k) => k.toLowerCase() === part.toLowerCase()) ? (
        <span key={i} className="text-white font-bold">
          {part}
        </span>
      ) : (
        part
      ),
    );
  }

  return (
    <ul>
      {ExperienceCardData.map((experience: Experience) => (
        <li key={experience.id}>
          <div className="flex flex-col p-4 mb-4 rounded-2xl gap-1 scale-100 hover:scale-101 opacity-80 hover:opacity-100 bg-white/5 hover:bg-white/10 backdrop-blur-xl hover:backdrop-blur-md border border-white/5 hover:border-white/20">
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
              {experience.year}
            </span>
            <h2 className="text-2xl font-bold tracking-tighter text-white">
              {experience.company}
            </h2>
            <h3 className="text-lg font-medium text-primary-foreground">
              {experience.title}
            </h3>
            <p className="text-base text-secondary-foreground">
              {highlightText(experience.description, experience.keywords)}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};
