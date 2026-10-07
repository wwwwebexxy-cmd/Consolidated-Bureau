"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

const revealSelector = [
  ".proof-grid > div",
  ".about-content",
  ".section-heading-row",
  ".service-card",
  ".service-end",
  ".approach-intro",
  ".approach-steps > div",
  ".coverage-grid > div",
  ".gallery-teaser-media",
  ".gallery-teaser-copy",
  ".faq-grid > div:first-child",
  ".faq-list details",
  ".contact-heading",
  ".contact-card",
  ".gallery-content-head",
  ".video-card",
  ".gallery-filter-bar",
  ".photo-card",
  ".gallery-note",
].join(", ");

export default function PageMotion() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const main = document.querySelector("main");
    if (!main || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const pending = new Set<HTMLElement>();
    let timer = 0;
    const revealInView = () => {
      timer = 0;
      for (const element of pending) {
        if (!element.isConnected) {
          pending.delete(element);
          continue;
        }
        const rect = element.getBoundingClientRect();
        if (rect.top >= window.innerHeight * 0.94 || rect.bottom <= 0) continue;
        element.classList.add("motion-visible");
        pending.delete(element);
      }
    };
    const scheduleReveal = () => {
      if (!timer && pending.size) timer = window.setTimeout(revealInView, 40);
    };

    const register = () => {
      main.querySelectorAll<HTMLElement>(revealSelector).forEach((element) => {
        if (element.classList.contains("motion-target")) return;
        element.classList.add("motion-target");
        pending.add(element);
      });
      scheduleReveal();
    };

    register();
    document.documentElement.classList.add("motion-ready");
    const mutations = new MutationObserver(register);
    mutations.observe(main, { childList: true, subtree: true });
    window.addEventListener("scroll", scheduleReveal, { passive: true });
    window.addEventListener("resize", scheduleReveal);

    return () => {
      mutations.disconnect();
      window.removeEventListener("scroll", scheduleReveal);
      window.removeEventListener("resize", scheduleReveal);
      clearTimeout(timer);
      document.documentElement.classList.remove("motion-ready");
    };
  }, [pathname]);

  return null;
}
