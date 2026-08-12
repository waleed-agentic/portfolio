import { Award, BadgeCheck } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import type { Certification } from "../lib/portfolio-data";

type CertificationsProps = {
  certifications: Certification[];
};

export function Certifications({ certifications }: CertificationsProps) {
  return (
    <section id="certifications" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Certifications"
          title="Certifications"
          description="Selected certifications and courses across agentic AI, generative AI, deep learning, and analytics."
        />

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {certifications.map((certification, index) => {
            const Icon = certification.inProgress ? BadgeCheck : Award;

            return (
              <Reveal
                key={certification.title}
                className="rounded-[1.75rem] border border-border bg-surface/70 p-6 shadow-xl shadow-black/15 transition-transform duration-300 hover:-translate-y-1 hover:border-accent/30"
                delay={index * 0.07}
              >
                <div className="mb-5 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold leading-snug text-text">{certification.title}</h3>
                      {certification.inProgress ? (
                        <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-accent">
                          In Progress
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-muted">{certification.issuer}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}