import { motion } from "framer-motion";
import { ArrowRight, Download, Plus } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-[88vh] flex flex-col justify-center relative py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        {/* Pill tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-white/10 text-xs mb-8">
          <Plus className="w-3 h-3" />
          Let's meet!
        </div>

        <h1 className="text-5xl md:text-7xl font-semibold leading-[1.02] tracking-tight">
          I'm Mayank Sharma
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(180deg, oklch(0.96 0.01 285), color-mix(in oklab, var(--neon-pink) 35%, oklch(0.55 0.02 285)))",
            }}
          >
            Software developer and
            <br />
            ML engineer.
          </span>
        </h1>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-full glass border border-white/15 font-medium text-sm hover:border-white/40 hover:-translate-y-0.5 transition-all"
          >
            My Works
            <span className="ml-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-foreground/10 group-hover:bg-foreground/20 transition-colors">
              <ArrowRight className="w-3 h-3" />
            </span>
          </a>
          <a
            href="Mayanksharma.pdf"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Download CV
            <Download className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
     
    </section>
  );
}
