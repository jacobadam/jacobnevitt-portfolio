import { TechnologyGroup } from "../types/technologies.types";

export const TechnologiesCardData: TechnologyGroup[] = [
  {
    title: "Frontend",
    technologies: [
      { name: "JavaScript", icon: "/javascript-logo.svg" },
      { name: "TypeScript", icon: "/typescript-logo.svg" },
      { name: "React", icon: "/react-logo.svg" },
      { name: "Next.js", icon: "/nextjs-logo.svg" },
      { name: "Vue.js", icon: "/vuejs-logo.svg" },
      { name: "Angular", icon: "/angular-logo.svg" },
      { name: "Tailwind CSS", icon: "/tailwindcss-logo.svg" },
      { name: "Motion", icon: "/motion-logo.svg" },
      { name: "GSAP", icon: "/gsap-logo.svg" },
    ],
  },
  {
    title: "Backend",
    technologies: [
      { name: "Node.js", icon: "/nodejs-logo.svg" },
      { name: "Express.js", icon: "/expressjs-logo.svg" },
      { name: "GraphQL", icon: "/graphql-logo.svg" },
      { name: "PostgreSQL", icon: "/postgresql-logo.svg" },
      { name: "MySQL", icon: "/mysql-logo.svg" },
    ],
  },
  {
    title: "Tools & Platforms",
    technologies: [
      { name: "Vite", icon: "/vite-logo.svg" },
      { name: "AWS", icon: "/aws-logo.svg" },
      { name: "Docker", icon: "/docker-logo.svg" },
      { name: "Git", icon: "/git-logo.svg" },
      { name: "Netlify", icon: "/netlify-logo.svg" },
      { name: "Vercel", icon: "/vercel-logo.svg" },
      { name: "Contentful", icon: "/contentful-logo.svg" },
      { name: "Algolia", icon: "/algolia-logo.svg" },
      { name: "Jest", icon: "/jest-logo.svg" },
      { name: "Vitest", icon: "/vitest-logo.svg" },
    ],
  },
];
