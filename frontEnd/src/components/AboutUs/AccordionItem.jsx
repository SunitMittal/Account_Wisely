import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const AccordionItem = ({ id, title, content, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex w-full items-center justify-between py-5 text-left focus:outline-none"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
      >
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <span className="text-blue-700">
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </span>
      </button>

      <div
        id={`accordion-content-${id}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
