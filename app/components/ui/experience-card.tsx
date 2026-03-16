import { ExperienceCardData } from "@/app/data/experience";
import { ExperienceType } from "@/app/types/experience.types";

export const ExperienceCard = () => {
  return (
    <main>
      <ul>
        {ExperienceCardData.map((experience: ExperienceType) => (
          <li key={experience.id}>
            <div className="shadow-lg bg-white/5 px-4 py-4 rounded-xl hover:bg-white/10 hover:backdrop-blur-md border border-primary hover:border-white/20">
              <h1>{experience.company}</h1>
              <h2>{experience.title}</h2>
              <span>{experience.year}</span>
              <p>{experience.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};
