import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { RelatedPages } from "../components/SiteExtras";
import {
  achievements,
  featuredAwards,
  responsibilities,
  reviewCertificates,
  siteConfig,
  workshops,
} from "../lib/content";

export const metadata: Metadata = {
  title: "Awards & Recognition",
  description: `Research awards, peer-review certificates, workshops, and academic responsibilities of ${siteConfig.name}.`,
  alternates: { canonical: "/awards" },
};

export default function AwardsPage() {
  return (
    <main>
      <PageHero
        title="Awards & recognition"
        subtitle="Each honour is listed once—with the correct certificate or photo and an accurate caption."
        breadcrumbs={[{ label: "Awards", href: "/awards" }]}
      />

      {/* 1. Featured awards — unique */}
      <section data-reveal className="py-14 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="section-heading">Featured honours</h2>
          <p className="prose-custom mb-8">
            VIT-AP research recognition, institutional event awards, and
            conference presentation certificates—each paired with its own image.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredAwards.map((award) => (
              <article
                key={award.title}
                className="reveal-child rounded-xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm flex flex-col h-full"
              >
                <div className="relative aspect-[4/3] bg-white">
                  <Image
                    src={award.image}
                    alt={award.caption}
                    fill
                    className={
                      award.fit === "cover"
                        ? `object-cover ${award.position ?? "object-center"}`
                        : "object-contain p-3"
                    }
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    quality={65}
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex-1">
                  <h3 className="font-serif text-xl font-semibold text-navy mb-2">
                    {award.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {award.caption}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Peer-review certificates — all unique journals */}
      <section data-reveal className="py-14 md:py-20 bg-[linear-gradient(180deg,#f8f6f1_0%,#f3f5f8_100%)] border-y border-gray-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="section-heading">Journal peer-review recognition</h2>
          <p className="prose-custom mb-8">
            Official recognition certificates from Elsevier and related journals
            for completed peer reviews—one entry per journal.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reviewCertificates.map((cert) => (
              <figure
                key={cert.journal}
                className="reveal-child rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm"
              >
                <div className="relative aspect-[4/3] bg-gray-50">
                  <Image
                    src={cert.image}
                    alt={`Peer-review recognition certificate — ${cert.journal}`}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 640px) 100vw, 25vw"
                    quality={65}
                    loading="lazy"
                  />
                </div>
                <figcaption className="p-3">
                  <h3 className="font-serif text-sm font-semibold text-navy leading-snug">
                    {cert.journal}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">{cert.detail}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Achievements + workshops */}
      <section data-reveal className="py-14 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="section-heading">Academic achievements</h2>
            <ul className="space-y-3">
              {achievements.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <span className="text-gold font-bold shrink-0" aria-hidden>
                    ✓
                  </span>
                  <span className="text-navy text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="section-heading">Workshops & outreach</h2>
            <p className="prose-custom mb-4 text-sm">
              Related scholarly work:{" "}
              <Link href="/research" className="link-gold">
                research page
              </Link>
              .
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {workshops.map((w) => (
                <figure
                  key={w.title}
                  className="reveal-child rounded-xl overflow-hidden border border-gray-200 bg-gray-50"
                >
                  <div className="relative aspect-[16/10] bg-navy/5">
                    <Image
                      src={w.image}
                      alt={w.detail}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 100vw, 50vw"
                      quality={65}
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="p-4">
                    <h3 className="font-serif font-semibold text-navy">{w.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{w.detail}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Responsibilities */}
      <section data-reveal className="py-14 md:py-20 bg-gray-50 border-y border-gray-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="section-heading">Department responsibilities</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {responsibilities.map((r) => (
              <li
                key={r}
                className="px-4 py-3 bg-white rounded-lg border border-gray-200 font-medium text-navy"
              >
                {r}
              </li>
            ))}
          </ul>
          <p className="prose-custom mt-8">
            For invitations or collaboration, visit{" "}
            <Link href="/contact" className="link-gold">
              contact
            </Link>{" "}
            or email{" "}
            <a href={`mailto:${siteConfig.email}`} className="link-gold">
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </section>

      <RelatedPages current="/awards" />
    </main>
  );
}
