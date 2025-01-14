import React from "react";
import { useSelector } from "react-redux";


const Projects14 = ({template}) => {
  const ownProjects = useSelector((state) => state.ownTemplate.projects);
  const projects1 = template ? template.projects : ownProjects;

  return (
    <div className="bg-[--website-14-color-6] dark:bg-gray-900 dark:text-white" id={projects1.sectionId}>
      <div className="container14">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto space-y-2">
          <h1 className="text-3xl font-bold lg:text-4xl text-black dark:text-white">{projects1.title}</h1>
          <p className="text-xs text-gray-400">{projects1.description}</p>
        </div>
        {/* Body section */}
        <div className="Pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
            {/* card section */}
            {projects1.projects.map((data, index) => (
              <div className="group" key={index}>
                <div className="relative">
                  <img src={data.imgUrl} alt="" className="h-[180px] w-[260px] object-cover rounded-md" />
                  {/* hover button */}
                  {/* <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
                    <button className={`bg-[--website-14-color-1] text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}>
                      {projects1.buttonText}
                    </button>
                  </div> */}
                </div>
                <div className="leading-7">
                  <h2 className="font-semibold text-black dark:text-white">{data.title}</h2>
                  <h2 className="font-bold text-black dark:text-white">{data.price}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects14;
