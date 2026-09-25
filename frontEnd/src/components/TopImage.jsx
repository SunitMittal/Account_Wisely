import React from "react";

const TopImage = ({ source1, source2 }) => {
  return (
    <>
      <div className='z-0 w-40 h-52 md:w-72 md:h-96 overflow-hidden rounded-2xl hover-lift'>
        <img src={source1} alt="img1" className="h-full w-full object-cover" />
      </div>

      <div className="absolute z-10 top-30 left-25 md:top-40 md:left-20 lg:top-40 lg:left-64 w-44 h-56 sm:w-56 sm:h-72 md:w-68 md:h-96 overflow-hidden rounded-2xl border-3 border-gray-50 hover-lift">
        <img src={source2} alt="img2" className="h-full w-full object-cover" />
      </div>
    </>
  );
};

export default TopImage;