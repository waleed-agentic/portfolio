import Image from "next/image";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 md:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 pb-24 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-32">
        <Reveal className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            <Sparkles className="h-4 w-4" />
            Hello,
          </div>

          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-muted">AI/ML Engineer | Agentic AI Developer</p>
          <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-tight text-text sm:text-6xl lg:text-7xl">
            I&apos;m <span className="text-accent">Waleed</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted sm:text-xl">
            Data Science student specializing in Agentic AI systems (CrewAI, LangGraph) and LLM applications,
            building and deploying multi-agent systems on Groq-hosted LLMs.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:waleed.ml.ds@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-glow hover:-translate-y-0.5 hover:bg-accent-strong"
            >
              Hire Me
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white/5 px-6 py-3.5 text-sm font-semibold text-text hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
            >
              My Resume
              <Download className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <Reveal className="relative mx-auto flex w-full max-w-[460px] items-center justify-center lg:justify-end" delay={0.15} direction="right">
          <div className="relative aspect-square w-[18rem] sm:w-[24rem] lg:w-[28rem]">
            <div className="pointer-events-none absolute -inset-[6%] rounded-full bg-orange-500/30 blur-3xl" />
            <div className="relative z-10 h-full w-full overflow-hidden rounded-full">
              <Image
                src="/profile.png"
                alt="Waleed Ahmad portrait"
                fill
                priority
                sizes="(max-width: 1024px) 288px, 448px"
                className="scale-125 object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}