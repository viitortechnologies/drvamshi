import Link from "next/link";
import Image from "next/image";
import HeroSlider from "./components/HeroSlider";
import {
  featuredAwards,
  journals,
  researchTopics,
  siteConfig,
  subjects,
  workshops,
} from "./lib/content";
import { OutboundProfiles } from "./components/SiteExtras";

export default function HomePage() {
  return (
    <main>
      <HeroSlider />

      <section data-reveal className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 w-full rounded-xl overflow-hidden border border-gray-200 shadow-md">
            <Image
              src="/images/portrait-pro.webp"
              alt={`${siteConfig.name} — professional portrait`}
              fill
              className="object-cover object-[center_20%]"
              sizes="(max-width: 1024px) 90vw, 400px"
              quality={65}
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="section-heading">About {siteConfig.shortName}</h2>
            <p className="prose-custom text-lg mb-4">
              A self-motivated educator and researcher with nearly a decade of
              teaching experience and a full-time Ph.D. from VIT-AP University.
              Currently {siteConfig.role} at {siteConfig.institution}.
            </p>
            <p className="prose-custom mb-6">
              His work spans cloud–fog scheduling, energy-aware systems, and
              applied AI—paired with hands-on mentoring in labs and workshops.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/about"
                className="px-5 py-2.5 bg-navy text-white rounded-full font-medium hover:bg-navy-dark transition-colors"
              >
                Full biography
              </Link>
              <Link
                href="/research"
                className="px-5 py-2.5 border border-navy/20 text-navy rounded-full font-medium hover:border-gold hover:text-gold transition-colors"
              >
                Research & publications
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section data-reveal className="py-16 md:py-20 bg-[linear-gradient(180deg,#f8f6f1_0%,#f3f5f8_100%)] border-y border-gray-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="section-heading text-center mb-10">Impact at a glance</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { value: "9+ yrs", label: "Teaching experience" },
              { value: "14+", label: "Publications" },
              { value: "4", label: "Patents published" },
              { value: "8", label: "Journal review recognitions" },
            ].map((item) => (
              <div
                key={item.label}
                className="reveal-child text-center p-5 md:p-6 bg-white/90 rounded-xl border border-gray-100 shadow-sm"
              >
                <p className="font-serif text-2xl md:text-3xl font-semibold text-gold mb-2">
                  {item.value}
                </p>
                <p className="text-navy font-medium text-sm md:text-base">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-reveal className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="section-heading mb-2">Research spotlight</h2>
              <p className="prose-custom">
                Energy-efficient workflow scheduling, multi-objective cloud–fog
                optimization, and applied AI.
              </p>
            </div>
            <Link href="/research" className="link-gold font-medium whitespace-nowrap">
              View all research →
            </Link>
          </div>
          <ul className="flex flex-wrap gap-2 mb-8">
            {researchTopics.map((topic) => (
              <li
                key={topic}
                className="px-3 py-1.5 bg-navy/5 border border-gold/25 rounded-full text-sm font-medium text-navy"
              >
                {topic}
              </li>
            ))}
          </ul>
          <div className="space-y-4">
            {journals.slice(0, 3).map((paper) => (
              <article
                key={paper.title}
                className="reveal-child p-5 rounded-xl border border-gray-200 bg-gray-50 hover:border-gold/30 transition-colors"
              >
                <h3 className="font-serif text-lg font-semibold text-navy mb-1">
                  {paper.href ? (
                    <a
                      href={paper.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gold transition-colors"
                    >
                      {paper.title}
                    </a>
                  ) : (
                    paper.title
                  )}
                </h3>
                <p className="text-sm text-gray-600">
                  {paper.venue} · {paper.year}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-reveal className="py-16 md:py-20 bg-gray-50 border-y border-gray-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <h2 className="section-heading">Teaching & workshops</h2>
              <p className="prose-custom mb-4">
                Inclusive classrooms, lab mentoring, and faculty development
                sessions on research writing and IoT.
              </p>
              <ul className="flex flex-wrap gap-2 mb-6">
                {subjects.slice(0, 6).map((s) => (
                  <li
                    key={s}
                    className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-navy"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <Link href="/about#teaching" className="link-gold font-medium">
                Teaching philosophy & courses →
              </Link>
            </div>
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src="/images/teaching-lab.webp"
                alt="Hands-on lab mentoring with CSE (AI & ML) students on embedded IoT boards"
                fill
                className="object-cover object-[center_30%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={65}
                loading="lazy"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {workshops.map((w) => (
              <figure
                key={w.title}
                className="reveal-child rounded-xl overflow-hidden border border-gray-200 bg-white"
              >
                <div className="relative aspect-[16/10] bg-navy/5">
                  <Image
                    src={w.image}
                    alt={w.detail}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, 33vw"
                    quality={65}
                    loading="lazy"
                  />
                </div>
                <figcaption className="p-4">
                  <h3 className="font-serif font-semibold text-navy mb-1">{w.title}</h3>
                  <p className="text-sm text-gray-600">{w.detail}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section data-reveal className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="section-heading mb-2">Awards & recognition</h2>
              <p className="prose-custom">
                Distinct honours—each with its own certificate or moment. No
                repeated captions.
              </p>
            </div>
            <Link href="/awards" className="link-gold font-medium whitespace-nowrap">
              Full awards gallery →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredAwards.map((award) => (
              <figure
                key={award.title}
                className="reveal-child rounded-xl overflow-hidden border border-gray-200 bg-gray-50 flex flex-col h-full"
              >
                <div className="relative aspect-[4/3] bg-white">
                  <Image
                    src={award.image}
                    alt={award.caption}
                    fill
                    className={
                      award.fit === "cover"
                        ? `object-cover ${award.position ?? "object-center"}`
                        : "object-contain p-2"
                    }
                    sizes="(max-width: 640px) 100vw, 25vw"
                    quality={65}
                    loading="lazy"
                  />
                </div>
                <figcaption className="p-4 flex-1">
                  <h3 className="font-serif font-semibold text-navy mb-1">
                    {award.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3">{award.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <OutboundProfiles />

      <section id="contact" data-reveal className="py-16 md:py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            Collaborate & connect
          </h2>
          <p className="text-white/85 text-lg mb-6 max-w-2xl mx-auto">
            Open to academic collaborations, research discussions, mentorship
            programs, and educational initiatives.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href={`mailto:${siteConfig.email}`}
              className="px-5 py-2.5 bg-gold text-navy font-semibold rounded-full hover:bg-gold-light transition-colors"
            >
              Email {siteConfig.email}
            </a>
            <Link
              href="/contact"
              className="px-5 py-2.5 border border-white/40 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Contact page
            </Link>
          </div>
          <p className="text-sm text-white/70">
            Explore{" "}
            <Link href="/about" className="text-gold-light underline">
              About
            </Link>
            ,{" "}
            <Link href="/research" className="text-gold-light underline">
              Research
            </Link>
            , and{" "}
            <Link href="/awards" className="text-gold-light underline">
              Awards
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
