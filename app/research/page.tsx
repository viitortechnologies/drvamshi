import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { OutboundProfiles, RelatedPages } from "../components/SiteExtras";
import {
  conferences,
  journals,
  patents,
  researchTopics,
  siteConfig,
} from "../lib/content";

export const metadata: Metadata = {
  title: "Research",
  description: `Publications, patents, and research interests of ${siteConfig.name} in cloud computing, workflow scheduling, fog computing, and AI/ML.`,
  alternates: { canonical: "/research" },
};

export default function ResearchPage() {
  return (
    <main>
      <PageHero
        title="Research & scholarship"
        subtitle="Efficient task and workflow scheduling in cloud–fog environments, energy-aware systems, and applied machine learning."
        breadcrumbs={[{ label: "Research", href: "/research" }]}
      />

      {/* 1. Statement */}
      <section data-reveal className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="section-heading">Research statement</h2>
          <p className="prose-custom mb-4">
            Scheduling in cloud computing is an NP-hard challenge.{" "}
            {siteConfig.shortName}&apos;s work develops efficient multi-objective
            and reinforcement-learning approaches that improve resource
            utilization, reduce energy consumption, and strengthen system
            performance for academia and industry.
          </p>
          <p className="prose-custom mb-6">
            Findings appear in SCIE journals such as{" "}
            <em>Expert Systems with Applications</em>, <em>IEEE Access</em>, and{" "}
            <em>Applied Sciences</em>, with additional IEEE conference papers and
            Indian patents. Full lists are mirrored on{" "}
            <a
              href="https://scholar.google.com/citations?user=1DD-5EAAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="link-gold"
            >
              Google Scholar
            </a>{" "}
            and{" "}
            <a
              href="https://orcid.org/0000-0003-3525-6703"
              target="_blank"
              rel="noopener noreferrer"
              className="link-gold"
            >
              ORCID
            </a>
            .
          </p>
          <ul className="flex flex-wrap gap-2">
            {researchTopics.map((t) => (
              <li
                key={t}
                className="px-3 py-1.5 bg-navy/5 border border-gold/30 rounded-full text-sm font-medium text-navy"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 2. Journals */}
      <section data-reveal className="py-14 md:py-20 bg-gray-50 border-y border-gray-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="section-heading">Selected journal articles</h2>
          <ol className="space-y-4">
            {journals.map((paper, idx) => (
              <li key={paper.title} className="p-5 bg-white rounded-xl border border-gray-200">
                <p className="text-xs font-semibold text-gold mb-1">[{idx + 1}]</p>
                <h3 className="font-serif text-lg font-semibold text-navy">
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
                <p className="text-sm text-gray-600 mt-1">
                  {paper.venue} · {paper.year}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 3. Conferences */}
      <section data-reveal className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="section-heading">Conference papers</h2>
          <p className="prose-custom mb-6">
            Including MedicAI at ICISC 2025—see the{" "}
            <Link href="/awards" className="link-gold">
              awards gallery
            </Link>{" "}
            for the presentation certificate.
          </p>
          <ul className="space-y-4">
            {conferences.map((paper) => (
              <li
                key={paper.title}
                className="p-5 rounded-xl border border-gray-200 bg-gray-50"
              >
                <h3 className="font-serif text-lg font-semibold text-navy">
                  {"href" in paper && paper.href ? (
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
                <p className="text-sm text-gray-600 mt-1">
                  {paper.venue} · {paper.year}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Patents */}
      <section data-reveal className="py-14 md:py-20 bg-gray-50 border-y border-gray-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="section-heading">Patents</h2>
          <ul className="space-y-4">
            {patents.map((p) => (
              <li key={p.number} className="p-5 bg-white rounded-xl border border-gray-200">
                <h3 className="font-serif text-lg font-semibold text-navy">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Application no. {p.number} · {p.date} · IP India
                </p>
              </li>
            ))}
          </ul>
          <p className="prose-custom mt-8">
            Peer-review activity spans Expert Systems with Applications,
            Computer Networks, Biomedical Signal Processing and Control, and
            IEEE/Springer conferences. Continuing professional learning includes
            NPTEL certifications in ML, IoT, and Cloud Computing.
          </p>
        </div>
      </section>

      <OutboundProfiles heading="Cite & follow on research networks" />
      <RelatedPages current="/research" />
    </main>
  );
}
