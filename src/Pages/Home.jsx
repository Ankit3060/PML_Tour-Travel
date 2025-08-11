import React, { useEffect, useState } from "react";
import VideoBanner from "../Components/VideoBanner";
import Packages from "./Packages";
import Card from "../Components/Card";
import CardCategory from "../Components/CardCategory";
import ShoppingStops from "../Components/ShoppingStops";
import Shopping from "../Components/Shopping";
import Delicacies from "../Components/Delicacies";
import Feedback from "../Components/Feedback";
import ThingsToDo from "../Components/ThingsToDo";
import TopPackages from "../Components/TopPackages";
import BestPackages from "../Components/BestPackages";

function Home() {
  const [data, setData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://admin.magicalvacation.com/api/v1/packages"
        );
        const result = await res.json();
        setData(result.data || []);
      } catch (error) {
        console.log("Error fetching packages:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="">
      <VideoBanner />
      <div className="mt-8 p-4 ml-7  px-18">
        <h1 className="text-4xl  font-light">Unveil the Oasis of Luxury</h1>
        <p className="mt-4 text-lg">
          Welcome to Dubai, a city where the desert's timeless beauty seamlessly
          blends with modern luxury, creating an inviting haven for travelers
          from around the world. As you arrive, the striking skyline, adorned
          with towering marvels of architecture, welcomes you to a place where
          dreams are transformed into reality. Explore the bustling souks, where
          the air is filled with the scents of spices and the vibrant colors of
          textiles beckon you to indulge in retail therapy like no other.
          Alongside the traditional, savor exotic flavors from a global culinary
          palette that has made Dubai a gastronomic paradise.
        </p>
      </div>

      <div className="p-4 px-20">
        <h1 className="text-4xl font-light ml-7 absolute mt-[1.5rem]">Best Packages for Dubai</h1>
        <BestPackages packages={data} itemsToShow={3}/>
      </div>


      <div className="p-4 px-20 ">
        <h1 className="text-4xl font-light ml-7 absolute mt-[-3rem]">
          Choose what suits you the best
        </h1>
        <div className="flex flex-wrap gap-7 mt-7 ml-5 mr-0">
          <CardCategory />
        </div>
      </div>

      <div className="p-4 px-20">
        <h1 className="text-4xl font-light ml-7 absolute mt-[1.5rem]">Top Packages for Dubai</h1>
        <TopPackages packages={data} itemsToShow={4}/>
      </div>

      <div className="mt-[-3rem] px-20 ">
        <h1 className="text-4xl font-light ml-7 absolute mt-[-1rem]">
          Shopping stops for you in Dubai
        </h1>
        <div className="flex flex-wrap gap-7 mt-7 ml-5 mr-0">
          <ShoppingStops />
        </div>
      </div>

      <div className="p-6 px-20 ">
        <h1 className="text-4xl font-light ml-7 absolute mt-0">What else to do in Dubai</h1>
        <div className="flex flex-wrap gap-7 mt-7 ml-5 mr-0">
          <Shopping />
        </div>
      </div>

      <div className="px-20 ">
        <h1 className="text-4xl font-light ml-7 absolute mt-[-2rem]">Delicacies for Indians</h1>
        <div className="flex flex-wrap gap-7 mt-7 ml-5 mr-0">
          <Delicacies />
        </div>
      </div>

      <div>
        <ThingsToDo />
      </div>

      <div className="px-20 ">
        <h1 className="text-4xl font-light ml-5 text-center mt-5">
          What people say about us
        </h1>
        <div className="flex flex-wrap gap-7 mt-7 ml-5 mr-0">
          <Feedback />
        </div>
      </div>
    </div>
  );
}

export default Home;
