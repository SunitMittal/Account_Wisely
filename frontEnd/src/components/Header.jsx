import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import Logo from "../assets/websiteLogo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const isActive = (path) => {
    if (path === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(path);
  };

  return (
    <>
      <div className="flex gap-2 bg-gradient-primary px-4 py-2 text-xs text-white sm:justify-center sm:gap-5 sm:px-5 sm:text-sm md:justify-normal md:gap-10 md:px-28 md:text-lg shadow-modern">
        <a
          href="mailto:partners@accountwisely.com"
          className="underline-offset-8.5 flex items-center gap-1 hover:underline"
        >
          <HiOutlineMailOpen className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="hidden xs:inline">partners@accountwisely.com</span>
          <span className="xs:hidden">Email Us</span>
        </a>
      </div>

      <nav className="bg-white shadow-modern border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-5 md:px-28">
          {/* desktop view */}
          <div className="hidden items-center justify-between lg:flex">
            <div className="flex-shrink-0">
              <Link
                to={"/"}
                className="flex items-center gap-3 text-2xl font-bold text-[#2a4768] hover:text-secondary transition-colors duration-300 xl:text-4xl"
              >
                <img
                  src={Logo}
                  alt="Account Wisely logo"
                  className="h-15 w-15 object-contain sm:h-15 sm:w-15"
                />
                Account Wisely
              </Link>
            </div>
            <div className="flex items-center space-x-4 xl:space-x-8">
              <Link
                to={"/"}
                className={`text-lg font-bold transition-colors duration-300 xl:text-medium ${
                  isActive("/")
                    ? "text-secondary underline underline-offset-8"
                    : "text-neutral-600 hover:text-primary"
                }`}
              >
                Home
              </Link>
              <Link
                to={"/about"}
                className={`text-lg font-bold transition-colors duration-300 xl:text-medium ${
                  isActive("/about")
                    ? "text-secondary underline underline-offset-8"
                    : "text-neutral-600 hover:text-primary"
                }`}
              >
                About Us
              </Link>
              <div className="group relative">
                <button
                  className={`text-lg flex items-center font-bold transition-colors duration-300 xl:text-medium ${
                    isActive("/services")
                      ? "text-secondary underline underline-offset-8"
                      : "text-neutral-600 hover:text-primary"
                  }`}
                >
                  Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`ml-1 h-3 w-3 xl:h-4 xl:w-4 underline-offset-8 transition-transform duration-300 hover:underline ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="absolute left-0 z-50 hidden min-w-[230px] space-y-2 rounded-lg bg-gradient-secondary p-4 text-white group-hover:block shadow-modern-lg">
                  <Link
                    to={"/services/accounting"}
                    className="block py-1 underline-offset-8 hover:underline"
                  >
                    Accounting Services
                  </Link>
                  <Link
                    to={"/services/taxreturn"}
                    className="block py-1 underline-offset-8 hover:underline"
                  >
                    Tax Return Preparation
                  </Link>
                  <Link
                    to={"/services/payroll"}
                    className="block py-1 underline-offset-8 hover:underline"
                  >
                    Payroll Services
                  </Link>
                  <Link
                    to={"/services/gst"}
                    className="block py-1 underline-offset-8 hover:underline"
                  >
                    GST Return Filing Services
                  </Link>
                  <Link
                    to={"/services/financialanalysis"}
                    className="block py-1 underline-offset-8 hover:underline"
                  >
                    Financial Analysis Services
                  </Link>
                </div>
              </div>
              <Link
                to={"/career"}
                className={`text-lg font-bold transition-colors duration-300 xl:text-medium ${
                  isActive("/career")
                    ? "text-secondary underline underline-offset-8"
                    : "text-neutral-600 hover:text-primary"
                }`}
              >
                Career
              </Link>
              <Link
                to={"/contact"}
                className={`text-lg font-bold transition-colors duration-300 xl:text-medium ${
                  isActive("/contact")
                    ? "text-secondary underline underline-offset-8"
                    : "text-neutral-600 hover:text-primary"
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* mobile view */}
          <div className="flex items-center justify-between lg:hidden">
            <Link
              to={"/"}
              className="flex items-center gap-3 text-2xl font-bold text-[#2a4768] sm:text-3xl md:text-4xl"
            >
              <img
                src={Logo}
                alt="Account Wisely logo"
                className="h-10 w-10 object-contain"
              />
              <span>Account Wisely</span>
            </Link>
            <div className="flex items-center">
              <button
                onClick={toggleMenu}
                className="rounded-md bg-white p-2 text-[#2a4768] hover:bg-gray-200 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* mobile menu dropdown - slide in from right */}
          <div
            className={`fixed top-0 right-0 z-50 h-full w-full transform bg-[#2a4768] transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between p-4">
              <h1 className="text-2xl font-extrabold text-white sm:text-3xl">
                Account Wisely
              </h1>
              <button
                onClick={closeMenu}
                className="w-8 rounded-lg bg-white p-2 font-bold text-[#2a4768] sm:w-10"
              >
                X
              </button>
            </div>
            <div className="text-medium space-y-1 px-2 pt-2 pb-3 font-bold underline-offset-8 hover:underline">
              <Link
                onClick={closeMenu}
                to={"/"}
                className={`block border-b border-[#3a5a7d] px-3 py-4 text-white ${
                  isActive("/") ? "font-bold" : ""
                }`}
              >
                Home
              </Link>
              <Link
                onClick={closeMenu}
                to={"/about"}
                className={`block border-b border-[#3a5a7d] px-3 py-4 text-white ${
                  isActive("/about") ? "font-bold" : ""
                }`}
              >
                About Us
              </Link>
              <div>
                <button
                  onClick={toggleServicesMenu}
                  className={`flex w-full items-center justify-between border-b border-[#3a5a7d] px-3 py-4 text-white ${
                    isActive("/services") ? "font-bold" : ""
                  }`}
                >
                  Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isServicesOpen && (
                  <div className="flex flex-col space-y-3 bg-[#375b82] px-6 py-2">
                    <Link
                      onClick={closeMenu}
                      to={"/services/accounting"}
                      className={`py-1 text-white underline-offset-8 hover:underline ${
                        isActive("/services/accounting") ? "font-bold" : ""
                      }`}
                    >
                      Accounting Services
                    </Link>
                    <Link
                      onClick={closeMenu}
                      to={"/services/taxreturn"}
                      className={`py-1 text-white underline-offset-8 hover:underline ${
                        isActive("/services/taxreturn") ? "font-bold" : ""
                      }`}
                    >
                      Tax Return Preparation
                    </Link>
                    <Link
                      onClick={closeMenu}
                      to={"/services/payroll"}
                      className={`py-1 text-white underline-offset-8 hover:underline ${
                        isActive("/services/payroll") ? "font-bold" : ""
                      }`}
                    >
                      Payroll Services
                    </Link>
                    <Link
                      onClick={closeMenu}
                      to={"/services/gst"}
                      className={`py-1 text-white underline-offset-8 hover:underline ${
                        isActive("/services/gst") ? "font-bold" : ""
                      }`}
                    >
                      GST Return Filing Services
                    </Link>
                    <Link
                      onClick={closeMenu}
                      to={"/services/financialanalysis"}
                      className={`py-1 text-white underline-offset-8 hover:underline ${
                        isActive("/services/financialanalysis")
                          ? "font-bold"
                          : ""
                      }`}
                    >
                      Financial Analysis Services
                    </Link>
                  </div>
                )}
              </div>
              <Link
                onClick={closeMenu}
                to={"/career"}
                className={`block border-b border-[#3a5a7d] px-3 py-4 text-white ${
                  isActive("/career") ? "font-bold" : ""
                }`}
              >
                Career
              </Link>
              <Link
                onClick={closeMenu}
                to={"/contact"}
                className={`block border-b border-[#3a5a7d] px-3 py-4 text-white ${
                  isActive("/contact") ? "font-bold" : ""
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Overlay when mobile menu is open */}
          {isMenuOpen && (
            <div
              className="bg-opacity-50 fixed inset-0 z-40 bg-black"
              onClick={closeMenu}
            ></div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
