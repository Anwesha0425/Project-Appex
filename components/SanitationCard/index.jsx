import React from "react";

const InfoCard = ({ icon, title, description }) => {
  return (
    <div className="relative p-6 border rounded-lg shadow-lg bg-white group hover:scale-105 hover:shadow-xl hover:bg-[#a1d4ae] transition-all duration-300">
      <div className="text-teal-500 text-5xl mb-4 text-center">{icon}</div>
      <h2 className="text-xl font-serif text-center font-bold mb-4">{title}</h2>
      <p className="text-gray-700 text-center">{description}</p>
    </div>
  );
};

export default InfoCard;
