"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Scroll-reveal for [data-reveal] sections and cards. */
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
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    requestAnimationFrame(() => {
      nodes.forEach((el, i) => {
        // Hero / first block: show immediately
        if (i === 0) {
          reveal(el);
          return;
        }
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.88 && rect.bottom > 40) {
          reveal(el);
        } else {
          io.observe(el);
        }
      });
    });

    // Last-resort safety only (keep animations intact while scrolling)
    const fallback = window.setTimeout(() => {
      nodes.forEach((el) => {
        if (!el.classList.contains("is-revealed")) reveal(el);
      });
    }, 10000);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, [pathname]);

  return null;
}
