import React from "react";

const DynamicCard = ({ title, description, imageUrl }) => {
  return (
    <div className="relative rounded-lg mb-6 overflow-hidden bg-cover bg-center bg-opacity-70" style={{ backgroundImage: `url(${imageUrl})` }}>
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative p-6">
        <h3 className="text-3xl font-manrope font-semibold text-white mb-6">{title}</h3>
        <p className="text-base leading-6 text-white font-normal mb-6">{description}</p>
      </div>
    </div>
  );
};

export default DynamicCard;
