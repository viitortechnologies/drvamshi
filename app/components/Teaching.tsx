import { ListMark } from "./BrandIcons";

const focusAreas = [
  "Strong conceptual foundations",
  "Career-oriented guidance",
  "Individual student attention",
  "Long-term mentorship relationships",
];

export default function Teaching() {
  return (
    <section id="teaching" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="section-heading">Teaching & Mentorship</h2>

        <div className="space-y-8">
          <div>
            <h3 className="font-serif text-xl font-semibold text-navy mb-3">
              Teaching Philosophy
            </h3>
            <p className="prose-custom text-lg border-l-4 border-gold pl-4 italic">
              Teaching is not about completing a syllabus; it is about building
              clarity, confidence, and character.
            </p>
            <p className="prose-custom mt-4">Dr. Vamsheedhar Reddy focuses on:</p>
            <ul className="mt-2 space-y-2">
              {focusAreas.map((item) => (
                <li key={item} className="flex items-start gap-3 prose-custom">
                  <ListMark />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold text-navy mb-3">
              Student Transformation
            </h3>
            <p className="prose-custom">
              Under his guidance, many students have grown into successful
              professionals in academia and industry. Some examples include:
            </p>
            <ul className="prose-custom mt-2 list-disc list-inside">
              <li>Vijay, Professor</li>
              <li>Kalyan, Leading IT Professional</li>
            </ul>
            <p className="prose-custom mt-4 italic text-navy font-medium">
              (Full list of mentees can be expanded later.)
            </p>
            <p className="prose-custom mt-4 text-lg">
              His greatest achievement lies not in awards but in the success
              of his students.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
