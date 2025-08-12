import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { FiArrowUpRight } from "react-icons/fi";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";

function ReviewFooterPopup({ onClose, title }) {
  const [peopleCount, setPeopleCount] = useState(0);
  const [ChildrenCount, setChildrenCount] = useState(0);
  const [InfantsCount, setInfantsCount] = useState(0);
  const [phone, setPhone] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Name is required.");
      return;
    }
    if (!email.trim()) {
      toast.error("Email is required.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Enter a valid email address.");
      return;
    }
    if (!city.trim()) {
      toast.error("City is required.");
      return;
    }
    if (!phone || phone.trim().length < 10) {
      toast.error("Phone number is required.");
      return;
    }
    if (peopleCount <= 0 && ChildrenCount <= 0 && InfantsCount <= 0) {
      toast.error("Please select the number of people.");
      return;
    }

    const formData = {
      package: title,
      city: city,
      date: selectedDate,
      adults: peopleCount,
      children: ChildrenCount,
      infants: InfantsCount,
      name: name,
      email: email,
      phone: phone,
      query: query,
    };
    console.log("Form Data Submitted:", formData);
    toast.success("Enquiry sent successfully!");
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
      <div className="relative bg-white rounded-lg shadow-lg flex flex-col max-w-3xl w-full max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-black text-3xl z-50 cursor-pointer"
        >
          <IoMdCloseCircle />
        </button>

        <div className="bg-[#ebf2fd] text-black font-semibold text-center text-sm md:text-lg p-3 md:p-4 shadow-sm z-10">
          Your journey to forever is a few steps away! Just help us with the
          details below.
        </div>

        <div className="overflow-y-auto p-4 md:p-6 flex-1">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-[rgb(63,66,102)]">
                Basic Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Package Name"
                  defaultValue={title}
                  readOnly
                  className="border rounded-md px-4 py-2 w-full text-sm"
                />
                <input
                  type="text"
                  placeholder="Enter your city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="border rounded-md px-4 py-2 w-full text-sm"
                />
                <div className="md:col-span-2">
                  <label htmlFor="date" className="block text-sm mb-1">
                    Select Travel Date
                  </label>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    className="w-full border rounded-md px-4 py-2 text-sm"
                    dateFormat="dd-MM-yyyy"
                    minDate={new Date()}
                    showYearDropdown
                    id="date"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-4">
                {[
                  {
                    label: "Adults (Age 13 & above)",
                    count: peopleCount,
                    setCount: setPeopleCount,
                  },
                  {
                    label: "Children (Ages 3 to 12)",
                    count: ChildrenCount,
                    setCount: setChildrenCount,
                  },
                  {
                    label: "Infants (Age 0 to 3)",
                    count: InfantsCount,
                    setCount: setInfantsCount,
                  },
                ].map(({ label, count, setCount }, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center flex-1 min-w-[120px]"
                  >
                    <label className="mb-1 text-xs md:text-sm text-center">
                      {label}
                    </label>
                    <div className="flex overflow-hidden rounded-full border border-gray-300">
                      <button
                        type="button"
                        className="bg-sky-400 text-white px-3 py-1 hover:bg-sky-500 cursor-pointer"
                        onClick={() => setCount(Math.max(0, count - 1))}
                      >
                        -
                      </button>
                      <span className="bg-white text-black px-4 py-1 flex items-center justify-center">
                        {count}
                      </span>
                      <button
                        type="button"
                        className="bg-sky-400 text-white px-3 py-1 hover:bg-sky-500 cursor-pointer"
                        onClick={() => setCount(Math.min(10, count + 1))}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-[rgb(63,66,102)]">
                Contact Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Your Name..."
                  className="border rounded-md px-4 py-2 w-full text-sm"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Enter your Email..."
                  className="border rounded-md px-4 py-2 w-full text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <PhoneInput
                  country={"in"}
                  value={phone}
                  onChange={setPhone}
                  enableSearch
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
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-[rgb(63,66,102)]">
                Any Specific Query?
              </h3>
              <textarea
                placeholder="Your Query..."
                className="border rounded-md px-4 py-2 w-full resize-none h-20 text-sm"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </form>
        </div>


        <div className="border bg-[#324269] hover:bg-[#353d50] cursor-pointer flex justify-center">
          <button
            type="submit"
            onClick={handleSubmit}
            className="flex items-center gap-2 text-white px-6 py-2 rounded-md text-base md:text-lg font-semibold transition duration-300 cursor-pointer"
          >
            Send Enquiry <FiArrowUpRight className="mt-[2px]" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewFooterPopup;
