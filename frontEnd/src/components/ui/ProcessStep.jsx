import React from "react";

const ProcessStep = ({
  number,
  title,
  description,
  icon,
  isActive = false,
}) => {
  return (
    <div
      className={`rounded-lg border p-6 transition-all duration-300 hover:shadow-md ${
        isActive
          ? "bg-navy-700 border-navy-700 text-white"
          : "border-gray-200 bg-white"
      }`}
      data-aos="fade-up"
    >
      <div className="flex h-full flex-col">
        <div className="mb-4">
          <div
            className={`${isActive ? "text-teal-400" : "text-teal-600"} mb-3`}
          >
            {icon}
          </div>

          <div className="mb-2 flex items-baseline">
            <span
              className={`text-sm font-bold ${
                isActive ? "text-teal-400" : "text-teal-600"
              } mr-2`}
            >
              {number}
            </span>
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
        </div>

        <p
          className={`${
            isActive ? "text-gray-200" : "text-gray-600"
          } flex-grow`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProcessStep;
