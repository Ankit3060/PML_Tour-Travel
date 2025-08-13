import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoLocationOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function ShoppingStops() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://admin.magicalvacation.com/api/v1/stops"
        );
        const result = await res.json();
        setData(result.data || []);
      } catch (error) {
        console.log("Error fetching stops:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
  };

  const topThreeStops = data.slice(startIndex, startIndex + 3);

  const handleClick = (item) => {
    navigate(`/shoppingdetails/${item._id}`, { state: { stop: item } });
  };

  if (loading) {
    return (
      <div className="w-full h-[50vh] flex items-center justify-center">
        <HashLoader color="#2990d0" size={80} />
      </div>
    );
  }

  const CustomArrow = ({ onClick, direction }) => (
    <button
      onClick={onClick}
      className={`w-8 h-8 flex cursor-pointer items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 absolute top-2 z-10 mr-[1rem] ${
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

  return (
    <div className="container">
      <div className="hidden  mt-[-1rem] sm:block md:gap-[10rem] md:ml-[-3rem] xl:ml-[-3rem] xl:mr-[-3.5rem]">
        <Carousel
          responsive={responsive}
          infinite
          arrows
          itemClass="px-3"
          customLeftArrow={<CustomArrow direction="left" />}
          customRightArrow={<CustomArrow direction="right" />}
          className="h-[520px]"
        >
          {topThreeStops.map((item, index) => (
            <StopCard key={index} item={item} handleClick={handleClick} />
          ))}
        </Carousel>
      </div>

      <div className="block sm:hidden space-y-6 mt-4">
        {topThreeStops.map((item, index) => (
          <StopCard key={index} item={item} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

const StopCard = ({ item, handleClick }) => (
  <div
    className="overflow-hidden xl:ml-3 sm:ml-7 w-full max-w-[400px] h-[26rem] bg-white shadow-md cursor-pointer hover:scale-105 transition-all duration-200 mx-auto"
    onClick={() => handleClick(item)}
  >
    <div className="relative">
      <img
        src={item.bannerImage}
        alt={item.name}
        className="w-full h-80 object-cover"
      />
      <div className="absolute bottom-4 left-4 bg-white px-3 py-2 flex items-center gap-1 text-sm">
        <IoLocationOutline className="text-gray-600" />
        <span className="text-gray-800">{item.location}</span>
      </div>
    </div>

    <div className="py-4 px-3 flex flex-col items-center justify-center">
      <h3 className="text-xl font-semibold uppercase tracking-wide text-center">
        {item.name}
      </h3>

      {item.logoImage && (
        <img
          src={item.logoImage}
          alt={`${item.name} logo`}
          className="mt-2 h-10 object-contain"
        />
      )}
    </div>
  </div>
);

export default ShoppingStops;
