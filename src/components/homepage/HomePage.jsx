import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ServiceSection from "./ServiceSection";
import ProjectSection from "./ProjectSection";
import PackagesSection from "./PackagesSection";
import StepsSection from "./StepsSection";
import CoreValuesSection from "./CoreValuesSection";
import TestimonialSection from "./TestimonialSection";
import StatisticsSection from "./StatisticsSection";
import PriceEstimator from "../PriceEstimator";
import AboutSection from "./AboutSection";

function HomePage() {
  return (
    <div className="text-secondary-text">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <PackagesSection />
      <CoreValuesSection />
      <StepsSection />
      <TestimonialSection />
      <StatisticsSection />
      {/* <PriceEstimator /> */}
    </div>
  );
}

export default HomePage;
