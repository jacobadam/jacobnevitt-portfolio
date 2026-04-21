export type Technology = {
  name: string;
  icon: string;
};

export type TechnologyGroup = {
  title: "Frontend" | "Backend" | "Tools & Platforms";
  technologies: Technology[];
};
