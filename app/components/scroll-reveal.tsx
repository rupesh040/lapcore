"use client";

import { useEffect } from "react";

/**
 * Runs once on mount to observe all `[data-animate]` elements on the page
 * (including those outside <main>, like the footer) and adds the `revealed`
 * class when they scroll into view.
 */
export function ScrollRevealInit() {
  useEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const elements = document.querySelectorAll<HTMLElement>("[data-animate]");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          const delay = el.dataset.delay;
          if (delay) el.style.animationDelay = delay;
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.08 }
    );

    for (const el of elements) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
