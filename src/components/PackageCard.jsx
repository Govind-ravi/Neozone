import React, { useEffect, useRef } from "react";
import Design from "../assets/design.jpg";
import Govt from "../assets/govt.webp";
import Structure from "../assets/structure.jpg";
import Floor from "../assets/floor&tailing.png";
import Door from "../assets/doors.jpg";
import Kitchen from "../assets/kitchen.jpg";
import Electrical from "../assets/electrical.jpg";
import Pianting from "../assets/painting.webp";
import Miscellaneous from "../assets/miscellaneous.webp";

function PackageCard({ scheme }) {
  const containerRef = useRef(null);
  // Dynamic function for background and text glow based on package_name
  const getPackageClasses = (packageName) => {
    switch (packageName?.toLowerCase()) {
      case "silver":
        return { bgClass: "silver-bg", textClass: "silver-text-glow" };
      case "gold":
        return { bgClass: "gold-bg", textClass: "gold-text-glow" };
      case "diamond":
        return { bgClass: "diamond-bg", textClass: "diamond-text-glow" };
      case "platinum":
        return { bgClass: "platinum-bg", textClass: "platinum-text-glow" };
      case "commercial":
        return { bgClass: "commercial-bg", textClass: "commercial-text-glow" };
      default:
        return { bgClass: "set", textClass: "" };
    }
  };

  const { bgClass, textClass } = getPackageClasses(
    scheme && scheme?.package_name
  );
  useEffect(() => {
    // Scroll with offset of 36px (top-36)
    if (containerRef.current) {
      const containerPosition =
        containerRef.current.getBoundingClientRect().top;
      const offset = 300;
      window.scrollTo({
        top: containerPosition + window.pageYOffset - offset,
        behavior: "smooth",
      });
    }
  }, [scheme]);

  if (scheme)
    return (
      <div
        ref={containerRef}
        className={`w-[95%] ${bgClass} mx-auto rounded-lg  space-y-4 transition-all duration-500 ${
          scheme ? "h-auto p-4" : "h-0"
        }`}
      >
        <h1
          className={`text-5xl ${textClass} silver-text-glow font-bold text-center`}
        >
          {scheme.package_name}
        </h1>
        <p
          className={`text-center ${textClass} text-xl silver-text-glow font-semibold`}
        >
          Rs.{scheme.price_per_sqft}/*- Sqft
        </p>
        <div className="flex flex-col w-[90%] mx-auto p-4 space-y-8">
          <div className="flex items-center justify-center gap-4">
            <div className="flex-1 space-y-2">
              <h1 className={`text-2xl ${textClass} font-bold`}>
                Design & Drawing
              </h1>
              <ol className="space-y-1 list-disc px-4">
                {scheme.design_drawing.map((item, i) => (
                  <li key={i} className="leading-snug text-white">
                    {item}
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex-1">
              <img
                src={Design}
                alt="Design & Drawings"
                className="rounded w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-row-reverse items-center justify-center gap-8">
            <div className="flex-1 space-y-2">
              <h1 className={`text-2xl ${textClass} font-bold`}>
                Government Liaisoning
              </h1>
              <ol className="space-y-1 list-disc px-4">
                {scheme.government_liaisoning.map((item, i) => (
                  <li key={i} className="leading-snug text-white">
                    {item}
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex-1">
              <img
                src={Govt}
                alt="Design & Drawings"
                className="rounded w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="flex-1 space-y-2">
              <h1 className={`text-2xl ${textClass} font-bold`}>Structure</h1>
              <ol className="space-y-1 list-disc px-4">
                {scheme.structure.map((item, i) => (
                  <li key={i} className="leading-snug text-white">
                    {item}
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex-1">
              <img
                src={Structure}
                alt="Design & Drawings"
                className="rounded w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-row-reverse items-center justify-center gap-8">
            <div className="flex-1 space-y-2">
              <h1 className={`text-2xl ${textClass} font-bold`}>
                Flooring & Wall Tiling
              </h1>
              <ol className="space-y-1 list-disc px-4">
                {scheme.floor_wall.map((item, i) => (
                  <li key={i} className="leading-snug text-white">
                    {item}
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex-1">
              <img
                src={Floor}
                alt="Design & Drawings"
                className="rounded w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="flex-1 space-y-2">
              <h1 className={`text-2xl ${textClass} font-bold`}>
                Doors & Windows
              </h1>
              <ol className="space-y-1 list-disc px-4">
                {scheme.doors_windows.map((item, i) => (
                  <li key={i} className="leading-snug text-white">
                    {item}
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex-1">
              <img
                src={Door}
                alt="Design & Drawings"
                className="rounded w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-row-reverse items-center justify-center gap-8">
            <div className="flex-1 space-y-2">
              <h1 className={`text-2xl ${textClass} font-bold`}>
                Bathroom & Kitchen Fixtures
              </h1>
              <ol className="space-y-1 list-disc px-4">
                {scheme.bathroom_kitchen.map((item, i) => (
                  <li key={i} className="leading-snug text-white">
                    {item}
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex-1">
              <img
                src={Kitchen}
                alt="Design & Drawings"
                className="rounded w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="flex-1 space-y-2">
              <h1 className={`text-2xl ${textClass} font-bold`}>Electrical</h1>
              <ol className="space-y-1 list-disc px-4">
                {scheme.electrical.map((item, i) => (
                  <li key={i} className="leading-snug text-white">
                    {item}
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex-1">
              <img
                src={Electrical}
                alt="Design & Drawings"
                className="rounded w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-row-reverse items-center justify-center gap-8">
            <div className="flex-1 space-y-2">
              <h1 className={`text-2xl ${textClass} font-bold`}>Painting</h1>
              <ol className="space-y-1 list-disc px-4">
                {scheme.painting.map((item, i) => (
                  <li key={i} className="leading-snug text-white">
                    {item}
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex-1">
              <img
                src={Pianting}
                alt="Design & Drawings"
                className="rounded w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="flex-1 space-y-2">
              <h1 className={`text-2xl ${textClass} font-bold`}>
                Miscellaneous
              </h1>
              <ol className="space-y-1 list-disc px-4">
                {scheme.miscellaneous.map((item, i) => (
                  <li key={i} className="leading-snug text-white">
                    {item}
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex-1">
              <img
                src={Miscellaneous}
                alt="Design & Drawings"
                className="rounded w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default PackageCard;
