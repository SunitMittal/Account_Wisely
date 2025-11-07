import React from "react";

const StatCard = ({ value, label }) => {
  return (
    <div
      className="rounded-xl bg-primary-light p-4 transition-all duration-300 hover:shadow-md sm:p-6"
      data-aos="fade-up"
    >
      <h3 className="text-primary mb-2 text-2xl font-bold sm:text-3xl md:text-4xl">
        {value}
      </h3>
      <p className="text-xs text-gray-600 sm:text-sm">{label}</p>
    </div>
  );
};

export default StatCard;
