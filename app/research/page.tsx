import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { OutboundProfiles, RelatedPages } from "../components/SiteExtras";
import {
  conferences,
  journals,
  patents,
  publishedBook,
  researchTopics,
  siteConfig,
} from "../lib/content";

export const metadata: Metadata = {
  title: "Research",
  description: `Publications, patents, and research interests of ${siteConfig.name} in fog computing, cloud computing, deep learning, IoT, and cybersecurity.`,
  alternates: { canonical: "/research" },
};

export default function ResearchPage() {
  return (
    <main>
      <PageHero
        title="Research & scholarship"
        subtitle="Fog and cloud computing, deep learning, IoT, and cybersecurity—with 22+ publications, four patents, and the book Internet of Things & Its Applications."
        breadcrumbs={[{ label: "Research", href: "/research" }]}
      />

      {/* 1. Statement */}
      <section data-reveal className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="section-heading">Research statement</h2>
          <p className="prose-custom mb-4">
            {siteConfig.shortName}&apos;s research spans Fog Computing, Cloud
            Computing, Deep Learning, Internet of Things (IoT), and Cybersecurity.
            He develops efficient scheduling and intelligent-computing approaches
            that improve resource utilization and system performance for academia
            and industry.
          </p>
          <p className="prose-custom mb-6">
            His record includes 6 SCIE-indexed journal articles, 2 Scopus-indexed
            journal articles, 17 international conference papers, 4 UGC CARE
            journal articles, the co-authored book{" "}
            <em>{publishedBook.title}</em>, and four patents. Selected work appears in
            venues such as <em>Expert Systems with Applications</em>,{" "}
            <em>IEEE Access</em>, and <em>Applied Sciences</em>. Full lists are
            mirrored on{" "}
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

      {/* Book publication */}
      <section
        id="published-book"
        data-reveal
        className="py-14 md:py-20 bg-[linear-gradient(180deg,#f0f7f7_0%,#faf8f4_100%)] border-y border-gray-200/80"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="section-heading text-center mb-3">Published book</h2>
          <p className="prose-custom mx-auto text-center mb-10 max-w-2xl">
            Co-authored with faculty from engineering colleges in Hyderabad,
            published by {publishedBook.publisher}.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,280px)_1fr] gap-8 lg:gap-12 items-start mb-8">
            <figure className="reveal-child rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm max-w-xs mx-auto lg:mx-0 w-full">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={publishedBook.coverImage}
                  alt={`Book cover — ${publishedBook.title}`}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 280px, 280px"
                />
              </div>
            </figure>

            <div className="reveal-child min-w-0">
              <h3 className="font-serif text-2xl font-semibold text-navy mb-4">
                {publishedBook.title}
              </h3>
              <ul className="text-sm text-gray-700 space-y-2 mb-6">
                <li>
                  <span className="font-medium text-navy">Publisher:</span>{" "}
                  {publishedBook.publisher}
                </li>
                <li>
                  <span className="font-medium text-navy">ISBN:</span>{" "}
                  {publishedBook.isbn}
                </li>
                <li>
                  <span className="font-medium text-navy">Published:</span>{" "}
                  {publishedBook.publishedDate}
                </li>
                <li>
                  <span className="font-medium text-navy">Price:</span>{" "}
                  {publishedBook.price}
                </li>
                <li>
                  <span className="font-medium text-navy">Publisher address:</span>{" "}
                  {publishedBook.publisherAddress}
                </li>
                <li>
                  <span className="font-medium text-navy">Contact:</span>{" "}
                  {publishedBook.publisherPhone}
                </li>
              </ul>

              <h4 className="font-serif text-lg font-semibold text-navy mb-4">
                Authors
              </h4>
              <ul className="space-y-4">
                {publishedBook.authors.map((author) => (
                  <li
                    key={author.name}
                    className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm"
                  >
                    <p className="font-serif font-semibold text-navy">{author.name}</p>
                    <p className="text-gold text-xs font-medium uppercase tracking-wide mb-2">
                      {author.role}
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">{author.bio}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
