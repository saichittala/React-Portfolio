import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MagnetWrapper = ({
  children,
  strength = 0.02,
  scale = 1.00,
  className = '',
  style = {},
}) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springify the values for extra smoooothness 🧈
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const bounds = ref.current.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`magnet-wrapper ${className}`}
      style={{
        ...style,
        display: 'inline-block',
        transformOrigin: 'center',
        x: springX,
        y: springY,
        scale: scale,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
};

export default MagnetWrapper;
