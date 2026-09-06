import React from "react";

const TopImage = ({ source1, source2, className = "" }) => {
  return (
    <>
      <div
        className={`z-0 w-64 h-80 md:w-72 md:h-96 overflow-hidden rounded-2xl hover-lift ${className}`}
      >
        <img src={source1} alt="img1" className="h-full w-full object-cover" />
      </div>

      <div className="absolute z-10 top-40 left-20 lg:top-36 lg:left-64 w-68 h-96 md:w-68 md:h-96 overflow-hidden rounded-2xl border-2 border-white hover-lift">
        <img src={source2} alt="img2" className="h-full w-full object-cover" />
      </div>
    </>
  );
};

export default TopImage;
