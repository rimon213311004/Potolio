"use client";

import { profile } from "../data";
import Reveal from "./Reveal";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  DownloadIcon,
  ArrowUpRight,
} from "./icons";

export default function Contact() {
  return (
    <section id="contact" className="section-pad relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <div className="grad-border glass relative overflow-hidden rounded-[1.5rem] p-6 text-center sm:rounded-[2rem] sm:p-10 lg:p-14">
            <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-accent1/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-accent2/25 blur-3xl" />

            <span className="relative inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.25em] text-accent2">
              Get In Touch
            </span>
            <h2 className="relative mt-5 font-[family-name:var(--font-space)] text-3xl font-bold sm:text-4xl lg:text-5xl">
              Let&apos;s build something <span className="gradient-text">great</span>
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-muted">
              Have a project, role, or idea in mind? I&apos;m open to freelance work,
              full-time roles, and collaborations. Let&apos;s talk.
            </p>

            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent1 to-accent2 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_rgba(124,92,255,0.7)] transition hover:scale-[1.03]"
              >
                <MailIcon width={18} height={18} /> Say Hello
              </a>
              <a
                href={profile.cv}
                download
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
              >
                <DownloadIcon width={18} height={18} /> Download CV
              </a>
            </div>

            <div className="relative mt-10 grid gap-4 sm:grid-cols-2">
              <a
                href={`mailto:${profile.email}`}
                className="glass flex items-center gap-3 rounded-2xl p-4 text-left transition hover:-translate-y-1"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-accent2">
                  <MailIcon width={18} height={18} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-muted">Email</span>
                  <span className="block truncate text-sm">{profile.email}</span>
                </span>
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="glass flex items-center gap-3 rounded-2xl p-4 text-left transition hover:-translate-y-1"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-accent2">
                  <PhoneIcon width={18} height={18} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-muted">Phone</span>
                  <span className="block truncate text-sm">{profile.phone}</span>
                </span>
              </a>
            </div>

            <div className="relative mt-6 flex justify-center gap-3">
              {[
                { href: profile.socials.github, icon: <GitHubIcon />, label: "GitHub" },
                { href: profile.socials.linkedin, icon: <LinkedInIcon />, label: "LinkedIn" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-muted transition hover:-translate-y-1 hover:text-foreground"
                >
                  {s.icon} {s.label} <ArrowUpRight width={14} height={14} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <footer className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} Md Raihan Rimon. All rights reserved.
          </p>
          <p>
            Built with <span className="text-foreground">Next.js</span>,{" "}
            <span className="text-foreground">Three.js</span> &{" "}
            <span className="text-foreground">Framer Motion</span>.
          </p>
        </div>
      </footer>
    </section>
  );
}
