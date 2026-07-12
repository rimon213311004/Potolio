"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "../data";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  DownloadIcon,
  ArrowUpRight,
} from "./icons";
import TiltCard from "./TiltCard";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % profile.roles.length),
      2600
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-24 sm:pt-28">
      {/* 3D background */}
      <div className="absolute inset-0 -z-[1] opacity-70 sm:opacity-90">
        <Scene3D />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 sm:gap-12 sm:px-6 sm:pb-20 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-muted backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-[family-name:var(--font-space)] text-[2.4rem] font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m <br />
            <span className="gradient-text">Md Raihan Rimon</span>
          </motion.h1>

          <div className="mt-5 h-8 text-lg font-medium text-muted sm:text-2xl">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="inline-block"
              >
                <span className="text-foreground">{profile.roles[roleIndex]}</span>
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent1 to-accent2 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_rgba(124,92,255,0.7)] transition hover:scale-[1.03]"
            >
              View My Work
              <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-white/10"
            >
              <DownloadIcon width={18} height={18} /> Download CV
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex items-center gap-3"
          >
            {[
              { href: profile.socials.github, icon: <GitHubIcon />, label: "GitHub" },
              { href: profile.socials.linkedin, icon: <LinkedInIcon />, label: "LinkedIn" },
              { href: `mailto:${profile.email}`, icon: <MailIcon />, label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-muted transition hover:-translate-y-1 hover:border-accent2/50 hover:text-foreground"
              >
                {s.icon}
              </a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-6 sm:gap-8"
          >
            {profile.stats.map((s) => (
              <div key={s.label}>
                <div className="font-[family-name:var(--font-space)] text-2xl font-bold gradient-text sm:text-3xl">
                  {s.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-muted">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <TiltCard intensity={10} className="relative">
            <div className="animate-float grad-border glass rounded-[2rem] p-3">
              <div className="overflow-hidden rounded-[1.6rem]">
                <Image
                  src={profile.photo}
                  alt="Md Raihan Rimon"
                  width={520}
                  height={620}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <div
                style={{ transform: "translateZ(50px)" }}
                className="glass absolute -left-4 -top-4 rounded-2xl px-4 py-3 text-sm shadow-xl"
              >
                <div className="font-semibold">MERN</div>
                <div className="text-xs text-muted">Full-Stack</div>
              </div>
              <div
                style={{ transform: "translateZ(50px)" }}
                className="glass absolute -bottom-4 -right-4 rounded-2xl px-4 py-3 text-sm shadow-xl"
              >
                <div className="font-semibold gradient-text">Next.js</div>
                <div className="text-xs text-muted">+ TypeScript</div>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted sm:flex">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="h-10 w-6 rounded-full border border-white/20 p-1">
          <div className="mx-auto h-2 w-1 animate-bounce rounded-full bg-accent2" />
        </div>
      </div>
    </section>
  );
}
