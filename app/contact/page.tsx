import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { OutboundProfiles, RelatedPages } from "../components/SiteExtras";
import { siteConfig } from "../lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.name} for research collaboration, mentorship, workshops, and academic inquiries. Email ${siteConfig.email}.`,
  alternates: { canonical: "/contact" },
};

const interests = [
  "Academic collaborations and joint research",
  "Research discussions on cloud–fog scheduling and AI/ML",
  "Educational initiatives and faculty development",
  "Mentorship programs and student projects",
  "Invited talks, seminars, and IoT workshops",
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Contact & collaboration"
        subtitle="Reach out for research partnerships, mentorship, workshops, and academic opportunities."
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />

      {/* 1. Interests */}
      <section data-reveal className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="section-heading">Open to</h2>
          <ul className="space-y-3">
            {interests.map((item) => (
              <li
                key={item}
                className="flex gap-3 p-4 rounded-lg border border-gray-200 bg-gray-50 text-navy"
              >
                <span className="text-gold font-bold" aria-hidden>
                  →
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 2. Direct contact */}
      <section data-reveal className="py-14 md:py-20 bg-gray-50 border-y border-gray-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="section-heading">Direct contact</h2>
          <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 shadow-sm space-y-4">
            <p>
              <span className="font-semibold text-navy">Email: </span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="link-gold break-all"
              >
                {siteConfig.email}
              </a>
            </p>
            <p>
              <span className="font-semibold text-navy">Phone: </span>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="link-gold">
                {siteConfig.phone}
              </a>
            </p>
            <p>
              <span className="font-semibold text-navy">Institution: </span>
              <span className="text-gray-700">
                {siteConfig.institution}, {siteConfig.location}
              </span>
            </p>
            <p>
              <span className="font-semibold text-navy">LinkedIn: </span>
              <a
                href="https://in.linkedin.com/in/vamsheedharredddy-pillaredddy-272a0aa9"
                target="_blank"
                rel="noopener noreferrer"
                className="link-gold"
              >
                Connect on LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* 3. Outbound profiles */}
      <OutboundProfiles heading="Academic profiles" />

      {/* 4. Inbound related pages */}
      <section data-reveal className="py-14 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="section-heading">Learn more before you write</h2>
          <p className="prose-custom mx-auto mb-6">
            Review background, publications, and recognition to tailor your
            message.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/about" className="link-gold font-medium">
              About & experience
            </Link>
            <span className="text-gray-300">·</span>
            <Link href="/research" className="link-gold font-medium">
              Research & patents
            </Link>
            <span className="text-gray-300">·</span>
            <Link href="/awards" className="link-gold font-medium">
              Awards gallery
            </Link>
          </div>
        </div>
      </section>

      <RelatedPages current="/contact" />
    </main>
  );
}
