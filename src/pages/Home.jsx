import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Benefits from "@/components/Benefits.jsx";
import Hero from "@/components/Hero.jsx";
import HowItWorks from "@/components/HowItWorks.jsx";
import Projects from "@/components/Projects.jsx";
import Services from "@/components/Services.jsx";

function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <Services />
      <HowItWorks />
      <Projects />
      <section className="bg-[#F1F5EC] px-5 py-16 text-center md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#5E7848]">
            Your next step
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#173B35] md:text-4xl">
            Let&apos;s explore what clean energy could look like for you.
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#173B35] px-7 py-4 font-semibold text-white transition hover:bg-[#24564B]"
          >
            Get in touch
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
