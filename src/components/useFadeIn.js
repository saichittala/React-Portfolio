import { useEffect } from "react";

const useFadeIn = (selector = ".fade-in", offset = 0.9) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "0px 0px 200px 0px", // Trigger 200px before entering viewport
      }
    );

    elements.forEach((el) => {
      if (!el.classList.contains("visible")) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [selector, offset]);
};

export default useFadeIn;
