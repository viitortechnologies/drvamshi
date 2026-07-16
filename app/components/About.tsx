import Image from "next/image";

const values = [
  "Integrity",
  "Discipline",
  "Respect",
  "Responsibility",
  "Compassion",
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white scroll-mt-16 md:scroll-mt-[4.5rem]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="section-heading">About</h2>

        <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10 mb-12">
          <div className="relative w-full max-w-[220px] sm:max-w-[240px] md:max-w-none md:w-72 self-center md:self-start flex-shrink-0 aspect-[3/4] rounded-lg overflow-hidden border border-gray-200/80 shadow-sm bg-gray-100">
            <Image
              src="/images/Dr-Vamshi.webp"
              alt="Dr. Pillareddy Vamsheedhar Reddy"
              fill
              className="object-cover object-[center_15%]"
              sizes="(max-width: 768px) 240px, 288px"
              quality={80}
              loading="lazy"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-serif text-xl font-semibold text-navy mb-3">
              Early Life & Foundation
            </h3>
            <p className="prose-custom">
              Born into a farming family in a remote rural area, Dr. Vamsheedhar
              Reddy learned the value of hard work and responsibility at an early
              age. Limited resources and real-life challenges strengthened his
              resilience and shaped his character.
            </p>
            <p className="prose-custom mt-4">
              During his student years, he supported his family financially while
              continuing his education, a phase that deepened his empathy
              toward students facing similar circumstances.
            </p>
          </div>
        </div>

        <div className="space-y-10">
          <div>
            <h3 className="font-serif text-xl font-semibold text-navy mb-3">
              Personal Values
            </h3>
            <p className="prose-custom mb-4">
              A strong family man, he believes that values begin at home and
              extend into the classroom. He carries forward principles of:
            </p>
            <ul className="flex flex-wrap gap-2 mb-4 justify-start">
              {values.map((v) => (
                <li
                  key={v}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-navy/5 text-navy font-medium rounded-full border border-gold/30 text-sm sm:text-base"
                >
                  {v}
                </li>
              ))}
            </ul>
            <p className="prose-custom italic text-navy break-words">
              His guiding philosophy: ధర్మ సంస్థాపనార్థయా సంభావామీ యుగే యుగే.
            </p>
            <p className="prose-custom mt-2">
              This belief inspires his teaching ethics and social contributions.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold text-navy mb-3">
              Personal Interests
            </h3>
            <ul className="prose-custom list-disc list-inside space-y-1">
              <li>Passionate about reading books</li>
              <li>Sharing knowledge through discussions</li>
              <li>Encouraging intellectual curiosity</li>
              <li>Continuous self-learning</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
