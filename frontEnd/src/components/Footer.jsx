import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { IoIosCall, IoMdMail } from "react-icons/io";
import { RiMapPin2Fill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-[#1a0940] px-7 py-8 md:p-10 text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">

          {/* Logo and Tagline Column */}
          <div className="col-span-1">
            <div className="mb-4">
              <h1 className="font-bold text-xl md:text-3xl">
                Account Wisely Financial Services
              </h1>
            </div>
            <p className="mb-5">
              Turning complex financial data into clear, actionable insights.
            </p>
          </div>

          {/* Company Column */}
          <div className="col-span-1 mb-3">
            <h2 className="text-xl font-bold">
              Company
            </h2>
            <ul className="space-y-1 py-2">
              <li>
                <Link
                  to="/about"
                  className="hover:text-gray-300 duration-300"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to={"contact"}
                  className="hover:text-gray-300 duration-300"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  to={"career"}
                  className="hover:text-gray-300 duration-300"
                >
                  Career
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="col-span-1 mb-3">
            <h2 className="text-xl font-bold">
              Our Services
            </h2>
            <ul className="space-y-1 py-2">
              <li>
                <Link
                  to={"/services/accounting"}
                  className="hover:text-gray-300 duration-300"
                >
                  Accounting Services
                </Link>
              </li>
              <li>
                <Link
                  to={"/services/virtualCFO"}
                  className="hover:text-gray-300 duration-300"
                >
                  Virtual CFO Services
                </Link>
              </li>
              <li>
                <Link
                  to={"/services/taxreturn"}
                  className="hover:text-gray-300 duration-300"
                >
                  Tax Return Preparation
                </Link>
              </li>
              <li>
                <Link
                  to={"/services/payroll"}
                  className="hover:text-gray-300 duration-300"
                >
                  Payroll Services
                </Link>
              </li>
              <li>
                <Link
                  to={"/services/financialanalysis"}
                  className="hover:text-gray-300 duration-300"
                >
                  Financial Analysis Services
                </Link>
              </li>
              <li>
                <Link
                  to={"/services/gst"}
                  className="hover:text-gray-300 duration-300"
                >
                  GST Return Filing Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations Column */}
          <div className="col-span-1 mb-3">
            <h2 className="text-xl font-bold">
              Our Locations
            </h2>
            <ul className="space-y-1 py-2">
              <li className="flex items-start">
                <RiMapPin2Fill className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/2917FDHJYNWqr8iN7"
                  target="_blank"
                  className="hover:text-gray-300"
                >
                  Goregaon East, Mumbai - India
                </a>
              </li>
              <li className="flex items-start">
                <RiMapPin2Fill className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/wW7hPh1rNVUEnHHo6"
                  target="_blank"
                  className="hover:text-gray-300"
                >
                  Jogeshwari East, Mumbai - India
                </a>
              </li>
              <li className="flex items-start">
                <IoMdMail className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:info@accountwisely.com"
                  className="hover:text-gray-300"
                >
                  info@accountwisely.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar / Copyright */}
      <div className="mx-auto mt-8 max-w-7xl border-t border-gray-600 pt-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="mb-4 md:mb-0">
            Copyright © 2024 Account Wisely. All Rights Reserved.
          </p>
          <div className="flex md:items-center space-x-4">
            <Link
              to={"privacypolicy"}
              className="hover:text-gray-300 space-x-4"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
