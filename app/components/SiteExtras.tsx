import Link from "next/link";
import { profileLinks, navPages } from "../lib/content";

export function OutboundProfiles({
  heading = "Research & professional profiles",
}: {
  heading?: string;
}) {
  return (
    <section data-reveal className="py-14 md:py-20 bg-white border-y border-gray-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="section-heading text-center mb-3">{heading}</h2>
        <p className="prose-custom mx-auto text-center mb-10">
          Explore verified academic profiles for citations, works, and collaboration
          opportunities.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {profileLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full p-5 rounded-xl border border-gray-200 bg-gray-50 hover:border-gold/40 hover:bg-white transition-all"
              >
                <span className="font-serif text-lg font-semibold text-navy link-gold no-underline">
                  {link.label}
                </span>
                <p className="text-sm text-gray-600 mt-2">{link.description}</p>
                <span className="inline-block mt-3 text-sm text-gold font-medium">
                  Visit profile →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function RelatedPages({ current }: { current?: string }) {
  const links = navPages.filter((p) => p.href !== current && p.href !== "/");
  return (
    <section data-reveal className="py-14 md:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="section-heading text-center mb-8">Explore more</h2>
        <ul className="flex flex-wrap justify-center gap-3">
          <li>
            <Link
              href="/"
              className="inline-block px-5 py-2.5 rounded-full border border-navy/15 bg-white text-navy font-medium hover:border-gold hover:text-gold transition-colors"
            >
              Home
            </Link>
          </li>
          {links.map((page) => (
            <li key={page.href}>
              <Link
                href={page.href}
                className="inline-block px-5 py-2.5 rounded-full border border-navy/15 bg-white text-navy font-medium hover:border-gold hover:text-gold transition-colors"
              >
                {page.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
