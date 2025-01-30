import React from "react";
import Drawing from "../../assets/drawing.jpeg";
import CoreValuesSection from "../homepage/CoreValuesSection";
import HighlightSection from "./HighlightSection";

function Aboutpage() {
  return (
    <div>
      <h1 className="text-primary text-6xl font-bold text-center">About Us</h1>
      <section className="flex justify-center gap-4 my-16">
        <div className="w-[40%] space-y-4">
          <h1 className="text-4xl font-bold text-primary">
            Welcome To NEOZONE Builders
          </h1>
          <p className="font-medium text-xl">
            Our reputation speaks for quality construction and on-time
            allotments. With the spirit of innovation, we’ve been consistent in
            our objective of providing prominent quality services. We are also
            at the forefront of using new-age technology that complements the
            modernised construction. With a strong presence in Bangalore, We
            have developed 300+ commercial and residential projects to our name.
            Building our customers’ dreams and fulfilling them gives us immense
            satisfaction and we are proud of our quality & timely deliveries on
            projects.
          </p>
        </div>
        <div className="w-[40%]">
          <img src={Drawing} alt="" />
        </div>
      </section>
      <CoreValuesSection />
      <HighlightSection />
      
    </div>
  );
}

export default Aboutpage;
