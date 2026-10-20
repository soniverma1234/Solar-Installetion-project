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
            Our purpose
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#173B35] md:text-4xl">
            Good energy decisions start with good information.
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            Moving toward renewable energy can bring up important questions
            about a site, its needs, and the right project path. Our role is to
            help you explore those questions, understand the options, and
            approach the next step with a clear plan.
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
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1200&q=80"
          alt="Solar panels in a renewable energy landscape"
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
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <Icon
                  size={27}
                  className="text-[#5E7848]"
                  aria-hidden="true"
                />
                <h3 className="mt-5 text-xl font-bold text-[#173B35]">
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
