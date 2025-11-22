import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const ServicesCard = ({ title, content, icon, path, color = "default" }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <div className="hover-lift group flex h-full flex-col overflow-hidden rounded-lg">
      <div className="flex-grow p-4 sm:p-6">
        <div className="mb-3 flex items-center sm:mb-4">
          <div className="mr-2 rounded-full p-2 transition-colors duration-300 sm:mr-3 sm:p-3">
            <div className="transform transition-transform duration-300 group-hover:scale-110">
              {icon}
            </div>
          </div>
        </div>
        <h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-white sm:text-xl">
          {title}
        </h3>
        <p className="text-xs text-gray-600 group-hover:text-white sm:text-sm">
          {content}
        </p>

        <div className="mt-6 sm:mt-10">
          <button
            onClick={handleClick}
            className={`${
              color === "default"
                ? "bg-navy-100 text-navy-600"
                : "bg-white/20 text-white"
            } hover:text-navy-600 rounded-full bg-[#240d55] p-2 text-white transition-all duration-300 group-hover:-rotate-45 group-hover:bg-white group-hover:text-black hover:cursor-pointer sm:p-3`}
          >
            {color === "default" ? (
              <ArrowRight size={16} className="sm:h-5 sm:w-5" />
            ) : (
              <ArrowUpRight size={16} className="sm:h-5 sm:w-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
