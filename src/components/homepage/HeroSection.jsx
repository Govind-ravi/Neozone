import React, { useEffect, useRef, useState } from "react";
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
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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
  const swiperRef = useRef(null);
  const targetNumbers = {
    projects: 500,
    teamMembers: 214,
    experience: 20,
  };

  const [projects, setProjects] = useState(0);
  const [teamMembers, setTeamMembers] = useState(0);
  const [experience, setExperience] = useState(0);

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
    if (swiperRef.current) {
      setTimeout(() => {
        swiperRef.current.autoplay.start();
      }, 500); // Small delay ensures Swiper is fully initialized before autoplay starts
    }
  }, []);

  return (
    <div className="flex p-4 px-16 gap-4 items-center">
      <div className="w-[45%] flex flex-col gap-6">
        <h1 className="text3d text-6xl font-semibold text-primary">
          NEOZONE Building Technologies LLP
        </h1>
        <p className="p3d text-2xl font-semibold">
          Step into the home you’ve always dreamed of built to the highest
          standard of quality
        </p>
        <div className="grid grid-cols-3 gap-10 whitespace-nowrap">
          <div className="flex items-center gap-1">
            <IoHome className="inline text-4xl" />
            <div className="relative">
              <p className="text-3xl font-semibold">{projects}+</p>
              <div className="number-animation text-lg">Projects</div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <RiTeamLine className="inline text-4xl" />
            <div className="relative">
              <p className="text-3xl font-semibold">{teamMembers}+</p>
              <div className="number-animation text-lg">Team Members</div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <IoIosSchool className="inline text-4xl" />
            <div className="relative">
              <p className="text-3xl font-semibold">{experience}+</p>
              <div className="number-animation text-lg">Experience</div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <a
            href="/contact"
            className="bg-primary border-primary border-2 hover:scale-105 transition-all duration-200 text-default-text text-lg p-lg rounded font-semibold"
          >
            Enquire Now
          </a>
          <a
            href="/contact"
            className="hover:bg-primary border-primary border-2 hover:scale-105 transition-all duration-200  hover:text-default-text text-lg p-lg rounded font-semibold"
          >
            Estimate Your project
          </a>
        </div>
      </div>
      <div className="w-[55%] h-[550px] flex items-center relative overflow-hidden inner-shadow">
        {/* Custom Left Arrow */}
        <button
          className="absolute left-0 z-10 bg-black/40 text-white p-3 rounded-full shadow-lg hover:bg-black transition"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <IoIosArrowBack size={30} />
        </button>
        <Swiper
          className="my-slider"
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.3}
          spaceBetween={40}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {projectsData.map((data, i) => (
            <SwiperSlide key={i} className="my-auto">
              <div className="image-container bg-gray-500 h-[450px] rounded-xl">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Right Arrow */}
        <button
          className="absolute right-0 z-10 bg-black/40 text-white p-3 rounded-full shadow-lg hover:bg-black transition"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <IoIosArrowForward size={30} />
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
