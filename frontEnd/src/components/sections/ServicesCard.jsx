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
      <div className="flex-grow p-6">
        <div className="mb-4 flex items-center">
          <div className="mr-3 rounded-full p-3 transition-colors duration-300">
            <div className="transform transition-transform duration-300 group-hover:scale-110">
              {icon}
            </div>
          </div>
        </div>
        <h3 className="mb-2 text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-600 group-hover:text-white">
          {content}
        </p>

        <div className="mt-10">
          <button
            onClick={handleClick}
            className={`${
              color === "default"
                ? "bg-navy-100 text-navy-600"
                : "bg-white/20 text-white"
            } hover:text-navy-600 rounded-full bg-[#2a4768] p-3 text-white transition-all duration-300 group-hover:-rotate-45 group-hover:bg-white group-hover:text-black hover:cursor-pointer`}
          >
            {color === "default" ? (
              <ArrowRight size={20} />
            ) : (
              <ArrowUpRight size={20} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
