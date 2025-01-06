import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { services } from "../services/ServicesData";

function ServicePage() {
  const { serivceURL } = useParams();
  const service = services.find((service) => service.id === serivceURL);
  return (
    <>
      <h1 className="text-5xl text-center text-primary font-bold">
        Our Services
      </h1>
      <div className="flex items-center justify-center mt-8 gap-2 text-primary">
        <NavLink to="/services" className="right-6 text-lg text-primary underline">
          Back to Services
        </NavLink>
        <span className="text-lg">/</span>
        <NavLink
          to="/services/residential-construction"
          className={({isActive})=>`right-6 text-lg text-primary underline ${isActive && "font-bold"}`}
        >
          Residential
        </NavLink>
        <span className="text-lg">/</span>
        <NavLink
          to="/services/consulting"
          className={({isActive})=>`right-6 text-lg text-primary underline ${isActive && "font-bold"}`}
        >
          Consulting
        </NavLink>
        <span className="text-lg">/</span>
        <NavLink
          to="/services/turnkey"
          className={({isActive})=>`right-6 text-lg text-primary underline ${isActive && "font-bold"}`}
        >
          Turnkey
        </NavLink>
        <span className="text-lg">/</span>
        <NavLink
          to="/services/interior-design"
          className={({isActive})=>`right-6 text-lg text-primary underline ${isActive && "font-bold"}`}
        >
          Interior
        </NavLink>
        <span className="text-lg">/</span>
        <NavLink
          to="/services/villas-&-mansion"
          className={({isActive})=>`right-6 text-lg text-primary underline ${isActive && "font-bold"}`}
        >
          Villas & Mansion
        </NavLink>
      </div>
      <div className=" mx-auto my-10 flex items-center gap-10 space-y-4 w-[90%]">
        <div className="space-y-4 w-[40%]">
          <h2 className="text-4xl text-primary font-bold">
            {service.title}
            <h4 className="text-xl text-secondary-text font-semibold">
              {service.subHeadline}
            </h4>
          </h2>
          <p className="font-medium">{service.description}</p>
          <div>
            <Link
              to="/contact-us"
              className="p-lg rounded-lg bg-primary text-default-text"
            >
              {service.cta}
            </Link>
          </div>
        </div>
        <div className="bg-gray-300 h-96 w-[60%]"></div>
      </div>
      {service.informations.map((info, i) => (
        <div
          key={i}
          className={`flex items-center gap-8 w-[70%] mx-auto my-10 ${
            i % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <div className="w-[40%]">
            <img
              src={info.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[60%]">
            <h2 className="text-primary text-2xl font-semibold">
              {info.title}
            </h2>
            <p className="font-medium">
              {info.description && info.description}
            </p>
            {info.points &&
              info.points.map((point, i) => (
                <ol className="font-medium list-disc px-4">
                  <li key={i}>
                    <span className="font-semibold">
                      {point.headline && point.headline}:{" "}
                    </span>
                    {point.info}
                  </li>
                </ol>
              ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default ServicePage;
