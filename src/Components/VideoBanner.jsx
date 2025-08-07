import React from "react";
import { FiSearch, FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { FaClock } from "react-icons/fa6";
import { AiFillSchedule } from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa";

function VideoBanner() {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative w-full h-[400px] overflow-hidden text-white flex flex-col items-center justify-center px-4">
        <video
          loop
          autoPlay
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          src="https://res.cloudinary.com/ddxawuqwy/video/upload/v1705380585/ocvjdle2ubiq9f8pxif9.mp4"
        ></video>

        <div className="text-center z-10 mb-6">
          <h1 className="text-4xl  text-center name">Dubai</h1>
          <p className="font-(family-name:montserrat) text-2xl">
            Your Adventure Awaits in the Desert Oasis
          </p>
        </div>

        <div className="flex items-center w-full max-w-3xl rounded-full overflow-hidden px-4 py-2 text-white border border-white backdrop-sepia-0 bg-white/20 shadow-md">
          <input
            type="text"
            placeholder="Search..."
            className="searchbar bg-transparent outline-none text-white placeholder-white flex-1"
          />
          <FiSearch className="text-xl text-white" />
        </div>

        <div className="flex gap-4 mt-8 flex-wrap justify-center">
          <button
            onClick={() => navigate("/packages")}
            className="bg-[#0583b4] hover:bg-blue-600 cursor-pointer flex items-center gap-2 text-white px-6 py-1 rounded-full text-sm font-medium"
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
      </div>
      <div className="bg-blue-950  text-white text-lg p-4 flex flex-wrap md:flex-nowrap gap-4 justify-around items-center mt-0 ">
        <div className="flex items-center gap-2">
          <FaClock />
          <span>Minimum 3 Nights</span>
        </div>
        <div className="flex items-center gap-2">
          <AiFillSchedule />
          <span>Peak Time: Nov - Mar</span>
        </div>
        <div className="flex items-center gap-2">
          <span>AED 1530 per person</span>
        </div>
        <div className="flex items-center gap-2">
          <FaRegAddressCard />
          <span>7 Days Visa Processing</span>
        </div>
      </div>
    </>
  );
}

export default VideoBanner;
