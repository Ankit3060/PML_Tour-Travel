import React from "react";
import { FaStar, FaClock, FaCar, FaGlobe } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { FaStarHalfAlt } from "react-icons/fa";

const Card = ({ pkg }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/packages/${pkg._id}`, { state: { pkg } });
  };

  return (
    <div
      className="bg-[#f4f4f6] rounded-md hover:scale-105 cursor-pointer transition-transform duration-200 w-full"
      onClick={handleClick}
    >
      <img
        src={pkg.thumbnailImage}
        alt={pkg.categoryName}
        className="h-70 w-full object-cover rounded-t-md"
      />

      <div className="p-4">
        <h2 className="font-semibold text-xl mb-2">{pkg.title}</h2>

        <div className="flex items-center gap-1 text-yellow-500 mb-2">
          <span className="text-gray-600 ml-2">Ratings</span>
          <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
        </div>

        <div className="flex flex-wrap items-center gap-3 text-base text-gray-600 mb-4 mt-3">
          <div className="flex items-center gap-1">
            <FaClock /> <span>3 Hrs</span>
          </div>
          <div className="flex items-center gap-1">
            <FaCar /> <span>Pickup offered</span>
          </div>
          <div className="flex items-center gap-1">
            <FaGlobe /> <span>Eng</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-lg">
          <span>Price per person: </span>
          <span className="text-green-600 font-medium ml-2">
            {pkg.price
              .filter((item) => item.travelerType === "adult")
              .map((item, index) => (
                <span key={index}>AED {item.price}</span>
              ))}
          </span>
          <MdArrowOutward className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Card;
