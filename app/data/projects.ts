type Project = {
  name: string;
  url?: string;
  imageUrl?: string;
  description: string;
  technologies: string[];
};

export const ProjectData: Project[] = [
  {
    name: "Mood Tracker App",
    url: "https://mood-tracker-app.netlify.app/",
    imageUrl: "",
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
      "PostgresQl",
      "Socket.IO",
      "Netlify",
      "Heroku",
    ],
  },
  {
    name: "Ice Cream Inventory App",
    url: "",
    imageUrl: "",
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
    name: "Freelance Website",
    url: "https://www.greenhousewebdesigns.com/",
    imageUrl: "",
    description:
      "A fast, responsive portfolio built with Next.js, Tailwind CSS, and Motion. Designed to showcase freelance services with smooth animations, modern UI, and optimized performance.",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "Motion", "Vercel"],
  },
  {
    name: "Portfolio V1",
    url: "",
    imageUrl: "",
    description: "First version of my portfolio built in Vue.js",
    technologies: ["Vue.js"],
  },
];
