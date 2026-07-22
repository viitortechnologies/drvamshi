"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Observes [data-reveal] elements and animates them into view once per page. */
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    if (!nodes.length) return;

    nodes.forEach((el) => el.classList.remove("is-revealed"));

    const reveal = (el: Element) => el.classList.add("is-revealed");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach(reveal);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    // First block + anything already on screen
    requestAnimationFrame(() => {
      nodes.forEach((el, i) => {
        if (i === 0) {
          reveal(el);
          return;
        }
        const rect = el.getBoundingClientRect();
        const inView =
          rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
        if (inView) reveal(el);
        else io.observe(el);
      });
    });

    // Safety: never leave page content stuck at opacity 0
    const fallback = window.setTimeout(() => {
      nodes.forEach(reveal);
    }, 1800);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, [pathname]);

  return null;
}
