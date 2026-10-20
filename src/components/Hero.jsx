import { ArrowDown, ArrowUpRight, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import DepthText from "@/components/ui/depth-text.jsx";
import heroVideo from "../assets/solar vedio.mp4";

function Hero() {
  return (
    <section className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-[#173B35] md:min-h-[620px]">
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#102E2A]/65 via-[#173B35]/30 to-[#173B35]/10" />
      <div className="relative z-20 mx-auto w-full max-w-7xl px-5 py-14 lg:px-8 lg:py-16">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
            <Sun size={16} className="text-[#D6E5B5]" aria-hidden="true" />
            Clean energy, made practical
          </div>
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-7xl">
            <DepthText
              text="A brighter way"
              layers={22}
              depth={1.25}
              depthColor="#5E7848"
              faceColor="#FFFFFF"
              tilt={4}
              smoothing={0.12}
              perspective={1000}
              autoOrbit
              orbitSpeed={0.12}
              fontSize="clamp(2.35rem, 7vw, 5rem)"
              fontWeight={800}
              shadow
              intro
              className="mb-2 max-w-full"
            />
            <span className="block">to power what matters.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
            Sunora helps homes and businesses explore dependable solar and
            renewable energy solutions, from the first conversation through
            project planning.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D6E5B5] px-7 py-4 font-semibold text-[#173B35] transition hover:bg-[#E4ECCF]"
            >
              Talk to our team
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Explore solutions
            </Link>
          </div>
        </div>
        <a
          href="#our-approach"
          className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-white/75 transition hover:text-white"
        >
          Discover our approach
          <ArrowDown size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
