import React from "react";

const Container2 = ({ children, className = "" }) => {
  return (
    <div
      className={`container mx-auto grid max-w-7xl auto-cols-auto gap-8 grid-flow-col px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container2;
