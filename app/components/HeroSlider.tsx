"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    image: "/images/hero1.webp",
    headline: "Shaping Students. Building Futures.",
    subheading: "Dr. Pillareddy Vamsheedhar Reddy",
    role: "Associate Professor | Researcher | Mentor",
    supporting:
      "Dedicated to transforming students into responsible global professionals through knowledge, discipline, and values.",
    position: "object-[center_28%]",
  },
  {
    image: "/images/hero2.webp",
    headline: "Academic Excellence with Integrity",
    subheading: "Dr. Pillareddy Vamsheedhar Reddy",
    role: "Educator · Researcher · Mentor",
    supporting:
      "Recognized for contributions in teaching, research, and academic review across national and international platforms.",
    position: "object-[center_32%]",
  },
  {
    image: "/images/hero3.webp",
    headline: "Leading with Knowledge & Responsibility",
    subheading: "Dr. Pillareddy Vamsheedhar Reddy",
    role: "Building character through education",
    supporting:
      "Committed to education that prepares students not only for careers but for life.",
    position: "object-[center_25%]",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(() => new Set([0]));

  const markLoaded = useCallback((index: number) => {
    setLoaded((prev) => {
      if (prev.has(index)) return prev;
      const next = new Set(prev);
      next.add(index);
      return next;
    });
  }, []);

  const goTo = useCallback(
    (index: number) => {
      markLoaded(index);
      setCurrent(index);
    },
    [markLoaded]
  );

  useEffect(() => {
    markLoaded((current + 1) % slides.length);
  }, [current, markLoaded]);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => {
        const next = (c + 1) % slides.length;
        markLoaded(next);
        return next;
      });
    }, 6000);
    return () => clearInterval(t);
  }, [markLoaded]);

  const slide = slides[current];

  return (
    <section
      id="home"
      className="relative w-full scroll-mt-16 md:scroll-mt-[4.5rem] bg-[#f3f5f8] pt-16 md:pt-[4.5rem]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh] lg:h-[60vh] lg:min-h-[420px] lg:max-h-[720px]">
        {/* Left — content synced to active slide */}
        <div className="relative flex flex-col justify-center px-6 py-10 sm:px-10 md:px-14 lg:px-16 xl:px-20 order-2 lg:order-1">
          <div key={current} className="animate-hero-fade max-w-xl">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-semibold text-navy leading-tight text-balance mb-4">
              {slide.headline}
            </h1>
            {slide.subheading && (
              <p className="text-lg sm:text-xl text-gold font-medium mb-1">
                {slide.subheading}
              </p>
            )}
            {slide.role && (
              <p className="text-base sm:text-lg text-navy-light mb-4">
                {slide.role}
              </p>
            )}
            {slide.supporting && (
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {slide.supporting}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2 mt-8" role="tablist" aria-label="Hero slides">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all touch-manipulation ${
                  i === current
                    ? "w-8 bg-gold"
                    : "w-2.5 bg-navy/25 hover:bg-navy/40"
                }`}
                aria-label={`Show slide ${i + 1}`}
                aria-selected={i === current}
              />
            ))}
          </div>
        </div>

        {/* Right — framed image slider */}
        <div className="relative order-1 lg:order-2 flex items-center justify-center p-4 sm:p-5 lg:p-6 xl:p-8 h-[42vh] min-h-[260px] sm:h-[48vh] lg:h-full">
          <div
            className="relative w-full h-full overflow-hidden bg-navy-dark rounded-[8px] border border-white"
            style={{
              boxShadow:
                "0 0 20px rgba(255,255,255,0.35), 0 0 40px rgba(212,168,75,0.15), 0 10px 28px rgba(30,45,74,0.22)",
            }}
          >
            {slides.map((item, i) => {
              const active = i === current;
              const shouldRender = loaded.has(i);

              return (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    active ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                  aria-hidden={!active}
                >
                  {shouldRender && (
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className={`object-cover ${item.position}`}
                      sizes="(max-width: 1023px) 100vw, 50vw"
                      priority={i === 0}
                      quality={85}
                      onLoad={() => markLoaded(i)}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
