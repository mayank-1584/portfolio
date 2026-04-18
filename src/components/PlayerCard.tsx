import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Twitter, Dribbble, MessageCircle } from "lucide-react";
import avatar from "@/assets/avatar.jpg";

export function PlayerCard() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-[28%] lg:max-w-[380px] flex items-center justify-center p-4 lg:p-6 z-20"
    >
      <div className="relative w-full max-w-sm">
        <div className="relative glass rounded-3xl p-5 border border-white/5">
          {/* Header: name */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-sm">
              ✦
            </div>
            <h2 className="text-2xl font-semibold leading-tight tracking-tight">
              Mayank<br />Sharma
            </h2>
          </div>

          {/* Avatar */}
          <div className="relative rounded-2xl overflow-hidden mb-5 aspect-square">
            <img
              src={avatar}
              alt="Alex Voss avatar"
              width={512}
              height={512}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, transparent 60%, color-mix(in oklab, var(--background) 70%, transparent))",
              }}
            />
          </div>

          {/* Specialization */}
          <div className="rounded-2xl glass border border-white/5 p-4 mb-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Specialization:
            </span>
            <p className="text-sm font-medium mt-1.5 leading-snug">
              Software Developer<br />and ML Engineer
            </p>
          </div>

          {/* Location */}
          <div className="rounded-2xl glass border border-white/5 p-4 mb-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Based in:
            </span>
            <p className="text-sm font-medium mt-1.5">Delhi , India</p>
          </div>

          {/* Social pills + CTA */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex gap-1.5">
              {[Github, Linkedin, Twitter, Instagram, Dribbble].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="w-8 h-8 rounded-full glass border border-white/10 flex items-center justify-center hover:border-foreground/40 hover:-translate-y-0.5 transition-all"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          <a
            href="#contact"
            className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:opacity-90 hover:-translate-y-0.5 transition-all"
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
