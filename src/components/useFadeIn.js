import { useEffect } from "react";

const useFadeIn = (selector = ".fade-in", offset = 0.9) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    const revealOnFrame = () => {
      elements.forEach((el) => {
        if (el.classList.contains("visible")) return; // skip if already visible
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * offset) {
          el.classList.add("visible");
        }
      });
    };

    let frameId;

    const animate = () => {
      revealOnFrame();
      frameId = requestAnimationFrame(animate);
    };

    // If Lenis exists, hook into its raf
    if (window.lenis) {
      window.lenis.on("scroll", revealOnFrame);
      frameId = requestAnimationFrame(animate);
    } else {
      // fallback to native scroll + RAF
      window.addEventListener("scroll", revealOnFrame, { passive: true });
      frameId = requestAnimationFrame(animate);
    }

    // Run once immediately
    revealOnFrame();

    return () => {
      if (window.lenis) {
        window.lenis.off("scroll", revealOnFrame);
      } else {
        window.removeEventListener("scroll", revealOnFrame);
      }
      cancelAnimationFrame(frameId);
    };
  }, [selector, offset]);
};

export default useFadeIn;
