import {
  Building2,
  ClipboardCheck,
  House,
  Network,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: House,
    title: "Residential solar",
    description:
      "Explore rooftop solar options shaped around your home, energy use, and plans for the future.",
  },
  {
    icon: Building2,
    title: "Commercial solar",
    description:
      "Plan renewable energy projects for commercial properties, facilities, and growing organizations.",
  },
  {
    icon: Network,
    title: "Energy storage",
    description:
      "Learn how storage can complement a solar project and support the way your site uses energy.",
  },
  {
    icon: ClipboardCheck,
    title: "Project guidance",
    description:
      "Get help understanding feasibility, project requirements, and the decisions involved in moving forward.",
  },
];

function Services({ compact = false }) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#5E7848]">
              What we do
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#173B35] md:text-5xl">
              Renewable energy solutions for real-world needs.
            </h2>
          </div>
          {!compact && (
            <Link
              to="/services"
              className="inline-flex shrink-0 items-center font-semibold text-[#173B35] underline decoration-[#5E7848] decoration-2 underline-offset-4 hover:text-[#5E7848]"
            >
              View all solutions
            </Link>
          )}
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group relative isolate overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#5E7848]/50 hover:shadow-[0_20px_50px_-24px_rgba(23,59,53,0.35)] motion-reduce:transform-none motion-reduce:transition-none"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#5E7848] to-[#D6E5B5] transition-transform duration-300 group-hover:scale-x-100"
              />
              <div className="inline-flex rounded-xl bg-[#F1F5EC] p-3 text-[#5E7848] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#173B35] group-hover:text-[#D6E5B5] motion-reduce:transform-none motion-reduce:transition-none">
                <Icon size={25} aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-[#173B35] transition-colors duration-300 group-hover:text-[#5E7848]">
                {title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
