import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-20 scroll-mt-20">
      {(eyebrow || title) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          {eyebrow && (
            <span className="font-mono text-xs tracking-[0.3em] text-neon-cyan uppercase">
              ◆ {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
              {title}
            </h2>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
}
