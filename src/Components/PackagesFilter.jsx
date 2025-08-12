import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import SearchBanner from "../Components/SearchBanner";
import HashLoader from "react-spinners/HashLoader";
import { useLocation } from "react-router-dom";

const PackagesFilter = () => {
  const { state } = useLocation();
  const { id } = state || {};

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://admin.magicalvacation.com/api/v1/packages?categoryId=${id}`
        );
        const result = await res.json();
        const packages = result.data || [];
        setData(packages);
        setFilteredData(packages);
      } catch (error) {
        console.log("Error fetching packages:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const handleSearch = (query) => {
    const searchLower = query.toLowerCase();
    if (!searchLower) {
      setFilteredData(data);
    } else {
      setFilteredData(
        data.filter((pkg) =>
          pkg.title?.toLowerCase().includes(searchLower)
        )
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <HashLoader color="#2990d0" size={80} />
      </div>
    );
  }

  return (
    <div>
      <SearchBanner
        title="Packages created for you"
        buttonText={true}
        searchBar={true}
        onSearch={handleSearch}
      />

      {filteredData.length > 0 ? (
        <div className="px-6 md:px-12 md:w-[120%] lg:px-20">
          <h1 className="text-4xl font-light mt-8 mb-6 text-center md:text-left">
            {filteredData[0]?.categoryName}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
            {filteredData.map((pkg) => (
              <Card key={pkg._id} pkg={pkg} />
            ))}
          </div>
        </div>
      ) : (
        <div className="px-6 md:px-12 lg:px-20">
          <h1 className="text-4xl font-light mt-8 mb-6 text-center md:text-left">
            {data[0]?.categoryName || "No Packages"}
          </h1>
          <p className="text-gray-600 text-2xl text-center mb-4">
            No package available for now!
          </p>
        </div>
      )}
    </div>
  );
};

export default PackagesFilter;
