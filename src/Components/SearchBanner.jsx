import React from "react";
import bgSearch from "../assets/bgSearch.svg";
import { FiSearch } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";


function SearchBanner() {
  return (
    <div
      className="w-full h-[400px] bg-cover bg-center flex flex-col items-center justify-center text-white px-4"
      style={{ backgroundImage: `url(${bgSearch})` }}
    >
      <h1 className="text-4xl mb-6 text-center">Packages created for you</h1>

      <div className="flex items-center w-full max-w-3xl rounded-full overflow-hidden px-4 py-2 text-white border border-white backdrop-sepia-0 bg-white/20 shadow-md">
        <input
          type="text"
          placeholder="Search..."
          className="searchbar"
        />
        <FiSearch className="text-xl text-white" />
      </div>

      <div className="flex gap-4 mt-8 flex-wrap justify-center">
        <button className="bg-[#0583b4] hover:bg-blue-600 cursor-pointer flex items-center gap-2  text-white px-6 py-1 rounded-full text-sm font-medium">
          View Packages <FiArrowUpRight />

        </button>
        <button className="bg-[#0583b4] hover:bg-blue-600 cursor-pointer flex items-center gap-2 text-white px-6 py-3 rounded-full text-sm font-medium">
          Land Combos <FiArrowUpRight />

        </button>
        <button className="bg-[#0583b4] hover:bg-blue-600 cursor-pointer flex items-center gap-2 text-white px-6 py-3 rounded-full text-sm font-medium">
          Attractions <FiArrowUpRight />

        </button>
      </div>
    </div>

  );
}

export default SearchBanner;
