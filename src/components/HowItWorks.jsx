const steps = [
  {
    number: "01",
    title: "Start a conversation",
    description:
      "Tell us about your property, energy goals, and what you would like to explore.",
  },
  {
    number: "02",
    title: "Understand your options",
    description:
      "We review the project context and walk through relevant renewable energy approaches.",
  },
  {
    number: "03",
    title: "Plan the next steps",
    description:
      "Get a clearer picture of project requirements, key decisions, and a practical way forward.",
  },
  {
    number: "04",
    title: "Move ahead with clarity",
    description:
      "Keep your project coordinated with ongoing communication as plans take shape.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-[#173B35] py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#D6E5B5]">
            How it works
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            From first questions to a clear plan.
          </h2>
        </div>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.number} className="border-t border-white/25 pt-6">
              <span className="text-sm font-bold tracking-widest text-[#D6E5B5]">
                {step.number}
              </span>
              <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
              <p className="mt-3 leading-7 text-white/70">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default HowItWorks;
