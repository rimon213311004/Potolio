"use client";

import { about, marqueeSkills, profile } from "../data";
import Reveal, { SectionHeading } from "./Reveal";
import { MapPinIcon, MailIcon, PhoneIcon } from "./icons";

const highlights = [
  {
    title: "Full-Stack Engineering",
    body: "End-to-end apps with React, Next.js, Node & MongoDB — auth, real-time, and clean REST APIs.",
    icon: "⚛️",
  },
  {
    title: "Project Management",
    body: "Coordinating international research & dev projects from initiation to on-time, quality delivery.",
    icon: "📊",
  },
  {
    title: "Client Solutions",
    body: "Translating business needs into modern CMS & web solutions that clients love to come back to.",
    icon: "🤝",
  },
];

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="About Me"
          title="Turning ideas into shippable software"
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="grad-border glass rounded-3xl p-6 sm:p-8">
              <p className="text-base leading-relaxed text-muted sm:text-lg">{about}</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 text-sm text-muted">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 text-accent2">
                    <MapPinIcon width={18} height={18} />
                  </span>
                  {profile.location}
                </div>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 text-sm text-muted transition hover:text-foreground"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 text-accent2">
                    <MailIcon width={18} height={18} />
                  </span>
                  {profile.email}
                </a>
                <a
                  href={`tel:${profile.phone}`}
                  className="flex items-center gap-3 text-sm text-muted transition hover:text-foreground"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 text-accent2">
                    <PhoneIcon width={18} height={18} />
                  </span>
                  {profile.phone}
                </a>
                <div className="flex items-center gap-3 text-sm text-muted">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 text-accent2">
                    🎓
                  </span>
                  B.Sc. in CSE
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.1}>
                <div className="glass flex items-start gap-4 rounded-2xl p-5 transition hover:-translate-y-1 hover:border-accent2/40">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent1/30 to-accent2/20 text-2xl">
                    {h.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold">{h.title}</h3>
                    <p className="mt-1 text-sm text-muted">{h.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Skills marquee */}
      <div className="relative mt-16 overflow-hidden py-6 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-4">
          {[...marqueeSkills, ...marqueeSkills].map((s, i) => (
            <span
              key={i}
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm text-muted"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
