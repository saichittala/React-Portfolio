import { useEffect } from 'react';

const ZoomOnScroll = () => {
    useEffect(() => {
        const zoomElements = document.querySelectorAll('.scale-on-scroll');

        const handleScroll = () => {
            zoomElements.forEach((el) => {
                const rect = el.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Check if the element is at the top boundary
                const scrollDistance = Math.min(Math.max(-rect.top, 0), windowHeight * 0.5); // Clamp between 0 and 50vh
                const zoomRatio = 1 - scrollDistance / (windowHeight * 0.5); // Calculate zoom ratio

                const startScale = parseFloat(getComputedStyle(el).getPropertyValue('--start-scale').trim()) || 3.0;
                const endScale = parseFloat(getComputedStyle(el).getPropertyValue('--end-scale').trim()) || 1;
                
                // Calculate new scale
                const newScale = startScale - (startScale - endScale) * zoomRatio;
                
                // Apply matrix transformation for initial middle positioning
                const translateY = (1 - zoomRatio) * 50; // Move image initially to center
                el.style.transform = `matrix(${newScale}, 0, 0, ${newScale}, 0, ${translateY})`;
            });
        };

        const handleResize = () => {
            zoomElements.forEach((el) => {
                const startScale = parseFloat(getComputedStyle(el).getPropertyValue('--start-scale').trim()) || 3.0;
                el.style.transform = `matrix(${startScale}, 0, 0, ${startScale}, 0, 50)`;
                handleScroll();
            });
        };

        handleResize();

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return null;
};

export default ZoomOnScroll;
