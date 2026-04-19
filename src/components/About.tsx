import { motion } from "framer-motion";
import { Brain, Rocket, Layers } from "lucide-react";
import { Section } from "./Section";

const cards = [
  {
    icon: Brain,
    title: "ML & AI",
    body: "Designing models that learn — from transformers to reinforcement learning agents.",
    color: "var(--neon-cyan)",
  },
  {
    icon: Layers,
    title: "AWS",
    body: "From deploying models/site to scalable. End-to-end ownership of products.",
    color: "var(--neon-purple)",
  },
  {
    icon: Rocket,
    title: "Performance",
    body: "Obsessed with milliseconds, smooth interactions, and clean architecture.",
    color: "var(--neon-pink)",
  },
];

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Who's behind the keyboard">
      <div className="grid md:grid-cols-3 gap-5">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass neon-border rounded-2xl p-6 group hover:-translate-y-1 transition-transform duration-300"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
              style={{ background: `color-mix(in oklab, ${c.color} 20%, transparent)` }}
            >
              <c.icon className="w-6 h-6" style={{ color: c.color }} />
            </div>
            <h3 className="text-xl font-bold mb-2">{c.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 text-muted-foreground leading-relaxed max-w-2xl"
      >
        Computer Science student with strong foundations in C++ and Python, focused on machine learning and data-driven problem solving. Experienced in building ML-based projects including predictive systems and real-time applications.

        Active on LeetCode and Codeforces, with solid problem-solving skills and a growing interest in applying algorithms to practical ML use cases.
      </motion.p>
    </Section>
  );
}
