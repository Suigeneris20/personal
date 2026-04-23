import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-[--border] rounded-lg p-5 bg-[--card] hover:border-[--fg]/30 transition-colors">
      <div className="flex items-start justify-between gap-4 mb-2">
        <h3 className="font-semibold">{project.title}</h3>
        <div className="flex gap-3 shrink-0 text-xs text-[--muted]">
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer" className="hover:text-[--fg] transition-colors">
              Code ↗
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-[--fg] transition-colors">
              Live ↗
            </a>
          )}
        </div>
      </div>
      <p className="text-sm text-[--muted] mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span key={t} className="text-xs px-2 py-0.5 rounded bg-[--border] text-[--muted]">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
