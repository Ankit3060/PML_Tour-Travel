import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchBanner from "../Components/SearchBanner";
import AttractionCard from "../Components/AttractionCard";

function AttractionFilter() {
  const [data, setData] = useState([]);
  const { categoryId } = useParams();
  console.log(categoryId)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://admin.magicalvacation.com/api/v1/attractions");
        const result = await res.json();
        setData(result.data || []);
      } catch (error) {
        console.log("Failed to load the data", error);
      }
    };
    fetchData();
  }, []);

  const filteredAttractions = data.filter(
    (attract) => attract.categoryId === categoryId
  );

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
