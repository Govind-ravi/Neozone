import React from "react";
import { Link } from "react-router-dom";
import Residential from "../../assets/ResidentialConstruction.jpg";
import Consulting from "../../assets/Consulting.jpg";
import Turnkey from "../../assets/Turnkey.jpeg";
import Interior from "../../assets/Interior.jpg";
import Villas from "../../assets/Villas.jpg";

const servicesData = [
  {
    name: "Residential Construction",
    info: "Construction involves the construction of buildings and other structures used for commercial purposes. It includes office buildings",
    link: "/services/residential-construction",
    image: Residential,
  },
  {
    name: "Consulting Services",
    info: "NEOZONE Building Technologies LLP oversees the construction phase of each project from pre-construction planning through final closeout;",
    link: "/services/consulting",
    image: Consulting,
  },
  {
    name: "Turnkey Construction",
    info: "NEOZONE Building Technologies LLP is one of Bangalore’s most highly-rated Turnkey home construction firms. We offer complete villas,",
    link: "/services/turnkey",
    image: Turnkey,
  },
  {
    name: "Interior Design",
    info: "NEOZONE Building Technologies LLP has the team and the resources to create and execute your vision. We have a dedicated store planning and interior",
    link: "/services/interior-design",
    image: Interior,
  },
  {
    name: "Villas And Mansion",
    info: "NEOZONE Building Technologies LLP is a leading home construction contractor in Bangalore. Our state-of-the-art villa construction",
    link: "/services/villas-&-mansion",
    image: Villas,
  },
];

function ServiceSection() {
  return (
    <section className="bg-primary/30 mx-4 my-16 rounded-lg py-16 space-y-16">
      <h1 className="text-center text-primary text-6xl font-bold">
        Our Services
      </h1>
      <div className="space-y-24">
        {servicesData.map((service, i) => (
          <div
            key={i}
            className={`flex ${
              i % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } gap-12 items-center justify-center`}
          >
            <div className="w-[30%] space-y-4">
              <h2 className="text-primary text-5xl font-bold">
                {service.name}
              </h2>
              <p className="text-xl font-medium">{service.info}</p>
              <Link
                to={service.link}
                className="p-lg bg-primary block w-fit text-default-text text-lg rounded font-medium"
              >
                Read More
              </Link>
            </div>
            <div className="w-[40%] h-[400px]">
              <img
                src={service.image}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;
