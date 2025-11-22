import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const ValueCard = ({ title, content, icon }) => {
  return (
    <div className="hover-lift group flex h-full flex-col rounded-lg border border-gray-300 p-6">
      <div className="mb-4 flex h-16 w-16 transform items-center justify-center rounded-full bg-[#e3d6ff] transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-100">
        <div className="transform transition-transform duration-300 group-hover:rotate-12">
          {icon}
        </div>
      </div>

      <h3 className="mb-3 text-lg font-semibold text-[#492a8a] transition-colors duration-300 group-hover:text-blue-700">
        {title}
      </h3>
      <p className="mb-4 flex-grow text-sm text-gray-700">{content}</p>

      <div className="mt-auto">
          <button
            className= 'hover:text-navy-600 rounded-full bg-[#240d55] p-2 text-white transition-all duration-300 group-hover:bg-white group-hover:text-black hover:cursor-pointer sm:p-3'
          >
            <ArrowUpRight size={18} className="sm:h-5 sm:w-5" />
          </button>
        </div>
    </div>
  );
};

export default ValueCard;
