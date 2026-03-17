import { useEffect } from "react";

type sectionValues = {
  ratio: number;
  visible: boolean;
  id: sectionId;
};

const sectionIds = ["about", "experience", "projects", "tech-stack"] as const;

type sectionId = (typeof sectionIds)[number];

type sectionLookup = Record<sectionId, sectionValues>;

export const useActiveSectionObserver = (
  setActiveSection: (activeSection: string) => void,
): void => {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -55% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const sectionLookupTable: sectionLookup = {
      about: { ratio: 0, visible: false, id: "about" },
      experience: { ratio: 0, visible: false, id: "experience" },
      projects: { ratio: 0, visible: false, id: "projects" },
      "tech-stack": { ratio: 0, visible: false, id: "tech-stack" },
    };

    function isSectionId(value: string): value is sectionId {
      return sectionIds.some((item) => item === value);
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const id = entry.target.id;

        if (isSectionId(id)) {
          sectionLookupTable[id] = {
            ratio: entry.intersectionRatio,
            id,
            visible: entry.isIntersecting,
          };
        }
      });

      const sectionLookupTableArray = Object.values(sectionLookupTable);

      const activeSection = sectionLookupTableArray.filter(
        (section) => section.visible,
      );
      console.log(activeSection);

      if (activeSection.length > 0) {
        const mostVisable = activeSection.reduce((prev, curr) =>
          prev.ratio > curr.ratio ? prev : curr,
        );
        setActiveSection(mostVisable.id);
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
