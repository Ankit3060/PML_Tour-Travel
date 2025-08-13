import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";

function ThingsToDo() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://admin.magicalvacation.com/api/v1/categories"
        );
        const result = await res.json();
        setData(result.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const getCategory = (name) => data.find((item) => item.name === name);

  const categories = {
    desert: getCategory("Desert Safari Tours"),
    dhow: getCategory("Dhow Cruise Tours"),
    burj: getCategory("Burj Khalifa Tours"),
    city: getCategory("City Tours"),
    museum: getCategory("Museum Tours"),
    skiing: getCategory("Skiing Tours"),
  };

  const renderBox = (item, height = "h-[240px]") => {
    if (!item) return null;
    return (
      <div
        onClick={() => navigate(`/attractions/${item._id}`)}
        className={`relative w-full ${height} mb-4 overflow-hidden cursor-pointer shadow-md transition-transform duration-300 hover:scale-105 `}
      >
        <img
          src={item.categoryImageUrl}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[rgb(214, 228, 239)] flex items-center justify-center">
        <div className="text-center">
          <HashLoader color="#2990d0" />
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-20 my-6 sm:my-8 lg:my-10">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-6 sm:mb-8 ">
        Things To Do In Dubai
      </h1>

      <div className="block sm:hidden">
        <div className="space-y-4 mb-4">
          {renderBox(categories.desert, "h-48")}
          {renderBox(categories.dhow, "h-48")}
        </div>

        <div className="flex gap-4 mb-4">
          <div className="w-1/2">{renderBox(categories.burj, "h-110")}</div>
          <div className="w-1/2 space-y-4">
            {renderBox(categories.city, "h-50")}
            {renderBox(categories.museum, "h-55")}
          </div>
        </div>

        {renderBox(categories.skiing, "h-100")}
      </div>


      <div className="hidden sm:flex lg:hidden flex-wrap gap-4 justify-between">
        <div className="flex flex-col w-[48%]">
          {renderBox(categories.desert, "h-[200px]")}
          {renderBox(categories.dhow, "h-[200px]")}
        </div>

        <div className="w-[22%]">{renderBox(categories.burj, "h-[416px]")}</div>

        <div className="flex flex-col w-[25%]">
          {renderBox(categories.city, "h-[200px]")}
          {renderBox(categories.museum, "h-[200px]")}
        </div>

        <div className="w-[30%">
          {renderBox(categories.skiing, "h-[416px]")}
        </div>
      </div>

      <div className="hidden lg:flex flex-wrap gap-4 justify-between">
        <div className="flex flex-col w-full lg:w-[31%]">
          {renderBox(categories.desert, "h-[240px]")}
          {renderBox(categories.dhow, "h-[240px]")}
        </div>

        <div className="w-full lg:w-[15%]">
          {renderBox(categories.burj, "h-[500px]")}
        </div>

        <div className="flex flex-col w-full lg:w-[18%]">
          {renderBox(categories.city, "h-[240px]")}
          {renderBox(categories.museum, "h-[240px]")}
        </div>

        <div className="w-full lg:w-[30%]">
          {renderBox(categories.skiing, "h-[500px]")}
        </div>
      </div>
    </div>
  );
}

export default ThingsToDo;
