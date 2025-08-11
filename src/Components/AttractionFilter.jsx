import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchBanner from "../Components/SearchBanner";
import AttractionCard from "../Components/AttractionCard";
import HashLoader from "react-spinners/HashLoader";

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
          <div className="text-center">
            <HashLoader color="#2990d0" />
          </div>
      </div>
    );
  }

  return (
    <div>
      <SearchBanner title="Attractions in Dubai" buttonText={false} searchBar={true}/>
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
