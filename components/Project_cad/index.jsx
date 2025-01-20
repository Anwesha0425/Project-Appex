import React from "react";

function ProjectCard({ title, description, flowSteps, flowDescription, titleColor }) {
  return (
    <div className="bg-white hover:bg-[#8bcba1] bg-[#f8faf9] shadow-lg rounded-lg m-2 p-4 max-w-4xl w-full">
      <h1 className={`text-2xl font-bold text-center ${titleColor} mb-4`}>{title}</h1>
      <p className="text-gray-700 text-justify mb-4">{description}</p>
      {/* <h2 className="text-xl font-bold text-center text-gray-800 mb-4">Flow Diagram</h2> */}
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          {flowSteps.map((StepIcon, index) => (
            <React.Fragment key={index}>
              <StepIcon className={`text-3xl ${index === 0 ? "" : "mx-2"}`} />
              {index < flowSteps.length - 1 && (
                <div className="h-1 w-12 bg-gray-300 mx-2"></div>
              )}
            </React.Fragment>
          ))}
        </div>
        <p className="text-gray-600 text-center mt-4">{flowDescription}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
