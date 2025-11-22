import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-lg bg-gradient-to-r from-[#f58210] via-[#fc9f41] to-[#ffc388] px-4 py-3 text-sm font-semibold tracking-wider text-white shadow-lg transition-all duration-600 hover:-translate-y-1 hover:cursor-pointer hover:from-[#ffc388] hover:to-[#f58210] hover:shadow-2xl focus:outline-none sm:w-auto sm:px-5 sm:py-4 sm:text-lg"
    >
      {text}
    </button>
  );
};

export default Button;