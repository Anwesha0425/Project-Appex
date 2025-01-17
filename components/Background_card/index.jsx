import React from "react";

const DynamicCard = ({ title, description, imageUrl }) => {
  return (
    <div
      className="bg-no-repeat bg-cover rounded-lg overflow-hidden"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="bg-black/40 p-6 w-full h-full">
        <h3 className="text-3xl font-manrope font-semibold text-white mb-6">{title}</h3>
        <p className="text-base leading-6 text-white font-normal mb-6">{description}</p>
      </div>
    </div>
  );
};

export default DynamicCard;
