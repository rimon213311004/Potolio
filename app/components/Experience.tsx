"use client";

import { experience, education } from "../data";
import Reveal, { SectionHeading } from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Journey"
          title="Experience & Education"
          subtitle="Where I've worked and what I've studied along the way."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Experience */}
          <div>
            <h3 className="mb-6 font-[family-name:var(--font-space)] text-xl font-semibold text-muted">
              Work Experience
            </h3>
            <div className="relative border-l border-white/10 pl-8">
              {experience.map((e, i) => (
                <Reveal key={e.company} delay={i * 0.08}>
                  <div className="relative pb-10 last:pb-0">
                    <span
                      className={`absolute -left-[41px] top-1 grid h-5 w-5 place-items-center rounded-full ring-4 ring-[#050509] ${
                        e.current
                          ? "bg-gradient-to-br from-accent1 to-accent2"
                          : "bg-white/20"
                      }`}
                    >
                      {e.current && (
                        <span className="h-2 w-2 animate-ping rounded-full bg-white" />
                      )}
                    </span>
                    <div className="glass rounded-2xl p-5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="font-semibold">{e.role}</h4>
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted">
                          {e.period}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-accent2">{e.company}</p>
                      <ul className="mt-3 space-y-2">
                        {e.points.map((p) => (
                          <li
                            key={p}
                            className="flex gap-2 text-sm text-muted"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent1" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="mb-6 font-[family-name:var(--font-space)] text-xl font-semibold text-muted">
              Education
            </h3>
            <div className="relative border-l border-white/10 pl-8">
              {education.map((e, i) => (
                <Reveal key={e.degree} delay={i * 0.08}>
                  <div className="relative pb-10 last:pb-0">
                    <span className="absolute -left-[41px] top-1 grid h-5 w-5 place-items-center rounded-full bg-white/20 ring-4 ring-[#050509]" />
                    <div className="glass rounded-2xl p-5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="font-semibold">{e.degree}</h4>
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted">
                          {e.period}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-accent2">{e.school}</p>
                      <p className="mt-3 inline-block rounded-lg bg-gradient-to-r from-accent1/20 to-accent2/10 px-3 py-1 text-sm font-medium">
                        {e.result}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
