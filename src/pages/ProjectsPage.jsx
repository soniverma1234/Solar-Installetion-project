import { HeroParallax } from "@/components/ui/hero-parallax.jsx";
import Projects from "@/components/Projects.jsx";

const projectExamples = [
  {
    title: "Solar for homes",
    link: "/contact",
    thumbnail:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Commercial rooftops",
    link: "/contact",
    thumbnail:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Wind energy",
    link: "/contact",
    thumbnail:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Community solar",
    link: "/contact",
    thumbnail:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Clean energy infrastructure",
    link: "/contact",
    thumbnail:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Solar and storage",
    link: "/contact",
    thumbnail:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1000&q=80",
  },
];

function ProjectsPage() {
  return (
    <main>
      <section className="bg-[#173B35] px-5 py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#D6E5B5]">
            Project ideas
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            See the possibilities in renewable energy.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
            These examples illustrate the kinds of clean energy projects worth
            exploring. Every site and project needs its own assessment.
          </p>
        </div>
      </section>
      <HeroParallax products={projectExamples} />
      <Projects compact />
    </main>
  );
}

export default ProjectsPage;
