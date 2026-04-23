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
    repo: "https://github.com/yourusername/personal-site",
    live: "/",
  },
];
