import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";

const CardCategory = () => {
  const [data, setData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://admin.magicalvacation.com/api/v1/categories"
        );
        const result = await res.json();
        setData(result.data || []);
      } catch (error) {
        console.log("Error fetching categories:", error);
      }finally{
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const topSixPackages = data.slice(startIndex, startIndex + 6);

  const navigate = useNavigate();

  const handleClick = (name, id) => {
    navigate(`/packagebycategory/${name}`, { state: { id } });
  };

if (loading) {
  return (
    <div className="w-full h-[50vh] flex items-center justify-center ">
      <HashLoader color="#2990d0" size={80} />
    </div>
  );
}

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4">
        {topSixPackages.map((item) => {
          return (
            <div
              className="bg-[#00081d] w-full sm:w-[48%] md:w-[30%] lg:w-[18%] xl:w-[15.5%] rounded-md hover:scale-105 cursor-pointer duration-200"
              onClick={() => handleClick(item.name, item._id)}
            >
              <img
                src={item.categoryImageUrl}
                alt={item.name}
                className="h-70 w-full object-cover"
              />
              <div className="p-4 justify-between">
                <h2
                  className="font-semibold  text-xl mb-2 text-center"
                  style={{ color: item.colourCode }}
                >
                  {item.name}
                </h2>

                <div className="text-lg flex text-white text-center">
                  <span>{item.description} </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardCategory;
