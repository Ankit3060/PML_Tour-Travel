import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaStar, FaClock, FaCar, FaGlobe } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const TopPackages = ({ packages, itemsToShow }) => {
  const navigate = useNavigate();

  const responsive = {
    extraLarge: { breakpoint: { max: 3000, min: 1324 }, items: itemsToShow},
    large: { breakpoint: { max: 1324, min: 1005 }, items: itemsToShow },
    medium: { breakpoint: { max: 1005, min: 700 }, items: 2 },
    small: { breakpoint: { max: 700, min: 0 }, items: 1 },
  };

  const handleClick = (pkg) => {
    navigate(`/packages/${pkg._id}`, { state: { pkg } });
  };

    const CustomArrow = ({ onClick, direction }) => {
      return (
        <button
          onClick={onClick}
          className={`w-8 h-8 flex cursor-pointer items-center justify-center bg-white  rounded-full shadow-md hover:bg-gray-100 absolute top-2 mr-4 ${
            direction === "right" ? "right-0" : "right-10"
          }`}
        >
          {direction === "right" ? (
            <IoIosArrowForward size={18} />
          ) : (
            <IoIosArrowBack size={18} />
          )}
        </button>
      );
    };
  return (
    <div className="container py-10 ml-4">
      <Carousel
        responsive={responsive}
        infinite={true}
        arrows={true}
        containerClass="carousel-container"
        itemClass="carousel-item"
        customLeftArrow={<CustomArrow direction="left" />}
        customRightArrow={<CustomArrow direction="right" />}
        className="h-[520px]"
      >
        {packages.map((pkg, index) => (
          <div key={index} className="px-3">
            <div
              className="w-full max-w-[350px] h-[26rem] bg-[#f4f4f6] rounded-md hover:scale-105 cursor-pointer duration-200 mx-auto"
              onClick={() => handleClick(pkg)}
            >
              <img
                src={pkg.thumbnailImage}
                alt={pkg.categoryName}
                className="h-52 w-full object-cover rounded-t-md"
              />

              <div className="p-4">
                <h2 className="font-semibold text-lg mb-2">{pkg.title}</h2>

                <div className="flex items-center gap-1 text-yellow-500 mb-2 ml-[-8px]">
                  <span className="text-gray-600 ml-2">Ratings</span>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>

                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-2 mt-3">
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

                <div className="text-base flex items-center justify-between mt-3">
                  <div>
                    <span>Price: </span>
                    <span className="text-green-600 font-medium ml-1">
                      {pkg.price.find((item) => item.travelerType === "adult")
                        ?.price &&
                        `AED ${
                          pkg.price.find((item) => item.travelerType === "adult")
                            .price
                        }`}
                    </span>
                  </div>
                  <MdArrowOutward className="text-xl" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TopPackages;