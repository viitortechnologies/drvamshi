export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12 pb-10 md:py-16 md:pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <blockquote className="font-serif text-lg sm:text-xl md:text-2xl text-gold-light italic mb-6 text-balance px-1">
          &ldquo;Education shapes character. Character shapes society.&rdquo;
        </blockquote>
        <div className="text-white/90 text-sm space-y-2 pb-2">
          <p className="px-1">
            © {new Date().getFullYear()} Dr. Pillareddy Vamsheedhar Reddy. All rights reserved.
          </p>
          <p>
            Designed and developed by{" "}
            <a
              href="https://viitortechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-light underline font-semibold hover:text-gold transition-colors"
            >
              Viitor Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
