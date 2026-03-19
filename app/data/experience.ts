import { Experience } from "../types/experience.types";

export const ExperienceCardData: Experience[] = [
  {
    id: 1,
    company: "Greenhouse Web Designs",
    title: "Founding Developer",
    year: "2024-Present",
    description:
      "Founder of Greenhouse Web Designs, building high-performing, responsive websites for startups and small businesses.",
    highlights: [
      "Developed modern frontends using React, Vue, Next.js, Angular, and Tailwind CSS",
      "Built custom components and integrated third-party APIs including Google Maps",
      "Optimized SEO and accessibility achieving top Lighthouse scores",
      "Deployed applications via Vercel and managed end-to-end delivery",
      "Collaborated closely with clients to deliver tailored solutions under tight deadlines",
    ],
  },
  {
    id: 2,
    company: "Article",
    title: "Software Developer",
    year: "2021-2024",
    description:
      "Frontend developer on the Storefront team building and optimizing features for a high-traffic e-commerce platform.",
    highlights: [
      "Increased conversions by 12% through a product page redesign",
      "Built cross-sell component generating $30K in its first month",
      "Improved Lighthouse score by 25% and reduced load times by 8%",
      "Enhanced product discovery by optimizing Algolia-powered search",
      "Developed features using Vue.js, React, and Next.js for millions of users",
    ],
  },
  {
    id: 3,
    company: "Spareroom",
    title: "Software Developer",
    year: "2019-2020",
    description:
      "Backend-focused developer contributing to a large rental platform while supporting internal tools with full-stack work.",
    highlights: [
      "Developed RESTful APIs in Perl for listings, accounts, and transactions",
      "Integrated secure payment processing using Node.js and Stripe",
      "Built internal admin tools with Angular for data access and reporting",
      "Queried and analyzed customer data using MySQL for marketing insights",
      "Improved team efficiency by creating automation scripts in Go",
    ],
  },
];
