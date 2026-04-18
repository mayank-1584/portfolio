import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import type { MouseEvent } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Section } from "./Section";

const projects = [
  {
    title: "Credit Risk Model",
    description: "Built a machine learning-based Credit Risk Prediction system using Logistic Regression with hyperparameter tuning to classify loan applicants as high or low risk.",
    tech: ["Flask", "GridSearchCV", "ElasticBeanStalk"],
    accent: "var(--neon-cyan)",
    github: "https://github.com/mayank-1584/credit_risk_model",
  },
  {
    title: "Test Forest Fire",
    description: "Predicts FWI based on Temperature, RH, Ws, Rain, FFMC, DMC, ISI, Classes, and Region.Simple web interface using HTML.Uses a Ridge Regression model.",
    tech: ["Linear Regresion", "Flask", "ElasticBeanStalk"],
    accent: "var(--neon-purple)",
    github: "https://github.com/mayank-1584/ml-1testforestfire",
  },
  {
    title: "Rishi Printer",
    description: "Real-time product based website.",
    tech: ["TypeScript", "ClickHouse", "React"],
    accent: "var(--neon-pink)",
    github: "https://github.com/mayank-1584/_rishi_printer",
  },
  {
    title: "NA",
    description: "working on it",
    tech: ["Con", "fiden", "tial"],
    accent: "var(--neon-cyan)",
    github: "#",
  },
];

function TiltCard({ project, i }: { project: (typeof projects)[number]; i: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-50, 50], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-50, 50], [-8, 8]), { stiffness: 200, damping: 20 });

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="group relative"
    >
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md -z-10"
        style={{ background: project.accent }}
      />
      <div
        className="glass rounded-2xl p-6 h-full border border-border/60 group-hover:border-transparent transition-colors duration-300"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="flex items-start justify-between mb-4" style={{ transform: "translateZ(20px)" }}>
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center font-mono text-xs"
            style={{
              background: `color-mix(in oklab, ${project.accent} 20%, transparent)`,
              color: project.accent,
            }}
          >
            0{i + 1}
          </div>
          <div className="flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 rounded-md glass flex items-center justify-center hover:text-neon-cyan transition-colors"
            >           
  <Github className="w-4 h-4" />
</a>
            <a href="#" aria-label="Live demo" className="w-8 h-8 rounded-md glass flex items-center justify-center hover:text-neon-cyan transition-colors">
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2" style={{ transform: "translateZ(15px)" }}>
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] px-2 py-1 rounded-full bg-muted/40 text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Things I've shipped">
      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <TiltCard key={p.title} project={p} i={i} />
        ))}
      </div>
    </Section>
  );
}
