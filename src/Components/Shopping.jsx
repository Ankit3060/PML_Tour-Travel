import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoLocationOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function Shopping() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://admin.magicalvacation.com/api/v1/stops");
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
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
  };

  const remainingStops = data.slice(3, 10);

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
      className={`w-8 h-8 flex cursor-pointer items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 absolute top-3 z-10 ${
        direction === "right" ? "right-0" : "right-10"
      }`}
    >
      {direction === "right" ? <IoIosArrowForward size={18} /> : <IoIosArrowBack size={18} />}
    </button>
  );

  return (
    <div className="container">
      <div className="hidden mt-[-1rem] sm:block md:gap-[10rem] md:ml-[-3rem] xl:ml-[-2rem] xl:mr-[-3.5rem]">
        <Carousel
          responsive={responsive}
          infinite
          arrows
          itemClass="px-2"
          customLeftArrow={<CustomArrow direction="left" />}
          customRightArrow={<CustomArrow direction="right" />}
          className="h-[520px]"
        >
          {remainingStops.map((item, index) => (
            <StopCard key={index} item={item} handleClick={handleClick} />
          ))}
        </Carousel>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:hidden mt-4">
        {remainingStops.map((item, index) => (
          <StopCard key={index} item={item} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

const StopCard = ({ item, handleClick }) => (
  <div
    className="overflow-hidden ml-[-0.2rem] sm:ml-[3rem] xl:ml-0 w-full max-w-[350px] h-[400px] bg-white shadow-md cursor-pointer hover:scale-105 transition-all duration-200 mx-auto flex flex-col"
    onClick={() => handleClick(item)}
  >
    <div className="relative h-[70%]">
      <img
        src={item.bannerImage}
        alt={item.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-4 left-4 bg-white my-[-1.5rem] mx-[-1rem] px-4 py-3 flex items-center gap-1 text-sm">
        <IoLocationOutline className="text-gray-600" />
        <span className="text-gray-800">{item.location}</span>
      </div>
    </div>

    <div className="h-[30%] py-4 px-3 flex flex-col items-center justify-center">
      <h3 className="text-xl font-semibold tracking-wide text-center line-clamp-2">
        {item.title}
      </h3>
    </div>
  </div>
);

export default Shopping;
