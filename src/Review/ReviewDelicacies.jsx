import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function ReviewDelicacies() {
  const { state } = useLocation();
  const { stop } = state;
  console.log(stop);

  return (
    <div className="mb-20 flex flex-col">
      <div className="w-full h-[200px] sm:h-[300px] md:h-[420px]">
        <img
          src={stop.bannerImage}
          alt={stop.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="px-4 sm:px-8 md:px-16 lg:px-20 mt-6 md:mt-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-700 mb-3 md:mb-4">{stop.title}</h1>

        {stop.description.map((item, index) => (
          <p
            key={index}
            className="leading-relaxed text-sm sm:text-base md:text-lg text-gray-700 mt-3 sm:mt-4 md:mt-5 mb-3 sm:mb-4 md:mb-5"
          >
            {item}
          </p>
        ))}

        <div className="mt-6 md:mt-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-2 md:mb-3 text-gray-800">Hours</h2>
          <div className="space-y-1">
            {stop.openingHours.map((line, idx) => (
              <div key={idx} className="text-sm sm:text-base text-gray-800">
                {line}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 sm:mt-5">
          <span className="text-base sm:text-lg font-semibold text-gray-800">Address: </span>
          <span className="text-sm sm:text-base text-gray-700">{stop.address}</span>
        </div>
        
        <div className="mt-4 sm:mt-5">
          <span className="text-base sm:text-lg font-semibold text-gray-800">Email: </span>
          <span className="text-sm sm:text-base text-gray-700">{stop.email}</span>
        </div>
        
        <div className="mt-4 sm:mt-5">
          <span className="text-base sm:text-lg font-semibold text-gray-800">Visit Website: </span>
          <a 
            className="underline text-blue-500 text-sm sm:text-base break-all hover:text-blue-600 transition-colors" 
            href={stop.website} 
            target="_blank"
            rel="noopener noreferrer"
          >
            {stop.website}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ReviewDelicacies;