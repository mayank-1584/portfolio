import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Section } from "./Section";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something">
      <div className="grid md:grid-cols-5 gap-6">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-3 glass neon-border rounded-2xl p-6 space-y-4"
        >
          <div>
            <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Name
            </label>
            <input
              required
              type="text"
              className="mt-1 w-full bg-transparent border-b border-border focus:border-neon-cyan outline-none py-2 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Email
            </label>
            <input
              required
              type="email"
              className="mt-1 w-full bg-transparent border-b border-border focus:border-neon-cyan outline-none py-2 transition-colors"
              placeholder="you@domain.com"
            />
          </div>
          <div>
            <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Message
            </label>
            <textarea
              required
              rows={4}
              className="mt-1 w-full bg-transparent border-b border-border focus:border-neon-cyan outline-none py-2 transition-colors resize-none"
              placeholder="Tell me about your project…"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-primary-foreground hover:scale-105 hover:glow-cyan transition-all duration-300"
            style={{ background: "var(--gradient-neon)" }}
          >
            {sent ? "Sent ✓" : "Send Message"}
            <Send className="w-4 h-4" />
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-2 space-y-3"
        >
          {[
            { Icon: Mail, label: "mksharmakaku1584@gmail.com", href: "mailto:mksharmakaku1584@gmail.com" },
            { Icon: Github, label: "mayank-1584", href: "https://github.com/mayank-1584" },
            { Icon: Linkedin, label: "Mayank Sharma", href: "https://www.linkedin.com/in/mayank-sharma-ab539b283/" },
          ].map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-3 glass rounded-xl p-4 hover:glow-purple hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-muted/40 flex items-center justify-center group-hover:bg-neon-purple/20 transition-colors">
                <Icon className="w-4 h-4 group-hover:text-neon-purple transition-colors" />
              </div>
              <span className="font-mono text-sm">{label}</span>
            </a>
          ))}

          <p className="text-xs text-muted-foreground pt-4 px-2 leading-relaxed">
            Open to freelance, full-time roles, and interesting collaborations.
            Replies within 24h.
          </p>
        </motion.div>
      </div>

      <div className="mt-16 pt-8 border-t border-border text-center text-xs text-muted-foreground font-mono">
        © {new Date().getFullYear()} Mayank Sharma
      </div>
    </Section>
  );
}
