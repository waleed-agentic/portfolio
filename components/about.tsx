import { Award, GraduationCap, Laptop2 } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { aboutFeatures, aboutStats } from "../lib/portfolio-data";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="About Me"
          description="BS Data Science student at Riphah International University Faisalabad (3rd Semester, CGPA 3.77), focused on becoming an AI/ML and Agentic AI Engineer. Hands-on experience building multi-agent systems with CrewAI and LangGraph, deployed using Streamlit and Google Colab."
        />

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="rounded-[2rem] border border-border bg-surface/70 p-8 shadow-2xl shadow-black/20">
            <div className="grid gap-4">
              {aboutFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 px-5 py-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text">{feature.title}</p>
                      <p className="text-sm text-muted">{feature.subtext}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {aboutStats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <Reveal
                  key={stat.label}
                  className="rounded-[1.75rem] border border-border bg-surface/70 p-6 shadow-xl shadow-black/15"
                  delay={index * 0.08}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="font-display text-4xl font-semibold text-text">{stat.value}</p>
                  <p className="mt-2 text-sm text-muted">{stat.label}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}