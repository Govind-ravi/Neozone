import React, { useEffect, useRef, useState } from "react";
import Construction1 from "../assets/Construction1.jpg";
import Construction2 from "../assets/Construction2.jpg";
import Construction3 from "../assets/Construction3.jpg";
import Construction4 from "../assets/Construction4.jpg";
import Construction5 from "../assets/Construction5.jpg";
import Construction6 from "../assets/Construction6.jpg";
import Construction7 from "../assets/Construction7.jpg";
import Construction8 from "../assets/Construction8.jpg";
import { useNavigate } from "react-router-dom";
import Navbar from "./homepage/Navbar";

const images = [
  [
    Construction3,
    Construction6,
    Construction1,
    Construction7,
    Construction5,
    Construction2,
  ],
  [
    Construction4,
    Construction2,
    Construction7,
    Construction8,
    Construction1,
    Construction5,
    Construction3,
  ],
  [
    Construction8,
    Construction5,
    Construction6,
    Construction3,
    Construction4,
    Construction1,
  ],
  [
    Construction7,
    Construction1,
    Construction4,
    Construction8,
    Construction2,
    Construction6,
    Construction5,
  ],
];

function Gallery() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = (event) => {
    // Get the scroll position of the parent container
    setScrollPosition(event.target.scrollTop);
  };
  const navigate = useNavigate()
  const galleryRef = useRef(null);

  const child1Speed = 0.2;
  const child2Speed = 0.4;

  const child1Transform = `translateY(${scrollPosition * child1Speed}px)`;
  const child2Transform = `translateY(${scrollPosition * child2Speed}px)`;


  useEffect(() => {
    // Function to handle the auto-scroll
    const interval = setInterval(() => {
      if (galleryRef.current) {
        setScrollPosition((prevPosition) => {
          const newPosition = prevPosition + 1; // Scroll speed control
          galleryRef.current.scrollTop = newPosition; // Apply scroll position
          return newPosition;
        });
      }
    }, 16); // 16ms for 60fps smoothness

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="text-secondary-text mt-28">
        <Navbar/>
      <div ref={galleryRef}
        class="grid grid-cols-2 md:grid-cols-4 gap-8 max-h-screen overflow-y-auto"
        onScroll={handleScroll}
      >
        {images.map((imagesSet, i) => (
          <div
            key={i}
            className={`flex h-fit flex-col gap-8 `}
            style={
              i % 2 === 0
                ? {
                    transform: child2Transform,
                    transition: "transform 0.1s ease-out",
                  }
                : {
                    transform: child1Transform,
                    transition: "transform 0.1s ease-out",
                  }
            }
          >
            {imagesSet.map((image, j) => (
              <div key={j} className={`w-full `}>
                <img
                  className={`${
                    i % 2 !== 0 ? "h-[500px]" : "h-[465px]"
                  } w-full object-cover`}
                  src={image}
                  alt=""
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
