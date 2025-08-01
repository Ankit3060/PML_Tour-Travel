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
      className="w-[400px] h-[29rem] bg-[#f4f4f6] rounded-md hover:scale-105
                    cursor-pointer duration-200 gap-3 ml-0"
      onClick={handleClick}
    >
      <img
        src={pkg.thumbnailImage}
        alt={pkg.categoryName}
        className="h-70 w-full object-cover"
      />
      <div className="p-4">
        <h2 className="font-semibold text-xl mb-2">{pkg.title}</h2>
        <div className="flex items-center gap-1 text-yellow-500 mb-2 ml-[-8px]">
          <span className="text-gray-600 ml-2">Ratings</span>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>

        <div className="flex flex-wrap items-center gap-3 text-base text-gray-600 mb-2 mt-5">
          <div className="flex items-center gap-1">
            <FaClock />
            <span>3 Hrs</span>
          </div>
          <div className="flex items-center gap-1">
            <FaCar />
            <span>Pickup offered</span>
          </div>
          <div className="flex items-center gap-1">
            <FaGlobe />
            <span>Eng</span>
          </div>
        </div>

        <div className="text-lg flex ">
          <span>Price per person: </span>
          <span className="text-green-600 font-medium  ml-1">
            {pkg.price
              .filter((item) => item.travelerType === "adult")
              .map((item, index) => {
                return <div key={index}>AED {item.price}</div>;
              })}
          </span>

          <div className="flexjustify-between ml-[7rem]">
            <MdArrowOutward className="text-2xl " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
