import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RiArrowRightWideFill, RiArrowLeftWideFill } from "react-icons/ri";
import Construction1 from "../assets/Construction1.jpg";
import Construction2 from "../assets/Construction2.jpg";
import Construction3 from "../assets/Construction3.jpg";
import Construction4 from "../assets/Construction4.jpg";
import Construction5 from "../assets/Construction5.jpg";
import Construction6 from "../assets/Construction6.jpg";
import Construction7 from "../assets/Construction7.jpg";
import Construction8 from "../assets/Construction8.jpg";

const projectData = [
  {
    image: Construction1,
    size: "G+2 2077",
    package: "Premium Package",
    time: "Completed 1 Month in Advance",
  },
  {
    image: Construction2,
    size: "G+2 2077",
    package: "Premium Package",
    time: "Completed 1 Month in Advance",
  },
  {
    image: Construction3,
    size: "G+2 2077",
    package: "Premium Package",
    time: "Completed 1 Month in Advance",
  },
  {
    image: Construction4,
    size: "G+2 2077",
    package: "Premium Package",
    time: "Completed 1 Month in Advance",
  },
  {
    image: Construction5,
    size: "G+2 2077",
    package: "Premium Package",
    time: "Completed 1 Month in Advance",
  },
  {
    image: Construction6,
    size: "G+2 2077",
    package: "Premium Package",
    time: "Completed 1 Month in Advance",
  },
  {
    image: Construction7,
    size: "G+2 2077",
    package: "Premium Package",
    time: "Completed 1 Month in Advance",
  },
  {
    image: Construction8,
    size: "G+2 2077",
    package: "Premium Package",
    time: "Completed 1 Month in Advance",
  },
];

function Gallery() {
  const [activeProject, setActiveProject] = useState(-1);
  const [isDataVisible, setIsDataVisible] = useState(false);
  console.log(isDataVisible);

  useEffect(() => {
    if (activeProject < 0) {
      setIsDataVisible(false);
    } else
      setTimeout(() => {
        setIsDataVisible(true);
      }, 300);
  }, [activeProject]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActiveProject(-1);
      if (event.key === "ArrowLeft")
        setActiveProject((prev) => Math.max(prev - 1, 0));
      if (event.key === "ArrowRight")
        setActiveProject((prev) => Math.min(prev + 1, projectData.length - 1));
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="mx-10 py-12 relative">
      <div className="grid grid-cols-4 gap-10">
        {projectData.map((project, i) => (
          <div
            key={i}
            className="h-[300px] relative group overflow-hidden cursor-pointer"
            onClick={() => setActiveProject(i)}
          >
            <img
              src={project.image}
              alt=""
              className="w-full h-full object-cover rounded"
            />
            <div className="absolute left-0 w-full h-full bg-gradient-to-b from-transparent to-black/70 top-full group-hover:top-0 transition-all duration-200"></div>
            <div className="absolute group-hover:bottom-0 -bottom-10 left-2 text-white font-medium text-xl opacity-0 group-hover:opacity-100 transition-all duration-200">
              <p>{project.size}</p>
              <p>{project.package}</p>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`fixed top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 ${
          activeProject >= 0 ? "w-screen h-screen" : "w-0 h-0"
        } transition-all duration-500 bg-black/90 z-[100] flex text-white`}
      >
        {
          <>
            <div
              className={`w-[60%] flex items-center justify-center ${
                isDataVisible ? "opacity-100" : "opacity-0"
              } transition-all duration-500`}
            >
              <img
                src={activeProject >= 0 && projectData[activeProject].image}
                alt=""
                className="max-w-[90%] max-h-[90vh] object-contain"
              />
            </div>
            <div
              className={`flex flex-col gap-4 justify-center text-5xl font-medium ${
                isDataVisible ? "opacity-100" : "opacity-0"
              } transition-all duration-500`}
            >
              <p className="">
                {activeProject >= 0 && projectData[activeProject].size}
              </p>
              <p>{activeProject >= 0 && projectData[activeProject].package}</p>
            </div>
            <div
              onClick={() => setActiveProject((prev) => Math.max(prev - 1, 0))}
              className={`fixed top-1/2 -translate-y-1/2 left-10 text-6xl cursor-pointer  ${
                activeProject > 0 && isDataVisible ? "opacity-100" : "opacity-0"
              } transition-all duration-500`}
            >
              <RiArrowLeftWideFill />
            </div>
            <div
              onClick={() =>
                setActiveProject((prev) =>
                  Math.min(prev + 1, projectData.length - 1)
                )
              }
              className={`fixed top-1/2 -translate-y-1/2 right-10 text-6xl cursor-pointer  ${
                activeProject < projectData.length - 1 && isDataVisible
                  ? "opacity-100"
                  : "opacity-0"
              } transition-all duration-500`}
            >
              <RiArrowRightWideFill />
            </div>
          </>
        }
        <div
          onClick={() => setActiveProject(-1)}
          className={`fixed top-10 right-10 text-4xl cursor-pointer ${
            activeProject >= 0 ? "opacity-100" : "opacity-0"
          }`}
        >
          <IoMdClose />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
