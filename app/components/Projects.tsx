"use client";

import { projects } from "../data";
import Reveal, { SectionHeading } from "./Reveal";
import TiltCard from "./TiltCard";
import { GitHubIcon, ArrowUpRight } from "./icons";

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Portfolio"
          title="Featured Projects"
          subtitle="Real, production-style applications I've designed and built end-to-end."
        />

        <div className="grid gap-7 md:grid-cols-2" style={{ perspective: 1400 }}>
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <TiltCard intensity={9} className="h-full">
                <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-white/20">
                  {/* Accent glow */}
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-30 blur-3xl transition-opacity group-hover:opacity-60"
                    style={{ background: p.accent }}
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <div
                      style={{ transform: "translateZ(40px)" }}
                      className="grid h-16 w-16 place-items-center rounded-2xl text-3xl shadow-lg"
                    >
                      <span
                        className="grid h-16 w-16 place-items-center rounded-2xl"
                        style={{ background: p.accent }}
                      >
                        {p.emoji}
                      </span>
                    </div>
                    <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-muted">
                      {p.type}
                    </span>
                  </div>

                  <h3
                    style={{ transform: "translateZ(30px)" }}
                    className="mt-6 font-[family-name:var(--font-space)] text-2xl font-bold"
                  >
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {p.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center gap-3">
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-medium ring-1 ring-white/10 transition hover:bg-white/10"
                    >
                      <GitHubIcon width={16} height={16} /> Code
                    </a>
                    {p.live ? (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/live inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent1 to-accent2 px-4 py-2 text-sm font-semibold text-white transition hover:scale-[1.03]"
                      >
                        Live View
                        <ArrowUpRight className="transition-transform group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-muted">
                        📱 Mobile App
                      </span>
                    )}
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 text-center">
            <a
              href="https://github.com/rimon213311004"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium transition hover:bg-white/10"
            >
              <GitHubIcon width={18} height={18} /> View all repositories on GitHub
              <ArrowUpRight />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
