import { createFileRoute } from "@tanstack/react-router";
import { PlayerCard } from "@/components/PlayerCard";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Timeline } from "@/components/Timeline";
import { Contact } from "@/components/Contact";
import { NavBar } from "@/components/NavBar";
import { ThemeProvider } from "@/components/ThemeProvider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mayank Sharma" },
      {
        name: "description",
        content:
          "Portfolio of Mayank Sharma — software developer and ML engineer crafting intelligent systems and beautiful interfaces.",
      },
      { property: "og:title", content: "Mayank" },
      {
        property: "og:description",
        content: "Crafting intelligent systems, one commit at a time.",
      },
    ],

             links: [
    {
      rel: "icon",
      href: "avatar.jpg",
    },
  ],



  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <div className="min-h-screen relative">
        <NavBar />
        <PlayerCard />
        <main className="lg:ml-[28%] lg:pl-8 px-6 lg:pr-12 max-w-3xl mx-auto lg:mx-0 pt-20 lg:pt-8">
          <div id="hero">
            <Hero />
          </div>
          <About />
          <Projects />
          <Skills />
          <Timeline />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}
