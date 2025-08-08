import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function ReviewDelicacies() {
  const { state } = useLocation();
  const { stop } = state;
  console.log(stop);

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

        {stop.description.map((item, index) => (
          <p
            key={index}
            className=" leading-relaxed text-lg text-gray-700 mt-5 mb-5"
          >
            {item}
          </p>
        ))}

        <h1 className="text-xl font-semibold mb-2">Hours</h1>
        <div className="space-y-1">
          {stop.openingHours.map((line, idx) => (
            <div key={idx} className="text-gray-800">
              {line}
            </div>
          ))}
        </div>

        <div className="mt-5">
            <span className="text-lg font-semibold">Address: </span>{stop.address}
        </div>
        
        
        <div className="mt-5">
            <span className="text-lg font-semibold">Email: </span>{stop.email}
        </div>
        
        
        <div className="mt-5">
            <span className="text-lg font-semibold">Visit Website: </span>
            <a className="underline text-blue-500" href={stop.website} target="blank">{stop.website}</a>
        </div>
      </div>
    </div>
  );
}

export default ReviewDelicacies;
