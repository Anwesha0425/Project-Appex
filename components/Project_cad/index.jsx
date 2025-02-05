import React from "react";

function ProjectCard({ title, description, flowSteps, flowDescription, titleColor }) {
  return (
    <div className={`bg-white bg-[#d8efe0] shadow-lg ${titleColor} rounded-lg m-2 p-4 max-w-4xl w-full`}>
      <h1 className="text-2xl font-bold text-center mb-4">{title}</h1>
      <p className="text-justify mb-4">{description}</p>
      {/* <h2 className="text-xl font-bold text-center text-gray-800 mb-4">Flow Diagram</h2> */}
      <div className="flex flex-col items-center">
        <p className="text-center mt-4">{flowDescription}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
