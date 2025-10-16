import React from "react";
import { ArrowUpRight } from "lucide-react";

const ValueCard = ({ title, content, icon }) => {
  return (
    <div className="hover-lift group flex h-full flex-col rounded-lg border border-gray-200 p-6">
      <div className="mb-4 flex h-16 w-16 transform items-center justify-center rounded-full bg-blue-50 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-100">
        <div className="transform transition-transform duration-300 group-hover:rotate-12">
          {icon}
        </div>
      </div>

      <h3 className="mb-3 text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-700">
        {title}
      </h3>
      <p className="mb-4 flex-grow text-sm text-gray-600">{content}</p>

      <div className="mt-auto">
        <button className="transform rounded-full bg-blue-700 p-2 text-white transition-all duration-300 hover:scale-110 hover:rotate-12 hover:bg-blue-800 hover:shadow-lg">
          <ArrowUpRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default ValueCard;
