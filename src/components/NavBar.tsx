import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, MessageCircle } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Resume" },
  { id: "contact", label: "Contact" },
];

// claude bhai ke dane
const DOCK_THRESHOLD = 160;

export function NavBar() {
  const { theme, toggle } = useTheme();
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);
  const [docked, setDocked] = useState(false);

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

  useEffect(() => {
    function onScroll() {
      setDocked(window.scrollY > DOCK_THRESHOLD);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function jump(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  }

  return (
    <>
      {/* ---------- Desktop: top bar that docks to the right on scroll ---------- */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          top: docked ? "50%" : "1rem",
          right: docked ? "1.25rem" : "1rem",
          left: docked ? "auto" : "0rem",
          x: 0,
          translateY: docked ? "-50%" : "0%",
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: "fixed" }}
        className="z-50 hidden md:block"
      >
        <motion.div
          layout
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className={`glass border border-white/10 flex ${
            docked
              ? "flex-col items-center gap-1 rounded-full px-2 py-3"
              : "flex-row items-center gap-1 rounded-full px-2 py-1.5 max-w-5xl mx-auto"
          }`}
          style={docked ? { marginLeft: "auto" } : undefined}
        >
          {/* Section pills / dots */}
          <motion.nav
            layout
            className={`flex ${docked ? "flex-col items-center gap-1" : "flex-row items-center gap-1"}`}
          >
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => jump(s.id)}
                aria-label={s.label}
                className={`group relative flex items-center justify-center transition-colors ${
                  docked ? "w-9 h-9 rounded-full" : "px-4 py-1.5 rounded-full text-xs font-medium"
                } text-muted-foreground hover:text-foreground`}
              >
                {active === s.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className={`absolute inset-0 bg-foreground/10 ${docked ? "rounded-full" : "rounded-full"}`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {docked ? (
                  <span
                    className={`relative w-1.5 h-1.5 rounded-full transition-colors ${
                      active === s.id ? "bg-foreground" : "bg-muted-foreground/50 group-hover:bg-foreground/70"
                    }`}
                  />
                ) : (
                  <span className={`relative ${active === s.id ? "text-foreground" : ""}`}>{s.label}</span>
                )}

                {/* Tooltip label, only shown once docked */}
                {docked && (
                  <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-foreground/90 px-2 py-1 text-[11px] font-medium text-background opacity-0 scale-95 transition-all duration-150 group-hover:opacity-100 group-hover:scale-100">
                    {s.label}
                  </span>
                )}
              </button>
            ))}
          </motion.nav>

          {/* Divider between sections and utility buttons, docked only */}
          {docked && <div className="w-6 h-px bg-white/10 my-1" />}

          <div className={`flex items-center ${docked ? "flex-col gap-1" : "flex-row gap-2 ml-1"}`}>
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className={`rounded-full glass border border-white/10 flex items-center justify-center hover:border-white/30 transition-all ${
                docked ? "w-9 h-9" : "w-10 h-10"
              }`}
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
              aria-label="Let's talk"
              className={`group relative flex items-center justify-center font-medium hover:-translate-y-0.5 transition-all ${
                docked ? "w-9 h-9 rounded-full" : "pl-4 pr-2 py-2 rounded-full text-sm gap-1.5"
              }`}
              style={{
                background:
                  "linear-gradient(135deg, color-mix(in oklab, var(--neon-pink) 55%, white), color-mix(in oklab, var(--neon-purple) 50%, white))",
                color: "oklch(0.15 0.01 285)",
              }}
            >
              {docked ? (
                <MessageCircle className="w-4 h-4" />
              ) : (
                <>
                  Let's Talk
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-black/15">
                    <MessageCircle className="w-3.5 h-3.5" />
                  </span>
                </>
              )}

              {docked && (
                <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-foreground/90 px-2 py-1 text-[11px] font-medium text-background opacity-0 scale-95 transition-all duration-150 group-hover:opacity-100 group-hover:scale-100">
                  Let's Talk
                </span>
              )}
            </button>
          </div>
        </motion.div>
      </motion.header>

      {/* ---------- Mobile: unchanged top bar + dropdown menu ---------- */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 left-0 right-0 z-50 px-4 md:hidden"
      >
        <div className="flex items-center justify-end gap-2">
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
            onClick={() => setOpen((o) => !o)}
            className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center"
            aria-label="Menu"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mt-2 mx-0 glass rounded-2xl border border-white/10 p-2 flex flex-col"
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
    </>
  );
}
