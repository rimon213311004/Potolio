"use client";

import { skills } from "../data";
import Reveal, { SectionHeading } from "./Reveal";
import TiltCard from "./TiltCard";

const groupAccent: Record<string, string> = {
  Frontend: "from-accent1/25 to-accent2/10 text-accent2",
  Backend: "from-emerald-500/25 to-accent2/10 text-emerald-300",
  "IT & Tools": "from-accent3/25 to-accent1/10 text-accent3",
};

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Tech Stack"
          title="Skills & Tools"
          subtitle="The technologies I use to design, build, and ship reliable web applications."
        />

        <div className="grid gap-6 md:grid-cols-3" style={{ perspective: 1200 }}>
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={i * 0.1}>
              <TiltCard intensity={8}>
                <div className="grad-border glass h-full rounded-3xl p-6">
                  <div
                    className={`mb-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-br px-4 py-2 text-sm font-semibold ${groupAccent[s.group]}`}
                  >
                    {s.group}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-muted transition hover:border-accent2/40 hover:text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
