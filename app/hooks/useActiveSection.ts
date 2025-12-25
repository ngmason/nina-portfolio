"use client";

import { useEffect, useState } from "react";

const sections = ["home", "about", "projects", "contact"] as const;

export default function useActiveSection() {
  const [activeSection, setActiveSection] =
    useState<(typeof sections)[number]>("home");

  useEffect(() => {
    const getHeaderOffset = () => {
      const stickyWrapper = document.querySelector("body > div.sticky");
      return stickyWrapper instanceof HTMLElement ? stickyWrapper.offsetHeight : 0;
    };

    const findActiveSection = () => {
      const headerOffset = getHeaderOffset();
      const probeY = headerOffset + 8;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();

        if (rect.top <= probeY && rect.bottom > probeY) {
          setActiveSection(id);
          return;
        }
      }
    };

    // Run once on mount (and after layout)
    requestAnimationFrame(findActiveSection);

    const onScroll = () => findActiveSection();
    const onResize = () => findActiveSection();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return activeSection;
}
