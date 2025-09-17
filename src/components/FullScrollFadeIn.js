import { useEffect } from "react";

const FullScrollFadeIn = () => {
  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-in");
    if (!fadeElements.length) return;

    const handleScroll = () => {
      fadeElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const visibleFromBottom = windowHeight - rect.top;
        const fadeStart = 50;
        const fadeEnd = rect.height * 0.5;

        const fadeRatio = Math.min(
          Math.max((visibleFromBottom - fadeStart) / fadeEnd, 0),
          1
        );

        el.style.opacity = fadeRatio;
        el.style.transform = `translateY(${(1 - fadeRatio) * 20}px)`;
        el.style.filter = `blur(${(1 - fadeRatio) * 8}px)`;
      });
    };

    let detachScroll = () => {};

    const attachNativeScroll = () => {
      window.addEventListener("scroll", handleScroll, { passive: true });
      detachScroll = () =>
        window.removeEventListener("scroll", handleScroll);
    };

    const attachLenisScroll = () => {
      if (!window.lenis) return;
      window.lenis.on("scroll", handleScroll);
      detachScroll = () => {
        if (window.lenis) {
          window.lenis.off("scroll", handleScroll);
        }
      };
    };

    if (window.lenis) {
      attachLenisScroll();
    } else {
      attachNativeScroll();

      const interval = setInterval(() => {
        if (window.lenis) {
          detachScroll(); // remove native listener
          attachLenisScroll(); // switch to Lenis
          clearInterval(interval);
        }
      }, 100);

      const oldDetach = detachScroll;
      detachScroll = () => {
        oldDetach();
        clearInterval(interval);
      };
    }

    handleScroll();

    return () => {
      detachScroll();
    };
  }, []);

  return null;
};

export default FullScrollFadeIn;
