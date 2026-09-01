import Image from "next/image";
import Link from "next/link";
import { ListMark } from "./BrandIcons";
import {
  foundationActiveEvents,
  foundationConfig,
  foundationFounders,
  foundationHomeIntro,
  foundationVisionPoints,
} from "../lib/content";

export default function Foundation() {
  return (
    <section
      id="foundation"
      data-reveal
      className="py-16 md:py-24 scroll-mt-16 md:scroll-mt-[4.5rem]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl border-2 border-gold/45 bg-[linear-gradient(135deg,#f7f4ef_0%,#eef6f4_45%,#eef2f7_100%)] shadow-[0_20px_50px_rgba(30,45,74,0.12)]">
          <div
            className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-gold via-gold-light to-teal"
            aria-hidden
          />

          <div className="p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
              <div>
                <h2 className="section-heading mb-2">Foundation & Social Impact</h2>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-navy">
                  Dr. Radhakrishnan Foundation
                </h3>
              </div>
              <span className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-full bg-teal/10 border border-teal/30 text-teal text-sm font-semibold uppercase tracking-wide">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal" />
                </span>
                Always active
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
              <div className="lg:col-span-3 space-y-6">
                {foundationHomeIntro.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="prose-custom">
                    {paragraph}
                  </p>
                ))}

                <div>
                  <h4 className="font-serif text-lg font-semibold text-navy mb-3">
                    Foundation Vision
                  </h4>
                  <ul className="space-y-2">
                    {foundationVisionPoints.map((point) => (
                      <li key={point} className="flex items-start gap-3 prose-custom">
                        <ListMark />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="prose-custom italic text-navy border-l-4 border-gold pl-4">
                  Inspired by great educators and reformers, the foundation reflects
                  the belief that education must serve society.
                </p>
              </div>

              <aside className="lg:col-span-2 space-y-6">
                <div className="rounded-xl overflow-hidden border border-navy/20 shadow-lg">
                  <div className="bg-navy px-5 py-4">
                    <h4 className="font-serif text-lg font-semibold text-gold-light">
                      Leadership
                    </h4>
                    <p className="text-white/75 text-sm mt-1">
                      Founded by educators committed to social upliftment
                    </p>
                  </div>
                  <div className="bg-navy-dark divide-y divide-white/10">
                    {foundationFounders.map((person) => (
                      <article key={person.name} className="px-5 py-4 flex gap-4 items-center">
                        <div className="relative w-14 h-14 shrink-0 rounded-full overflow-hidden border-2 border-gold/40 bg-navy flex items-center justify-center">
                          {person.image ? (
                            <Image
                              src={person.image}
                              alt={person.name}
                              fill
                              className="object-cover object-[center_20%]"
                              sizes="56px"
                            />
                          ) : (
                            <span className="font-serif text-sm font-semibold text-gold-light">
                              {person.initials}
                            </span>
                          )}
                        </div>
                        <div>
                          <h5 className="font-semibold text-white">{person.name}</h5>
                          <p className="text-gold-light text-sm font-medium uppercase tracking-wide">
                            {person.role}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl bg-white/90 border border-gray-200 p-5 shadow-sm">
                  <h4 className="font-serif text-lg font-semibold text-navy mb-1">
                    Ongoing events & initiatives
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    The foundation runs programs throughout the year—never limited to a
                    single occasion.
                  </p>
                  <ul className="space-y-3 max-h-[280px] overflow-y-auto pr-1">
                    {foundationActiveEvents.map((event) => (
                      <li
                        key={event.title}
                        className="reveal-child p-3 rounded-lg bg-gray-50 border border-gray-100"
                      >
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h5 className="font-medium text-navy text-sm leading-snug">
                            {event.title}
                          </h5>
                          <span className="shrink-0 text-[10px] uppercase tracking-wide font-semibold text-teal bg-teal/10 px-2 py-0.5 rounded-full">
                            {event.cadence}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {event.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>

            <div className="mt-8 pt-6 border-t border-gold/25 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-sm text-navy/80 max-w-xl">
                Grand re-launch on {foundationConfig.relaunchDate} — join us for
                Teacher Excellence Awards, scholarships, and community celebrations.
              </p>
              <Link
                href="/foundation"
                className="inline-flex justify-center px-6 py-3 bg-navy text-white font-semibold rounded-full hover:bg-navy-dark transition-colors shrink-0"
              >
                Explore the foundation →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
