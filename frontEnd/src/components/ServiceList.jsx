import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ServiceList = () => {
  return (
    <div className="mx-auto max-w-96 rounded-2xl border border-[#2a4768] bg-white pt-3.5">
      <h3 className="mb-3 pl-3.5 text-lg font-semibold">
        What Service We Provide
      </h3>
      <ul className="rounded-lg px-3.5">
        <li className="border-b border-gray-200 py-3.5 pr-4 hover:text-[#2a4768]">
          <Link
            to="/services/accounting"
            className="flex items-center justify-between"
          >
            <p className="text-gray-400 hover:text-[#2a4768]">
              Accounting Services
            </p>
            <MdOutlineKeyboardArrowRight className="text-[#2a4768]" />
          </Link>
        </li>
        <li className="border-b border-gray-200 py-3.5 pr-4 hover:text-[#2a4768]">
          <Link
            to="/services/virtualCFO"
            className="flex items-center justify-between"
          >
            <p className="text-gray-400 hover:text-[#2a4768]">
              Virtual CFO Services
            </p>
            <MdOutlineKeyboardArrowRight className="text-[#2a4768]" />
          </Link>
        </li>
        <li className="border-b border-gray-200 py-3.5 pr-4">
          <Link
            to="/services/taxreturn"
            className="flex items-center justify-between"
          >
            <p className="text-gray-400 hover:text-[#2a4768]">
              Tax Return Prepartion
            </p>
            <MdOutlineKeyboardArrowRight className="text-[#2a4768]" />
          </Link>
        </li>
        <li className="border-b border-gray-200 py-3.5 pr-4">
          <Link
            to="/services/payroll"
            className="flex items-center justify-between"
          >
            <p className="text-gray-400 hover:text-[#2a4768]">
              Payroll Services
            </p>
            <MdOutlineKeyboardArrowRight className="text-[#2a4768]" />
          </Link>
        </li>
        <li className="border-b border-gray-200 py-3.5 pr-4">
          <Link
            to="/services/gst"
            className="flex items-center justify-between"
          >
            <p className="text-gray-400 hover:text-[#2a4768]">
              GST Return Filing Services
            </p>
            <MdOutlineKeyboardArrowRight className="text-[#2a4768]" />
          </Link>
        </li>
        <li className="py-3 pr-4">
          <Link
            to="/services/financialanalysis"
            className="flex items-center justify-between"
          >
            <p className="text-gray-400 hover:text-[#2a4768]">
              Financial Analysis Services
            </p>
            <MdOutlineKeyboardArrowRight className="text-[#2a4768]" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ServiceList;
