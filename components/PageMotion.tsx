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

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("motion-visible");
          observer.unobserve(entry.target);
        }
      }
    }, { rootMargin: "0px 0px -6% 0px" });

    const register = () => {
      main.querySelectorAll<HTMLElement>(revealSelector).forEach((element) => {
        if (element.classList.contains("motion-target")) return;
        element.classList.add("motion-target");
        observer.observe(element);
      });
    };

    register();
    document.documentElement.classList.add("motion-ready");
    const mutations = new MutationObserver(register);
    mutations.observe(main, { childList: true, subtree: true });

    return () => {
      mutations.disconnect();
      observer.disconnect();
      main.querySelectorAll<HTMLElement>(".motion-target").forEach((element) => {
        element.classList.remove("motion-target", "motion-visible");
      });
      document.documentElement.classList.remove("motion-ready");
    };
  }, [pathname]);

  return null;
}
