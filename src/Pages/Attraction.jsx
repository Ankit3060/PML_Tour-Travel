import React, { useEffect, useState } from "react";
import SearchBanner from "../Components/SearchBanner";
import AttractionCard from "../Components/AttractionCard";
import HashLoader from "react-spinners/HashLoader";

function Attraction() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://admin.magicalvacation.com/api/v1/attractions"
        );
        const result = await res.json();
        setData(result.data || []);
        setFilteredData(result.data || []);
      } catch (error) {
        console.log("Failed to load the data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[rgb(214,228,239)] flex items-center justify-center">
        <HashLoader color="#2990d0" />
      </div>
    );
  }

  const handleSearch = (query) => {
    const searchLower = query.toLowerCase();
    if (!searchLower) {
      setFilteredData(data);
    } else {
      setFilteredData(
        data.filter((attraction) =>
          attraction.title.toLowerCase().includes(searchLower)
        )
      );
    }
  };

  return (
    <div>
      <SearchBanner
        title="Attractions in Dubai"
        buttonText={false}
        searchBar={true}
        onSearch={handleSearch}
      />

      {filteredData.length > 0 ? (
        <div className="px-6 md:px-12 lg:px-20">
          <h1 className="text-4xl font-light mt-8 mb-6 ">Attractions</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredData.map((attract) => (
              <AttractionCard key={attract.id} attract={attract} />
            ))}
          </div>
        </div>
      ) : (
        <div className="px-6 md:px-12 lg:px-20">
          <h1 className="text-4xl font-light mt-8 mb-6 ">Attractions</h1>
          <p className="text-gray-600 text-2xl text-center mb-4">No attractions found.</p>
        </div>
      )}
    </div>
  );
}

export default Attraction;
