import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projectHighlights = [
  {
    title: "Rooftop solar",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Solar for business",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Wind energy",
    category: "Renewables",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1000&q=80",
  },
];

function Projects({ compact = false }) {
  return (
    <section className="bg-[#F7F9F5] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#5E7848]">
              Project possibilities
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#173B35] md:text-5xl">
              Clean energy takes many forms.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Explore the kinds of projects Sunora can help you plan.
            </p>
          </div>
          {!compact && (
            <Link
              to="/projects"
              className="inline-flex shrink-0 items-center gap-2 font-semibold text-[#173B35] hover:text-[#5E7848]"
            >
              Explore projects
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          )}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projectHighlights.map((project) => (
            <Link
              to="/projects"
              key={project.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_55px_-24px_rgba(23,59,53,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5E7848] focus-visible:ring-offset-4 motion-reduce:transform-none motion-reduce:transition-none"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#102E2A]/65 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span className="absolute bottom-4 left-5 translate-y-2 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  Explore project type
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 p-5">
                <div>
                  <p className="text-sm font-medium text-[#5E7848]">
                    {project.category}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-[#173B35]">
                    {project.title}
                  </h3>
                </div>
                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-[#173B35] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#5E7848]"
                  aria-hidden="true"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
