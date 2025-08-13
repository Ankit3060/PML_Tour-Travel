import React, { useState } from "react";
import bgSearch from "../assets/bgSearch.svg";
import { FiSearch, FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function SearchBanner({ title, buttonText, searchBar, onSearch }) {
  const navigate = useNavigate();
  const [searchItem, setSearchItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchItem);
    }
  };

  return (
    <div
      className="w-full h-[200px] sm:h-[400px] bg-cover bg-center flex flex-col items-center justify-center text-white px-4"
      style={{ backgroundImage: `url(${bgSearch})` }}
    >
      <h1 className="text-4xl mb-6 text-center">{title}</h1>

      {searchBar && (
        <form onSubmit={handleSubmit} className="w-full flex justify-center">
          <div className="flex items-center sm:w-full w-[80%] h-[1.9rem] sm:h-[2.5rem] max-w-2xl rounded-full overflow-hidden px-4 py-2 text-white border border-white backdrop-sepia-0 bg-white/20 shadow-md">
            <input
              type="text"
              placeholder="Search..."
              className="searchbar"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
            />
            <button type="submit">
              <FiSearch className="text-xl cursor-pointer text-white" />
            </button>
          </div>
        </form>
      )}

      {buttonText && (
        <div className="hidden lg:flex gap-4 mt-8 flex-wrap justify-center">
          <button
            onClick={() => navigate("/packages")}
            className="bg-[#0583b4] hover:bg-blue-600 cursor-pointer flex items-center gap-2  text-white px-6 py-1 rounded-full text-sm font-medium"
          >
            View Packages <FiArrowUpRight />
          </button>
          <button
            onClick={() => navigate("/landcombos")}
            className="bg-[#0583b4] hover:bg-blue-600 cursor-pointer flex items-center gap-2 text-white px-6 py-3 rounded-full text-sm font-medium"
          >
            Land Combos <FiArrowUpRight />
          </button>
          <button
            onClick={() => navigate("/attractions")}
            className="bg-[#0583b4] hover:bg-blue-600 cursor-pointer flex items-center gap-2 text-white px-6 py-3 rounded-full text-sm font-medium"
          >
            Attractions <FiArrowUpRight />
          </button>
        </div>
      )}
    </div>
  );
}

export default SearchBanner;
