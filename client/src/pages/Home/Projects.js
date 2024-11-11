import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;
  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="flex py-10 gap-32 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#3c9d4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:overflow-hidden sm:w-full sm:overscroll-none sm:items-center">
          {projects.map((project, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-2xl px-5 ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#4ebd611b] py-2.5 sm:w-full"
                    : "text-white"
                }`}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-10 sm:flex-col">
          <img
            src={projects[selectedItemIndex].image}
            alt=""
            className="h-60 w-72"
          />
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-2xl">
              {projects[selectedItemIndex].title}
            </h1>
            <h1 className="text-white text-xl">
              {projects[selectedItemIndex].description}
            </h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
              quis sed totam dolor laboriosam, sequi alias sunt porro error
              eius, quaerat cumque recusandae quae soluta nobis molestiae
              laborum nihil. Eveniet?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
