import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";

function ReviewShoppingStops() {
  const { state } = useLocation();
  const { stop } = state ;
  console.log(stop)

  return (
    <div className="mb-20 flex flex-col">
      <div className="w-full h-[300px] md:h-[420px]">
        <img
          src={stop.bannerImage}
          alt={stop.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="px-20 mt-10">
        <h1 className="text-4xl text-gray-700 mb-4">{stop.title}</h1>
        <h1 className='text-lg flex items-center gap-2 mb-7'><IoLocationOutline />{stop.location}</h1>
        {stop.description.map((item, index) => (
          <p key={index} className=" leading-relaxed text-lg text-gray-700 mt-5 mb-5">{item}</p>
        ))}
      </div>

    </div>
  );
}

export default ReviewShoppingStops;
