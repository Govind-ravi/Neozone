import React from "react";
import { Link } from "react-router-dom";

const packagesData = [
  {
    package_name: "Silver",
    price_per_sqft: 1550,
    type: "regular",
    style: "silver",
  },
  {
    package_name: "Gold",
    price_per_sqft: 1900,
    type: "regular",
    style: "gold",
  },
  {
    package_name: "Diamond",
    price_per_sqft: 2175,
    type: "luxury",
    style: "diamond",
  },
  {
    package_name: "Platinum",
    price_per_sqft: 2550,
    type: "luxury",
    style: "platinum",
  },
  {
    package_name: "Commercial",
    price_per_sqft: 1600,
    type: "regular",
    style: "commercial",
  },
];
function PackagesSection() {
  return (
    <section className="bg-primary/30 mx-4 my-16 rounded-lg py-16">
      <h1 className="text-center text-primary text-6xl font-bold mb-12">
        Construction Packages
      </h1>
      <div className="grid grid-cols-5 gap-4 md:gap-8 lg:gap-10 px-4 md:px-8 lg:px-10 mb-4">
        {packagesData.map((pkg, i) => (
          <Link
            to={`/packages?scheme=${pkg.package_name}`}
            key={pkg.package_name}
            className={`${pkg.style}-bg min-w-52 p-lg rounded-lg text-center h-28 flex flex-col items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] transition`}
          >
            <h2 className={`text-4xl font-bold ${pkg.style}-text-glow`}>
              {pkg.package_name}
            </h2>
            <p className={`text-xl font-semibold ${pkg.style}-text-glow`}>
              Rs.{pkg.price_per_sqft}/*-Sqft
            </p>
          </Link>
        ))}
      </div>
      <p className="text-center">Click on package to view full details</p>
    </section>
  );
}

export default PackagesSection;
