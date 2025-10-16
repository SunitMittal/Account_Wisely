import React from "react";

const StatCard = ({ value, label }) => {
  return (
    <div
      className="rounded-xl bg-blue-50 p-6 transition-all duration-300 hover:shadow-md"
      data-aos="fade-up"
    >
      <h3 className="text-[#2a4768] mb-2 text-3xl font-bold md:text-4xl">
        {value}
      </h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default StatCard;
