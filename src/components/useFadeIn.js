import { useEffect } from 'react';

const useFadeIn = () => {
  useEffect(() => {
    const fadeIns = document.querySelectorAll('.fade-in');

    const options = {
      root: null, // Use the viewport
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add visible class
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, options);

    fadeIns.forEach(fadeIn => {
      observer.observe(fadeIn); // Observe each fade-in section
    });

    // Cleanup observer when the component is unmounted
    return () => {
      fadeIns.forEach(fadeIn => {
        observer.unobserve(fadeIn);
      });
    };
  }, []); // Empty dependency array ensures this runs only once on mount
};

export default useFadeIn;
