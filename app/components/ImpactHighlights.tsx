import { IconCap, IconBook, IconGlobe, IconBuilding, IconBookOpen } from "./BrandIcons";

const highlights = [
  {
    Icon: IconCap,
    title: "Associate Professor in Higher Education",
  },
  {
    Icon: IconBook,
    title: "Active Researcher & Journal Reviewer",
  },
  {
    Icon: IconGlobe,
    title: "Mentor to Students Across Generations",
  },
  {
    Icon: IconBuilding,
    title: "Founder, Dr. Radhakrishnan Foundation",
  },
  {
    Icon: IconBookOpen,
    title: "Passionate Reader & Knowledge Sharer",
  },
];

export default function ImpactHighlights() {
  return (
    <section className="py-16 md:py-20 bg-gray-50 border-y border-gray-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="section-heading text-center mb-12">
          Impact Highlights
        </h2>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {highlights.map(({ Icon, title }, i) => (
            <div
              key={i}
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.34rem)] max-w-sm bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all duration-300 text-center flex flex-col items-center"
            >
              <span className="mb-4 flex justify-center">
                <Icon />
              </span>
              <h3 className="font-serif text-lg font-semibold text-navy">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
