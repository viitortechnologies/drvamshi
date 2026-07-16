"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Teaching", href: "#teaching" },
  { label: "Foundation", href: "#foundation" },
  { label: "Recognitions", href: "#recognitions" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200/80">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-[4.5rem] gap-3">
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="font-serif text-base sm:text-lg md:text-xl font-semibold text-navy hover:text-gold transition-colors truncate min-w-0"
          >
            Dr. Vamsheedhar Reddy
          </a>
          <button
            type="button"
            className="lg:hidden p-2 -mr-2 text-navy flex-shrink-0"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <ul className="hidden lg:flex lg:items-center lg:gap-0.5 xl:gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-1.5 px-2.5 xl:px-3 text-navy hover:text-gold font-medium transition-colors text-sm xl:text-[0.9375rem]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Sibling overlay — not inside header, so fixed covers the viewport */}
      <div
        className={`lg:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-white transition-[visibility,opacity] duration-200 ${
          open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <ul className="flex flex-col py-2 h-full overflow-y-auto">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-6 py-3.5 text-navy hover:text-gold hover:bg-gray-50 font-medium transition-colors text-base border-b border-gray-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
