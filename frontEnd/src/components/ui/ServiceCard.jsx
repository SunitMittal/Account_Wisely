import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const ServiceCard = ({
  icon,
  title,
  description,
  color = "default",
  className,
}) => {
  const bgColors = {
    blue: "bg-gradient-to-br from-navy-800 to-navy-600",
    teal: "bg-gradient-to-br from-teal-700 to-teal-500",
    default: "bg-white border border-gray-200",
  };

  const textColors = {
    blue: "text-white",
    teal: "text-white",
    default: "text-navy-800",
  };

  const descriptionColors = {
    blue: "text-gray-200",
    teal: "text-gray-200",
    default: "text-gray-600",
  };

  const iconColors = {
    blue: "text-teal-400",
    teal: "text-white/90",
    default: "text-teal-600",
  };

  return (
    <div
      className={`${bgColors[color]} group h-full rounded-lg p-6 transition-all duration-300 hover:shadow-lg`}
      data-aos="fade-up"
    >
      <div className={`${iconColors[color]} mb-4`}>{icon}</div>

      <h3 className={`${textColors[color]} mb-3 text-xl font-semibold`}>
        {title}
      </h3>

      <p className={`${descriptionColors[color]} mb-6`}>{description}</p>

      <div className="flex justify-end">
        <button
          className={`${
            color === "default"
              ? "bg-navy-100 text-navy-600"
              : "bg-white/20 text-white"
          } hover:text-navy-600 rounded-full p-3 transition-all duration-300 group-hover:rotate-45 hover:bg-white`}
        >
          {color === "default" ? (
            <ArrowRight size={20} />
          ) : (
            <ArrowUpRight size={20} />
          )}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
