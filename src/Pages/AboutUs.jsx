import React from "react";
import SearchBanner from "../Components/SearchBanner";

function AboutUs() {
  return (
    <>
      <SearchBanner title="About Us" buttonText={false} searchBar={false} />
      <div className="px-4 py-8 mt-0">
        <div className="flex flex-col md:flex-row gap-8 p-8 items-start">
          <div className="flex-1 space-y-4 sm:m-auto">
            <h1 className="text-4xl font-bold mb-4">About Company</h1>
            <p>
              Alhusul Ealaa Lamhat Min Dubay! Get a Glimpse of Dubai with
              MAGICAL VACATION. Established by 2 seasoned professionals and
              tyrant business owners with two decades of enduring experience in
              the world of travel and tourism, MAGICAL VACATION is a Destination
              Management Company that offers its customers from across the world
              an experience that will make them crave and desire more for
              travelling.
            </p>
            <p>
              The lalaland of Dubai is simply astounding. The magical transition
              from the plain bedsheets of sand dunes to real-life sci-fi
              skyrocketing buildings and technological amazements is simply
              unbelievable. To make this experience jaw-dropping for all
              customers, Magical Vacation has made sure to offer super flexible,
              customizable, and suitable holiday packages.
            </p>
            <p>
              Our objective is to give the best services to our customers so
              that they can always rely on us for their safety, pleasure, and
              touring experiences. Magical Vacation is registered under the
              Dubai Department of Tourism and Commerce Marketing. We ensure
              seamless service through our connections with local transporters
              and guides.
            </p>
            <p>
              Magical Vacation ensures all our customers get the most authentic
              exposure to Dubai.
            </p>
            <p>
              Not only people traveling to Dubai, but the local citizens of the
              United Arab Emirates can also traverse to other countries in the
              most luxurious and enriching way. Take a leap towards journeying
              to other parts of the world and experience the cultural richness
              and diversity across the globe.
            </p>
          </div>

          <div className="flex-shrink-0  aboutScreenImage">
            <img
              src="https://res.cloudinary.com/ddxawuqwy/image/upload/v1704172861/packages/pt5_mw3jmo.jpg"
              alt="About Magical Vacation"
              className="shadow-lg w-[90%] mt-10"
            />
          </div>
        </div>

        <div className="p-8 space-y-4">
          <h1 className="text-3xl">Our Services</h1>
          <p>
            From Air Ticketing to Visa and Hotel Reservations, Magical Vacation
            are prepared for all. We understand and sustain the fact that
            tailored packages may not fit all, so we keep it open for our
            customers to make adjustments and get their free will customisable
            packages
          </p>
          <ul className="list-disc pl-12 space-y-2">
            <li>Local guides</li>
            <li>Tourist attractions</li>
            <li>Cab services</li>
          </ul>
          <p>
            All you need to do is Travel with Leisure rest will be organised and
            systemized by MAGICAL VACATION
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
