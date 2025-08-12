import React from "react";
import { useNavigate } from "react-router-dom";

function LandComboCard({ attract }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/landcombos/${attract._id}`, { state: { attract } });
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer rounded-lg"
    >
      <img
        src={attract.thumbnailImage}
        alt={attract.title}
        className="w-full h-80 object-cover"
      />
      <div className="p-4">
        <h2 className="text-2xl text-gray-800">{attract.title}</h2>
      </div>
    </div>
  );
}

export default LandComboCard;
