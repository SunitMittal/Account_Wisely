import React from "react";

const ProcessCard = ({ number, title, content, icon}) => {
  return (
    <div className="hover-lift group flex h-full flex-col overflow-hidden rounded-lg">
      <div className="flex-grow p-6 mb-10">
        <div className="mb-4 flex items-center">
          <div className="mr-3 rounded-full p-3 transition-colors duration-300">
            <div className="transform transition-transform duration-300 group-hover:scale-110">
              {icon}
            </div>
          </div>
        </div>
        <h3 className="mb-2 text-xl font-bold leading-6 text-gray-900 transition-colors duration-300 group-hover:text-white">
          {number}. {title}
        </h3>
        <p className="text-base text-gray-700 leading-6 group-hover:text-white">
          {content}
        </p>
      </div>
    </div>
  );
};

export default ProcessCard;
