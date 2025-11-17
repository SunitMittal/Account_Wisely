import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-lg bg-gradient-to-r from-[#2e4c6c] to-[#7cb6bf] px-4 py-3 text-sm font-semibold tracking-wider text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:cursor-pointer hover:from-[#7cb6bf] hover:to-[#2e4c6c] hover:shadow-2xl focus:outline-none sm:w-auto sm:px-5 sm:py-4 sm:text-lg"
    >
      {text}
    </button>
  );
};

export default Button;
