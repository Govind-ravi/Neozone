import React from "react";
import Logo from "../assets/Logo.jpeg";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const links = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Packages", link: "/packages" },
  { name: "Gallery", link: "/gallery" },
  { name: "Contact Us", link: "/contact" },
];

const addresses = [
  {
    icon: <FaLocationDot />,
    info: "# 635, 3rd cross Mahalakshmi layout Bangalore-560086",
    link: "https://www.google.com/maps/search/?api=1&query=635,+3rd+cross+Mahalakshmi+layout+Bangalore-560086",
  },
  { icon: <IoCall />, info: "+91 9739906259", link: "tel:+919739906259" },
  {
    icon: <MdEmail />,
    info: "info.neozone@gmail.com",
    link: "mailto:info.neozone@gmail.com",
  },
];

function Footer() {
  return (
    <footer className="bg-[#2c2c2c] p-16">
      {/* <div>
        <img src={Logo} alt="" className='' />
      </div> */}
      <div className="flex justify-between gap-24">
        <div className="w-1/2">
          <h1 className="text3d text-6xl font-bold">
            Neozone Construction and builders LLP
          </h1>
          <h2 className="text-4xl font-medium">
            Home Construction and Buildrs company
          </h2>
        </div>
        <div className="flex gap-12">
          <div className=" flex flex-col gap-1 text-xl font-medium whitespace-nowrap">
            <p className="text-2xl font-medium">Menu</p>
            <hr />
            {links.map((link, i) => (
              <Link key={i} to={link.link} className="hover:underline">
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-1 text-xl font-medium">
            <p className="text-2xl font-medium">Office Address</p>
            <hr />
            <div className="space-y-4">
              {addresses.map((address, i) => (
                <a
                  key={i}
                  href={address.link}
                  target="_blank"
                  className="flex items-center gap-2 hover:underline"
                >
                  <div className="text-2xl">{address.icon}</div>
                  <p>{address.info}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-12 font-medium text-xl">© Copyright 2023 by Symatrixwebstudio.com</div>
    </footer>
  );
}

export default Footer;
