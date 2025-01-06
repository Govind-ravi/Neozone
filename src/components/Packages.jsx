import React, { useState } from "react";
import { Link } from "react-router-dom";
import PackageCard from "./PackageCard";
import Logo from "../assets/Logo.jpeg";

const packagesData = [
  {
    package_name: "Silver",
    price_per_sqft: 1550,
    type: "regular",
    style: "silver",
    design_drawing: [
      "2D Floor Plans.",
      "Working Drawings.",
      "3D Elevation designs.",
      "Structural Drawings.",
      "All GFC drawings will only be available in PDF formats.",
    ],
    government_liaisoning: [
      "Bestrue assist with Different Government Agencies, Obtain Permissions, Licenses & Sanction Fees.",
      "Construction Plan Sanction.",
      "Temporary Electricity Connection.",
      "Permanent Electrical Connection.",
      "Water Connection.",
      "Sewage Connection.",
    ],
    structure: [
      "Steel: RD/Gopala Equivalent brand (Grade Fe500/550 Tmt as recomended by structural engineer).",
      "Cement: ISI Standard 43 & 53 Grades of Priya/Coromandel/ Penna or Equivalent brand.",
      "M-Sand will used for Block work and P-Sand will be used for Plastering.",
      "Brick: Solid concrete blocks of 6″ & 4″.",
      "Concrete: M20/M25 grade as recommended by a structural engineer.",
      "Aggregates: 20mm & 40mm.",
      "UG Sump of 5,000lts capacity built with solid blocks of 6” thickness & plastered with waterproofing chemical.",
      "Ceiling Height: 10 feet FFL to FFL.",
      "Terrace & Bathrooms will be waterproofed by Brush bond and screed concrete with the required finish.",
      "Waterproofing chemical: Dr. Fixit Or Fosroc.",
    ],
    floor_wall: [
      "Living, & Dining Vitrified flooring tiles up to Rs.60/- per sqft.",
      "Kitchen and Bedroom Vitrified flooring tiles up to Rs.50/- per sqft.",
      "Staircase – Sadarahalli Granite up to Rs.70/- per sqft.",
      "Balconies & Sitout areas – Tiles up to Rs.40/- per sqft.",
      "Bathroom/Toilet Antiskid Flooring up to Rs.40/- per sqft.",
      "Parking Floor up to Rs.40/- per sqft.",
      "Bathroom Wall Tiling Height up to 7 Feet Height.",
      "Kitchen countertop : Granite – Rs.120/- per sqft.",
      "Kitchen Dadoing up to 2 Feet with ceramic wall tiles Rs.40/- per sqft.",
      "Puja Room- Granite slab- Rs.100/- per sqft.",
    ],
    doors_windows: [
      "Main Door 7ftX3ft6″ : Indian Teak Wood frame & shutter Per Door including fittings up to Rs.16,000/-",
      "Main Door Teak Frame of 5″ X 3″ thickness and main door shutter of 32mm thickness will be provided.",
      "Internal Doors 7ftX3ft: WPC or Sal Frame Of 4″X3″ with Laminate/Skin Door shutter.",
      "Bathroom Doors 7ftX2.5ft will be PVC Doors.",
      "Door & Door Frame cost – Inclusive of planning, rebate, transportation, etc.",
      "Aluminium windows – 5mm clear glass shutters and mess shutters with MS Grills (3 tracks and 1 mesh)Rs.320/- per sqft.",
    ],
    bathroom_kitchen: [
      "Stainless Steel Kitchen Sink – Rs.3000/- per sink.",
      "Sink Faucet & Towel Ring up to Rs.1500/-",
      "CP & Sanitary fixture up to Rs.16,000/- per bathroom Brand: Hindware/Cera.",
      "Bathroom Accessories: Ewc, Health faucet, wash basin, 2 in-1 wall mixer, overhead shower, bottle trap, gratings, etc.",
    ],
    electrical: [
      "Switches and plates: Anchor(Roma).",
      "Wires: Fire Proof Vguard/Anchor/ Polycab.",
      "DB and MCB’s of Anchor make are included.",
      "Wiring till the main panel board shall be done.",
      "Electric Car or Two wheeler charging point will be provided in the parking.",
      "Geyser points – For all bathrooms.",
    ],
    painting: [
      "Exterior painting: 1 Coat Primer + 2 Coats of Ace Exterior emulsion Brand: Asian/Dulux paints.",
      "Interior wall and ceiling: 2 coats of wall putty + 1 coat of primer + 2 coats of Tractor Emulsion Brand: Asian/Dulux paints.",
      "MS Work painting: Anticorrosion primer + 2 coats of enamel paint.",
    ],
    miscellaneous: [
      "MS Staircase Railing worth Rs.120/- per sqft will be provided.",
      "MS Grills of basic design using 10mm square rods with 125mm spacing worth Rs.120/- per sqft is provided.",
      "Cpvc Pipes: Ashirwad/Supreme/ Astral.",
      "Overhead tank of 1,000lts capacity with MS Structure at 6 Feet height will be provided.",
    ],
  },
  {
    package_name: "Gold",
    price_per_sqft: 1900,
    type: "regular",
    style: "gold",
    design_drawing: [
      "2D Floor Plans.",
      "Working Drawings.",
      "3D Elevation designs.",
      "Structural Drawings.",
      "All GFC drawings will only be available in PDF formats.",
    ],
    government_liaisoning: [
      "Bestrue assist with Different Government Agencies, Obtain Permissions, Licenses & Sanction Fees.",
      "Construction Plan Sanction.",
      "Temporary Electricity Connection.",
      "Permanent Electrical Connection.",
      "Water Connection.",
      "Sewage Connection.",
    ],
    structure: [
      "Steel: Meenakshi/ Kamadhenu Equivalent brand (Grade Fe500/550 Tmt as recomended by structural engineer).",
      "Cement: ISI Standard 43 & 53 Grades of Zuari/Ramco or Equivalent brand.",
      "M-Sand will use for Block work and P-Sand will be used for plastering.",
      "Brick: Solid concrete blocks of 6″ & 4″.",
      "Concrete: M20/M25 grade as recommended by a structural engineer.",
      "Aggregates: 20mm & 40mm.",
      "UG Sump of 6,000lts capacity built with solid blocks of 6” thickness & plastered with waterproofing chemical.",
      "Ceiling Height: 10 feet FFL to FFL.",
      "Terrace & Bathrooms will be waterproofed by Brush bond and screed concrete with the required finish.",
      "Waterproofing chemical: Dr. Fixit Or Fosroc.",
    ],
    floor_wall: [
      "Living, & Dining Vitrified flooring tiles up to Rs.70/- per sqft.",
      "Kitchen and Bedroom Vitrified flooring tiles up to Rs.60/- per sqft.",
      "Staircase – Granite up to Rs.90/- per sqft.",
      "Balconies & Sitout areas – Tiles up to Rs.50/- per sqft.",
      "Bathroom/Toilet Antiskid Flooring up to Rs.50/- per sqft.",
      "Parking Floor up to Rs.50/- per sqft.",
      "Bathroom Wall Tiling Height up to 7 Feet Height.",
      "Kitchen countertop : Granite – Rs.140/- per sqft.",
      "Kitchen Dadoing up to 2 Feet with ceramic wall tiles Rs.50/- per sqft.",
      "Puja Room- Granite slab- Rs.120/- per sqft.",
    ],
    doors_windows: [
      "Main Door 7ftX3ft6″ : Ghana Teak Wood frame & shutter Per Door including fittings up to Rs.22000/-",
      "Main Door Teak Frame of 5″ X 3″ thickness and main door shutter of 32mm thickness will be provided.",
      "Internal Doors 7ftX3ft: WPC or Sal Frame Of 4″X3″ with Laminate/Skin Door shutter.",
      "Bathroom Doors 7ftX2.5ft will be WPC Doors.",
      "Door & Door Frame cost – Inclusive of planning, rebate, transportation, etc.",
      "UPVC windows of guage 92 of Rs.400/- per sqft with 2 glass and 1 mesh shutters.",
    ],
    bathroom_kitchen: [
      "Stainless Steel Kitchen sink & Accessories: SS/Granite– Rs.10,000/- per kitchen.",
      "Sink Faucet & Towel Ring upto Rs.2500/-",
      "CP & Sanitary fixture up to Rs.25,000/- per bathroom Brand: Hindware, Jaquar, Kohler.",
      "Bathroom Accessories: Ewc, Health Faucet, Wash basin, 2 in-1 wall mixer, overhead shower, bottle trap, gratings, etc.",
    ],
    electrical: [
      "Switches and plates: Anchor(Roma).",
      "Wires: Fire Proof Vguard/Anchor/Polycab.",
      "DB and MCB’s of Anchor make are included.",
      "Wiring till the main panel board shall be done.",
      "Electric Car or Two wheeler charging points will be provided in the parking.",
      "Geyser points – For all bathrooms.",
    ],
    painting: [
      "Exterior painting: 1 Coat Primer + 2 Coats Of Apex Exterior emulsion. Brand: Asian/Dulux paints.",
      "Interior wall and ceiling: 2 coats of wall putty + 1 coat of primer + 2 coats of Tractor Shyne Emulsion Brand: Asian paints.",
      "MS Work painting: Anticorrosion primer + 2 coats of enamel paint.",
    ],
    miscellaneous: [
      "MS Staircase Railing worth Rs.150/- per sqft will be provided.",
      "MS Grills of basic design using 10mm square rods with 125mm spacing worth Rs.150/- per sqft is provided.",
      "Cpvc Pipes: Ashirwad/ Supreme/ Astral.",
      "Overhead tank of 1,500lts capacity with MS Structure at 6 Feet height will be provided.",
    ],
  },
  {
    package_name: "Diamond",
    price_per_sqft: 2175,
    type: "luxury",
    style: "diamond",
    design_drawing: [
      "2D Floor Plans.",
      "Working Drawings.",
      "3D Elevation designs.",
      "Structural Drawings.",
      "Electrical Drawings.",
      "All GFC drawings will only be available in PDF formats.",
    ],
    government_liaisoning: [
      "Bestrue assist with Different Government Agencies, Obtain Permissions, Licenses & Sanction Fees.",
      "Construction Plan Sanction.",
      "Temporary Electricity Connection.",
      "Permanent Electrical Connection.",
      "Water Connection.",
      "Sewage Connection.",
    ],
    structure: [
      "Steel: Indus or Equivalent brand (Grade Fe500/550 Tmt as recomended by a structural engineer).",
      "Cement: ISI Standard 43 & 53 Grades of ACC/Ultratech or Equivalent brand.",
      "M-Sand will be used for Block work and P-Sand will be used for Plastering.",
      "Brick: Solid concrete APCO blocks of 6″ & 4″.",
      "Concrete: M20/M25 grade as recommended by the structural engineer.",
      "Aggregates: 20mm & 40mm.",
      "UG Sump of 8,000lts capacity built with solid blocks of 6” thickness & plastered with waterproofing chemical.",
      "Ceiling Height: 10 feet FFL to FFL.",
      "Terrace & Bathrooms will be waterproofed by Brush bond and screed concrete with the required finish.",
      "Waterproofing chemical: Dr. Fixit Or Fosroc.",
    ],
    floor_wall: [
      "Living, & Dining Vitrified flooring tiles up to Rs.100/- per sqft.",
      "Kitchen and Bedroom Vitrified flooring tiles up to Rs.80/- per sqft.",
      "Staircase – Granite up to Rs.100/- per sqft.",
      "Balconies & Sitout areas – Tiles up to Rs.70/- per sqft.",
      "Bathroom/Toilet Antiskid Flooring up to Rs.60/- per sqft.",
      "Parking Floor up to Rs.60/- per sqft.",
      "Bathroom Wall Tiling Height up to 7 Feet Height.",
      "Kitchen countertop : Granite – Rs.170/- per sqft.",
      "Kitchen Dadoing up to 2 Feet with ceramic wall tiles Rs.60/- per sqft.",
      "Puja Room- Granite slab- Rs.150/- per sqft.",
    ],
    doors_windows: [
      "Main Door 7ftX4ft : Border Teak Wood frame & shutter Per Door including fittings up to Rs.30,000/-",
      "Main Door Teak Frame of 6″ X 4″ thickness and main door shutter of 32mm thickness will be provided.",
      "Internal Doors 7ftX3ft: WPC Or Sal Frame of 5″X3″ with Laminate/Skin Door Shutter.",
      "Bathroom Doors 7ftX2.5ft will be WPC doors.",
      "Door & Door Frame cost – inclusive of planning, rebate, transportation, etc.",
      "UPVC windows of guage 92 of worth Rs.600/- per sqft with 2 glass and 1 mesh shutters.",
      "Eco processing.",
    ],
    bathroom_kitchen: [
      "Stainless Steel Kitchen sink and accessories: Granite, Quartz Rs.18,000/- per kitchen including bendable tabs.",
      "Sink Faucet & Towel Ring up to Rs.3000/-",
      "CP & Sanitary fixture up to Rs.32,000/- per bathroom Brand: Hindware, Jaquar, and Kohler.",
      "Bathroom Accessories: Ewc, Health faucet, wash basin, diverter, overhead shower, bottle trap, gratings, etc…",
    ],
    electrical: [
      "Switches and plates: Anchor(Roma).",
      "Wires: Fire Proof Vguard/Anchor/Polycab.",
      "DB and MCB’s of Schneider/Legrand make are included.",
      "Wiring till the main panel board shall be done.",
      "Electric Car or Two wheeler charging points will be provided in the parking.",
      "Provision for Home automation is included like touch switches and a smart plug.",
      "Geyser points – For all bathrooms.",
    ],
    painting: [
      "Exterior painting: 1 Coat primer + 2 Coats Of Apex Exterior Emulsion Brand: Asian/Dulux paints.",
      "Interior wall and ceiling: 2 coats of wall putty + 1 coat of primer + 2 coats of Apcolite Premium Emulsion. Brand: Asian/Dulux paints.",
      "MS Wood painting: 1 Coat primer + 2 coats of Enamel paint.",
    ],
    miscellaneous: [
      "SS Staircase Railing worth Rs.500/- per sqft will be provided.",
      "MS Grills using 10mm square rods with 125mm spacing worth Rs.150/- per sqft is provided.",
      "Cpvc Pipes: Ashirwad/Supreme/ Astral.",
      "Overhead tank of 2,000lts capacity with MS Structure at 6 Feet height will be provided.",
    ],
  },
  {
    package_name: "Platinum",
    price_per_sqft: 2550,
    type: "luxury",
    style: "platinum",
    design_drawing: [
      "2D Floor Plans.",
      "Working Drawings.",
      "3D Elevation designs.",
      "Structural Drawings.",
      "Electrical, Plumbing and Furniture drawings.",
      "All GFC drawings will only be available in PDF formats.",
    ],
    government_liaisoning: [
      "Bestrue assist with Different Government Agencies, Obtain Permissions, Licenses & Sanction Fees.",
      "Construction Plan Sanction.",
      "Temporary Electricity Connection.",
      "Permanent Electrical Connection.",
      "Water Connection.",
      "Sewage Connection.",
    ],
    structure: [
      "Steel: JSW Neo or Equivalent brand (Grade Fe500/550 Tmt as recommended by a structural engineer).",
      "Cement: ISI Standard 43 & 53 Grades of Birla/Ultratech/ or Equivalent brand.",
      "M-Sand will be used for Block work and P-Sand will be used for plastering.",
      "Brick: Solid concrete APCO blocks of 6″ & 4″.",
      "Concrete: M20/M25 grade as recommended by the structural engineer.",
      "Aggregates: 20mm & 40mm.",
      "UG Sump of 10,000lts capacity built with solid blocks of 6” thickness & plastered with waterproofing chemical.",
      "Ceiling Height: 11 feet FFL to FFL.",
      "Terrace & Bathrooms will be waterproofed by Brush bond and screed concrete with the required finish.",
      "Waterproofing chemical: Dr. Fixit Or Fosroc.",
    ],
    floor_wall: [
      "Living, & Dining Vitrified flooring tiles up to Rs.140/- Per sqft.",
      "Kitchen and Bedroom Vitrified flooring tiles up to Rs.100/- per sqft.",
      "Staircase – Sadarahalli Granite up to Rs.120/- per sqft.",
      "Balconies & Sitout Areas – Tiles up to Rs.90/- per sqft.",
      "Bathroom/Toilet Antiskid Flooring up to Rs.80/- Per sqft.",
      "Parking Floor up to Rs.80/- per sqft.",
      "Bathroom Wall Tiling Height up to 7 Feet Height.",
      "Kitchen countertop : Granite – Rs.210/- per sqft.",
      "Kitchen Dadoing up to 2 Feet with ceramic wall tiles Rs.80/- Per sqft.",
      "Puja Room- Granite slab- Rs.180/- per sqft.",
    ],
    doors_windows: [
      "Main Door 7ftX4ft: Burma Teak wood frame & shutter Per Door Including Fittings upto Rs Rs.40,000/-.",
      "Main Door Teak Frame of 6″X 4″ thickness and main door shutter of 32mm thickness will be provided.",
      "Internal Doors 7ftX3ft: WPC Or Sal Frame of 5″X3″ with Laminate/Skin Door shutter.",
      "Bathroom Doors 7ftX2.5ft will be WPC doors.",
      "Door & Door Frame cost – inclusive of planning, rebate, transportation, etc.",
      "Windows: UPVC window/Sal wood frames(5″x 3″)and Honne Shutters(1.5″ thickness) with clear glass 5mm and 10mm grill rods Rs.1000/- sqft.",
      "Eco processing.",
      "Pocket windows, Sliding doors, etc.. all included.",
    ],
    bathroom_kitchen: [
      "Stainless Steel Kitchen sink & accessories Granite/Quartz Rs.18,000/- per kitchen including bendable taps.",
      "Sink Faucet & Towel ring up to Rs.4,500/-.",
      "CP & Sanitary fixture up to Rs.45,000/- per bathroom. Brand: Hindware, Jaquar & Kohler.",
      "Bathroom Accessories: Ewc, Health faucet, wash basin, diverter, overhead shower, bottle trap, gratings etc.",
    ],
    electrical: [
      "Switches and plates: Anchor(Roma).",
      "Wires: Fire Proof Vguard/Anchor/Polycab.",
      "DB and MCB’s of Schneider/Legrand make are included.",
      "Wiring till the main panel board shall be done.",
      "Electric Car or Two wheeler charging points will be provided in the parking.",
      "Provision for Home automation includes like, touch switches, a smart plug, and smart wi-fi switches.",
      "Geyser points – For all bathrooms.",
    ],
    painting: [
      "Exterior painting: 1 Coat Primer + 2 Coats Of Apex Ultima Exterior Emulsion. Brand: Asian/Dulux paints.",
      "Interior wall and ceiling: 2 coats of wall putty + 1 coat of primer + 2 coats of Royal Emulsion. Brand: Asian/Dulux paints.",
      "MS and Wood Painting: 1 Coat primer+ 2 coats of Enamel paint.",
    ],
    miscellaneous: [
      "SS Staircase Railing worth Rs.600/- per sqft will be provided.",
      "MS Grills using 10mm square rods with 125mm spacing worth Rs.150/- per sqft are provided.",
      "Cpvc Pipes: Ashirwad/Supreme/ Astral.",
      "Overhead tank of 2,000lts capacity with MS Structure at 6 Feet height will be provided.",
    ],
  },
  {
    package_name: "Commercial",
    price_per_sqft: 1600,
    type: "regular",
    style: "commercial",
    design_drawing: [
      "2D Floor Plans.",
      "Working Drawings.",
      "3D Elevation designs.",
      "Structural Drawings.",
      "All GFC drawings will only be available in PDF formats.",
    ],
    government_liaisoning: [
      "Bestrue assist with Different Government Agencies, Obtain Permissions, Licenses & Sanction Fees.",
      "Construction Plan Sanction.",
      "Temporary Electricity Connection.",
      "Permanent Electrical Connection.",
      "Water Connection.",
      "Sewage Connection.",
    ],
    structure: [
      "Steel: RD/Gopala Equivalent brand (Grade Fe500/550 Tmt as recomended by structural engineer).",
      "Cement: ISI Standard 43 & 53 Grades of Priya/Coromandel/Penna or Equivalent brand.",
      "M-Sand will used for Block work and P-Sand will be used for Plastering.",
      "Brick: Solid concrete blocks of 6″ & 4″.",
      "Concrete: M20/M25 grade as recommended by the structural engineer.",
      "Aggregates: 20mm & 40mm.",
      "UG Sump of 5,000lts capacity built with solid blocks of 6” thickness & plastered with waterproofing chemical.",
      "Ceiling Height: 11 feet FFL to FFL.",
      "Terrace & Bathrooms will be waterproofed by Brush bond and screed concrete with the required finish.",
      "Waterproofing chemical: Dr. Fixit Or Fosroc.",
    ],
    floor_wall: [
      "Main Area Vitrified flooring tiles up to Rs.60/- Per sqft.",
      "Balcony & Open Areas Vitrified flooring tiles up to Rs.50/- per sqft.",
      "Staircase – Sadarahalli Granite up to Rs.70/- per sqft.",
      "Bathroom/Toilet Antiskid Flooring up to Rs.50/- per sqft.",
      "Parking Floor up to Rs.50/- per sqft.",
      "Bathroom Wall Tiling Height up to 7 Feet Height.",
    ],
    doors_windows: [
      "Aluminium windows – 5mm clear glass shutters and mess shutters with MS Grills (3 tracks and 1 mesh) Rs.320/- per sqft.",
    ],
    bathroom_kitchen: [
      "CP & Sanitary fixture upto Rs.16,000/- per bathroom Brand: Hindware/Cera.",
      "Bathroom Accessories: Ewc, Health Faucet, wash basin, bottle trap, gratings, etc.",
      "Provision for a tap will be given in the utility space.",
    ],
    electrical: [
      "Switches and plates: Anchor(Roma).",
      "Wires: Fire Proof V-Guard/Polycab/Anchor.",
      "Internal DB and MCBs of Anchor make are included.",
      "Wiring till the main panel board shall be done.",
      "Electric Car or Two wheeler charging point will be provided in the parking.",
    ],
    painting: [
      "Exterior painting: 1 Coat Primer + 2 Coats Of Ace Exterior emulsion. Brand: Asian/Dulux paints.",
      "Interior wall and ceiling: 2 coats of wall putty + 1 coat of primer + 2 coats of Tractor Emulsion. Brand: Asian/Dulux paints.",
      "MS Work painting: Anticorrosion primer + 2 coats of enamel paint.",
    ],
    miscellaneous: [
      "MS Staircase Railing worth Rs.120/- per sqft will be provided.",
      "MS Grills of basic design using 10mm square rods with 125mm spacing worth Rs.120/- per sqft is provided.",
      "Cpvc Pipes: Ashirwad/Supreme/ Astral.",
      "Overhead tank of 1,000lts capacity with MS Structure at 6 Feet height will be provided.",
    ],
  },
];

