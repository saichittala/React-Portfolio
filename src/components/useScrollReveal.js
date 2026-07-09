import { useEffect } from 'react';

export default function useScrollReveal() {
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };

    // IMAGE ANIMATION
    const revealCallback = (entries, observer) => {
      entries.forEach((entry) => {
        const container = entry.target;
        if (entry.isIntersecting) {
          container.classList.add("animating");
          observer.unobserve(container); // Animate only once
        }
      });
    };

    const revealObserver = new IntersectionObserver(revealCallback, options);
    const revealEls = document.querySelectorAll(".reveal");
    revealEls.forEach((reveal) => revealObserver.observe(reveal));

    // TEXT ANIMATION
    const fadeupCallback = (entries, observer) => {
      entries.forEach((entry) => {
        const container = entry.target;
        container.classList.add("not-fading-up");
        if (entry.isIntersecting) {
          container.classList.add("fading-up");
          observer.unobserve(container); // Animate only once
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
