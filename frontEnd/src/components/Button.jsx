import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-lg bg-gradient-to-r from-[#37266a] to-[#6027da] px-4 py-3 text-sm font-semibold tracking-wider text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:cursor-pointer hover:from-[#6027da] hover:to-[#37266a] hover:shadow-2xl focus:outline-none sm:w-auto sm:px-5 sm:py-4 sm:text-lg"
    >
      {/* <div className="water-fill absolute right-0 bottom-0 left-0 z-0 h-0 bg-gradient-to-t from-[#3d2a78] to-[#1a0940] transition-all duration-700 ease-out"></div> */}
      {text}
    </button>
  );
};

export default Button;
