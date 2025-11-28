import React from "react";
import { Link } from "react-router-dom";
import { TbPhoneCalling } from "react-icons/tb";
import ServiceList from "./ServiceList";

const ServiceSidebar = () => {
  return (
    <div className="mt-6 md:sticky md:top-2 md:h-fit lg:mt-8">
      <ServiceList />

      <div className="mx-auto my-6 max-w-96 rounded-2xl border border-[#1a0940] bg-white p-4 sm:my-8 sm:p-4.5">
        <TbPhoneCalling className="text-4xl text-[#2e1566] sm:text-6xl" />
        <h2 className="text-base font-bold sm:text-lg">Need Help?</h2>
        <p className="pt-2 pb-4 text-sm text-gray-600 sm:pb-5 sm:text-base">
          Get in touch and let us know how we can help touch as soon as
          possible.
        </p>
        <Link
          to={"/contact"}
          className="rounded-lg bg-gradient-to-r from-[#f58210] via-[#fc9f41] to-[#ffc388] p-3 text-sm font-semibold text-white shadow-lg transition-all duration-600 hover:-translate-y-1 hover:cursor-pointer hover:from-[#ffc388] hover:to-[#f58210] hover:shadow-2xl sm:p-3 sm:text-base"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default ServiceSidebar;
