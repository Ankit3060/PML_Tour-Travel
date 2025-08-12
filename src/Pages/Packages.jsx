import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import SearchBanner from "../Components/SearchBanner";
import ThingsToDo from "../Components/ThingsToDo";
import HashLoader from "react-spinners/HashLoader";

const Packages = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://admin.magicalvacation.com/api/v1/packages");
        const result = await res.json();
        setData(result.data || []);
        setFilteredData(result.data || []);
      } catch (error) {
        console.error("Failed to fetch packages:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
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
      setFilteredData(data.filter((pkg) => pkg.title.toLowerCase().includes(searchLower)));
    }
  };

  return (
    <div>
      <SearchBanner
        title="Packages created for you"
        buttonText={true}
        searchBar={true}
        onSearch={handleSearch}
      />

      {filteredData.length>0 ? (<div className="px-6 md:px-12 lg:px-20">
        {filteredData.length > 0 && (
          <h1 className="text-4xl font-light mt-8 mb-6">Top Packages for Dubai</h1>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredData.map((pkg) => (
            <Card key={pkg._id} pkg={pkg} />
          ))}
        </div>
      </div>) : (
        <div className="px-6 md:px-12 lg:px-20">
          <h1 className="text-4xl font-light mt-8 mb-6">Top Packages for Dubai</h1>
          <h1 className="text-gray-600 text-2xl text-center mb-4">No Packages Found</h1>
        </div>
      )}

      <ThingsToDo />
    </div>
  );
};

export default Packages;
