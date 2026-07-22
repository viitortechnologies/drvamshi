import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { OutboundProfiles, RelatedPages } from "../components/SiteExtras";
import {
  education,
  experience,
  gallery,
  siteConfig,
  subjects,
} from "../lib/content";

export const metadata: Metadata = {
  title: "About",
  description: `Biography, education, teaching experience, and academic journey of ${siteConfig.name}, ${siteConfig.role} at ${siteConfig.institution}.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="About & academic journey"
        subtitle="From Wanaparthy, Telangana to a Ph.D. at VIT-AP—and teaching AI & ML in Hyderabad."
        breadcrumbs={[{ label: "About", href: "/about" }]}
      />

      <section data-reveal className="py-14 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 items-start">
          <div className="md:col-span-2 relative aspect-[3/4] max-w-[300px] mx-auto md:mx-0 w-full rounded-xl overflow-hidden border border-gray-200 shadow-md bg-gray-100">
            <Image
              src="/images/portrait-pro.webp"
              alt={`${siteConfig.name} professional portrait`}
              fill
              className="object-cover object-[center_18%]"
              sizes="300px"
              priority
            />
          </div>
          <div className="md:col-span-3">
            <h2 className="section-heading">Biography</h2>
            <p className="prose-custom mb-4">
              Born on 15 August 1991 in Wanaparthy district, Telangana,{" "}
              {siteConfig.shortName} built a career grounded in perseverance,
              discipline, and service through education.
            </p>
            <p className="prose-custom mb-4">
              With 9+ years of teaching and 3 years of full-time doctoral
              research, he combines classroom excellence with applied research
              in cloud computing and machine learning. He currently serves as{" "}
              {siteConfig.role} at {siteConfig.institution}.
            </p>
            <p className="prose-custom">
              Explore his{" "}
              <Link href="/research" className="link-gold">
                research portfolio
              </Link>{" "}
              and{" "}
              <Link href="/awards" className="link-gold">
                awards
              </Link>
              , or{" "}
              <Link href="/contact" className="link-gold">
                get in touch
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section data-reveal className="py-14 md:py-20 bg-[linear-gradient(180deg,#f8f6f1_0%,#f3f5f8_100%)] border-y border-gray-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="section-heading">Education</h2>
          <ul className="space-y-5">
            {education.map((item) => (
              <li
                key={item.degree}
                className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm"
              >
                <h3 className="font-serif text-xl font-semibold text-navy">
                  {item.degree}
                </h3>
                <p className="text-gray-700 mt-1">{item.school}</p>
                <p className="text-sm text-navy-light mt-2">
                  {item.period}
                  {item.detail ? ` · ${item.detail}` : ""}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section data-reveal className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="section-heading">Professional experience</h2>
          <p className="prose-custom mb-8">
            Also listed on{" "}
            <a
              href="https://orcid.org/0000-0003-3525-6703"
              target="_blank"
              rel="noopener noreferrer"
              className="link-gold"
            >
              ORCID
            </a>{" "}
            and{" "}
            <a
              href="https://in.linkedin.com/in/vamsheedharredddy-pillaredddy-272a0aa9"
              target="_blank"
              rel="noopener noreferrer"
              className="link-gold"
            >
              LinkedIn
            </a>
            .
          </p>
          <ol className="space-y-4">
            {experience.map((job) => (
              <li
                key={job.org + job.period}
                className="border-l-4 border-gold pl-4 py-1"
              >
                <h3 className="font-serif text-lg font-semibold text-navy">
                  {job.role}
                </h3>
                <p className="text-gray-700">
                  {job.org} · {job.dept}
                </p>
                <p className="text-sm text-navy-light mt-1">{job.period}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section data-reveal id="teaching"
        className="py-14 md:py-20 bg-gray-50 scroll-mt-24 border-t border-gray-200/80"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="section-heading">Teaching philosophy</h2>
          <p className="prose-custom text-lg border-l-4 border-gold pl-4 italic mb-6">
            Education is transformative—inspiring students to become lifelong
            learners, critical thinkers, and responsible global citizens.
          </p>
          <p className="prose-custom mb-6">
            Instruction blends lectures, labs, multimedia, and LMS support.
            Students grow through quizzes, seminars, and project discussions.
          </p>
          <h3 className="font-serif text-xl font-semibold text-navy mb-3">
            Subjects taught
          </h3>
          <ul className="flex flex-wrap gap-2">
            {subjects.map((s) => (
              <li
                key={s}
                className="px-3 py-1.5 bg-white border border-navy/10 rounded text-sm font-medium text-navy"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section data-reveal className="py-14 md:py-20 bg-white border-t border-gray-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="section-heading text-center mb-8">Moments from the journey</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {gallery.map((item) => (
              <figure
                key={item.image}
                className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50 flex flex-col h-full"
              >
                <div className="relative aspect-[4/3] w-full bg-navy/5">
                  <Image
                    src={item.image}
                    alt={item.caption}
                    fill
                    className={`object-cover ${item.position}`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <figcaption className="p-3 text-sm text-gray-700 leading-snug flex-1">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <OutboundProfiles heading="Profiles linked from About" />
      <RelatedPages current="/about" />
    </main>
  );
}
