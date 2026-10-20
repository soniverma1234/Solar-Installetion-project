import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/Sunora Clean Energy Logo.png";

const footerLinks = [
  { label: "About", to: "/about" },
  { label: "Solutions", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

function Footer() {
  return (
    <footer className="bg-[#102D29] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <Link to="/" aria-label="Sunora Energy home">
            <img
              src={logo}
              alt="Sunora Clean Energy"
              className="h-16 w-auto max-w-[190px] object-contain"
              loading="lazy"
            />
          </Link>
          <p className="mt-5 max-w-sm leading-7 text-white/65">
            Helping people explore practical pathways to a cleaner energy
            future.
          </p>
        </div>
        <div>
          <h2 className="font-semibold">Explore</h2>
          <ul className="mt-4 space-y-3">
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-white/65 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-semibold">Start a conversation</h2>
          <p className="mt-4 max-w-xs leading-7 text-white/65">
            Have a property or project in mind? Tell us what you are exploring.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-flex items-center gap-2 font-semibold text-[#D6E5B5] transition hover:text-white"
          >
            Contact Sunora
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto max-w-7xl px-5 py-5 text-sm text-white/50 lg:px-8">
          © {new Date().getFullYear()} Sunora Clean Energy. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
