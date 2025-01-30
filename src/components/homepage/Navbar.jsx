import React from "react";
import Logo from "../../assets/Logo.jpeg";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed bg-white w-full top-0 z-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-10 py-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center w-56">
            <img src={Logo} alt="" className="w-full" />
          </div>

          {/* Menu */}
          <div className="hidden md:flex space-x-8 text-lg font-medium">
            <NavLink to="/" className="nav-item text-gray-600 hover:text-gray-800">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-item text-gray-600 hover:text-gray-800">
              About Us
            </NavLink>
            <NavLink to="/services" className="nav-item text-gray-600 hover:text-gray-800">
              Services
            </NavLink>
            <NavLink to="/packages" className="nav-item text-gray-600 hover:text-gray-800">
              Packages
            </NavLink>
            <NavLink to="/gallery" className="nav-item text-gray-600 hover:text-gray-800">
              Gallery
            </NavLink>
            <NavLink
              to="/contact-us"
              className="nav-item text-gray-600 hover:text-gray-800"
            >
              Contact Us
            </NavLink>
          </div>

          {/* Search Icon */}
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 5a7 7 0 017 7 7 7 0 11-7-7zM21 21l-4.35-4.35"
                ></path>
              </svg>
            </button>
            <NavLink
              to="/signin"
              className="bg-primary text-default-text p-lg rounded"
            >
              Sign In
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
