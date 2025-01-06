import React, { useState } from "react";
import VirtualCalculator from "./VirtualCalculator";

const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Hyderabad"];

const pricingData = {
  Mumbai: [
    {
      type: "Basic",
      price: 1800,
      features: [
        "1BHK configuration",
        "Standard paint and finishes",
        "Basic sanitary fittings",
        "Standard electrical points",
        "Simple tile flooring",
      ],
    },
    {
      type: "Classic",
      price: 2300,
      features: [
        "1BHK or 2BHK configuration",
        "Branded paint with accent walls",
        "Standard modular kitchen setup",
        "Premium sanitary fittings",
        "Designer tile flooring",
      ],
    },
    {
      type: "Premium",
      price: 2800,
      features: [
        "2BHK or 3BHK configuration",
        "Luxury paint and wallpaper options",
        "High-end modular kitchen",
        "High-quality sanitary and electrical fittings",
        "Vitrified tile or wooden flooring",
        "False ceiling with LED lighting",
      ],
    },
    {
      type: "Royale",
      price: 3500,
      features: [
        "3BHK or Penthouse configuration",
        "Italian marble flooring",
        "Smart home automation options",
        "Imported kitchen fittings with island",
        "Premium bathroom fixtures with shower enclosure",
        "Designer ceiling and lighting solutions",
      ],
    },
  ],
  Delhi: [
    {
      type: "Basic",
      price: 1600,
      features: [
        "1BHK configuration",
        "Standard wall paint and finishes",
        "Basic fixtures and wiring",
        "Ceramic tile flooring",
        "Simple kitchen setup",
      ],
    },
    {
      type: "Classic",
      price: 2100,
      features: [
        "1BHK or 2BHK configuration",
        "Textured wall finishes",
        "Modular kitchen with basic fittings",
        "Designer bathroom tiles",
        "LED lighting fixtures",
      ],
    },
    {
      type: "Premium",
      price: 2700,
      features: [
        "2BHK or 3BHK configuration",
        "Imported fittings in kitchen and bathrooms",
        "Anti-skid flooring",
        "False ceiling with lighting",
        "Smart door locks and security system",
      ],
    },
    {
      type: "Royale",
      price: 3300,
      features: [
        "3BHK or Penthouse configuration",
        "Italian marble and hardwood flooring",
        "Smart home automation",
        "High-end modular kitchen with pantry",
        "Luxury bathroom fittings with bathtubs",
        "Customized wardrobes and storage solutions",
      ],
    },
  ],
  Bangalore: [
    {
      type: "Basic",
      price: 1500,
      features: [
        "1BHK configuration",
        "Standard white paint",
        "Basic kitchen setup",
        "Ceramic tile flooring",
        "Standard bathroom fixtures",
      ],
    },
    {
      type: "Classic",
      price: 2000,
      features: [
        "1BHK or 2BHK configuration",
        "Textured wall paint",
        "Modular kitchen with chimney",
        "Designer tiles",
        "LED lighting in living area",
      ],
    },
    {
      type: "Premium",
      price: 2600,
      features: [
        "2BHK or 3BHK configuration",
        "Luxury paint and finishes",
        "High-end modular kitchen",
        "False ceiling with concealed lighting",
        "Vitrified or laminated wooden flooring",
      ],
    },
    {
      type: "Royale",
      price: 3200,
      features: [
        "3BHK or Penthouse configuration",
        "Premium Italian marble flooring",
        "Home automation system",
        "Imported fittings in kitchen and bath",
        "Luxury chandelier and ambient lighting",
      ],
    },
  ],
  Chennai: [
    {
      type: "Basic",
      price: 1400,
      features: [
        "1BHK configuration",
        "Standard paint finish",
        "Basic kitchen setup",
        "Ceramic floor tiles",
        "Standard bathroom fittings",
      ],
    },
    {
      type: "Classic",
      price: 1900,
      features: [
        "1BHK or 2BHK configuration",
        "Textured accent walls",
        "Modular kitchen",
        "Designer bathroom tiles",
        "LED lighting setup",
      ],
    },
    {
      type: "Premium",
      price: 2500,
      features: [
        "2BHK or 3BHK configuration",
        "High-quality paint finishes",
        "Fully furnished modular kitchen",
        "False ceiling with lighting",
        "Wood or marble flooring options",
      ],
    },
    {
      type: "Royale",
      price: 3000,
      features: [
        "3BHK or Penthouse configuration",
        "Italian marble and wooden flooring",
        "Smart home with automation",
        "Luxury kitchen fittings",
        "Custom wardrobe designs",
        "Designer light fittings",
      ],
    },
  ],
  Hyderabad: [
    {
      type: "Basic",
      price: 1600,
      features: [
        "1BHK configuration",
        "Standard wall finishes",
        "Basic kitchen setup",
        "Ceramic tile flooring",
        "Standard electrical and sanitary fittings",
      ],
    },
    {
      type: "Classic",
      price: 2100,
      features: [
        "1BHK or 2BHK configuration",
        "Decorative wall paint",
        "Basic modular kitchen",
        "Anti-skid bathroom flooring",
        "LED lights in living room",
      ],
    },
    {
      type: "Premium",
      price: 2600,
      features: [
        "2BHK or 3BHK configuration",
        "Luxury wall finishes",
        "Fully furnished modular kitchen",
        "False ceiling with LED lights",
        "Wooden or vitrified tile flooring",
      ],
    },
    {
      type: "Royale",
      price: 3100,
      features: [
        "3BHK or Penthouse configuration",
        "Imported marble flooring",
        "Smart home automation features",
        "Imported kitchen and bathroom fittings",
        "Customized lighting setup",
      ],
    },
  ],
};

const PriceEstimator = () => {
  const [selectedCity, setSelectedCity] = useState("Mumbai");
  const [activeIndex, setActiveIndex] = useState(null);
  const [isCalcVisible, setIsCalcVisible] = useState(false);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mx-auto p-6 flex gap-4 items-center">
      <div
        className={`flex flex-col gap-2 ${
          isCalcVisible ? "w-1/2" : "w-[60%] mx-auto"
        } transition-all`}
      >
        <h1 className="text-2xl font-bold mb-4 text-center">
          Construction Cost Estimator
        </h1>

        <div>
          <label className="mb-4 text-lg font-medium text-gray-700">
            Select Location:
          </label>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-40 mx-4 p-2 mb-4 bg-white border rounded-lg outline-none"
          >
            {cities.map((city) => (
              <option key={city} value={city} className="">
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          {pricingData[selectedCity].map((plan, index) => (
            <div
              key={index}
              className="border-b pb-2"
              onClick={() => handleAccordionClick(index)}
            >
              <button className="w-full flex justify-between items-center py-2 text-lg font-semibold text-gray-800">
                <span>{plan.type}</span>
                <span>₹{plan.price} per sqft</span>
              </button>
              <div
                className={`mt-2 cursor-pointer overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <ul className="pl-4 space-y-1 text-gray-600">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => setIsCalcVisible(true)}
          className="bg-blue-500 text-white p-2 rounded-lg w-fit self-center"
        >
          Calcualte price for your site
        </button>
      </div>
      {isCalcVisible && (
        <div
          className={`${
            isCalcVisible ? "w-1/2" : "w-0"
          }  transition-all overflow-x-hidden`}
        >
          <VirtualCalculator
            selectedCity={selectedCity}
            pricingData={pricingData}
            setIsCalcVisible={setIsCalcVisible}
          />
        </div>
      )}
    </div>
  );
};

export default PriceEstimator;
