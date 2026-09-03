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
  researchProposals,
  researchTopics,
  siteConfig,
} from "../lib/content";

export const metadata: Metadata = {
  title: "Research",
  description: `Journal papers, conference publications, patents, book, and research proposals of ${siteConfig.name} in fog computing, cloud computing, deep learning, IoT, and cybersecurity.`,
  alternates: { canonical: "/research" },
};

const sectionNav = [
  { label: "Journal papers", href: "#journal-papers" },
  { label: "Conference papers", href: "#conference-papers" },
  { label: "Patents", href: "#patents" },
  { label: "Book", href: "#published-book" },
  { label: "Research proposals", href: "#research-proposals" },
];

export default function ResearchPage() {
  return (
    <main>
      <PageHero
        title="Research & scholarship"
        subtitle="Journal articles, conference papers, patents, published book, and research funding proposals in fog/cloud computing, deep learning, IoT, and cybersecurity."
        breadcrumbs={[{ label: "Research", href: "/research" }]}
      />

      <section data-reveal className="py-10 md:py-12 bg-white border-b border-gray-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="prose-custom mb-4">
            {siteConfig.shortName}&apos;s research spans Fog Computing, Cloud
            Computing, Deep Learning, Internet of Things (IoT), and Cybersecurity.
            His record includes {journals.length} highlighted SCIE journal articles,{" "}
            {conferences.length} featured conference papers, {patents.length} patents,
            the co-authored book <em>{publishedBook.title}</em>, and ongoing work on
            research funding proposals. Full lists are mirrored on{" "}
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
          <ul className="flex flex-wrap gap-2 mb-6">
            {researchTopics.map((t) => (
              <li
                key={t}
                className="px-3 py-1.5 bg-navy/5 border border-gold/30 rounded-full text-sm font-medium text-navy"
              >
                {t}
              </li>
            ))}
          </ul>
          <nav aria-label="Research sections">
            <ul className="flex flex-wrap gap-2">
              {sectionNav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex px-3 py-1.5 text-sm font-medium text-navy border border-navy/15 rounded-full hover:border-gold hover:text-gold transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* 1. Journal papers */}
      <section
        id="journal-papers"
        data-reveal
        className="py-14 md:py-20 bg-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-2">
            01
          </p>
          <h2 className="section-heading">Journal papers</h2>
          <p className="prose-custom mb-6">
            Selected SCIE-indexed journal articles in cloud, fog, and workflow
            scheduling. Additional Scopus and UGC CARE journal articles are listed on
            Google Scholar.
          </p>
          <ol className="space-y-4">
            {journals.map((paper, idx) => (
              <li
                key={paper.title}
                className="reveal-child p-5 bg-gray-50 rounded-xl border border-gray-200"
              >
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

      {/* 2. Conference papers */}
      <section
        id="conference-papers"
        data-reveal
        className="py-14 md:py-20 bg-gray-50 border-y border-gray-200/80"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-2">
            02
          </p>
          <h2 className="section-heading">Conference papers</h2>
          <p className="prose-custom mb-6">
            Including MedicAI at ICISC 2025—see the{" "}
            <Link href="/awards" className="link-gold">
              awards gallery
            </Link>{" "}
            for the presentation certificate.
          </p>
          <ol className="space-y-4">
            {conferences.map((paper, idx) => (
              <li
                key={paper.title}
                className="reveal-child p-5 bg-white rounded-xl border border-gray-200"
              >
                <p className="text-xs font-semibold text-gold mb-1">[{idx + 1}]</p>
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
          </ol>
        </div>
      </section>

      {/* 3. Patents */}
      <section
        id="patents"
        data-reveal
        className="py-14 md:py-20 bg-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-2">
            03
          </p>
          <h2 className="section-heading">Patents</h2>
          <ol className="space-y-4">
            {patents.map((p, idx) => (
              <li
                key={p.number}
                className="reveal-child p-5 bg-gray-50 rounded-xl border border-gray-200"
              >
                <p className="text-xs font-semibold text-gold mb-1">[{idx + 1}]</p>
                <h3 className="font-serif text-lg font-semibold text-navy">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Application no. {p.number} · {p.date} · IP India
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4. Book */}
      <section
        id="published-book"
        data-reveal
        className="py-14 md:py-20 bg-[linear-gradient(180deg,#f0f7f7_0%,#faf8f4_100%)] border-y border-gray-200/80"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-2 text-center">
            04
          </p>
          <h2 className="section-heading text-center mb-3">Book</h2>
          <p className="prose-custom mx-auto text-center mb-10 max-w-2xl">
            Co-authored with faculty from engineering colleges in Hyderabad,
            published by {publishedBook.publisher}.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,280px)_1fr] gap-8 lg:gap-12 items-start">
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

      {/* 5. Research proposals */}
      <section
        id="research-proposals"
        data-reveal
        className="py-14 md:py-20 bg-gray-50 border-t border-gray-200/80"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-2">
            05
          </p>
          <h2 className="section-heading">Research proposals</h2>
          <p className="prose-custom mb-6">
            Submitted and ongoing research funding proposals in fog/cloud computing,
            deep learning, IoT, and cybersecurity—in collaboration with academic
            institutions and industry partners.
          </p>

          {researchProposals.length > 0 ? (
            <ol className="space-y-4">
              {researchProposals.map((proposal, idx) => (
                <li
                  key={`${proposal.title}-${proposal.year}`}
                  className="reveal-child p-5 bg-white rounded-xl border border-gray-200"
                >
                  <p className="text-xs font-semibold text-gold mb-1">[{idx + 1}]</p>
                  <h3 className="font-serif text-lg font-semibold text-navy">
                    {proposal.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {proposal.agency} · {proposal.status} · {proposal.year}
                    {proposal.role ? ` · ${proposal.role}` : ""}
                  </p>
                  {proposal.description ? (
                    <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                      {proposal.description}
                    </p>
                  ) : null}
                </li>
              ))}
            </ol>
          ) : (
            <div className="reveal-child p-6 bg-white rounded-xl border border-gray-200">
              <p className="text-sm text-gray-700 leading-relaxed">
                Proposal details will be listed here as they are finalized. For
                collaboration on funded research or joint proposals, please{" "}
                <Link href="/contact" className="link-gold">
                  get in touch
                </Link>
                .
              </p>
            </div>
          )}

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
