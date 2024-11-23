import { useEffect } from 'react';

const ZoomOnScroll = () => {
    useEffect(() => {
        const zoomElements = document.querySelectorAll('.zoom-in');

        const handleScroll = () => {
            zoomElements.forEach((el) => {
                const rect = el.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Calculate how far the element has entered the viewport from the top
                const visibleFromTop = windowHeight - rect.top;

                // Set the point when the zoom effect starts and ends
                const zoomStart = 50;  // Start zoom when element is 50px into the viewport
                const zoomEnd = rect.height * 0.5;  // End zoom when 50% of the element's height is visible

                // Calculate zoom ratio (scroll ratio) - clamped between 0 and 1
                const zoomRatio = Math.min(Math.max((visibleFromTop - zoomStart) / zoomEnd, 0), 1);

                // Get the start and end width from the CSS variables
                const startWidth = getComputedStyle(el).getPropertyValue('--start-width').trim();
                const endWidth = getComputedStyle(el).getPropertyValue('--end-width').trim();

                // Function to parse dimensions (px, %, vw, vh, calc(), min(), max())
                const parseDimension = (value) => {
                    if (value.includes('calc(')) {
                        return calculateCSSExpression(value);
                    } else if (value.includes('min(') || value.includes('max(')) {
                        return calculateMinMaxExpression(value);
                    }

                    const unit = value.replace(/[0-9.-]/g, ''); // Extract the unit
                    const numberValue = parseFloat(value);

                    switch (unit) {
                        case '%':
                            return (numberValue / 100) * window.innerWidth;
                        case 'px':
                            return numberValue;
                        case 'vw':
                            return (numberValue / 100) * window.innerWidth;
                        case 'vh':
                            return (numberValue / 100) * window.innerHeight;
                        default:
                            return numberValue;
                    }
                };

                // A safer function to evaluate calc() expressions
                const calculateCSSExpression = (expression) => {
                    try {
                        const calcExpression = expression.replace(/calc\(([^)]+)\)/, (_, match) => {
                            return match; // Extract the expression inside calc()
                        });
                        return eval(calcExpression); // Safely evaluate the expression
                    } catch (e) {
                        console.error("Invalid expression:", expression);
                        return 0;
                    }
                };

                // A function to handle min() and max() expressions
                const calculateMinMaxExpression = (expression) => {
                    try {
                        const match = expression.match(/(min|max)\(([^)]+)\)/);
                        if (match) {
                            const values = match[2].split(',').map(v => parseDimension(v.trim()));
                            return match[1] === 'min' ? Math.min(...values) : Math.max(...values);
                        }
                    } catch (e) {
                        console.error("Invalid min/max expression:", expression);
                        return 0;
                    }
                };

                // Parse start and end widths
                const startWidthValue = parseDimension(startWidth);
                const endWidthValue = parseDimension(endWidth);

                // Add a minimum width to prevent the element from disappearing
                const minWidth = 50;  // Minimum width in pixels (you can adjust this)

                // Calculate the new width based on the scroll position (zoomRatio)
                const newWidth = startWidthValue - (startWidthValue - endWidthValue) * zoomRatio;

                // Ensure the new width doesn't go below the minWidth
                const finalWidth = Math.max(newWidth, minWidth);

                // Apply the new width by updating the element's style
                el.style.width = `${finalWidth}px`;

                // Add "zoomed" class when the element has fully zoomed (when zoomRatio is 1)
                if (zoomRatio === 1) {
                    el.classList.add('zoomed');
                } else {
                    el.classList.remove('zoomed');
                }
            });
        };

        // Attach scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Perform initial calculation when the page loads
        handleScroll();

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures this runs only once after initial render

    return null; // No need to render anything in this component
};

export default ZoomOnScroll;
