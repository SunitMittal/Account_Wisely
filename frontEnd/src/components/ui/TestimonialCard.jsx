import React from "react";

const TestimonialCard = ({ quote, name, isActive = false }) => {
  return (
    <div className={`${isActive ? "block" : "hidden"}`}>
      <blockquote className="mb-6 text-[#ffaf60] md:text-xl">
        "{quote}"
      </blockquote>

      <div>
        <h5 className="text-[#2a4768] font-semibold">{name}</h5>
      </div>
    </div>
  );
};

export default TestimonialCard;
