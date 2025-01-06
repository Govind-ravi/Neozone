import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

const additionalFeatures = [
  { name: "Cupboard", price: 5000 }, // Fixed price for cupboard
  { name: "Balcony", price: 15000 }, // Fixed price for balcony
  { name: "Parking", price: 20000 }, // Fixed price for parking
  { name: "Garden", price: 10000 },  // Fixed price for garden
];

const VirtualCalculator = ({ selectedCity, pricingData, setIsCalcVisible }) => {
  const [length, setLength] = useState(30); // Default length in feet
  const [width, setWidth] = useState(20); // Default width in feet
  const [selectedPlan, setSelectedPlan] = useState("Basic");
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  
  // Calculate area (length * width)
  const area = length * width;

  // Handle feature checkbox changes
  const handleFeatureChange = (feature) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature) ? prev.filter((f) => f !== feature) : [...prev, feature]
    );
  };

  // Price calculation effect
  useEffect(() => {
    const basePrice = pricingData[selectedCity].find(
      (plan) => plan.type === selectedPlan
    ).price;
    let featurePrice = selectedFeatures.reduce((acc, feature) => {
      const featureData = additionalFeatures.find((f) => f.name === feature);
      return acc + (featureData ? featureData.price : 0);
    }, 0);

    // Total price = Area * Price per sqft + Additional features
    setTotalPrice(area * basePrice + featurePrice);
  }, [length, width, selectedPlan, selectedFeatures, selectedCity]);

  return (
    <div className="relative max-w-xl mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
        <div onClick={()=>setIsCalcVisible(false)} className="absolute top-4 right-4 text-xl font-bold"><IoMdClose/></div>
      <h1 className="text-2xl font-bold mb-4 text-center">Virtual Price Calculator</h1>

      {/* Length and Width Inputs */}
      <div className="mb-4">
        <label className="block mb-2">Site Length (feet):</label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Site Width (feet):</label>
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(Number(e.target.value))}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      {/* Plan Selection */}
      <div className="mb-4">
        <label className="block mb-2">Select Plan:</label>
        <select
          value={selectedPlan}
          onChange={(e) => setSelectedPlan(e.target.value)}
          className="w-full p-2 border rounded-lg"
        >
          {pricingData[selectedCity].map((plan) => (
            <option key={plan.type} value={plan.type}>
              {plan.type} - ₹{plan.price} per sqft
            </option>
          ))}
        </select>
      </div>

      {/* Additional Features (Checkboxes) */}
      <div className="mb-4">
        <label className="block mb-2">Select Additional Features:</label>
        {additionalFeatures.map((feature) => (
          <div key={feature.name} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={selectedFeatures.includes(feature.name)}
              onChange={() => handleFeatureChange(feature.name)}
              className="mr-2"
            />
            <span>{feature.name} (₹{feature.price})</span>
          </div>
        ))}
      </div>

      {/* Price Display */}
      <div className="text-lg font-bold">
        Total Price: ₹{totalPrice.toFixed(2)}
      </div>
    </div>
  );
};

export default VirtualCalculator;
