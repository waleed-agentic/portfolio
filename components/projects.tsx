import { SectionHeading } from "./section-heading";
import { ProjectCard } from "./project-card";
import type { Project } from "../lib/portfolio-data";

type ProjectsProps = {
  projects: Project[];
};

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Projects"
          description="Selected work focused on multi-agent workflows, LLM applications, and applied machine learning."
        />

        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} reverse={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}