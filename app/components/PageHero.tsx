import Link from "next/link";
import { siteConfig } from "../lib/content";

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
}: {
  title: string;
  subtitle: string;
  breadcrumbs?: { label: string; href: string }[];
}) {
  return (
    <header className="bg-[linear-gradient(135deg,#1e2d4a_0%,#152238_55%,#2d3f5f_100%)] text-white pt-24 md:pt-28 pb-12 md:pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/70">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-gold-light transition-colors">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  <span aria-hidden>/</span>
                  <Link
                    href={crumb.href}
                    className="hover:text-gold-light transition-colors text-white"
                  >
                    {crumb.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        )}
        <p className="text-gold-light text-sm font-medium mb-2">{siteConfig.shortName}</p>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-balance mb-3">
          {title}
        </h1>
        <p className="text-white/85 text-base sm:text-lg max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </header>
  );
}
