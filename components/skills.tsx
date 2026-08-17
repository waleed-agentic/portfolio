import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import type { SkillCategory } from "../lib/portfolio-data";
import { Bot, Cpu, Database, Layers3, Workflow } from "lucide-react";

const icons = [Bot, Layers3, Cpu, Workflow, Database];

function renderSkillLabel(item: string) {
  const beginnerMatch = item.match(/^(.*)\s\((Beginner)\)$/);

  if (!beginnerMatch) {
    return item;
  }

  const [, mainLabel, qualifier] = beginnerMatch;

  return (
    <>
      <span>{mainLabel}</span>{" "}
      <span className="text-xs text-muted">({qualifier})</span>
    </>
  );
}

type SkillsProps = {
  categories: SkillCategory[];
};

export function Skills({ categories }: SkillsProps) {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Skills"
          description="A focused stack for building agentic systems, LLM-powered products, and practical machine learning workflows."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = icons[index % icons.length];

            return (
              <Reveal
                key={category.title}
                className="rounded-[1.75rem] border border-border bg-surface/70 p-6 shadow-xl shadow-black/15"
                delay={index * 0.08}
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-text">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/8 bg-white/5 px-4 py-2 text-sm font-medium text-text/90"
                    >
                      {renderSkillLabel(item)}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}