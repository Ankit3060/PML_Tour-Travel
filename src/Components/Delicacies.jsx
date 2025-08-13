import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoLocationOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function Delicacies() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://admin.magicalvacation.com/api/v1/delicacies");
        const result = await res.json();
        setData(result.data || []);
      } catch (error) {
        console.log("Error fetching delicacies:", error);
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

  const handleClick = (item) => {
    navigate(`/delicaciesdetails/${item._id}`, { state: { stop: item } });
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
    <div className="container relative">
      <div className="hidden  mt-[-1rem] sm:block md:gap-[10rem] md:ml-[-3rem] xl:ml-[-1.5rem] xl:mr-[-3rem]">
        <Carousel
          responsive={responsive}
          infinite
          arrows
          itemClass="px-2"
          customLeftArrow={<CustomArrow direction="left" />}
          customRightArrow={<CustomArrow direction="right" />}
          className="h-[520px]"
        >
          {data.map((item, index) => (
            <DelicacyCard key={index} item={item} handleClick={handleClick} />
          ))}
        </Carousel>
      </div>

      <div className="block sm:hidden space-y-6 mt-4">
        {data.map((item, index) => (
          <DelicacyCard key={index} item={item} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

const DelicacyCard = ({ item, handleClick }) => (
  <div
    className="overflow-hidden xl:ml-[0rem] sm:ml-7 w-full max-w-[500px] h-[26rem] bg-white shadow-md cursor-pointer hover:scale-105 transition-all duration-200 mx-auto"
    onClick={() => handleClick(item)}
  >
    <div className="relative h-[70%]">
      <img
        src={item.bannerImage}
        alt={item.name}
        className="w-full h-full object-cover"
      />
    </div>

    <div className="flex items-center justify-center mt-3 text-gray-800 text-sm">
      <IoLocationOutline className="text-gray-600 mr-1" />
      <span className="text-center text-xl font-light">{item.location}</span>
    </div>

    <div className="h-[20%] py-4 px-3 mx-7 flex flex-col items-center justify-center">
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

export default Delicacies;
