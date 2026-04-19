import { motion } from "framer-motion";
import { Section } from "./Section";

const items = [
  {
    year: "2018-2020",
    title: "Primary Education",
    from: "Panchsheel Public School",
  },
  {
    year: "2020-2022",
    title: "Secondary Education",
    from: "Panchsheel Public School",
  },
  {
    year: "2023-2027",
    title: "B.tech. Computer Science",
    from: "Delhi Technical Campus",
  },
];

export function Timeline() {
  return (
    <Section id="experience" eyebrow="Experience" title="The journey so far">
      <div className="relative pl-8">
        {/* Line */}
        <div
          className="absolute left-2 top-2 bottom-2 w-px"
          style={{
            background:
              "linear-gradient(180deg, var(--neon-cyan), var(--neon-purple), var(--neon-pink))",
          }}
        />
        {items.map((it, i) => (
          <motion.div
            key={it.year}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative pb-8 last:pb-0"
          >
            {/* Dot */}
            <div
              className="absolute -left-[1.6rem] top-1.5 w-3 h-3 rounded-full"
              style={{
                background: "var(--neon-cyan)",
                boxShadow: "0 0 12px var(--neon-cyan), 0 0 24px var(--neon-cyan)",
              }}
            />
            <span className="font-mono text-xs text-neon-cyan tracking-widest">{it.year}</span>
            <h3 className="text-lg font-bold mt-1">{it.title}</h3>
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{it.from}</p>
          </motion.div>
        ))}
      </div><div className="mt-10"><a href="https://mayanksharma.tiiny.site" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-all">Download Full Resume</a></div></Section>
  );
}

