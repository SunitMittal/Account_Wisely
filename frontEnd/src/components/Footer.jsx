import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { IoIosCall, IoMdMail } from "react-icons/io";
import { RiMapPin2Fill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-gradient-primary px-6 py-10 text-white md:px-10">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Tagline Column */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <h1 className="text-3xl font-bold">
                Account Wisely Financial Services
              </h1>
            </div>
            <p className="mb-6 text-sm md:mb-0 md:text-base">
              Turning complex financial data into clear, actionable insights.
            </p>
          </div>

          {/* Company Column */}
          <div className="md:col-span-1">
            <h2 className="mb-4 text-xl font-medium">Company</h2>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="hover:text-accent transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to={"contact"} className="hover:text-accent transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="md:col-span-1">
            <h2 className="mb-4 text-xl font-medium">Our Services</h2>
            <ul className="space-y-3">
              <li>
                <Link
                  to={"/services/accounting"}
                  className="hover:text-accent transition-colors duration-300"
                >
                  Accounting Services
                </Link>
              </li>
              <li>
                <Link
                  to={"/services/taxreturn"}
                  className="hover:text-accent transition-colors duration-300"
                >
                  Tax Return Preparation
                </Link>
              </li>
              <li>
                <Link to={"/services/payroll"} className="hover:text-gray-300">
                  Payroll Services
                </Link>
              </li>
              <li>
                <Link
                  to={"/services/financialanalysis"}
                  className="hover:text-accent transition-colors duration-300"
                >
                  Financial Analysis Services
                </Link>
              </li>
              <li>
                <Link to={"/services/gst"} className="hover:text-accent transition-colors duration-300">
                  GST Return Filing Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations Column */}
          <div className="md:col-span-1">
            <h2 className="mb-4 text-xl font-medium">Our Locations</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <RiMapPin2Fill className="mr-2" />
                <a href="https://maps.google.com/" target="_blank">
                  Mumbai - India
                </a>
              </li>
              <li className="flex items-start">
                <IoMdMail className="mr-2" />
                <a href="mailto:partners@accountwisely.com">
                  partners@accountwisely.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar / Copyright */}
      <div className="mx-auto mt-12 max-w-7xl border-t border-gray-600 pt-6">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="mb-4 md:mb-0">
            Copyright © 2024 Account Wisely. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link to={"career"} className="hover:text-gray-300">
              Career
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
