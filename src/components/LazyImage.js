import React, { useState } from "react";

const LazyImage = ({ src, alt, className, style = {} }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`lazy-image-wrapper ${className || ""}`}
      style={{
        position: "relative",
        display: "inline-block",
        width: style.width || "100%",
        ...style,
      }}
    >
      {/* Skeleton shimmer placeholder */}
      {!loaded && (
        <div
          className="skeleton"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        ></div>
      )}

      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      />
    </div>
  );
};

export default LazyImage;
