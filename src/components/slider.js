import React, { useState, useRef, useEffect } from 'react';

const BeforeAfterSlider = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50); // Start at 50%
  const sliderRef = useRef(null);
  const isDragging = useRef(false);

  // To update the slider position dynamically
  const handleMouseDown = (e) => {
    isDragging.current = true; // Start dragging
    e.preventDefault(); // Prevent text selection during drag

    const startX = e.clientX;
    const slider = sliderRef.current;
    const sliderRect = slider.getBoundingClientRect();

    // Calculate new position on mouse move
    const handleMouseMove = (e) => {
      if (!isDragging.current) return;

      const diff = e.clientX - startX;
      const newPosition = ((sliderRect.left + diff - sliderRect.left) / sliderRect.width) * 100;
      const clampedPosition = Math.max(0, Math.min(100, newPosition)); // Ensure it's within bounds

      setSliderPosition(clampedPosition); // Update slider position
    };

    // Stop dragging on mouse up
    const handleMouseUp = () => {
      isDragging.current = false;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  // To handle touch events for mobile devices
  const handleTouchStart = (e) => {
    e.preventDefault();
    const touchStart = e.touches[0].clientX;
    const slider = sliderRef.current;
    const sliderRect = slider.getBoundingClientRect();

    const handleTouchMove = (e) => {
      const touchMove = e.touches[0].clientX;
      const diff = touchMove - touchStart;
      const newPosition = ((sliderRect.left + diff - sliderRect.left) / sliderRect.width) * 100;
      const clampedPosition = Math.max(0, Math.min(100, newPosition));
      setSliderPosition(clampedPosition);
    };

    const handleTouchEnd = () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };

    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  };

  useEffect(() => {
    // Ensure that the window resizes gracefully, keep the slider position updated
    const handleResize = () => setSliderPosition(50);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="before-after-container" style={{ position: 'relative', height: '500px' }}>
      {/* Before Image */}
      <div
        className="before-image"
        style={{
          backgroundImage: `url(${beforeImage})`,
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`, // Clip the before image based on the slider position
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* After Image */}
      <div
        className="after-image"
        style={{
          backgroundImage: `url(${afterImage})`,
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Slider Handler */}
      <div
        ref={sliderRef}
        className="slider-handler"
        style={{
          position: 'absolute',
          top: 0,
          left: `${sliderPosition}%`, // The handle will move based on this position
          width: '10px',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          cursor: 'ew-resize',
          zIndex: 10,
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      />
    </div>
  );
};

export default BeforeAfterSlider;
