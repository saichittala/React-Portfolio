import { useEffect } from 'react';

const FullScrollFadeIn = () => {
    useEffect(() => {
        const fadeElements = document.querySelectorAll('.fade-in');

        const handleScroll = () => {
            fadeElements.forEach((el) => {
                const rect = el.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                const visibleFromBottom = windowHeight - rect.top;

                const fadeStart = 50;
                const fadeEnd = rect.height * 0.5; 

                const fadeRatio = Math.min(Math.max((visibleFromBottom - fadeStart) / fadeEnd, 0), 1); 

                el.style.opacity = fadeRatio; 
                el.style.transform = `translateY(${(1 - fadeRatio) * 20}px)`; 
                el.style.transition = 'opacity .8s cubic-bezier(0.455, 0.030, 0.515, 0.955), transform .8s cubic-bezier(0.455, 0.030, 0.515, 0.955)'; // Smooth transitions
                el.style.filter = `blur(${(1 - fadeRatio) * 8}px)`; // From 5px (start) to 0px (end)

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
