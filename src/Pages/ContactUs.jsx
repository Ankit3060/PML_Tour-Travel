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
      <div className="flex flex-row p-8">
        <div className="flex-1 p-4">
          <h2 className="text-3xl mb-2">Office Address</h2>
          <p className="flex items-center gap-3">
            <FaHome />
            <span className="font-semibold">Dubai Office:</span>202 Rania
            Business Center Al Barsha First, Dubai, UAE
          </p>
          <p className="flex items-center gap-3">
            <IoIosCall /> +971 444 52101
          </p>
          <p className="flex items-center gap-3">
            <MdMailOutline />{" "}
            <a href="mailto:info@magicalvacation.com" className="underline">
              info@magicalvacation.com
            </a>
          </p>
        </div>

        <div className="flex-1 p-4 border-0 shadow-2xl">
          <form action="" onSubmit={handleSubmit}>
            <h2 className="text-2xl mb-2">Send us a query</h2>
            <label className="block mb-2">Name:</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name.."
              className="border border-gray-300 p-2 rounded mb-4 w-full"
            />
            <label className="block mb-2">Email:</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email.."
              className="border border-gray-300 p-2 rounded mb-4 w-full"
            />
            <label className="block mb-2">Mobile:</label>
            <PhoneInput
              country={"in"}
              value={phone}
              onChange={setPhone}
              enableSearch
              required
              inputStyle={{
                width: "100%",
                height: "38px",
                borderRadius: "0.375rem",
                border: "1px solid #d1d5db",
                fontSize: "14px",
                paddingLeft: "48px",
              }}
              containerStyle={{
                width: "100%",
              }}
            />
            <label className="block mb-2">Message:</label>
            <textarea
              placeholder="Write something.."
              className="border border-gray-300 p-2 rounded mb-4 w-full"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="bg-blue-400 hover:bg-blue-500 text-white cursor-pointer p-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
