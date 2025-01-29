import React from "react";
import Residential from "../../assets/ResidentialConstruction.jpg";

const projectsData = [
    {
        size: "G+3 2230 sqft",
        info: "Completed 1 Month In Advance",
        image: Residential
    },
    {
        size: "G+3 2230 sqft",
        info: "Completed 1 Month In Advance",
        image: Residential
    },
    {
        size: "G+3 2230 sqft",
        info: "Completed 1 Month In Advance",
        image: Residential
    },
    {
        size: "G+3 2230 sqft",
        info: "Completed 1 Month In Advance",
        image: Residential
    },
    {
        size: "G+3 2230 sqft",
        info: "Completed 1 Month In Advance",
        image: Residential
    },
    {
        size: "G+3 2230 sqft",
        info: "Completed 1 Month In Advance",
        image: Residential
    },
    {
        size: "G+3 2230 sqft",
        info: "Completed 1 Month In Advance",
        image: Residential
    },
    {
        size: "G+3 2230 sqft",
        info: "Completed 1 Month In Advance",
        image: Residential
    },
]

function ProjectSection() {
  return (
    <section className="mx-4 md:mx-8 lg:mx-10 my-16">
      <h1 className=" text-center text-primary text-6xl font-bold mb-6">Our Project Gallery</h1>
      <p className="text-center text-xl font-medium w-[70%] mx-auto">
        one of the fastest growing real estate companies in India today. Its
        primary business is development of residential, commercial and retail
        properties. In this market of unorganized sectors, we are professionally
        providing an in-house home construction service for clientele ranging
        from moderate to premium
      </p>
      <div className="grid grid-cols-4 gap-10 my-12">
        {projectsData.map((project, i)=>(
            <div key={i} className="p-4 border-2 rounded">
                <div className="mb-4">
                    <img src={project.image} alt="" className="w-full h-full object-cover rounded" />
                </div>
                <h3 className="text-2xl font-medium">{project.size}</h3>
                <p className="text-xl">{project.info}</p>
            </div>
        ))}
      </div>

    </section>
  );
}

export default ProjectSection;
