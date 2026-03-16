import { ExperienceCardData } from "@/app/data/experience";
import { ExperienceType } from "@/app/types/experience.types";

export const ExperienceCard = () => {
  return (
    <main>
      <ul>
        {ExperienceCardData.map((experience: ExperienceType) => (
          <li key={experience.id}>
            <div className="lg:shadow-lg lg:bg-white/5 md:px-4 md:py-4 rounded-lg hover:bg-white/10 hover:backdrop-blur-md border border-primary hover:border-white/20 mb-12 md:mb-8">
              <h2 className="text-lg font-bold tracking-wide mb-2">
                {experience.company}
              </h2>
              <h3 className="font-semibold mb-2">{experience.title}</h3>
              <p className="font-extralight italic mb-2">{experience.year}</p>
              <p className="font-medium">{experience.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};
