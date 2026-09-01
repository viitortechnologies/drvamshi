import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { RelatedPages } from "../components/SiteExtras";
import {
  foundationActiveEvents,
  foundationAbout,
  foundationConfig,
  foundationFounders,
  foundationInitiatives,
  foundationMission,
  foundationRelaunchEvents,
  foundationVision,
  siteConfig,
} from "../lib/content";

export const metadata: Metadata = {
  title: "Foundation",
  description: `${foundationConfig.name} — ${foundationConfig.tagline} Founded by B. Pavan Kumar; co-founded by ${siteConfig.name}.`,
  alternates: { canonical: "/foundation" },
};

export default function FoundationPage() {
  return (
    <main>
      <PageHero
        title={foundationConfig.name}
        subtitle={foundationConfig.tagline}
        breadcrumbs={[{ label: "Foundation", href: "/foundation" }]}
      />

      {/* Re-launch banner */}
      <section data-reveal className="py-6 bg-teal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="font-medium text-sm sm:text-base">{foundationConfig.relaunchNote}</p>
        </div>
      </section>

      {/* About · Vision · Mission */}
      <section data-reveal className="py-14 md:py-20 bg-[linear-gradient(180deg,#faf8f4_0%,#f3f5f8_100%)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="reveal-child p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <h2 className="font-serif text-xl font-semibold text-navy mb-3">
              About the Foundation
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">{foundationAbout}</p>
          </article>
          <article className="reveal-child p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <h2 className="font-serif text-xl font-semibold text-navy mb-3">Our Vision</h2>
            <p className="text-gray-700 text-sm leading-relaxed">{foundationVision}</p>
          </article>
          <article className="reveal-child p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <h2 className="font-serif text-xl font-semibold text-navy mb-3">Our Mission</h2>
            <p className="text-gray-700 text-sm leading-relaxed">{foundationMission}</p>
          </article>
        </div>
      </section>

      {/* Founders */}
      <section data-reveal className="py-14 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="section-heading text-center mb-10">Our Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {foundationFounders.map((person) => (
              <article
                key={person.name}
                className="reveal-child text-center p-8 rounded-xl border-2 border-gold/35 bg-[#fafaf8] shadow-md ring-1 ring-gold/10"
              >
                <div className="relative w-28 h-28 mx-auto mb-5 rounded-full overflow-hidden border-2 border-gold/40 bg-navy/5 flex items-center justify-center">
                  {person.image ? (
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover object-[center_20%]"
                      sizes="112px"
                    />
                  ) : (
                    <span className="font-serif text-2xl font-semibold text-navy">
                      {person.initials}
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy mb-1">
                  {person.name}
                </h3>
                <p className="text-gold font-semibold text-sm uppercase tracking-wide mb-3">
                  {person.role}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">{person.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section data-reveal className="py-14 md:py-20 bg-gray-50 border-y border-gray-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="section-heading text-center mb-10">Our Initiatives</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {foundationInitiatives.map((init) => (
              <article
                key={init.title}
                className="reveal-child p-6 bg-white rounded-xl border border-gray-200 shadow-sm h-full"
              >
                <h3 className="font-serif text-lg font-semibold text-navy mb-3">
                  {init.title}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {init.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-gold shrink-0" aria-hidden>
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Active events */}
      <section data-reveal className="py-14 md:py-20 bg-[linear-gradient(180deg,#eef6f4_0%,#f8f6f1_100%)] border-y border-teal/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal/10 border border-teal/25 text-teal text-xs font-semibold uppercase tracking-wide mb-4">
              <span className="h-2 w-2 rounded-full bg-teal animate-pulse" aria-hidden />
              Year-round activity
            </span>
            <h2 className="section-heading mb-3">Events & ongoing programs</h2>
            <p className="prose-custom mx-auto">
              The foundation is always active—hosting scholarships, teacher
              recognition, outreach drives, and inspiration sessions across the
              calendar, not just on special occasions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {foundationActiveEvents.map((event) => (
              <article
                key={event.title}
                className="reveal-child p-5 bg-white rounded-xl border border-gray-200 shadow-sm h-full flex flex-col"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-serif text-lg font-semibold text-navy leading-snug">
                    {event.title}
                  </h3>
                  <span className="shrink-0 text-[10px] uppercase tracking-wide font-semibold text-teal bg-teal/10 px-2 py-0.5 rounded-full">
                    {event.cadence}
                  </span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed flex-1">
                  {event.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Re-launch events */}
      <section data-reveal className="py-10 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-xl sm:text-2xl font-semibold text-gold-light mb-4">
            Grand Re-launch — {foundationConfig.relaunchDate}
          </h2>
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-white/90">
            {foundationRelaunchEvents.map((event) => (
              <li key={event}>{event}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Quote */}
      <section data-reveal className="py-14 md:py-16 bg-[#faf8f4]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <blockquote className="font-serif text-xl sm:text-2xl text-navy italic leading-relaxed mb-4">
            &ldquo;{foundationConfig.quote}&rdquo;
          </blockquote>
          <cite className="text-gold font-medium not-italic">
            — {foundationConfig.quoteAuthor}
          </cite>
        </div>
      </section>

      {/* Get involved */}
      <section data-reveal className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="section-heading mb-6">Get involved</h2>
          <p className="prose-custom mx-auto mb-8">
            Support education, honour teachers, and help transform lives through the
            foundation&apos;s initiatives.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a
              href={`mailto:${foundationConfig.email}`}
              className="px-6 py-3 bg-gold text-navy font-semibold rounded-full hover:bg-gold-light transition-colors"
            >
              Support us
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 border border-navy/20 text-navy font-medium rounded-full hover:border-gold hover:text-gold transition-colors"
            >
              Volunteer / connect
            </Link>
          </div>
          <div className="text-sm text-gray-600 space-y-1">
            <p>{foundationConfig.address}</p>
            <p>
              <a href={`tel:${foundationConfig.phone.replace(/\s/g, "")}`} className="link-gold">
                {foundationConfig.phone}
              </a>
              {" · "}
              <a href={`mailto:${foundationConfig.email}`} className="link-gold">
                {foundationConfig.email}
              </a>
            </p>
          </div>
        </div>
      </section>

      <RelatedPages current="/foundation" />
    </main>
  );
}
