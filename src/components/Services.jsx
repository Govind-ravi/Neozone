import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Logo from "../assets/Logo.jpeg";
import ServicesHome from "./services/ServicesHome";
import ServicePage from "./services/ServicePage";
import { services } from "./services/ServicesData";

function Services() {
  return (
    <>
      <div className="text-secondary-text mt-6">
        <Routes>
          <Route path="/" element={<ServicesHome />} />
          <Route
            path="/:serivceURL"
            element={<ServicePage service={services[0]} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default Services;
