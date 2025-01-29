import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Drawing from "../../assets/drawing.jpeg";
import ServiceSection from "./ServiceSection";
import ProjectSection from "./ProjectSection";
import PackagesSection from "./PackagesSection";
import StepsSection from "./StepsSection";
import CoreValuesSection from "./CoreValuesSection";
import TestimonialSection from "./TestimonialSection";

function HomePage() {
  return (
    <div className="text-secondary-text mt-28">
      <Navbar />
      <HeroSection />
      <section className="flex justify-center gap-4 my-16">
        <div className="w-[40%] space-y-4">
          <h1 className="text-4xl font-bold text-primary">
            We Building Everything That You Needed
          </h1>
          <p className="font-medium text-xl">
            NEOZONE Building Technologies LLP started in 2012 and engaged in
            Construction and interior services to residential and commercial
            projects, Completed more then 512 projects in civil and interior
            business, which include Super Luxury, Luxury and Affordable Housing
            segments. Our expertise lies in the development and construction of
            ecological & sustainable residences. our prime focus and dedication
            aims at obtaining customer satisfaction over profit maximization.
            Honesty and Transparency are the key ethics and elements which
            contribute to the accomplishment and fulfilment of our ultimate
            goal.
          </p>
        </div>
        <div className="w-[40%]">
          <img src={Drawing} alt="" />
        </div>
      </section>
      <ServiceSection />
      <ProjectSection />
      <PackagesSection />
      <CoreValuesSection />
      <StepsSection />
      <TestimonialSection />
    </div>
  );
}

export default HomePage;
