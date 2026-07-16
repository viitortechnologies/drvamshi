const researchInterests = [
  "Artificial Intelligence",
  "Computing & Optimization",
  "Medical Information Systems",
  "Scheduling Frameworks",
];

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 bg-gray-50 scroll-mt-16 md:scroll-mt-[4.5rem]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="section-heading">Education & Career</h2>

        <div className="space-y-8">
          <div>
            <h3 className="font-serif text-xl font-semibold text-navy mb-2">
              Academic Qualification
            </h3>
            <p className="prose-custom">
              B.Tech in Information Technology (2008 to 2012)
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold text-navy mb-2">
              Professional Journey
            </h3>
            <p className="prose-custom">
              Dr. Vamsheedhar Reddy has dedicated his professional life entirely
              to the education sector. Over the years, he has served in
              teaching and academic roles with a consistent focus on student
              growth and academic integrity.
            </p>
            <p className="prose-custom mt-4">
              His detailed professional experience can be viewed on LinkedIn:
            </p>
            <a
              href="https://www.linkedin.com/in/vamsheedharredddy-pillaredddy-272a0aa9/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-gold inline-flex items-center gap-2 mt-2"
            >
              LinkedIn Profile
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold text-navy mb-2">
              Doctoral Research
            </h3>
            <p className="prose-custom">
              He pursued doctoral research to deepen his academic contributions
              and strengthen research impact in his domain. (Doctoral details
              can be expanded once officially finalized.)
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold text-navy mb-2">
              Research & Academic Presence
            </h3>
            <p className="prose-custom mb-4">
              He actively contributes to research and peer review activities.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://scholar.google.com/citations?hl=en&user=1DD-5EAAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="link-gold"
              >
                Google Scholar
              </a>
              <a
                href="https://orcid.org/0000-0003-3525-6703"
                target="_blank"
                rel="noopener noreferrer"
                className="link-gold"
              >
                ORCID
              </a>
            </div>
            <p className="prose-custom mt-4">His research interests include:</p>
            <ul className="flex flex-wrap gap-2 mt-2">
              {researchInterests.map((r) => (
                <li
                  key={r}
                  className="px-3 py-1.5 bg-white border border-navy/10 rounded text-navy text-sm font-medium"
                >
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
