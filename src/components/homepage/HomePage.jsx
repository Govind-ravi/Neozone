import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

function HomePage() {
  return (
    <div className="text-secondary-text mt-28">
      <Navbar />
      <HeroSection/>
    </div>
  );
}

export default HomePage;
