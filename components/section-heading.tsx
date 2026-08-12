import { Reveal } from "./reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-10 max-w-3xl">
      <div className="mb-4 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
        {eyebrow}
      </div>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-text md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-sm leading-7 text-muted md:text-base">{description}</p> : null}
    </Reveal>
  );
}