import { ListMark } from "./BrandIcons";

const interests = [
  "Academic collaborations",
  "Research discussions",
  "Educational initiatives",
  "Mentorship programs",
  "Social impact projects",
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="section-heading">Contact</h2>
        <p className="prose-custom mb-8">
          Dr. Pillareddy Vamsheedhar Reddy is open to:
        </p>
        <ul className="space-y-2 mb-10">
          {interests.map((item) => (
            <li key={item} className="prose-custom flex items-start gap-3">
              <ListMark />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 shadow-sm">
          <p className="font-semibold text-navy mb-4">For professional inquiries:</p>
          <div className="space-y-3">
            <p className="text-gray-600">
              <span className="font-medium text-navy">Email:</span> vamsheedharreddy@gmail.com
            </p>
            <p>
              <span className="font-medium text-navy">LinkedIn:</span>{" "}
              <a
                href="https://www.linkedin.com/in/vamsheedharredddy-pillaredddy-272a0aa9/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-gold"
              >
                Connect on LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
