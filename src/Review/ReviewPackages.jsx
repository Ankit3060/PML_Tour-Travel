import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaClock } from 'react-icons/fa6';
import { AiFillSchedule } from 'react-icons/ai';
import { FaRegAddressCard } from 'react-icons/fa';
import ReviewFooter from './ReviewFooter';

function ReviewPackages() {
  const { state } = useLocation();
  const { pkg } = state;

  const price = pkg.price
    .filter((item) => item.travelerType === 'adult')
    .map((item) => item.price);

  const title = pkg.title || 'Package Details';

  return (
    <div className="mb-20 flex flex-col">
      
      <div className="w-full h-[220px] sm:h-[300px] md:h-[420px]">
        <img
          src={pkg.bannerImage}
          alt={pkg.title}
          className="w-full h-full object-cover"
        />
      </div>


      <div className="hidden lg:flex bg-blue-950 text-white text-base sm:text-lg p-4 flex-wrap gap-4 justify-around items-center">
        <div className="flex items-center gap-2">
          <FaClock />
          <span>{pkg.duration}</span>
        </div>
        <div className="flex items-center gap-2">
          <AiFillSchedule />
          <span>Peak Time: Nov - Mar</span>
        </div>
        <div className="flex items-center gap-2">
          <span>
            {pkg.price
              .filter((item) => item.travelerType === 'adult')
              .map((item, index) => (
                <div key={index}>AED {item.price} per person</div>
              ))}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <FaRegAddressCard />
          <span>7 Days Visa Processing</span>
        </div>
      </div>


      <div className="px-4 sm:px-8 md:px-20 mt-8">
        <h1 className="text-2xl sm:text-3xl mb-4 text-gray-800">{pkg.title}</h1>
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">{pkg.packageOverview}</p>
      </div>


      <div className="px-4 sm:px-8 md:px-20 mt-8">
        <h1 className="text-2xl sm:text-3xl font-medium mb-4 text-gray-800">Routing</h1>
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">Trip Duration: {pkg.duration}</p>
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg mt-4">
          {pkg.duration.split('/ ')[0]} Dubai
        </p>
      </div>


      <div
        className="mt-6 md:mt-8 mx-4 sm:mx-8 md:mx-16 lg:mx-20 p-4 sm:p-6 rounded-lg"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/ddxawuqwy/image/upload/v1710241157/inc_exc_bg_raxhhz.png')",
          backgroundColor: "#deffc3"
        }}
      >
        <h1 className="text-2xl sm:text-3xl font-medium mb-3 md:mb-4 text-gray-800">Inclusions:</h1>
        <ul className="list-disc ml-4 sm:ml-6 space-y-1 sm:space-y-2">
          {pkg.includedServices.map((service, index) => (
            <li key={index} className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
              {service}
            </li>
          ))}
        </ul>
      </div>

      <div
        className="mt-6 md:mt-8 mx-4 sm:mx-8 md:mx-16 lg:mx-20 p-4 sm:p-6 rounded-lg"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/ddxawuqwy/image/upload/v1710241157/inc_exc_bg_raxhhz.png')",
          backgroundColor: '#ffe8e8'
        }}
      >
        <h1 className="text-2xl sm:text-3xl font-medium mb-3 md:mb-4 text-gray-800">Exclusions:</h1>
        <ul className="list-disc ml-4 sm:ml-6 space-y-1 sm:space-y-2">
          {pkg.excludedServices.map((service, index) => (
            <li key={index} className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
              {service}
            </li>
          ))}
        </ul>
      </div>


      <div className="mt-8 sm:mt-10 px-4 sm:px-8 md:px-20">
        <h1 className="text-2xl sm:text-3xl font-medium mb-4 text-gray-800">Day Wise Itinerary</h1>
        {pkg.dayWisePlan.map((day, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl sm:text-2xl text-gray-800">{day.title}</h2>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg mt-2">{day.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 sm:mt-10 px-4 sm:px-8 md:px-20">
        <h1 className="text-2xl sm:text-3xl font-medium mb-4 text-gray-800">Hotel Details</h1>
        <h2 className="text-xl sm:text-2xl font-light flex justify-center">We Are Working on It.</h2>
      </div>

      <div className="mt-8 sm:mt-10 px-4 sm:px-8 md:px-20">
        <h1 className="text-2xl sm:text-3xl font-medium mb-4 text-gray-800">Booking Procedure</h1>
        <ul className="list-disc ml-6 space-y-2">
          {pkg.bookingProcedure.map((service, index) => (
            <li key={index} className="text-gray-700 leading-relaxed text-[15px] sm:text-[17px]">
              {service}
            </li>
          ))}
        </ul>
      </div>


      <div className="mt-8 sm:mt-10 px-4 sm:px-8 md:px-20">
        <h1 className="text-2xl sm:text-3xl font-medium mb-4 text-gray-800">Cancellation Policy</h1>
        <ul className="list-disc ml-6 space-y-2">
          {pkg.cancellationRefundPolicy.map((policy, index) => (
            <li key={index} className="text-gray-700 leading-relaxed text-[15px] sm:text-[17px]">
              {policy}
            </li>
          ))}
        </ul>
      </div>


      <div className="mt-8 sm:mt-10 px-4 sm:px-8 md:px-20">
        <h1 className="text-2xl sm:text-3xl font-medium mb-4 text-gray-800">Must Carry</h1>
        <ol className="list-decimal ml-6 space-y-2">
          {pkg.mustCarry.map((item, index) => (
            <li key={index} className="text-gray-700 leading-relaxed text-[15px] sm:text-[17px]">
              {item}
            </li>
          ))}
        </ol>
      </div>

      <ReviewFooter price={price} title={title} id={pkg._id} />
    </div>
  );
}

export default ReviewPackages;
