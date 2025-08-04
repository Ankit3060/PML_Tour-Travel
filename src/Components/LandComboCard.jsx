import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function LandComboCard({ attract }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/landcombos/${attract._id}`, { state: { attract } });  
    }

  return (
    <div 
       onClick={handleClick}
       className="bg-white shadow-md overflow-hidden w-[400px] ml-10 gap-3 hover:scale-110 transition-transform duration-300 cursor-pointer">
      <img
        src={attract.thumbnailImage}
        alt={attract.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-4">
        <h1 className="text-3xl font-light mb-3">
          {attract.title}
        </h1>
      </div>
    </div>
  );
}

export default LandComboCard;
