export interface Project {
  title: string;
  description: string;
  tech: string[];
  repo?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    title: "This Website",
    description:
      "Personal portfolio and blog built with Next.js, Tailwind CSS, and MDX.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    repo: "https://github.com/Suigeneris20/personal",
    live: "/",
  },
  {
    title: "Fashionable",
    description:
      "A directory of sustainable fashion brands and products. Browse and filter items by gender, category, sustainability tags, and brand.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Playwright"],
    repo: "https://github.com/Suigeneris20/fashionable",
    live: "https://fashionable-kappa.vercel.app/",
  },
];
