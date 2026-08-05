import { useEffect } from "react";

const sectionIds = ["about", "projects", "experience", "tech-stack"] as const;

type SectionId = (typeof sectionIds)[number];

function isSectionId(value: string): value is SectionId {
  return sectionIds.includes(value as SectionId);
}

export const useActiveSection = (
  setActiveSection: (activeSection: SectionId) => void,
): void => {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]"),
    );

    let ticking = false;

    const updateActiveSection = () => {
      ticking = false;

      if (window.scrollY < 50) {
        setActiveSection("about");
        return;
      }

      const targetLine = window.innerHeight * 0.3;

      let closestSection: SectionId | null = null;
      let closestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section) => {
        if (!isSectionId(section.id)) return;

        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - targetLine);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = section.id;
        }
      });

      if (closestSection) {
        setActiveSection(closestSection);
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [setActiveSection]);
};
