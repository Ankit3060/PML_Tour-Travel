import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HashLoader from "react-spinners/HashLoader";
import { FaQuoteLeft } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Feedback() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://admin.magicalvacation.com/api/v1/reviews");
        const result = await res.json();
        setData(result.data || []);
      } catch (error) {
        console.log("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const responsive = {
    extraLarge: { breakpoint: { max: 3000, min: 1324 }, items: 1 },
    large: { breakpoint: { max: 1324, min: 1005 }, items: 1 },
    medium: { breakpoint: { max: 1005, min: 700 }, items: 1 },
    small: { breakpoint: { max: 700, min: 0 }, items: 1 },
  };

  if (loading) {
    return (
      <div className="w-full h-[50vh] flex items-center justify-center">
        <HashLoader color="#2990d0" size={80} />
      </div>
    );
  }

  const CustomLeftArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-0 bg-transparent border-none cursor-pointer text-3xl"
    >
      <FaArrowLeft  />
    </button>
  );

  const CustomRightArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-0 bg-transparent border-none cursor-pointer text-3xl"
    >
      <FaArrowRight />
    </button>
  );

  return (
    <div className="container mx-auto py-10">
      <Carousel
        responsive={responsive}
        infinite={true}
        itemClass="px-2"
        arrows={true}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center px-4 max-w-4xl mx-auto"
          >
            <img
              src={item.reviewerImage}
              alt={item.reviewerName}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />

            <h2 className="text-xl font-semibold mb-6">{item.reviewerName}</h2>

            <div className="max-w-3xl text-gray-600 leading-relaxed relative">
              <FaQuoteLeft className="text-3xl text-gray-400 absolute -top-2 -left-6" />
              <p className="px-6 text-justify">
                {item.comment}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Feedback;
