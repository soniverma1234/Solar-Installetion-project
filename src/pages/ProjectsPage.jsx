import { ArrowDown, ArrowUpRight, BatteryCharging, Building2, House, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import Projects from "@/components/Projects.jsx";

function ProjectsPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-[#142B4A] text-white">
        <img
          src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=2000&q=85"
          alt=""
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#10223b]/95 via-[#142B4A]/80 to-[#142B4A]/40" />
        <div className="mx-auto grid min-h-[500px] max-w-7xl items-center gap-10 px-5 py-16 md:min-h-[560px] md:grid-cols-[1.2fr_0.8fr] md:py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#E7C46F]">
              <Sun size={17} aria-hidden="true" />
              Sunora project gallery
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Solar projects for a brighter tomorrow.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              From home rooftops to large-scale solar, explore different ways
              clean energy can fit your property and plans.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#project-gallery"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E7C46F] px-6 py-3.5 font-semibold text-[#142B4A] transition hover:bg-[#F0D995]"
              >
                Explore project types
                <ArrowDown size={17} aria-hidden="true" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Discuss your project
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-1 md:gap-4">
            {[
              { icon: House, label: "Residential rooftops" },
              { icon: Building2, label: "Commercial solar" },
              { icon: BatteryCharging, label: "Solar + storage" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm md:p-5"
              >
                <span className="rounded-xl bg-white/10 p-2.5 text-[#E7C46F]">
                  <Icon size={21} aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold md:text-base">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Projects gallery />
      <section className="bg-[#F1F5EC] px-5 py-16 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-3xl bg-white p-7 shadow-sm md:flex-row md:items-center md:p-10">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#5E7848]">
              Have a site in mind?
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#173B35] md:text-3xl">
              Let&apos;s explore the right solar approach for you.
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Tell us about your property and goals to start a project
              conversation.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#173B35] px-6 py-3.5 font-semibold text-white transition hover:bg-[#24564B]"
          >
            Start a conversation
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;
