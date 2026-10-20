import { ArrowUpRight, Compass, Leaf, Users } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Compass,
    title: "Clarity first",
    description:
      "We make room for questions and explain project considerations in plain language.",
  },
  {
    icon: Users,
    title: "People-centered",
    description:
      "Every property and organization is different. We listen before recommending a direction.",
  },
  {
    icon: Leaf,
    title: "Long-term thinking",
    description:
      "We focus on renewable energy choices that make sense for your goals and context.",
  },
];

function About() {
  return (
    <main>
      <section className="bg-[#173B35] px-5 py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#D6E5B5]">
            About Sunora
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Helping make the move to clean energy feel clearer.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
            Sunora Clean Energy helps homeowners and businesses understand
            renewable energy opportunities and take informed steps toward
            their project goals.
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:items-center md:py-28 lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#5E7848]">
            Solar energy
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#173B35] md:text-4xl">
            Turn sunlight into power for everyday life.
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            Solar panels capture sunlight and convert it into electricity for
            homes and businesses. With a system planned around your roof,
            energy use, and goals, solar can help you make more of your own
            clean power. Sunora helps you understand the options—from rooftop
            panels to battery storage—and plan a suitable next step.
          </p>
          <Link
            to="/services"
            className="mt-7 inline-flex items-center gap-2 font-semibold text-[#173B35] hover:text-[#5E7848]"
          >
            Explore our solutions
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85"
          alt="Solar panels installed across a rooftop"
          loading="lazy"
          decoding="async"
          className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
        />
      </section>
      <section className="bg-[#F7F9F5] px-5 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-[#173B35] md:text-4xl">
            What guides our work
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#5E7848]/50 hover:shadow-[0_20px_50px_-24px_rgba(23,59,53,0.3)] motion-reduce:transform-none motion-reduce:transition-none"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#5E7848] to-[#D6E5B5] transition-transform duration-300 group-hover:scale-x-100"
                />
                <Icon
                  size={27}
                  className="text-[#5E7848] transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none motion-reduce:transition-none"
                  aria-hidden="true"
                />
                <h3 className="mt-5 text-xl font-bold text-[#173B35] transition-colors duration-300 group-hover:text-[#5E7848]">
                  {title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
