import React, { useState } from "react";
import Logo from "../../assets/Logo.jpeg";
import { NavLink } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const menuItems = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Packages", link: "/packages" },
  { name: "Gallery", link: "/gallery" },
  { name: "Contact Us", link: "/contact" },
];

function Navbar() {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <nav className="fixed bg-white w-full top-0 z-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-10 py-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center w-56">
            <img src={Logo} alt="" className="w-full" />
          </div>

          {/* Menu */}
          <div className="hidden lg:flex gap-6 xl:gap-8 text-lg font-medium">
            {menuItems.map((menu, i) => (
              <NavLink
                key={i}
                to={menu.link}
                className="nav-item text-gray-600 hover:text-gray-800"
              >
                {menu.name}
              </NavLink>
            ))}
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
            <div
              onClick={() => setIsMenu((prev) => !prev)}
              className="text-black text-5xl lg:hidden z-10 flex flex-col gap-1 items-end w-8"
            >
              <div
                className={`absolute  -translate-y-1/2 w-6 h-1 bg-black ${
                  isMenu ? "rotate-45 top-1/2" : "top-[calc(50%-8px)] "
                } transition-all duration-500`}
              ></div>
              <div
                className={`absolute top-1/2 -translate-y-1/2 w-4 h-1 bg-black ${
                  isMenu ? "opacity-0" : "opacity-100"
                } transition-all duration-500`}
              ></div>
              <div
                className={`absolute  -translate-y-1/2 w-6 h-1 bg-black ${
                  isMenu ? "-rotate-45 top-1/2" : " top-[calc(50%+8px)]"
                } transition-all duration-500`}
              ></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed w-screen top-0 h-screen bg-white flex flex-col justify-center text-5xl p-8 gap-5 font-medium ${
          isMenu ? "right-0" : "right-full"
        } overflow-hidden transition-all duration-1000 text-black`}
      >
        {menuItems.map((menu, i) => (
          <>
            <NavLink
              onClick={() => setIsMenu((prev) => !prev)}
              key={i}
              to={menu.link}
              className={({ isActive }) =>
                `${isActive ? "  text-primary" : ""}`
              }
            >
              {menu.name}
            </NavLink>
            <hr className="bg-black" />
          </>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
