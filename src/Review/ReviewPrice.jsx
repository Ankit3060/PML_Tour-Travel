import React from "react";
import { useEffect, useState } from "react";

const ReviewPrice = ({ visible, isVisible, id }) => {
  if (!visible) return null;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://admin.magicalvacation.com/api/v1/attractions/?id=${id}`
        );
        const result = await res.json();
        setData(result.data[0].price || []);
      } catch (error) {
        console.log("Failed to load the data", error);
      }
    };
    fetchData();
  }, [id])

  return (
    <>
      {isVisible && (
        <div className="flex smallScreen fixed justify-center mt-4 mb-0 bottom-[4.5rem] left-[19rem] transition-isVisible duration-400 ">
          <table className="border-collapse border border-green-500 text-center shadow-lg">
            <thead>
              <tr className="bg-teal-100">
                <th className="border border-green-500 px-4 py-2 text-blue-900">
                  Description
                </th>
                <th className="border border-green-500 px-4 py-2 text-blue-900">
                  Adult Price
                </th>
                <th className="border border-green-500 px-4 py-2 text-blue-900">
                  Child Price
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="bg-white">
                  <td className="border border-green-500 px-4 py-2 text-gray-800">
                    {item.description}
                  </td>
                  <td className="border border-green-500 px-4 py-2 font-semibold text-gray-800">
                    AED {item.adultPrice}
                  </td>
                  <td className="border border-green-500 px-4 py-2 font-semibold text-gray-800">
                    AED {item.childPrice}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default ReviewPrice;
