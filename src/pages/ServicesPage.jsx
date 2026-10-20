import HowItWorks from "@/components/HowItWorks.jsx";
import Services from "@/components/Services.jsx";
import solutionImage from "@/assets/Solution.png";

function ServicesPage() {
  return (
    <main>
      <section
        aria-label="Our solar solutions"
        className="h-[min(82svh,680px)] min-h-[460px] w-full overflow-hidden bg-[#173B35] max-md:h-auto max-md:min-h-0"
      >
        <img
          src={solutionImage}
          alt="Power your home with smart solar solutions, including warranty, site survey, and subsidy support"
          fetchPriority="high"
          className="block h-full w-full object-cover object-[center_42%] max-md:h-auto max-md:object-contain"
        />
      </section>
      <Services compact />
      <HowItWorks />
    </main>
  );
}

export default ServicesPage;
