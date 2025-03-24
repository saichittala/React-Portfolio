import { useEffect, useRef } from "react";

const DesignText = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const textElement = textRef.current;
        if (!textElement) return;

        const words = textElement.innerText.split(" ");
        textElement.innerHTML = words.map((w) => `<span class="word">${w}</span>`).join(" ");

        const wordElements = textElement.querySelectorAll(".word");

        const handleScroll = () => {
            const rect = textElement.getBoundingClientRect();
            let scrollProgress = Math.min(Math.max((window.innerHeight - rect.top) / (window.innerHeight * 0.98), 0), 1);

            if (scrollProgress < 0.02) return; // Start effect after 2% scroll

            wordElements.forEach((word, i) => {
                let opacityFactor = (i + 1) / wordElements.length; // Control opacity progression
                let calculatedOpacity = Math.min(0.01 + ((scrollProgress - 0.02) / (0.99 - 0.02)) / opacityFactor, 1);

                word.style.opacity = calculatedOpacity;
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="design-text-div fade-in" ref={textRef}>
            "I craft experiences that redefine digital perfection."
        </div>
    );
};

export default DesignText;
