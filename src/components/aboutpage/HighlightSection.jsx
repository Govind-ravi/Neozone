import React from "react";
import { BsFillHandIndexFill } from "react-icons/bs";

const hightlights = [
  "24/7 Hours Emergency Services",
  "Professional, Licensed Plumbers",
  "Affordable prices",
  "No hidden costs",
  "Discounts on Services",
  "Guaranteed Work",
  "Fast Services",
  "Highly Trained Staff",
  "Free Consultant",
];
function HighlightSection() {
  return (
    <section className="my-16 w-[80%] mx-auto space-y-4 ">
      {hightlights.map((highlight, i) => (
        <div key={i} className="flex items-center gap-8 text-2xl font-medium">
          <BsFillHandIndexFill className="rotate-90 text-[#FFCC4d] text-2xl" />
          <p>{highlight}</p>
        </div>
      ))}
    </section>
  );
}

export default HighlightSection;
