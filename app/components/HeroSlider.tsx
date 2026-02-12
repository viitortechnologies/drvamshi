"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  {
    image: "/images/hero1.png",
    headline: "Shaping Students. Building Futures.",
    subheading: "Dr. Pillareddy Vamsheedhar Reddy",
    role: "Associate Professor | Researcher | Mentor",
    supporting:
      "Dedicated to transforming students into responsible global professionals through knowledge, discipline, and values.",
  },
  {
    image: "/images/hero2.png",
    headline: "Academic Excellence with Integrity",
    subheading: "",
    role: "",
    supporting:
      "Recognized for contributions in teaching, research, and academic review across national and international platforms.",
  },
  {
    image: "/images/hero3.png",
    headline: "Leading with Knowledge & Responsibility",
    subheading: "",
    role: "",
    supporting:
      "Committed to education that prepares students not only for careers but for life.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative h-[85vh] min-h-[520px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-hero-gradient" />
          </div>
          <div className="absolute inset-0 z-10 flex flex-col justify-center text-white px-4 sm:px-6 md:px-12 max-w-4xl">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-4 drop-shadow-sm">
              {slide.headline}
            </h1>
            {slide.subheading && (
              <p className="text-xl md:text-2xl text-gold-light font-medium mb-1">
                {slide.subheading}
              </p>
            )}
            {slide.role && (
              <p className="text-lg md:text-xl text-white/90 mb-4">{slide.role}</p>
            )}
            {slide.supporting && (
              <p className="text-base md:text-lg text-white/90 max-w-2xl leading-relaxed">
                {slide.supporting}
              </p>
            )}
          </div>
        </div>
      ))}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${
              i === current ? "w-8 bg-gold" : "w-2 bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
