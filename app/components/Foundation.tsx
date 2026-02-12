import { ListMark } from "./BrandIcons";

const visionPoints = [
  "Supporting underprivileged students",
  "Promoting value-based education",
  "Encouraging knowledge sharing",
  "Strengthening social responsibility through education",
];

export default function Foundation() {
  return (
    <section id="foundation" className="py-16 md:py-24 bg-gray-50 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="section-heading">Foundation & Social Impact</h2>

        <div className="space-y-6">
          <h3 className="font-serif text-2xl font-semibold text-navy">
            Dr. Radhakrishnan Foundation
          </h3>
          <p className="prose-custom">
            Dr. Radhakrishnan Foundation was established with the support of
            like-minded friends who share a vision of education-driven social
            upliftment.
          </p>
          <div>
            <h4 className="font-serif text-lg font-semibold text-navy mb-3">
              Foundation Vision
            </h4>
            <ul className="space-y-2">
              {visionPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 prose-custom">
                  <ListMark />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="prose-custom italic text-navy">
            Inspired by great educators and reformers, the foundation reflects
            the belief that education must serve society.
          </p>
        </div>
      </div>
    </section>
  );
}
