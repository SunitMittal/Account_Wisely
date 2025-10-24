import React from "react";

const Container2 = ({ children, className = "" }) => {
  return (
    <div
      className={`container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container2;
