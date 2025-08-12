import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function AttractionCard({ attract }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/attraction/${attract._id}`, { state: { attract } });
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer w-full"
    >
      <img
        src={attract.thumbnailImage}
        alt={attract.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-medium text-gray-800 mb-3">
          {attract.title}
        </h2>

        <div className="flex flex-row items-center justify-between">
          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="flex flex-row items-center px-4 py-2 border border-blue-400 text-blue-600 rounded-full hover:bg-blue-50 transition"
          >
            View details <FiArrowUpRight className="ml-2" />
          </button>

          <div className="flex flex-row items-center gap-1 text-yellow-500">
            <span className="text-gray-600 ml-2">Ratings</span>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttractionCard;
