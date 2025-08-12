import React, { useEffect, useState } from "react";
import SearchBanner from "../Components/SearchBanner";
import LandComboCard from "../Components/LandComboCard";
import HashLoader from "react-spinners/HashLoader";

function LandCombo() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://admin.magicalvacation.com/api/v1/land_combos"
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
        data.filter((land) => land.title.toLowerCase().includes(searchLower))
      );
    }
  };

  return (
    <div>
      <SearchBanner
        title="Land Combos for you!"
        buttonText={true}
        searchBar={true}
        onSearch={handleSearch}
      />

      {filteredData.length > 0 ? (
        <div className="px-6 sm:px-10 md:px-16 lg:px-20">
          <h1 className="text-4xl font-light mt-5">Trending</h1>
          <div className="grid gap-7 mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredData.map((attract) => (
              <LandComboCard key={attract._id} attract={attract} />
            ))}
          </div>
        </div>
      ): (
        <div className="px-6 md:px-12 lg:px-20">
          <h1 className="text-4xl font-light mt-5">Trending</h1>
          <p className="text-gray-600 text-2xl text-center mb-4">No tranding found.</p>
        </div>
      )}
    </div>
  );
}

export default LandCombo;
