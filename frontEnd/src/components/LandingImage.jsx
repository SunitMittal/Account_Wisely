import React from "react";
import { Link } from "react-router-dom";

const LandingImage = ({ title, link }) => {
  return (
    <div
      className="flex h-48 flex-col items-center justify-center gap-2 bg-[url(assets/about-landing.jpg)] bg-cover bg-center bg-no-repeat text-white shadow-2xl sm:h-64 sm:gap-3 md:h-80 lg:h-[520px] inset-shadow-3xl"
      style={{
        backgroundAttachment: "fixed",
      }}
    >
      <p className="w-5/6 text-center text-xl font-bold sm:w-4/5 sm:text-2xl md:w-4/6 md:text-3xl lg:text-4xl xl:text-6xl">
        {title}
      </p>
      <p className="text-xs sm:text-sm md:text-base lg:text-xl">
        <Link to="/">Home </Link> / {link}
      </p>
    </div>
  );
};

export default LandingImage;
