import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReviewFooter from './ReviewFooter';

function ReviewAttraction() {
  const { state } = useLocation();
  const { attract } = state;

  const price = attract.price.filter((item)=>item.adultPrice).map((item)=>item.adultPrice)
  const title = attract.title || 'Attraction Details';
  const [eyeOpen, setEyeOpen] = useState(false);

  return (
    <div className="mb-20 flex flex-col">
      <div className="w-full h-[200px] sm:h-[300px] md:h-[420px]">
        <img
          src={attract.bannerImage}
          alt={attract.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="px-4 sm:px-8 md:px-16 lg:px-20 mt-6 md:mt-10">
        <h1 className="text-2xl sm:text-3xl text-gray-700 mb-3 md:mb-4">{attract.title}</h1>
        <p className="leading-relaxed text-base sm:text-lg text-gray-700">{attract.attractionOverview}</p>
      </div>

      <section
        style={{ backgroundImage: "url('https://res.cloudinary.com/ddxawuqwy/image/upload/v1710241157/inc_exc_bg_raxhhz.png')" }}
        className="mt-6 md:mt-8 bg-[#deffc3] mx-4 sm:mx-8 md:mx-16 lg:mx-20 p-4 sm:p-6 md:p-8 rounded-lg"
      >
        <h2 className="text-2xl sm:text-3xl font-medium mb-3 md:mb-4 text-gray-800">Inclusions:</h2>
        <ul className="list-disc ml-4 sm:ml-6 space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base md:text-lg">
          {attract.includedServices.map((service, index) => (
            <li key={index} className="leading-relaxed">{service}</li>
          ))}
        </ul>
      </section>

      <section
        style={{ backgroundImage: "url('https://res.cloudinary.com/ddxawuqwy/image/upload/v1710241157/inc_exc_bg_raxhhz.png')" }}
        className="mt-6 md:mt-8 bg-[#ffe8e8] mx-4 sm:mx-8 md:mx-16 lg:mx-20 p-4 sm:p-6 md:p-8 rounded-lg"
      >
        <h2 className="text-2xl sm:text-3xl font-medium mb-3 md:mb-4 text-gray-800">Exclusions:</h2>
        <ul className="list-disc ml-4 sm:ml-6 space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base md:text-lg">
          {attract.excludedServices.map((service, index) => (
            <li key={index} className="leading-relaxed">{service}</li>
          ))}
        </ul>
      </section>

      <section className="mt-6 md:mt-8 px-4 sm:px-8 md:px-16 lg:px-20">
        <h2 className="text-2xl sm:text-3xl font-medium mb-3 md:mb-4 text-gray-800">Meeting Point:</h2>
        {attract.expectations.map((expectation, index) => (
          <div key={index} className="mb-4 sm:mb-6">
            <h3 className="font-semibold text-lg sm:text-xl md:text-2xl">
              Location: <span className="font-light text-gray-950">{expectation.location}</span>
            </h3>
            <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mt-1 sm:mt-2">
              Description: <span className="font-light text-gray-800">{expectation.description}</span>
            </h3>
          </div>
        ))}
      </section>

      <section className="mt-6 md:mt-8 px-4 sm:px-8 md:px-16 lg:px-20">
        <h2 className="text-2xl sm:text-3xl font-medium mb-3 md:mb-4 text-gray-800">Cancellation Policy</h2>
        <ul className="list-disc ml-4 sm:ml-6 space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base md:text-[17px]">
          {attract.cancellationRefundPolicy.map((item, index) => (
            <li key={index} className="leading-relaxed">{item}</li>
          ))}
        </ul>
      </section>

      {attract.note && (
        <section className="mt-6 md:mt-8 px-4 sm:px-8 md:px-16 lg:px-20">
          <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-2">Note:</h3>
          <p className="text-base sm:text-lg text-gray-700">{attract.note}</p>
        </section>
      )}

      <ReviewFooter
        price={price[0]}
        title={title}
        id={attract._id}
        eyeOpen={eyeOpen}
        setEyeOpen={() => setEyeOpen(!eyeOpen)}
        showEyeToggle={true}
      />
    </div>
  );
}

export default ReviewAttraction;