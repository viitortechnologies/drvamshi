import Link from "next/link";
import { navPages, profileLinks, siteConfig } from "../lib/content";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <p className="font-serif text-xl text-gold-light mb-3">
              {siteConfig.shortName}
            </p>
            <p className="text-white/80 text-sm leading-relaxed">
              {siteConfig.role} at {siteConfig.institution}. Research in fog and
              cloud computing, deep learning, IoT, and cybersecurity.
            </p>
          </div>
          <div>
            <p className="font-semibold mb-3 text-gold-light">Site map</p>
            <ul className="space-y-2 text-sm">
              {navPages.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} className="text-white/85 hover:text-gold-light transition-colors">
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-3 text-gold-light">Profiles</p>
            <ul className="space-y-2 text-sm">
              {profileLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/85 hover:text-gold-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <blockquote className="font-serif text-lg sm:text-xl text-gold-light italic mb-6 text-center text-balance">
          &ldquo;Education shapes character. Character shapes society.&rdquo;
        </blockquote>
        <div className="text-center text-white/80 text-sm space-y-2 border-t border-white/10 pt-6">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            Designed and developed by{" "}
            <a
              href="https://viitortechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-light underline font-semibold hover:text-gold transition-colors"
            >
              Viitor Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
