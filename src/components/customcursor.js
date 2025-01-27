import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [cursorStyle, setCursorStyle] = useState({
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    backgroundColor: "#ffffff30",
  });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e) => {
      if (e.target.classList.contains("cursor-link")) {
        setCursorStyle({
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          backgroundColor: "#ffffff30", // Default background
        });
      } else if (e.target.classList.contains("cursor-text")) {
        const textHeight = e.target.getBoundingClientRect().height;
        setCursorStyle({
          width: "3px",
          height: `${textHeight}px`,
          borderRadius: "8px",
          backgroundColor: "#0172EA", // Change background color for text
        });
      }
    };

    const handleMouseLeave = () => {
      setCursorStyle({
        width: "36px",
        height: "36px",
        borderRadius: "50%",
        backgroundColor: "#ffffff30", // Reset background
      });
    };

    document.addEventListener("mousemove", moveCursor);
    document.querySelectorAll(".cursor-link, .cursor-text").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll(".cursor-link, .cursor-text").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className="round-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: cursorStyle.width,
        height: cursorStyle.height,
        borderRadius: cursorStyle.borderRadius,
        backgroundColor: cursorStyle.backgroundColor,
      }}
    ></div>
  );
};

export default CustomCursor;
