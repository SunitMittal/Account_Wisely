import React from "react";
import { Link } from "react-router-dom";

const LandingImage = ({ title, link }) => {
  return (
    <div
      className="flex h-70 flex-col items-center justify-center gap-3 bg-[url(assets/about-landing.jpg)] bg-cover bg-center bg-no-repeat text-white shadow-2xl lg:h-[520px] inset-shadow-3xl"
      style={{
        backgroundAttachment: "fixed",
      }}
    >
      <p className="md:w-4/6 text-center text-4xl font-bold lg:text-6xl">
        {title}
      </p>
      <p className="text-sm md:text-xl">
        <Link to="/">Home </Link> / {link}
      </p>
    </div>
  );
};

export default LandingImage;
