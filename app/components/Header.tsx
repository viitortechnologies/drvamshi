"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navPages, siteConfig } from "../lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200/80">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-[4.5rem] gap-3">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="font-serif text-base sm:text-lg md:text-xl font-semibold text-navy hover:text-gold transition-colors truncate min-w-0"
          >
            {siteConfig.shortName}
          </Link>
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
            {navPages.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-1.5 px-2.5 xl:px-3 font-medium transition-colors text-sm xl:text-[0.9375rem] ${
                    isActive(link.href)
                      ? "text-gold"
                      : "text-navy hover:text-gold"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div
        className={`lg:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-white transition-[visibility,opacity] duration-200 ${
          open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <ul className="flex flex-col py-2 h-full overflow-y-auto">
          {navPages.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-6 py-3.5 font-medium transition-colors text-base border-b border-gray-100 ${
                  isActive(link.href)
                    ? "text-gold bg-gray-50"
                    : "text-navy hover:text-gold hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
