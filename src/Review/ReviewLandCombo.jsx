import React from 'react';
import { useLocation } from 'react-router-dom';
import ReviewFooter from './ReviewFooter';

function ReviewLandCombo() {
  const { state } = useLocation();
  const { attract } = state || {};
  const price = attract.price.filter((item)=>item.adultPrice).map((item)=>item.adultPrice);
  const title = attract.title || 'Attraction Details';  
  
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
      
      <div 
        style={{
          backgroundImage: "url('https://res.cloudinary.com/ddxawuqwy/image/upload/v1710241157/inc_exc_bg_raxhhz.png')", 
          backgroundColor: "#deffc3"
        }} 
        className="mt-6 md:mt-10 mx-4 sm:mx-8 md:mx-16 lg:mx-20 p-4 sm:p-6 rounded-lg"
      >
        <h1 className="text-2xl sm:text-3xl font-medium mb-3 md:mb-4 text-gray-800">Inclusions:</h1>
        <ul className='list-disc ml-4 sm:ml-6 md:ml-8 space-y-1 sm:space-y-2'>
          {attract.includedServices.map((service, index) => (
            <li key={index} className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">{service}</li>
          ))}
        </ul>
      </div>    
      
      <div 
        style={{
          backgroundImage: "url('https://res.cloudinary.com/ddxawuqwy/image/upload/v1710241157/inc_exc_bg_raxhhz.png')", 
          backgroundColor: "#ffe8e8"
        }} 
        className="mt-6 md:mt-8 mx-4 sm:mx-8 md:mx-16 lg:mx-20 p-4 sm:p-6 rounded-lg"
      >
        <h1 className="text-2xl sm:text-3xl font-medium mb-3 md:mb-4 text-gray-800">Exclusions:</h1>
        <ul className='list-disc ml-4 sm:ml-6 md:ml-8 space-y-1 sm:space-y-2'>
          {attract.excludedServices.map((service, index) => (
            <li key={index} className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">{service}</li>
          ))}
        </ul>
      </div>    
      
      <div className="mt-6 md:mt-10 px-4 sm:px-8 md:px-16 lg:px-20">
        <h1 className="text-2xl sm:text-3xl font-medium mb-3 md:mb-4 text-gray-800">Meeting Point:</h1>
        {attract.expectations.map((expectation, index) => (
          <div key={index} className="space-y-2">
            <h2 className='font-semibold text-lg sm:text-xl'>
              Location: <span className='font-light text-gray-950'> {expectation.location}</span>
            </h2>
            <h2 className='font-semibold text-lg sm:text-xl mb-4 sm:mb-5'>
              Description: <span className='font-light text-gray-800'> {expectation.description}</span>
            </h2>
          </div>
        ))}
      </div>
      
      <div className="mt-6 md:mt-10 px-4 sm:px-8 md:px-16 lg:px-20">
        <h1 className="text-2xl sm:text-3xl font-medium mb-3 md:mb-4 text-gray-800">Cancellation Policy</h1>
        <ul className='list-disc ml-4 sm:ml-6 md:ml-8 space-y-1 sm:space-y-2'>
          {attract.cancellationRefundPolicy.map((item, index) => (
            <li key={index} className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-[17px]">{item}</li>
          ))}
        </ul> 
      </div>
      
      {attract.note && (
        <div className="mt-6 md:mt-10 px-4 sm:px-8 md:px-16 lg:px-20">
          <h3 className="text-lg sm:text-xl font-medium text-gray-800 mb-2">Note: </h3>
          <p className='text-base sm:text-lg md:text-xl text-gray-700'>{attract.note}</p>
        </div>
      )}
      
      <ReviewFooter price={price} title={title} id={attract._id} />
    </div>
  );
}

export default ReviewLandCombo;