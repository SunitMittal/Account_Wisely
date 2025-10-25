import React from "react";

const TopImage = ({ source1, source2, className = "" }) => {
  return (
    <>
      <img
        src={source1}
        alt="img1"
        className={`z-0 rounded-2xl hover-lift ${className}`}
      />
      <img
        src={source2}
        alt="img2"
        className="absolute z-10 rounded-2xl border-8 border-white top-40 left-20 lg:top-36 lg:left-64 hover-lift"
      />
    </>
  );
};

export default TopImage;
