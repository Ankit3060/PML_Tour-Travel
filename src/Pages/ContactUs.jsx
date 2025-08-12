import React, { useState } from "react";
import SearchBanner from "../Components/SearchBanner";
import { FaHome } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { toast } from "react-toastify";

function ContactUs() {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!phone || phone.trim() === "") {
      toast.error("Phone number is required.");
      return;
    }

    const formData = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };
    console.log("Form Data Submitted:", formData);
    toast.success("Your message has been sent successfully!");
  };
  return (
    <>
      <SearchBanner title="Contact Us" buttonText={false} searchBar={false} />
      
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
        
        <div className="flex-1 order-2 lg:order-1">
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
            <h2 className="text-2xl sm:text-3xl mb-4 sm:mb-6 text-gray-800 font-semibold">Office Address</h2>
            
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-start gap-3 sm:gap-4">
                <FaHome className=" mt-1 text-lg sm:text-xl flex-shrink-0" />
                <div>
                  <span className="font-semibold text-gray-800 text-sm sm:text-base">Dubai Office:</span>
                  <p className="text-gray-700 text-sm sm:text-base mt-1">
                    202 Rania Business Center Al Barsha First, Dubai, UAE
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4">
                <IoIosCall className="text-lg sm:text-xl flex-shrink-0" />
                <a 
                  href="tel:+971444552101" 
                  className="text-gray-700 hover:text-blue-500 transition-colors text-sm sm:text-base"
                >
                  +971 444 52101
                </a>
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4">
                <MdMailOutline className=" text-lg sm:text-xl flex-shrink-0" />
                <a 
                  href="mailto:info@magicalvacation.com" 
                  className="text-blue-500 hover:text-blue-600 underline transition-colors text-sm sm:text-base break-all"
                >
                  info@magicalvacation.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 order-1 lg:order-2">
          <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-4 sm:p-6">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <h2 className="text-xl sm:text-2xl mb-4 text-gray-800 font-semibold">Send us a query</h2>
              
              <div>
                <label className="block mb-2 text-sm sm:text-base font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name.."
                  className="border border-gray-300 p-2 sm:p-3 rounded-md w-full text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
              
              <div>
                <label className="block mb-2 text-sm sm:text-base font-medium text-gray-700">
                  Email:
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email.."
                  className="border border-gray-300 p-2 sm:p-3 rounded-md w-full text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
              
              <div>
                <label className="block mb-2 text-sm sm:text-base font-medium text-gray-700">
                  Mobile:
                </label>
                <PhoneInput
                  country={"in"}
                  value={phone}
                  onChange={setPhone}
                  enableSearch
                  required
                  inputStyle={{
                    width: "100%",
                    height: window.innerWidth < 640 ? "44px" : "48px",
                    borderRadius: "0.375rem",
                    border: "1px solid #d1d5db",
                    fontSize: window.innerWidth < 640 ? "14px" : "16px",
                    paddingLeft: "48px",
                  }}
                  containerStyle={{
                    width: "100%",
                    marginBottom: "0",
                  }}
                  buttonStyle={{
                    borderRadius: "0.375rem 0 0 0.375rem",
                  }}
                />
              </div>
              
              <div>
                <label className="block mb-2 text-sm sm:text-base font-medium text-gray-700">
                  Message:
                </label>
                <textarea
                  placeholder="Write something.."
                  rows={4}
                  className="border border-gray-300 p-2 sm:p-3 rounded-md w-full text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical min-h-[100px]"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              
              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-md transition-colors duration-200 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;