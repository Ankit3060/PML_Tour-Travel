import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchBanner from "../Components/SearchBanner";
import AttractionCard from "../Components/AttractionCard";

function AttractionFilter() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();
  // console.log(categoryId)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://admin.magicalvacation.com/api/v1/attractions");
        const result = await res.json();
        setData(result.data || []);
      } catch (error) {
        console.log("Failed to load the data", error);
      }
      finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredAttractions = data.filter(
    (attract) => attract.categoryId === categoryId
  );

    if (loading) {
    return (
      <div className="min-h-screen bg-[rgb(214, 228, 239)] flex items-center justify-center">
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading data...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <SearchBanner />
      <h1 className="text-4xl font-light ml-24 mt-5">
        {filteredAttractions[0]?.categoryName}
      </h1>

      <div className="flex flex-wrap gap-7 p-12">
        {filteredAttractions.map((attract) => (
          <AttractionCard  attract={attract} />
        ))}
      </div>
    </div>
  );
}

export default AttractionFilter;
