import { RecognitionsMark } from "./BrandIcons";

const areas = [
  "Academic Reviewing",
  "Research Presentations",
  "Institutional Workshops",
  "Student Mentorship",
  "Educational Initiatives",
];

export default function Recognitions() {
  return (
    <section id="recognitions" className="py-16 md:py-24 bg-white scroll-mt-16 md:scroll-mt-[4.5rem]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="section-heading">Recognitions</h2>
        <p className="prose-custom mb-8">
          Dr. Vamsheedhar Reddy has been recognized for his contributions in:
        </p>
        <ul className="flex flex-wrap justify-center sm:justify-start gap-3">
          {areas.map((area) => (
            <li
              key={area}
              className="flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-lg border border-gray-100 w-full sm:w-[calc(50%-0.375rem)]"
            >
              <RecognitionsMark />
              <span className="font-medium text-navy">{area}</span>
            </li>
          ))}
        </ul>
        <p className="prose-custom mt-8 italic text-navy">
          These recognitions represent responsibility and trust placed in him by
          academic communities.
        </p>
      </div>
    </section>
  );
}
