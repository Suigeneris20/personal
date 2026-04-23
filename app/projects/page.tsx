import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = generatePageMetadata({
  title: "Projects",
  description: "Things I've built.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-bold mb-2">Projects</h1>
      <p className="text-[--muted] mb-10">Things I&apos;ve built.</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  );
}
