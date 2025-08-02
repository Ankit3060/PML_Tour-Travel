import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import SearchBanner from "../Components/SearchBanner";
import ThingsToDo from "../Components/ThingsToDo";

const Packages = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await fetch("https://admin.magicalvacation.com/api/v1/packages");
        const result = await res.json();
        setData(result.data || []);
      } catch (error) {
        console.error("Failed to fetch packages:", error);
      }
    };  

    fetchPackages();
  }, []);
  // console.log(data);

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