const Packages = () => {
  // Tabs Data
  const tabs = ["regular", "luxury"];

  // State for active tab and selected package
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [scheme, setScheme] = useState(
    packagesData.find((item) => item.package_name === "Silver")
  );

  // Change Package Handler
  const handleChangePackage = (packageName) => {
    const foundPackage = packagesData.find(
      (item) => item.package_name === packageName
    );
    setScheme(foundPackage);
  };

  return (
    <>
      {/* Logo */}
      <Link to="/" className="w-56 p-2 fixed top-0 left-0">
        <img src={Logo} alt="Logo" />
      </Link>
      <Link
        to="/contact-us"
        className="bg-primary fixed top-2 right-2 p-lg rounded text-lg"
      >
        Contact Us
      </Link>
      <div className="text-secondary-text">
        {/* Header */}
        <h1 className="text-primary text-6xl font-bold text-center p-2">
          Packages
        </h1>

        {/* Tabs */}
        <div className="relative flex items-center justify-between w-96 my-8 mx-auto bg-gray-200 rounded-lg px-2 py-1">
          {/* Transitioning Background */}
          <div
            className={`absolute top-0 left-0 w-1/2 h-full bg-primary rounded-lg transition-transform duration-300`}
            style={{
              transform:
                activeTab === tabs[0] ? "translateX(0)" : "translateX(100%)",
            }}
          ></div>

          {/* Dynamic Buttons */}
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`relative z-10 w-1/2 py-2 px-4 font-semibold rounded-full ${
                activeTab === tab ? "text-white" : "text-gray-700"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} Packages
            </button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="px-8 py-4 flex w-full items-center justify-center mx-auto my-8 gap-8 sticky top-0 bg-white z-20">
          {packagesData
            .filter((pkg) => pkg.type === activeTab) // Filter based on active tab
            .map((pkg) => (
              <div
                key={pkg.package_name}
                onClick={() => handleChangePackage(pkg.package_name)}
                className={`${pkg.style}-bg min-w-52 p-lg rounded-lg text-center h-28 flex flex-col items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] transition`}
              >
                <h2 className={`text-5xl font-bold ${pkg.style}-text-glow`}>
                  {pkg.package_name}
                </h2>
                <p className={`text-xl font-semibold ${pkg.style}-text-glow`}>
                  Rs.{pkg.price_per_sqft}/*-Sqft
                </p>
              </div>
            ))}
        </div>

        {/* Selected Package Details */}
        <div className="px-8">
          <PackageCard scheme={scheme} />
        </div>
      </div>
    </>
  );
};

export default Packages;
