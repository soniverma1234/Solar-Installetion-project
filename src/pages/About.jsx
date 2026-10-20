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
      <section className="overflow-hidden bg-[#F7F8F4]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-[1.05fr_0.95fr] md:gap-14 md:py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#E7D8B5] bg-white px-4 py-2 text-sm font-bold uppercase tracking-[0.14em] text-[#806329]">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-[#C49A45]"
              />
              About Sunora
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-[#173B35] md:text-6xl">
              Helping make clean energy feel{" "}
              <span className="text-[#A77D2F]">clearer.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Sunora Clean Energy helps homeowners and businesses understand
              solar opportunities and take informed steps toward their energy
              goals.
            </p>
            <Link
              to="/services"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#173B35] px-6 py-3.5 font-semibold text-white transition hover:bg-[#24564B]"
            >
              Explore solar solutions
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#E7D8B5]/60 blur-2xl"
            />
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=85"
              alt="Solar panels collecting sunlight on a rooftop"
              fetchPriority="high"
              className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-[0_24px_60px_-28px_rgba(23,59,53,0.45)]"
            />
            <div className="absolute -bottom-4 left-4 rounded-2xl border border-white/70 bg-white/95 px-5 py-4 shadow-lg backdrop-blur sm:bottom-5 sm:left-5">
              <p className="text-sm font-semibold text-slate-500">
                A brighter energy future
              </p>
              <p className="mt-1 text-lg font-bold text-[#173B35]">
                Starts with the sun.
              </p>
            </div>
          </div>
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
