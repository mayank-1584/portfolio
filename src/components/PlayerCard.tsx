import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  Trophy,
  Target,
} from "lucide-react";

import AsciiPortrait from "./AsciiPortrail";

export function PlayerCard() {
  const socials = [
    {
      Icon: Github,
      href: "https://github.com/mayank-1584",
    },
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/in/mayank-sharma-ab539b283/",
    },
    {
      Icon: Target,
      href: "https://leetcode.com/u/tGwSk8GHrt/",
    },
    {
      Icon: Instagram,
      href: "https://www.instagram.com/mayank_1584/",
    },
    {
      Icon: Trophy,
      href: "https://codeforces.com/profile/mksharmakaku1584",
    },
  ];

  return (
    <motion.aside
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-[28%] lg:max-w-[380px] flex items-center justify-center p-4 lg:p-6 z-20"
    >
      <div className="relative w-full max-w-sm">
        <div className="relative glass rounded-3xl border border-white/5  bg-black p-5">

          {/* Header */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl glass border border-white/10  bg-black flex items-center justify-center">
              ✦
            </div>

            <h2 className="text-2xl font-semibold leading-tight tracking-tight">
              Mayank
              <br />
              Sharma
            </h2>
          </div>

          {/* ASCII Avatar */}
          <div className="relative mb-5 aspect-square overflow-hidden rounded-2xl border border-white/5 bg-black flex items-center justify-center">

            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className="w-full h-full flex items-center justify-center scale-[0.8]">
                <AsciiPortrait />
              </div>
            </div>

            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, transparent 100%, color-mix(in oklab, var(--background) 70%, transparent))",
              }}
            />
          </div>

          {/* Specialization */}
          <div className="rounded-2xl glass border border-white/5  bg-black p-4 mb-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Specialization
            </span>

            <p className="mt-2 text-sm font-medium leading-snug">
              Software Developer
              <br />
              AI & ML Engineer
            </p>
          </div>

          {/* Location */}
          <div className="rounded-2xl glass border border-white/5  bg-black p-4 mb-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Based In
            </span>

            <p className="mt-2 text-sm font-medium">
              Delhi, India
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-2 mb-4">
            {socials.map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full glass border border-white/10  bg-black flex items-center justify-center transition-all hover:border-white/40 hover:-translate-y-1"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-medium text-sm transition-all hover:scale-[1.02]"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in oklab, var(--neon-pink) 60%, white), color-mix(in oklab, var(--neon-purple) 50%, white))",
              color: "oklch(0.15 0.01 285)",
            }}
          >
            <MessageCircle className="w-4 h-4" />
            Let's Work Together
          </a>

        </div>
      </div>
    </motion.aside>
  );
}