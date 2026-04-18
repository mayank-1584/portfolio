import { motion } from "framer-motion";
import { Section } from "./Section";

const skills = [
  { name: "Flask", level: 95, color: "var(--neon-cyan)" },
  { name: "Python", level: 90, color: "var(--neon-purple)" },
  { name: "Ml modelling", level: 75, color: "var(--neon-pink)" },
  { name: "Cloud / DevOps", level: 82, color: "var(--neon-cyan)" },
  { name: "Frontend Developer", level: 70, color: "var(--neon-purple)" },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="The toolkit">
      <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="flex justify-between items-baseline mb-2">
              <span className="font-medium">{s.name}</span>
              <span className="font-mono text-xs text-muted-foreground">{s.level}%</span>
            </div>
            <div className="h-2 rounded-full bg-muted/40 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                className="h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${s.color}, color-mix(in oklab, ${s.color} 50%, white))`,
                  boxShadow: `0 0 12px ${s.color}`,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
