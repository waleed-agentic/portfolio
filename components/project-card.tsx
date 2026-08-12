import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Reveal } from "./reveal";
import type { Project } from "../lib/portfolio-data";

type ProjectCardProps = {
  project: Project;
  reverse?: boolean;
};

export function ProjectCard({ project, reverse = false }: ProjectCardProps) {
  return (
    <Reveal>
      <article
        className={`flex flex-col gap-8 rounded-[2rem] border border-border bg-surface/70 p-6 shadow-2xl shadow-black/20 md:items-center md:p-8 lg:flex-row ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="w-full lg:w-[42%]">
          <div className="overflow-hidden rounded-[1.75rem] border border-white/8 bg-[#091019] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>

            <div className="space-y-3 rounded-3xl border border-white/6 bg-white/4 p-5">
              {project.snippet.map((line, index) => (
                <div key={line} className="flex items-start gap-3 font-mono text-sm text-[#c9d1d9]">
                  <span className="select-none text-xs text-muted/80">0{index + 1}</span>
                  <code className="leading-6">{line}</code>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:flex-1">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-text md:text-3xl">{project.title}</h3>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted md:text-base">{project.description}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-accent-strong"
            >
              View GitHub
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  );
}