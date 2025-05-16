import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LuxurySmoothScroll = ({ children, scrollSpeed = 1 }) => {
  const scrollContainer = useRef(null);
  const frameId = useRef(null);
  const previousY = useRef(0); // Store previous Y to improve scroll interpolation

  useEffect(() => {
    const container = scrollContainer.current;
    if (!container || typeof window === 'undefined') return;

    let currentY = window.scrollY;
    let targetY = window.scrollY;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const lerpAmount = isMobile ? 0.05 * scrollSpeed : 0.1 * scrollSpeed;

    const setBodyHeight = () => {
      const height = container.getBoundingClientRect().height;
      document.body.style.height = `${height}px`;
    };

    const updateScroll = () => {
      targetY = window.scrollY;
      currentY = gsap.utils.interpolate(currentY, targetY, lerpAmount);
      previousY.current = currentY;

      gsap.set(container, {
        y: -currentY,
      });

      frameId.current = requestAnimationFrame(updateScroll);
    };

    const onResize = () => {
      setBodyHeight();
    };

    setBodyHeight();
    updateScroll();
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frameId.current);
      window.removeEventListener('resize', onResize);
      document.body.style.height = 'auto';
    };
  }, [scrollSpeed]);

  const ScrollIndicator = () => (
    <div className="luxury-scroll-indicator">
      <div className="scroll-line"></div>
      <div className="scroll-dot"></div>
    </div>
  );

  return (
    <div className="luxury-smooth-scroll">
      <div className="scroll-container" ref={scrollContainer}>
        {children}
      </div>
      <ScrollIndicator />
      <style jsx global>{`
        .luxury-smooth-scroll {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .scroll-container {
          position: absolute;
          width: 100%;
          will-change: transform;
        }

        .luxury-scroll-indicator {
          position: fixed;
          right: 40px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1000;
          height: 100px;
          display: flex;
          align-items: center;
          pointer-events: none;
        }

        .scroll-line {
                display: none;

          width: 1px;
          height: 100%;
          background: rgba(255, 255, 255, 0.2);
          position: relative;
        }

        .scroll-dot {
        display: none;
          position: absolute;
          right: -3px;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: white;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default LuxurySmoothScroll;
