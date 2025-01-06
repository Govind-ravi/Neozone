import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Logo from "../assets/Logo.jpeg";
import ServicesHome from "./services/ServicesHome";
import ServicePage from "./services/ServicePage";
import { services } from "./services/ServicesData";

function Services() {
  return (
    <>
      {/* Logo */}
      <Link to="/" className="w-56 p-2 absolute top-0 left-0">
        <img src={Logo} alt="" />
      </Link>
      <Link
        to="/contact-us"
        className="bg-primary absolute top-2 right-2 p-lg rounded text-lg font-medium"
      >
        Contact Us
      </Link>
      <div className="text-secondary-text mt-6">
        <div>
          <Routes>
            <Route path="/" element={<ServicesHome />} />
            <Route
              path="/:serivceURL"
              element={<ServicePage service={services[0]} />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Services;
