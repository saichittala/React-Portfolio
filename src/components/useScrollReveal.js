import { useEffect } from 'react';

export default function useScrollReveal() {
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };

    // IMAGE ANIMATION
    const revealCallback = (entries) => {
      entries.forEach((entry) => {
        const container = entry.target;
        if (entry.isIntersecting) {
          container.classList.add("animating");
        } else if (entry.boundingClientRect.top > 0) {
          container.classList.remove("animating");
        }
      });
    };

    const revealObserver = new IntersectionObserver(revealCallback, options);
    const revealEls = document.querySelectorAll(".reveal");
    revealEls.forEach((reveal) => revealObserver.observe(reveal));

    // TEXT ANIMATION
    const fadeupCallback = (entries) => {
      entries.forEach((entry) => {
        const container = entry.target;
        container.classList.add("not-fading-up");
        if (entry.isIntersecting) {
          container.classList.add("fading-up");
        } else if (entry.boundingClientRect.top > 0) {
          container.classList.remove("fading-up");
        }
      });
    };

    const fadeupObserver = new IntersectionObserver(fadeupCallback, options);
    const fadeupEls = document.querySelectorAll(".fadeup");
    fadeupEls.forEach((fadeup) => fadeupObserver.observe(fadeup));

    return () => {
      revealObserver.disconnect();
      fadeupObserver.disconnect();
    };
  }, []);
}
