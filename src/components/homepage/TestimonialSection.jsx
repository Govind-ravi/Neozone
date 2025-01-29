import React from "react";
import User1 from "../../assets/User1.jpg";
import { FaStar } from "react-icons/fa";

const reviewsData = [
  {
    name: "Kiran",
    info: " You and your team have done an excellent Job. Considering the huge constrains put by the society on working conditions besides the space available to you, am very Happy and satisfied with the work",
    stars: 5,
    pic: User1,
  },
  {
    name: "Kiran",
    info: " You and your team have done an excellent Job. Considering the huge constrains put by the society on working conditions besides the space available to you, am very Happy and satisfied with the work",
    stars: 5,
    pic: User1,
  },
  {
    name: "Kiran",
    info: " You and your team have done an excellent Job. Considering the huge constrains put by the society on working conditions besides the space available to you, am very Happy and satisfied with the work",
    stars: 5,
    pic: User1,
  },
];

function TestimonialSection() {
  return (
    <section className="mx-4 md:mx-8 lg:mx-10 my-16">
      <h1 className=" text-center text-primary text-6xl font-bold mb-6">
        What our clients say
      </h1>
      <div className="grid grid-cols-3 gap-12 w-[80%] mx-auto">
        {reviewsData.map((review, i) => (
          <div
            key={i}
            className="bg-gray-100 rounded flex flex-col items-center px-2 py-8 gap-4"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <img src={review.pic} alt="" className="w-full h-full" />
            </div>
            <p className="text-xl font-medium">{review.name}</p>
            <p className="w-3/4 text-center font-medium">{review.info}</p>
            {/* Stars */}
            <div className="flex gap-1 text-primary">
              {Array(review.stars)
                .fill(null)
                .map((_, i) => (
                  <span>
                    <FaStar />
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection;
