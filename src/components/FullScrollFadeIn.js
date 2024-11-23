import { useEffect } from 'react';

const FullScrollFadeIn = () => {
    useEffect(() => {
        const fadeElements = document.querySelectorAll('.fade-in');

        const handleScroll = () => {
            fadeElements.forEach((el) => {
                const rect = el.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Calculate how far the element has entered the viewport from the bottom
                const visibleFromBottom = windowHeight - rect.top;

                // Customize when fade starts (e.g., starts 50px into the viewport)
                const fadeStart = 50; // Start fade-in when element is 50px into the viewport
                const fadeEnd = rect.height * 0.5; // End fade-in when 50% of the element's height is visible

                // Calculate fade ratio
                const fadeRatio = Math.min(Math.max((visibleFromBottom - fadeStart) / fadeEnd, 0), 1); // Clamp to 0-1

                // Dynamically apply styles based on scroll position
                el.style.opacity = fadeRatio; // Fade-in effect (0 to 1)
                el.style.transform = `translateY(${(1 - fadeRatio) * 20}px)`; // Optional slide-up effect
                el.style.transition = 'opacity .8s cubic-bezier(0.455, 0.030, 0.515, 0.955), transform .8s cubic-bezier(0.455, 0.030, 0.515, 0.955)'; // Smooth transitions
            });
        };

        // Attach scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Perform initial calculation
        handleScroll();

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
};

export default FullScrollFadeIn;
