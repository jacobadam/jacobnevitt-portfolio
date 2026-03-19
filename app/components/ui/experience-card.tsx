import { ExperienceCardData } from "@/app/data/experience";
import { Experience } from "@/app/types/experience.types";

export const ExperienceCard = () => {
  return (
    <ul>
      {ExperienceCardData.map((experience: Experience) => (
        <li key={experience.id}>
          <div className="flex flex-col md:p-4 rounded-2xl gap-1 scale-100 hover:scale-100 hover:opacity-100 opacity-80 hover:bg-white/10 hover:backdrop-blur-md border hover:border-white/20 mb-4 backdrop-blur-xl z-10 border-white/5 bg-white/5">
            <span className="text-xs font-black uppercase tracking-widest text-secondary">
              {experience.year}
            </span>
            <h2 className="text-2xl font-bold tracking-tighter text-white">
              {experience.company}
            </h2>
            <h3 className="text-lg font-medium text-slate-300">
              {experience.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-400 font-medium">
              {experience.description}
            </p>
            <ul className="pl-3">
              {experience.highlights.map((highlight, index) => (
                <li
                  className="list-disc mt-3 text-sm text-white/80"
                  key={index}
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
};
