"use client";

import { useEffect, useState } from "react";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const update = () => setShowTop(window.scrollY > 500);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const scrollToTop = () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return <div className="floating-actions" aria-label="Quick actions">
    {showTop && <button className="floating-top" type="button" onClick={scrollToTop} aria-label="Back to top" title="Back to top">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 19V5m0 0-6 6m6-6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </button>}
    <a className="floating-whatsapp" href="https://wa.me/971567931300?text=Hello%2C%20I%27d%20like%20to%20request%20a%20survey." target="_blank" rel="noopener noreferrer" aria-label="Chat with CSB on WhatsApp" title="Chat on WhatsApp">
      <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16 2.7A13.3 13.3 0 0 0 4.55 22.8L2.7 29.3l6.7-1.76A13.3 13.3 0 1 0 16 2.7Zm0 24.15a10.8 10.8 0 0 1-5.5-1.5l-.4-.24-3.97 1.04 1.06-3.87-.26-.4A10.83 10.83 0 1 1 16 26.85Zm5.95-8.1c-.33-.17-1.95-.96-2.25-1.07-.3-.11-.52-.17-.74.17-.22.33-.85 1.07-1.04 1.29-.19.22-.38.25-.71.08-.33-.16-1.4-.52-2.67-1.65-.99-.88-1.66-1.96-1.85-2.29-.19-.33-.02-.51.14-.67.15-.15.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.06-.41-.03-.58-.08-.16-.74-1.78-1.02-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.15 1.12-1.15 2.73s1.18 3.17 1.34 3.39c.16.22 2.32 3.54 5.63 4.96.79.34 1.41.54 1.89.69.79.25 1.5.21 2.06.13.63-.09 1.95-.8 2.22-1.57.27-.77.27-1.43.19-1.57-.08-.14-.3-.22-.63-.39Z" /></svg>
    </a>
  </div>;
}
