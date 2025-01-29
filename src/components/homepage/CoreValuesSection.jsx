import React, { useState } from "react";
import { RiTeamFill } from "react-icons/ri";
import { FaList } from "react-icons/fa";
import { GiTeamDowngrade } from "react-icons/gi";

const coreValues = [
  {
    name: "INTEGRITY",
    icon: <RiTeamFill />,
    info: "We believe that integrity is at the heart of our individual and corporate actions",
  },
  {
    name: "HONESTY",
    icon: <FaList />,
    info: "We believe that honesty is an integral part of our team",
  },
  {
    name: "TEAMWORK",
    icon: <GiTeamDowngrade />,
    info: "We believe that teamwork empowers our individual strengths",
  },
];

function CoreValuesSection() {
  const [activeValue, setActiveValue] = useState(-1);
  return (
    <section className="mx-4 md:mx-8 lg:mx-10 my-16 ">
      <h1 className=" text-center text-primary text-6xl font-bold mb-16">
        Our Core Values
      </h1>
      <div className="grid grid-cols-3 gap-10">
        {coreValues.map((value, i) => (
          <div
            onMouseEnter={() => setActiveValue(i)}
            onMouseLeave={() => setActiveValue(-1)}
            key={i}
            className="flex flex-col gap-8 items-center"
          >
            <div
              className={`relative text-7xl ${
                activeValue === i ? "bg-black text-white" : "bg-none"
              } border-black border-4 p-16 rounded-full transition-all duration-500`}
            >
              {value.icon}
              <div
                className={`text-xl font-medium absolute top-2 right-2 border-4 border-black p-2 rounded-full w-12 h-12 flex items-center justify-center ${
                  activeValue === i ? "bg-white text-black" : "bg-black text-white"
                } transition-all duration-500`}
              >
                {i + 1}
              </div>
            </div>
            <h1 className="text-2xl font-bold">{value.name}</h1>
            <p className="text-xl font-medium text-center">{value.info}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CoreValuesSection;
