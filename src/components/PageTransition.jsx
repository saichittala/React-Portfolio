import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

const DURATION = 500; // ms — snappy but graceful, Apple-style

// Apple's signature easing: fast out, slow in — feels physical, not mechanical
const EASE = "cubic-bezier(0.4, 0, 0.2, 1)";

const stages = {
  idle:  { opacity: 1,   transform: "translateY(0px)  scale(1)",    filter: "blur(0px)"   },
  exit:  { opacity: 0,   transform: "translateY(-12px) scale(0.98)", filter: "blur(4px)"   },
  enter: { opacity: 0,   transform: "translateY(8px)   scale(0.99)", filter: "blur(2px)"   },
};

export default function PageTransition({ children, animateRoutes = [] }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [stage, setStage] = useState("idle");

  const timeoutRef = useRef(null);
  const frameRef1 = useRef(null);
  const frameRef2 = useRef(null);
  const currentKeyRef = useRef(
    location.key || location.pathname + location.search + location.hash
  );

  // Track displayLocation in a ref to avoid triggering the transition effect on its updates
  const displayLocationRef = useRef(displayLocation);
  displayLocationRef.current = displayLocation;

  const shouldAnimate =
    animateRoutes.length === 0 || animateRoutes.includes(location.pathname);

  useEffect(() => {
    const locationKey =
      location.key || location.pathname + location.search + location.hash;

    if (locationKey === currentKeyRef.current) return;

    currentKeyRef.current = locationKey;

    const doCleanup = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (frameRef1.current) cancelAnimationFrame(frameRef1.current);
      if (frameRef2.current) cancelAnimationFrame(frameRef2.current);
    };

    doCleanup();

    const displayKey =
      displayLocationRef.current.key ||
      displayLocationRef.current.pathname +
        displayLocationRef.current.search +
        displayLocationRef.current.hash;

    if (locationKey === displayKey) {
      setStage("idle");
      return;
    }

    if (!shouldAnimate) {
      setDisplayLocation(location);
      setStage("idle");
      window.scrollTo(0, 0);
      return;
    }

    setStage("exit");

    timeoutRef.current = setTimeout(() => {
      setDisplayLocation(location);
      window.scrollTo(0, 0);

      setStage("enter");

      frameRef1.current = requestAnimationFrame(() => {
        frameRef2.current = requestAnimationFrame(() => {
          setStage("idle");
        });
      });
    }, DURATION);

    return doCleanup;
  }, [location, shouldAnimate]);

  const style = {
    ...stages[stage],
    transition: stage !== "enter"
      ? `opacity ${DURATION}ms ${EASE}, transform ${DURATION}ms ${EASE}, filter ${DURATION}ms ${EASE}`
      : "none", // no transition on enter so it snaps to start position before animating in
    willChange: "opacity, transform, filter",
  };

  return (
    <div style={style}>
      {children(displayLocation)}
    </div>
  );
}


