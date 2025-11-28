import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { IoIosCall, IoMdMail } from "react-icons/io";
import { RiMapPin2Fill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-[#1a0940] px-4 py-8 text-white sm:px-6 sm:py-10 md:px-10">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-5 sm:gap-7 md:grid-cols-4">
          {/* Logo and Tagline Column */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <h1 className="text-xl font-bold sm:text-2xl md:text-3xl">
                Account Wisely Financial Services
              </h1>
            </div>
            <p className="mb-5 text-xs md:mb-0 md:text-sm lg:text-base">
              Turning complex financial data into clear, actionable insights.
            </p>
          </div>

          {/* Company Column */}
          <div className="md:col-span-1">
            <h2 className="mb-3 text-lg font-medium sm:mb-4 sm:text-xl">
              Company
            </h2>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-gray-300 duration-300 sm:text-base"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={"contact"}
                  className="text-sm hover:text-gray-300 duration-300 sm:text-base"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="md:col-span-1">
            <h2 className="mb-3 text-lg font-medium sm:mb-4 sm:text-xl">
              Our Services
            </h2>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  to={"/services/accounting"}
                  className="text-sm hover:text-gray-300 duration-300 sm:text-base"
                >
                  Accounting Services
                </Link>
              </li>
              <li>
                <Link
                  to={"/services/virtualCFO"}
                  className="text-sm hover:text-gray-300 duration-300 sm:text-base"
                >
                  Virtual CFO Services
                </Link>
              </li>
              <li>
                <Link
                  to={"/services/taxreturn"}
                  className="text-sm hover:text-gray-300 duration-300 sm:text-base"
                >
                  Tax Return Preparation
                </Link>
              </li>
              <li>
                <Link
                  to={"/services/payroll"}
                  className="text-sm hover:text-gray-300 sm:text-base"
                >
                  Payroll Services
                </Link>
              </li>
              <li>
                <Link
                  to={"/services/financialanalysis"}
                  className="text-sm hover:text-gray-300 duration-300 sm:text-base"
                >
                  Financial Analysis Services
                </Link>
              </li>
              <li>
                <Link
                  to={"/services/gst"}
                  className="text-sm hover:text-gray-300 duration-300 sm:text-base"
                >
                  GST Return Filing Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations Column */}
          <div className="md:col-span-1">
            <h2 className="mb-3 text-lg font-medium sm:mb-4 sm:text-xl">
              Our Locations
            </h2>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start">
                <RiMapPin2Fill className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0" />
                <a
                  href="https://maps.google.com/"
                  target="_blank"
                  className="text-sm sm:text-base hover:text-gray-300"
                >
                  Mumbai - India
                </a>
              </li>
              <li className="flex items-start">
                <IoMdMail className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:info@accountwisely.com"
                  className="text-sm sm:text-base hover:text-gray-300"
                >
                  info@accountwisely.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar / Copyright */}
      <div className="mx-auto mt-8 max-w-7xl border-t border-gray-600 pt-4 sm:mt-12 sm:pt-6">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="mb-4 text-xs md:mb-0 md:text-sm">
            Copyright © 2024 Account Wisely. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-4 sm:space-x-6">
            <Link
              to={"career"}
              className="text-sm hover:text-gray-300 sm:text-base"
            >
              Career
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
