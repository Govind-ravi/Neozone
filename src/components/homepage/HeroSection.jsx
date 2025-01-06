import React, { useEffect, useState } from "react";
import { IoHome } from "react-icons/io5";
import { RiTeamLine } from "react-icons/ri";
import { IoIosSchool } from "react-icons/io";
import Bldg1 from "../../assets/Bldg1.png";
import Bldg3 from "../../assets/Bldg3.png";
import Bldg4 from "../../assets/Bldg4.png";
import Bldg5 from "../../assets/Bldg5.png";
import Bldg6 from "../../assets/Bldg6.png";
import Bldg7 from "../../assets/Bldg7.png";
import Bldg8 from "../../assets/Bldg8.png";
import Bldg9 from "../../assets/Bldg9.png";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FreeMode, Mousewheel, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projectsData = [
  {
    image: Bldg1,
  },
  {
    image: Bldg3,
  },
  {
    image: Bldg4,
  },
  {
    image: Bldg5,
  },
  {
    image: Bldg6,
  },
  {
    image: Bldg7,
  },
  {
    image: Bldg8,
  },
  {
    image: Bldg9,
  },
];

function HeroSection() {
  const targetNumbers = {
    projects: 500,
    teamMembers: 214,
    experience: 20,
  };

  const [projects, setProjects] = useState(0);
  const [teamMembers, setTeamMembers] = useState(0);
  const [experience, setExperience] = useState(0);
  const swiper = useSwiper();

  const animateNumber = (target, setState) => {
    let count = 0;
    let step;
    if (target < 100) step = 1;
    else if (target < 250) step = 10;
    else step = 25;
    const interval = setInterval(() => {
      count += step;
      if (count >= target) {
        setState(target);
        clearInterval(interval);
      } else {
        setState(Math.floor(count));
      }
    }, 50);
  };

  useEffect(() => {
    animateNumber(targetNumbers.projects, setProjects);
    animateNumber(targetNumbers.teamMembers, setTeamMembers);
    animateNumber(targetNumbers.experience, setExperience);
  }, []);

  useEffect(() => {
    if (swiper && swiper.autoplay) {
      swiper.autoplay.start();
    }
  }, [swiper]);

  return (
    <div className="flex p-4 px-16 gap-1 items-center">
      <div className="w-[50%] flex flex-col gap-6">
        <h1 className="text3d text-6xl font-semibold text-primary">
          NEOZONE Building Technologies LLP
        </h1>
        <p className="p3d text-2xl font-semibold">
          Step into the home you’ve always dreamed of built to the highest
          standard of quality
        </p>
        <div className="grid grid-cols-3 gap-10">
          <div className="flex items-center gap-1">
            <IoHome className="inline text-4xl" />
            <div className="relative overflow-hidden">
              <p className="text-3xl font-semibold">{projects}+</p>
              <div className="number-animation text-lg">Projects</div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <RiTeamLine className="inline text-4xl" />
            <div className="relative overflow-hidden">
              <p className="text-3xl font-semibold">{teamMembers}+</p>
              <div className="number-animation text-lg">Team Members</div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <IoIosSchool className="inline text-4xl" />
            <div className="relative overflow-hidden">
              <p className="text-3xl font-semibold">{experience}+</p>
              <div className="number-animation text-lg">Experience</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-[50%] h-[550px] flex items-center relative overflow-hidden"
        style={{
          background: "linear-gradient(to right, black, tranparent, black)",
        }}
      >
        <Swiper
          className="my-slider"
          modules={[FreeMode, Mousewheel, Scrollbar, Autoplay]}
          freeMode={true}
          mousewheel={true}
          scrollbar={{ draggable: false }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          spaceBetween={60}
          slidesPerView={1.5}
          centeredSlides={true}
          loop={true}
        >
          {projectsData.map((data, i) => (
            <SwiperSlide key={i} className="my-auto">
              <div className="bg-gray-500 h-[400px] rounded-xl">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute w-[80%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* <div className="mapouter relative text-right h-[560px] w-full mx-auto">
            <div className="gmap_canvas overflow-hidden bg-none h-[560px] w-full rounded-xl">
              <iframe
                width="100%"
                height="560"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=%23%20635%2C%203rd%20cross%20Mahalakshmi%20layout%20Bangalore-560086&t=k&z=13&ie=UTF8&iwloc=&output=embed"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
