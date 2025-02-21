import React from "react";
import Residential from "../../assets/ResidentialConstruction.jpg";
import Consulting from "../../assets/Consulting.jpg";
import Turnkey from "../../assets/Turnkey.jpeg";
import Interior from "../../assets/Interior.jpg";
import Villas from "../../assets/Villas.jpg";
import { Link } from "react-router-dom";

function ServicesHome() {
  return (
    <>
      <h1 className="text-primary text-6xl font-bold text-center px-2">
        Our Services
      </h1>
      <p className="text-center w-[60%] mx-auto font-medium">
        From concept to completion, we offer a comprehensive range of services
        tailored to meet your construction and design needs. Explore how we
        bring expertise and creativity to every project.
      </p>
      <div className="w-[98%] md:w-[95%] lg:w-[90%] xl:w-[80%] mx-auto my-16 space-y-10">
        <div className="flex items-center gap-10">
          <div className="w-[60%] space-y-4">
            <h1 className="text-4xl text-primary font-semibold">
              Residential Construction
            </h1>
            <p className="font-medium">
              From planning to completion, Residential Construction involves
              creating functional and durable spaces for businesses, including
              offices, retail stores, warehouses, and factories. With
              collaboration among architects, engineers, and contractors, every
              project is tailored to client needs, ensuring seamless execution
              and compliance with regulations. The result? Thoughtfully
              constructed spaces that empower businesses to thrive.
            </p>
            <div className="flex gap-4">
              <Link
                to="/services/residential-construction"
                className="p-lg bg-primary text-lg text-default-text rounded-lg"
              >
                Explore
              </Link>
              <Link
                to="/contact-us"
                className="p-lg bg-gray-500 text-lg text-default-text rounded-lg"
              >
                Get a free Consultation
              </Link>
            </div>
          </div>
          <div className="w-[40%]">
            <img
              src={Residential}
              alt="Residential Construction"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-row-reverse items-center gap-10">
          <div className="w-[60%] space-y-4">
            <h1 className="text-4xl text-primary font-semibold">
              Consulting Services
            </h1>
            <p className="font-medium">
              At NEOZONE Building Technologies LLP, we guide projects seamlessly
              from pre-construction planning to final closeout, ensuring
              schedules and budgets are meticulously maintained. With expertise
              across diverse building types—from specialty stores to
              large-format establishments—our integrated services, including
              mechanical, electrical, plumbing, and structural engineering,
              deliver precision and excellence at every step.
            </p>
            <div className="flex gap-4">
              <Link
                to="/services/consulting"
                className="p-lg bg-primary text-lg text-default-text rounded-lg"
              >
                Explore
              </Link>
              <Link
                to="/contact-us"
                className="p-lg bg-gray-500 text-lg text-default-text rounded-lg"
              >
                Get a free Consultation
              </Link>
            </div>
          </div>
          <div className="w-[40%]">
            <img
              src={Consulting}
              alt="Residential Construction"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="flex items-center gap-10">
          <div className="w-[60%] space-y-4">
            <h1 className="text-4xl text-primary font-semibold">
              Turnkey Construction
            </h1>
            <p className="font-medium">
              NEOZONE Building Technologies LLP stands as one of Bangalore’s
              most acclaimed Turnkey home construction firms. Specializing in
              villas, apartments, and independent homes, we deliver end-to-end
              construction solutions tailored to your vision. From luxurious
              residences to commercial projects, our commitment lies in blending
              creativity with modern standards, crafting spaces that enhance
              your lifestyle.
            </p>
            <div className="flex gap-4">
              <Link
                to="/services/turnkey"
                className="p-lg bg-primary text-lg text-default-text rounded-lg"
              >
                Explore
              </Link>
              <Link
                to="/contact-us"
                className="p-lg bg-gray-500 text-lg text-default-text rounded-lg"
              >
                Get a free Consultation
              </Link>
            </div>
          </div>
          <div className="w-[40%]">
            <img
              src={Turnkey}
              alt="Residential Construction"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-row-reverse items-center gap-10">
          <div className="w-[60%] space-y-4">
            <h1 className="text-4xl text-primary font-semibold">
              Interior Design
            </h1>
            <p className="font-medium">
              At NEOZONE Building Technologies LLP, our expert store planners
              and interior designers bring decades of experience to crafting
              spaces that inspire. From retail layouts to restaurants and
              hotels, we understand the art of combining visual appeal with
              functionality, ensuring optimal circulation, merchandise
              presentation, and a thriving environment tailored to your needs.
            </p>
            <div className="flex gap-4">
              <Link
                to="/services/interior-design"
                className="p-lg bg-primary text-lg text-default-text rounded-lg"
              >
                Explore
              </Link>
              <Link
                to="/contact-us"
                className="p-lg bg-gray-500 text-lg text-default-text rounded-lg"
              >
                Get a free Consultation
              </Link>
            </div>
          </div>
          <div className="w-[40%]">
            <img
              src={Interior}
              alt="Residential Construction"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="flex items-center gap-10">
          <div className="w-[60%] space-y-4">
            <h1 className="text-4xl text-primary font-semibold">
              Villas and Mansion Design
            </h1>
            <p className="font-medium">
              NEOZONE Building Technologies LLP takes pride in crafting
              state-of-the-art villas and mansions in Bangalore, turning dreams
              into reality. With a focus on customer satisfaction, we prioritize
              your needs to create bespoke, luxurious homes that reflect your
              vision and lifestyle. Your dream home is our commitment.
            </p>
            <div className="flex gap-4">
              <Link
                to="/services/villas-&-mansion"
                className="p-lg bg-primary text-lg text-default-text rounded-lg"
              >
                Explore
              </Link>
              <Link
                to="/contact-us"
                className="p-lg bg-gray-500 text-lg text-default-text rounded-lg"
              >
                Get a free Consultation
              </Link>
            </div>
          </div>
          <div className="w-[40%]">
            <img
              src={Villas}
              alt="Residential Construction"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesHome;
