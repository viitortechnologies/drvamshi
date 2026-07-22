"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Observes [data-reveal] elements and animates them into view once per page. */
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!nodes.length) return;

    nodes.forEach((el) => el.classList.remove("is-revealed"));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );

    // Hero / first section reveal immediately
    requestAnimationFrame(() => {
      nodes.slice(0, 1).forEach((el) => el.classList.add("is-revealed"));
      nodes.forEach((el, i) => {
        if (i > 0) io.observe(el);
      });
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
