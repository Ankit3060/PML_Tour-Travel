import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import SearchBanner from "../Components/SearchBanner";
import ThingsToDo from "../Components/ThingsToDo";

const Packages = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://admin.magicalvacation.com/api/v1/packages");
        const result = await res.json();
        setData(result.data || []);
      } catch (error) {
        console.error("Failed to fetch packages:", error);
      }
      finally{
        setLoading(false);
      }
    };  

    fetchPackages();
  }, []);
  // console.log(data);

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
    <SearchBanner title="Packages created for you" buttonText={true} searchBar={true}/>
    <div className="p-4 px-20">
      <h1 className="text-4xl font-light ml-5">Top Packages for Dubai</h1>
      <div className="flex flex-wrap gap-7 p-12">
        {data.map(pkg => (
          <Card key={pkg._id} pkg={pkg} />
        ))}
      </div>
    </div>
    <ThingsToDo />
    </div>
  );
};

export default Packages;
