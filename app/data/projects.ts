import { Project } from "../types/project.types";

export const ProjectData: Project[] = [
  {
    id: 1,
    name: "Animal Shepherd",
    href: "https://www.animalshepherd.org/en",
    imageUrl: "/animal-shepherd.webp",
    description:
      "A multilingual production website for an animal rescue organization, designed to support donations, engagement, and clear content delivery. Built with Next.js, Tailwind CSS, and next-intl for responsive performance, localization, and fast deployment.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "next-intl",
      "Vercel",
    ],
  },
  {
    id: 2,
    name: "Article PDP Cross-Sell Feature",
    href: "https://www.article.com/product/27327/aino-floor-lamp-rice",
    imageUrl: "/article-cross-sell.webp",
    description:
      "A cross-sell component for a high-traffic e-commerce product page, displaying related items above the fold. Built with Vue and Contentful to support product discovery and improve conversion-focused UI.",
    technologies: ["Vue.js", "Contentful"],
  },

  {
    id: 3,
    name: "Mood Tracker App",
    href: "https://mood-tracker-app.netlify.app/",
    imageUrl: "/mood-tracker-app.webp",
    description:
      "A real-time mood tracking app with animated SVG visualizations that respond to user input. Built with a full-stack architecture supporting live updates and smooth, responsive UI interactions.",
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
    id: 4,
    name: "Freelance Website",
    href: "https://www.greenhousewebdesigns.com/",
    imageUrl: "/greenhouse-web-designs.webp",
    description:
      "A production website for my freelance business, designed to showcase services and generate client leads. Built with Next.js and Tailwind CSS, focusing on responsive design, performance, and smooth user interactions.",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "Motion", "Vercel"],
  },
  {
    id: 5,
    name: "Ice Cream Inventory App",
    href: "",
    imageUrl: "/ice-cream-inventory-app.webp",
    description:
      "An inventory management system for tracking products, stock levels, and sales performance. Includes a dashboard with insights on best-selling items and low-stock alerts to support efficient restocking.",
    technologies: [
      "Angular",
      "TypeScript",
      "Tailwind CSS",
      ".Net",
      "PostgreSQL",
    ],
  },
];
