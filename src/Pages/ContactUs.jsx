import React from "react";
import bgSearch from "../assets/bgSearch.svg";
import { FiSearch } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import SearchBanner from "../Components/SearchBanner";
import { FaHome } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";



function ContactUs() {
  const navigate = useNavigate();
  return (
    <>
    <SearchBanner title="Contact Us" buttonText={false} searchBar={false}/>
    <div className="flex flex-row p-8">

      <div className="flex-1 p-4">
        <h2 className="text-3xl mb-2">Office Address</h2>
        <p className="flex items-center gap-3"><FaHome /><span className="font-semibold">Dubai Office:</span>202 Rania Business Center Al Barsha First, Dubai, UAE</p>
        <p className="flex items-center gap-3"><IoIosCall /> +971 444 52101</p>
        <p className="flex items-center gap-3"><MdMailOutline /> <a href="mailto:info@magicalvacation.com" className="underline">info@magicalvacation.com</a></p>
      </div>

      <div className="flex-1 p-4 border-0 shadow-2xl">
        <form action="" >
          <h2 className="text-2xl mb-2">Send us a query</h2>
          <label className="block mb-2">Name:</label>
          <input type="text" placeholder="Your name.." className="border border-gray-300 p-2 rounded mb-4 w-full"/>
          <label className="block mb-2">Email:</label>
          <input type="email" placeholder="Your email.." className="border border-gray-300 p-2 rounded mb-4 w-full"/>
          <label className="block mb-2">Mobile:</label>
          <input type="tel" placeholder="Your mobile number.." className="border border-gray-300 p-2 rounded mb-4 w-full" maxLength={10} minLength={10}/>
          <label className="block mb-2">Message:</label>
          <textarea placeholder="Write something.." className="border border-gray-300 p-2 rounded mb-4 w-full"></textarea>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send</button>
        </form>
        
      </div>
    </div>
    </>
  );
}

export default ContactUs;