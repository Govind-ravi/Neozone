import React, { useEffect, useRef, useState } from "react";
import Step1 from "../../assets/Step1.png";
import Step2 from "../../assets/Step2.png";
import Step3 from "../../assets/Step3.png";
import Step4 from "../../assets/Step4.png";
import Step5 from "../../assets/Step5.png";
import Step6 from "../../assets/Step6.png";

const steps = [
  {
    name: "Raise a Request",
    image: Step1,
    info: "Raise a service request or call us at 7505205205. Our technical expert will get in touch with you.",
  },
  {
    name: "Meet our Expert",
    image: Step2,
    info: "Our experts visit you to take all the requirements and submit exhaustive specifications.",
  },
  {
    name: "Book with us",
    image: Step3,
    info: "Good to go. You pay 5% of the estimated project cost as Booking Amount.",
  },
  {
    name: "Receive Plans",
    image: Step4,
    info: "Our Professional will provide exhaustive drawings and designs till the customer is fully satisfied. Designs include floor plans, 3D elevations, electrical, plumbing and structural designs.",
  },
  {
    name: "Track & Transact",
    image: Step5,
    info: "To ensure absolute trust, Brick&Bolt provides an escrow model where you transfer the amount for stage of the project. You can track the project through our customer application.",
  },
  {
    name: "Settle in",
    image: Step6,
    info: "We make sure you are well settled in your new home. Our journey together doesn't end here. We provide 5 years of warranty.",
  },
];

function StepsSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoMove, setIsAutoMove] = useState(true);
  const sectionRef = useRef(null);

  const handleClickStep = (num) => {
    setIsAutoMove(false);
    setActiveStep(num);
    setTimeout(() => {
      setIsAutoMove(true);
    }, 3000);
  };

  useEffect(() => {
    if (!isAutoMove) return;
    const autoUpdateStep = setInterval(() => {
      setActiveStep((prev) => (prev >= steps.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(autoUpdateStep);
  }, [isAutoMove, activeStep]);

  // Auto move steps only when section is in view
  useEffect(() => {
    let observer = new IntersectionObserver(
      ([entry]) => {
        setIsAutoMove(entry.isIntersecting); // 👈 Set auto move only if in view
      },
      { threshold: 0.5 } // 👈 Trigger when 50% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-primary/30 mx-4 my-16 rounded-lg py-16"
    >
      <h1 className="text-center text-primary text-5xl font-bold mb-2">
        How it works
      </h1>
      <p className="text-center text-xl font-medium w-[70%] mx-auto">
        our house construction Steps are Simple and easy to understand:
        <br />
        plan – build – track – settel in.
      </p>

      {/* Numbered Tab */}
      <div className="relative flex items-center justify-between my-8 w-[70%] mx-auto">
        {/* Connecting Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2">
          <div className="relative w-full h-full">
            {/* Background Dashed Line */}
            <div className="absolute w-full h-full border-t-2 border-gray-400 border-dashed"></div>

            {/* Solid Line for Completed Steps */}
            <div
              className="absolute h-full border-t-2 border-primary transition-all duration-500"
              style={{
                width: `${(activeStep / (steps.length - 1)) * 100}%`,
              }}
            ></div>
          </div>
        </div>
        {steps.map((step, i) => (
          <div
            onClick={() => handleClickStep(i)}
            className={`w-12 h-12 text-xl font-medium cursor-pointer border-2 ${
              activeStep >= i ? "bg-primary text-white" : "bg-white text-black"
            } border-primary z-10 rounded-full flex items-center justify-center transition-all duration-500`}
          >
            {i + 1}
            <div className="text-black absolute top-full text-sm w-20 text-center">
              {step.name}
            </div>
          </div>
        ))}
      </div>

      {/* Active image */}
      <div className="w-[40%] mx-auto relative h-[350px]">
        {steps.map((step, i) => (
          <>
            <img
              key={i}
              src={step.image}
              alt=""
              className={`absolute top-0 left-0 w-full h-[300px] ${
                activeStep === i ? "opacity-100" : "opacity-0"
              } object-contain transition-opacity duration-1000`}
            />
            <p
              className={`absolute bottom-0 text-center ${
                activeStep === i ? "opacity-100" : "opacity-0"
              } object-contain transition-opacity duration-1000`}
            >
              {step.info}
            </p>
          </>
        ))}
      </div>
    </section>
  );
}

export default StepsSection;
