import React, { useState, useEffect, useRef } from "react";
import { GiFamilyHouse } from "react-icons/gi";
import { RiTeamLine } from "react-icons/ri";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FaThumbsUp } from "react-icons/fa";

const statisticsData = [
  { name: "Project Success", number: 510, icon: <GiFamilyHouse /> },
  { name: "Team Members", number: 214, icon: <RiTeamLine /> },
  { name: "Service Providing", number: 56, icon: <BsFillBuildingsFill /> },
  { name: "Happy Customers", number: 375, icon: <FaThumbsUp /> },
];

const animationDuration = 3000; // 2 seconds

function StatisticsSection() {
  const [counts, setCounts] = useState(statisticsData.map(() => 0));
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          statisticsData.forEach((stat, index) => {
            let step = Math.max(1, Math.ceil(stat.number / (animationDuration / 20))); // Adjust step size dynamically
            let currentCount = 0;
            const interval = setInterval(() => {
              currentCount += step;
              if (currentCount >= stat.number) {
                currentCount = stat.number;
                clearInterval(interval);
              }
              setCounts((prev) => {
                const newCounts = [...prev];
                newCounts[index] = currentCount;
                return newCounts;
              });
            }, 20); // Runs every 20ms for smooth animation
          });
        }
      },
      { threshold: 0.6 } // Start animation when 50% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="mx-4 md:mx-8 lg:mx-10 my-16 py-16">
      <div className="w-[90%] mx-auto grid grid-cols-4 gap-4">
        {statisticsData.map((stat, i) => (
          <div key={i} className="flex flex-col gap-10 items-center">
            <div className="text-7xl rounded-full border-4 p-10">{stat.icon}</div>
            <div className="text-center space-y-2">
              <p className="text-4xl font-semibold">{counts[i]}</p>
              <p className="text-2xl font-medium">{stat.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatisticsSection;
