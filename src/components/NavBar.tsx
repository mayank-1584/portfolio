import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, MessageCircle } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const sections = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Portfolio" },
  { id: "about", label: "About Me" },
  { id: "experience", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export function NavBar() {
  const { theme, toggle } = useTheme();
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  function jump(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  }

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-0 right-0 z-50 px-4 lg:pl-[28%]"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
        {/* Section pills (desktop) */}
        <nav className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-1.5 border border-white/8">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => jump(s.id)}
              className="relative px-4 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {active === s.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-foreground/10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className={`relative ${active === s.id ? "text-foreground" : ""}`}>
                {s.label}
              </span>
            </button>
          ))}
        </nav>

        {/* spacer for mobile */}
        <div className="md:hidden" />

        <div className="flex items-center gap-2 ml-auto">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center hover:border-white/30 transition-all"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "dark" ? (
                <motion.span
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Sun className="w-4 h-4" />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Moon className="w-4 h-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <button
            onClick={() => jump("contact")}
            className="hidden sm:inline-flex items-center gap-1.5 pl-4 pr-2 py-2 rounded-full text-sm font-medium hover:-translate-y-0.5 transition-all"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in oklab, var(--neon-pink) 55%, white), color-mix(in oklab, var(--neon-purple) 50%, white))",
              color: "oklch(0.15 0.01 285)",
            }}
          >
            Let's Talk
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-black/15">
              <MessageCircle className="w-3.5 h-3.5" />
            </span>
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center"
            aria-label="Menu"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden mt-2 mx-4 glass rounded-2xl border border-white/10 p-2 flex flex-col"
          >
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => jump(s.id)}
                className={`text-left px-4 py-2.5 rounded-lg text-sm transition-colors ${
                  active === s.id
                    ? "bg-foreground/10 text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                {s.label}
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
