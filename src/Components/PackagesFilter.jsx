import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import SearchBanner from "../Components/SearchBanner";
import HashLoader from "react-spinners/HashLoader";
import { useLocation, useParams } from "react-router-dom";

const PackagesFilter = () => {
  const { state } = useLocation();
  const { id } = state|| {};

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://admin.magicalvacation.com/api/v1/packages?categoryId=${id}`);
        const result = await res.json();
        setData(result.data || []);
      } catch (error) {
        console.log("Error fetching packages:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
  return (
    <div className="w-full h-[50vh] flex items-center justify-center ">
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
      />
      <div className="p-4 px-20">
        {data.length>0 ? (<>
          <h1 className="text-4xl font-light ml-11">{data[0]?.categoryName}</h1>
          <div className="flex flex-wrap gap-7 p-12">
            {data.map((pkg) => <Card key={pkg._id} pkg={pkg} />)}
          </div>
        </>) : (
          <p className="text-center text-4xl p-8 mt-8 mb-8 font-light">No package available for Now!</p>
          
        )}
      </div>
    </div>
  );
};


export default PackagesFilter;
