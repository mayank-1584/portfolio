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
        <div className="flex items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-white/10 text-[10px] uppercase tracking-wider font-medium">
            <Plus className="w-2.5 h-2.5 text-neon-cyan" />
            Let's meet!
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-[10px] uppercase tracking-wider font-medium text-green-500">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Available
          </div>
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

        <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
          Crafting intelligent systems and beautiful interfaces. 
          Specializing in machine learning, web development, and simulation-based projects 
          blending logical problem-solving with creative visual design.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass border border-white/15 font-medium text-sm hover:border-white/40 hover:-translate-y-0.5 transition-all"
          >
            Explore My Works
            <span className="ml-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-foreground/10 group-hover:bg-foreground/20 transition-colors">
              <ArrowRight className="w-3 h-3" />
            </span>
          </a>
          <a
            href="/portfolio/Mayanksharma.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground transition-all hover:bg-foreground/5"
          >
            Download CV
            <Download className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.div>

      {/* Background decoration */}
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-72 h-72 bg-neon-purple/20 blur-[120px] pointer-events-none" />
    </section>
  );
}
