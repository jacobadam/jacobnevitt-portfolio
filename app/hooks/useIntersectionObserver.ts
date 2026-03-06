import { useEffect } from "react";

interface IntersectionObserverInit {
  rootMargin?: string;
  root?: Element | null;
  threshold?: number;
}

export const useIntersectionObserver = (
  setActiveSection: (activeSection: string) => void,
): void => {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px 0px -70% 0px",
      threshold: 0,
    };
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const visibleSections = entries.filter((entry) => entry.isIntersecting);

      if (visibleSections.length > 0) {
        console.log(visibleSections);
        const mostVisibleSection = visibleSections.reduce((prev, current) =>
          prev.intersectionRatio > current.intersectionRatio ? prev : current,
        );

        setActiveSection(mostVisibleSection.target.id);
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
    return () => observer.disconnect();
  }, [setActiveSection]);
};
