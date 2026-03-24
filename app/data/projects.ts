import { Project } from "../types/project.types";

export const ProjectData: Project[] = [
  {
    id: 1,
    name: "Animal Shepherd",
    href: "https://www.animalshepherd.org/en",
    imageUrl: "/animal-shepherd.webp",
    description:
      "Designed and developed a multilingual production website for an animal rescue organization, improving donation flow, content clarity, and user engagement. Implemented localization and responsive performance using Next.js, Tailwind CSS, and next-intl.",
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
    name: "Article Cross-Sell",
    href: "https://www.article.com/product/27327/aino-floor-lamp-rice",
    imageUrl: "/article-cross-sell.webp",
    description:
      "Developed and A/B tested a cross-sell component for a high-traffic e-commerce product page, driving $30K in additional sales within the first month. Displayed related products above the fold to improve discovery and conversion. Built with Vue and Contentful.",
    technologies: ["Vue.js", "Contentful"],
  },

  {
    id: 3,
    name: "Mood Tracker",
    href: "https://mood-tracker-app.netlify.app/",
    imageUrl: "/mood-tracker-app.webp",
    description:
      "Built a real-time mood tracking application featuring custom-built SVG animations that dynamically and seamlessly transition between mood states based on user input. Implemented live updates and smooth UI interactions using a full-stack architecture with WebSockets.",
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
    name: "Greenhouse Web Designs",
    href: "https://www.greenhousewebdesigns.com/",
    imageUrl: "/greenhouse-web-designs.webp",
    description:
      "Designed and developed the Greenhouse Web Designs company website to showcase services and drive client acquisition. Emphasized conversion-focused UI, performance, SEO, and responsive design. Built with Next.js and Tailwind CSS.",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "Motion", "Vercel"],
  },
  {
    id: 5,
    name: "Ice Cream Inventory",
    href: "https://icecreaminventory.netlify.app/",
    imageUrl: "/ice-cream-inventory-app.webp",
    description:
      "Built a full-stack inventory management system to track products, stock levels, and sales performance. Implemented a dashboard with low-stock alerts and top-selling insights to support efficient restocking.",
    technologies: [
      "Angular",
      "TypeScript",
      "Tailwind CSS",
      ".NET",
      "PostgreSQL",
    ],
  },
];
