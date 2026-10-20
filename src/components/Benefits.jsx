import {
  Compass,
  Leaf,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const benefits = [
  {
    icon: Compass,
    title: "A clear path forward",
    description:
      "Understand your options with straightforward guidance at every stage of the process.",
  },
  {
    icon: Leaf,
    title: "Built around clean energy",
    description:
      "Explore renewable solutions designed to support a more sustainable energy future.",
  },
  {
    icon: Workflow,
    title: "Planned for your needs",
    description:
      "Start with your goals, site, and energy requirements—not a one-size-fits-all package.",
  },
  {
    icon: ShieldCheck,
    title: "Support that stays connected",
    description:
      "Keep the details moving with a team focused on clear communication and careful planning.",
  },
];

function Benefits() {
  return (
    <section id="our-approach" className="bg-[#F7F9F5] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#5E7848]">
            Why Sunora
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#173B35] md:text-5xl">
            A thoughtful approach to clean energy.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Energy projects are important decisions. We make it easier to
            understand the choices and take the next step with confidence.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#5E7848]/50 hover:shadow-[0_20px_50px_-24px_rgba(23,59,53,0.3)] motion-reduce:transform-none motion-reduce:transition-none"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#5E7848] to-[#D6E5B5] transition-transform duration-300 group-hover:scale-x-100"
              />
              <div className="mb-5 inline-flex rounded-xl bg-[#F1F5EC] p-3 text-[#5E7848] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#173B35] group-hover:text-[#D6E5B5] motion-reduce:transform-none motion-reduce:transition-none">
                <Icon size={23} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-[#173B35] transition-colors duration-300 group-hover:text-[#5E7848]">
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

export default Benefits;
