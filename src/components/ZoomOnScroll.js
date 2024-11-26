import { useEffect } from 'react';

const ZoomOnScroll = () => {
    useEffect(() => {
        const zoomElements = document.querySelectorAll('.zoom-in');

        const handleScroll = () => {
            zoomElements.forEach((el) => {
                const rect = el.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Calculate visibility from top
                const visibleFromTop = windowHeight - rect.top;

                // Adjust thresholds for mobile screens
                const zoomStart = window.innerWidth <= 768 ? 30 : 50; // Start earlier on mobile
                const zoomEnd = rect.height * 0.5; // Adjust for smaller viewport heights

                // Calculate the zoom ratio
                const zoomRatio = Math.min(Math.max((visibleFromTop - zoomStart) / zoomEnd, 0), 1);

                // Get CSS variable values for start and end widths
                const startWidth = getComputedStyle(el).getPropertyValue('--start-width').trim();
                const endWidth = getComputedStyle(el).getPropertyValue('--end-width').trim();

                const parseDimension = (value) => {
                    if (!value) return 0;
                    const unit = value.replace(/[0-9.-]/g, '').trim();
                    const numberValue = parseFloat(value);

                    switch (unit) {
                        case 'px': return numberValue;
                        case '%': return (numberValue / 100) * window.innerWidth;
                        case 'vw': return (numberValue / 100) * window.innerWidth;
                        case 'vh': return (numberValue / 100) * window.innerHeight;
                        default: return numberValue;
                    }
                };

                // Parse the dimensions
                const startWidthValue = parseDimension(startWidth);
                const endWidthValue = parseDimension(endWidth);

                // Ensure a minimum width
                const minWidth = 50;
                const newWidth = startWidthValue - (startWidthValue - endWidthValue) * zoomRatio;
                const finalWidth = Math.max(newWidth, minWidth);

                // Apply the new width to the element
                el.style.width = `${finalWidth}px`;

                // Toggle "zoomed" class based on zoomRatio
                if (zoomRatio === 1) {
                    el.classList.add('zoomed');
                } else {
                    el.classList.remove('zoomed');
                }
            });
        };

        const handleResize = () => {
            handleScroll(); // Re-trigger scroll calculations on resize
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        handleScroll(); // Initial calculation

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return null;
};

export default ZoomOnScroll;
