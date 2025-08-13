import React, { useEffect, useState } from "react";
import VideoBanner from "../Components/VideoBanner";
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
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://admin.magicalvacation.com/api/v1/packages"
        );
        const result = await res.json();
        setData(result.data || []);
        setFilteredPackages(result.data || []);
      } catch (error) {
        console.log("Error fetching packages:", error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (query) => {
    const searchLower = query.toLowerCase();
    if (!searchLower) {
      setFilteredPackages(data);
      setSearchActive(false);
    } else {
      const results = data.filter((pkg) =>
        pkg.title?.toLowerCase().includes(searchLower)
      );
      setFilteredPackages(results);
      setSearchActive(true);
    }
  };

  return (
    <div className="w-full">
      <VideoBanner onSearch={handleSearch} />

      {!searchActive && (
        <section className="max-w-5xl px-4 sm:px-6 xl:px-0 xl:ml-[8rem] mt-12">
          <h1 className="text-3xl sm:text-4xl font-light mb-6 sm:text-left xl:ml-[-1rem]">
            Unveil the Oasis of Luxury
          </h1>
          <p className="text-base xl:ml-[-1rem] xl:mr-[-14rem] sm:text-lg leading-relaxed text-justify">
            Welcome to Dubai, a city where the desert's timeless beauty
            seamlessly blends with modern luxury, creating an inviting haven for
            travelers from around the world. As you arrive, the striking
            skyline, adorned with towering marvels of architecture, welcomes you
            to a place where dreams are transformed into reality. Explore the
            bustling souks, where the air is filled with the scents of spices
            and the vibrant colors of textiles beckon you to indulge in retail
            therapy like no other. Alongside the traditional, savor exotic
            flavors from a global culinary palette that has made Dubai a
            gastronomic paradise.
          </p>
        </section>
      )}

      {filteredPackages.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 lg:px-8 mt-16">
          <h2 className="text-3xl sm:text-4xl xl:ml-[-2.5rem] font-light sm:text-left">
            Best Packages for Dubai
          </h2>
          <BestPackages packages={filteredPackages} itemsToShow={3} />
        </section>
      )}

      <section className="max-w-7xl mx-auto px-4 lg:px-8 ">
        <h2 className="text-3xl sm:text-4xl xl:ml-[-2rem] font-light sm:text-left mb-6 mt-4">
          Choose what suits you the best
        </h2>
        <div className="flex flex-wrap justify-center sm:justify-start gap-7 xl:ml-[-2rem] xl:mr-[-3rem]">
          <CardCategory />
        </div>
      </section>

      {filteredPackages.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 lg:px-8 mt-16">
          <h2 className="text-3xl sm:text-4xl xl:ml-[-2rem] font-light sm:text-left mb-6">
            Top Packages for Dubai
          </h2>
          <TopPackages packages={filteredPackages} itemsToShow={4} />
        </section>
      )}

      {!searchActive && (
        <>
          <section className="max-w-7xl mx-auto px-4 lg:px-8 mt-16">
            <h2 className="text-2xl ml-2 sm:text-4xl xl:ml-[-1.5rem] mt-[-2rem] sm:mt-[-4rem] font-light sm:text-left">
              Shopping stops for you in Dubai
            </h2>
            <div className="flex flex-wrap justify-center sm:justify-start gap-7">
              <ShoppingStops />
            </div>
          </section>

          <section className="max-w-7xl mx-auto px-4 lg:px-8 mt-16">
            <h2 className="text-2xl ml-2 sm:text-4xl xl:ml-[-1.5rem] mt-[-2rem] sm:mt-[-4rem] font-light sm:text-left">
              What else to do in Dubai
            </h2>
            <div className="flex flex-wrap justify-center sm:justify-start gap-7">
              <Shopping />
            </div>
          </section>

          <section className="max-w-7xl mx-auto px-4 lg:px-8 mt-16">
            <h2 className="text-2xl ml-2 sm:text-4xl xl:ml-[-1.5rem] mt-[-2rem] sm:mt-[-4rem] font-light sm:text-left">
              Delicacies for Indians
            </h2>
            <div className="flex flex-wrap justify-center sm:justify-start gap-7">
              <Delicacies />
            </div>
          </section>

          <section className="xl:ml-[3.5rem] xl:mr-[1rem] sm:mt-[-3rem]">
            <ThingsToDo />
          </section>

          <section className="max-w-7xl mx-auto px-4 lg:px-8 mt-16">
            <h2 className="text-3xl sm:text-4xl font-light mb-6 text-center">
              What people say about us
            </h2>
            <div className="flex flex-wrap justify-center gap-7">
              <Feedback />
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default Home;
