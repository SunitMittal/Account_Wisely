import React from "react";

const TestimonialCard = ({ quote, name, isActive = false }) => {
  return (
    <div className={`${isActive ? "block" : "hidden"}`}>
      <blockquote className="mb-6 text-gray-700 md:text-xl">
        "{quote}"
      </blockquote>

      <div>
        <h5 className="text-[#1a0940] font-semibold">{name}</h5>
      </div>
    </div>
  );
};

export default TestimonialCard;
