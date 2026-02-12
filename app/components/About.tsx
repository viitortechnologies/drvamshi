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
    <section id="about" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="section-heading">About</h2>

        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-10 mb-12">
          <div className="relative w-full md:w-72 flex-shrink-0 aspect-[3/4] rounded-lg overflow-hidden border border-gray-200/80 shadow-sm">
            <Image
              src="/images/Dr-Vamshi.png"
              alt="Dr. Pillareddy Vamsheedhar Reddy"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 288px"
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
            <ul className="flex flex-wrap gap-2 mb-4">
              {values.map((v) => (
                <li
                  key={v}
                  className="px-4 py-2 bg-navy/5 text-navy font-medium rounded-full border border-gold/30"
                >
                  {v}
                </li>
              ))}
            </ul>
            <p className="prose-custom italic text-navy">
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
