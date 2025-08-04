import React from 'react';
import { useLocation } from 'react-router-dom';
import ReviewFooter from './ReviewFooter';

function ReviewAttraction() {
  const { state } = useLocation();
  const { attract } = state || {};

  const price = attract.price.filter((item)=>item.adultPrice).map((item)=>item.adultPrice);
//   console.log(price )

  return (
    <div className="mb-20 flex flex-col">
      <div className="w-full h-[300px] md:h-[420px]">
        <img
          src={attract.bannerImage}
          alt={attract.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="px-20 mt-10">
        <h1 className="text-3xl text-gray-700 mb-4">{attract.title}</h1>
        <p className=" leading-relaxed text-lg text-gray-700">{attract.attractionOverview}</p>
      </div>

      <div 
        style={{backgroundImage: "url('https://res.cloudinary.com/ddxawuqwy/image/upload/v1710241157/inc_exc_bg_raxhhz.png')", padding: "1.5rem", backgroundColor: "#deffc3", margin: "2rem 4rem 0 5rem"}} 
        className="mt-10 px-20" >
        <h1 className="text-3xl font-medium  mb-4 text-gray-800">Inclusions:</h1>
            <ul className='list-disc ml-8 space-y-2'>
                {attract.includedServices.map((service, index) => (
                    <li key={index} className="text-gray-700 leading-relaxed text-lg">{service}</li>
                ))}
            </ul>
      </div>    
      
      <div 
        style={{backgroundImage: "url('https://res.cloudinary.com/ddxawuqwy/image/upload/v1710241157/inc_exc_bg_raxhhz.png')", padding: "1.5rem", backgroundColor: "#ffe8e8", margin: "2rem 4rem 0 5rem"}} 
        className="mt-10 px-20" >
        <h1 className="text-3xl font-medium  mb-4 text-gray-800">Exclusions:</h1>
            <ul className='list-disc ml-8 space-y-2'>
                {attract.excludedServices.map((service, index) => (
                    <li key={index} className="text-gray-700 leading-relaxed text-lg">{service}</li>
                ))}
            </ul>
      </div>    
      
      <div 
        className="mt-10 px-20" >
        <h1 className="text-3xl font-medium  mb-4 text-gray-800">Meeting Point:</h1>
        {attract.expectations.map((expectation)=>(
            <>
                <h2 className='font-semibold text-xl'>Location :<span className='font-light text-gray-950'> {expectation.location}</span></h2>
                <h2 className='font-semibold text-xl mb-5'>Description : <span className='font-light text-gray-800'> {expectation.description}</span></h2>
            </>
        ))}
      </div>
      
      
      <div 
        className="mt-10 px-20" >
        <h1 className="text-3xl font-medium  mb-4 text-gray-800">Cancellation Policy</h1>
            <ul className='list-disc ml-8 space-y-2'>
              {attract.cancellationRefundPolicy.map((item, index) => (
                  <li key={index} className="text-gray-700 leading-relaxed text-[17px]">{item}</li>
              ))}
            </ul> 
      </div>
      
      {attract.note && (
        <div 
        className="mt-10 px-20" >
        <h3 className="text-xl font-medium text-gray-800">Note: </h3>
        <p className='text-xl'>{attract.note}</p>
      </div>)}

      <ReviewFooter price={price} />

    </div>
  );
}

export default ReviewAttraction;
