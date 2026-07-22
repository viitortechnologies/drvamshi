"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { heroSlides } from "../lib/content";

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(t);
  }, []);

  const slide = heroSlides[current];

  return (
    <section
      id="home"
      data-reveal
      className="relative w-full scroll-mt-16 md:scroll-mt-[4.5rem] bg-hero-wash pt-16 md:pt-[4.5rem]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center lg:min-h-0 gap-0">
        <div className="relative flex flex-col justify-center px-5 py-8 sm:px-8 sm:py-10 md:px-12 lg:px-14 xl:px-16 order-2 lg:order-1">
          <div
            key={current}
            className="animate-hero-fade max-w-xl mx-auto lg:mx-0 text-center lg:text-left w-full"
          >
            <p className="text-teal font-semibold text-xs sm:text-sm tracking-[0.14em] uppercase mb-3">
              Educator · Researcher · Mentor
            </p>
            <h1 className="font-serif text-[1.75rem] leading-tight sm:text-4xl md:text-5xl font-semibold text-navy text-balance mb-3 sm:mb-4">
              {slide.headline}
            </h1>
            {slide.subheading && (
              <p className="text-base sm:text-xl text-navy font-medium mb-1">
                {slide.subheading}
              </p>
            )}
            {slide.role && (
              <p className="text-sm sm:text-lg text-navy-light mb-3 sm:mb-4">
                {slide.role}
              </p>
            )}
            {slide.supporting && (
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                {slide.supporting}
              </p>
            )}
          </div>

          <div
            className="flex items-center justify-center lg:justify-start gap-2 mt-6 sm:mt-8"
            role="tablist"
            aria-label="Hero slides"
          >
            {heroSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all touch-manipulation ${
                  i === current ? "w-8 bg-gold" : "w-2.5 bg-navy/25 hover:bg-navy/40"
                }`}
                aria-label={`Show slide ${i + 1}`}
                aria-selected={i === current}
              />
            ))}
          </div>
        </div>

        <div className="relative order-1 lg:order-2 flex items-center justify-center p-4 sm:p-5 lg:p-8 xl:p-10">
          <div className="relative w-full max-w-lg mx-auto lg:max-w-none aspect-[3/2] overflow-hidden bg-navy-dark rounded-xl border border-white/90 hero-frame">
            {heroSlides.map((item, i) => {
              const active = i === current;
              return (
                <div
                  key={item.image}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    active ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                  aria-hidden={!active}
                >
                  <Image
                    src={item.image}
                    alt={item.headline}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1023px) 92vw, 42vw"
                    priority={i === 0}
                    loading={i === 0 ? "eager" : "lazy"}
                    quality={70}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
