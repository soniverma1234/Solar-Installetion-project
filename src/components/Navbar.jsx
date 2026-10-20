import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/Sunora Clean Energy Logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Solutions", path: "/services" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8"
      >

        {/* Logo */}
        <Link
          to="/"
          className="flex shrink-0 items-center transition-transform duration-300 hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={logo}
            alt="Sunora Energy"
            className="h-17 w-auto max-w-[190px] object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `group relative py-2 text-lg font-semibold transition-colors duration-300 motion-reduce:transition-none ${
                  isActive
                    ? "text-[#173B35]"
                    : "text-slate-600 hover:text-[#5E7848]"
                }`
              }
            >
              {link.name}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 rounded-full bg-[#5E7848] transition-transform duration-300 group-hover:scale-x-100 group-[aria-current=page]:scale-x-100 motion-reduce:transition-none"
              />
            </NavLink>
          ))}
        </div>

        {/* Consultation Button */}
        <Link
          to="/contact"
          className="group hidden items-center gap-2 rounded-full bg-[#173B35] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#24564B] hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none md:flex"
        >
          Get Consultation
          <ArrowUpRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="rounded-lg p-2 text-[#173B35] transition-colors duration-300 hover:bg-slate-100 motion-reduce:transition-none md:hidden"
        >
          {isOpen ? (
            <X size={25} aria-hidden="true" />
          ) : (
            <Menu size={25} aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`overflow-hidden border-t border-slate-200 bg-white px-5 transition-all duration-300 ease-out motion-reduce:transition-none md:hidden ${
          isOpen
            ? "max-h-[420px] py-5 opacity-100"
            : "pointer-events-none max-h-0 py-0 opacity-0"
        }`}
      >
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? "bg-[#F1F5EC] text-[#173B35]"
                      : "text-slate-600 hover:bg-slate-50 hover:text-[#5E7848]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#173B35] px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#24564B] active:scale-[0.98]"
            >
              Get Consultation
              <ArrowUpRight size={17} />
            </Link>
          </div>
      </div>
    </header>
  );
}

export default Navbar;