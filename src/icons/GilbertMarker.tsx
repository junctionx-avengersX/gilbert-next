import React from "react";

const GilbertMarker = () => {
  return (
    <picture>
      <source src="/images/gilbert-marker.webp" />
      <img
        srcSet="/images/gilbert-marker.webp 50w,
        /images/gilbert-marker@2x.webp 100w,
        /images/gilbert-marker@3x.webp 150w"
        sizes="(max-width: 320px) 50px,
       (max-width: 480px) 100px,
       150px"
        src="/images/gilbert-marker.webp"
        alt="gilbert-marker"
      />
    </picture>
  );
};

export default GilbertMarker;
