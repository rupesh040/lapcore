"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function LandingMain({ children }: { children: ReactNode }) {
  const main = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!main.current || !("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const sections = main.current.querySelectorAll<HTMLElement>(":scope > section:not([data-hero])");
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.setAttribute("data-revealed", "");
        observer.unobserve(entry.target);
      }
    }, { rootMargin: "0px 0px 24px 0px" });

    for (const section of sections) {
      if (section.getBoundingClientRect().top < window.innerHeight) continue;
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main
      ref={main}
      className="motion-safe:[&>section[data-revealed]>:last-child]:animate-entrance"
    >
      {children}
    </main>
  );
}
