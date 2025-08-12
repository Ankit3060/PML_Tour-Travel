import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";

function ReviewShoppingStops() {
  const { state } = useLocation();
  const { stop } = state ;
  console.log(stop)

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
        
        <div className='text-base sm:text-lg flex items-center gap-2 mb-5 sm:mb-6 md:mb-7 text-gray-700'>
          <IoLocationOutline className="text-lg sm:text-xl" />
          <span>{stop.location}</span>
        </div>
        
        {stop.description.map((item, index) => (
          <p key={index} className="leading-relaxed text-sm sm:text-base md:text-lg text-gray-700 mt-3 sm:mt-4 md:mt-5 mb-3 sm:mb-4 md:mb-5">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ReviewShoppingStops;