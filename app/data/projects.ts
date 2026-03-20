import { Project } from "../types/project.types";

export const ProjectData: Project[] = [
  {
    id: 1,
    name: "Mood Tracker App",
    url: "https://mood-tracker-app.netlify.app/",
    imageUrl: "/mood-tracker-app.webp",
    description:
      "A React app with smooth, responsive SVG animation sequences that visually represent different mood states while maintaining seamless backend integration and real-time data updates.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "GSAP",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Socket.IO",
      "Netlify",
      "Heroku",
    ],
  },
  {
    id: 2,
    name: "Ice Cream Inventory App",
    url: "",
    imageUrl: "/ice-cream-inventory-app.webp",
    description:
      "A clean inventory management web app for an ice cream shop that enables adding, updating, and removing products while providing a dashboard with insights on best-selling flavors and low-stock alerts for smarter restocking decisions.",
    technologies: [
      "Angular",
      "TypeScript",
      "Tailwind CSS",
      ".Net",
      "PostgreSQL",
    ],
  },
  {
    id: 3,
    name: "Freelance Website",
    url: "https://www.greenhousewebdesigns.com/",
    imageUrl: "/greenhouse-web-designs.webp",
    description:
      "A fast, responsive portfolio built with Next.js, Tailwind CSS, and Motion. Designed to showcase freelance services with smooth animations, modern UI, and optimized performance.",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "Motion", "Vercel"],
  },
  {
    id: 4,
    name: "Portfolio V1",
    url: "",
    imageUrl: "/portfolio-v1.webp",
    description:
      "Original portfolio built with Vue and SCSS, where I first explored the dual-column layout. Focused on clean structure, responsive design, and establishing the foundation for my current approach to layout and usability.",
    technologies: ["Vue.js", "JavaScript", "SCSS", "tsParticles"],
  },
];
