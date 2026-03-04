import React, { useEffect, useState } from "react";
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
  const [animating, setAnimating] = useState(false);

  const shouldAnimate =
    animateRoutes.length === 0 || animateRoutes.includes(location.pathname);

  useEffect(() => {
    if (location.key === displayLocation.key) return;

    if (!shouldAnimate) {
      setDisplayLocation(location);
      window.scrollTo(0, 0);
      return;
    }

    if (animating) return;

    setAnimating(true);

    // Phase 1: Exit — current page fades up and out
    setStage("exit");

    setTimeout(() => {
      setDisplayLocation(location);
      window.scrollTo(0, 0);

      // Phase 2: Enter — new page starts from slightly below, fades in
      setStage("enter");

      // Tiny frame delay so the browser registers the enter styles before animating to idle
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setStage("idle");
          setTimeout(() => setAnimating(false), DURATION);
        });
      });
    }, DURATION);
  }, [location]);

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
