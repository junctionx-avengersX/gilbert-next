import React from "react";
import img from "./gilbert-marker@3x.webp";

const GilbertMarker = () => {
  return (
    <picture>
      <source src={img} />
      <img src={img} alt="gilbert-marker" />
    </picture>
  );
};

export default GilbertMarker;
