import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const hideFooter =
    /^\/attraction\/[^/]+$/.test(location.pathname) ||
    /^\/landcombos\/[^/]+$/.test(location.pathname) ||
    /^\/packages\/[^/]+$/.test(location.pathname);

  if (hideFooter) return null;

  return (
    <div className="font-style mt-8">
      <footer className="bg-[#dff5ff] text-black w-full py-8 px-6 md:px-20 bottom-0">
        <div className="w-full mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
            <div>
              <h2 className="font-bold text-lg mb-4">CORPORATE</h2>
              <ul className="list-disc ml-4 space-y-2 cursor-pointer">
                <li onClick={() => navigate("/aboutus")}>About us</li>
                <li onClick={() => navigate("/privacy")}>Privacy Policy</li>
                <li onClick={() => navigate("/condition")}>
                  Terms & Conditions
                </li>
                <li onClick={() => navigate("/contactus")}>Contact Us</li>
              </ul>
            </div>

            <div>
              <h2 className="font-bold text-lg mb-4">SERVICES</h2>
              <ul className="list-disc ml-4 space-y-2 cursor-pointer">
                <li onClick={() => navigate("/packages")}>Packages</li>
                <li onClick={() => navigate("/attractions")}>Attractions</li>
                <li onClick={() => navigate("/landcombos")}>Land combos</li>
                <li>Pay Now</li>
              </ul>
            </div>

            <div>
              <h2 className="font-bold text-lg mb-4">USEFUL LINKS</h2>
              <ul className="list-disc ml-4 space-y-2 cursor-pointer">
                <li>Blog</li>
                <li>Gallery</li>
              </ul>
            </div>

            <div className="lg:pl-12">
              <h2 className="font-bold text-lg mb-4">FOLLOW US</h2>
              <div className="flex gap-4 text-xl mt-4">
                <a href="https://www.facebook.com/">
                  <FaFacebookF />
                </a>
                <a href="https://twitter.com/">
                  <FaTwitter />
                </a>
                <a href="https://www.youtube.com/">
                  <FaYoutube />
                </a>
                <a href="https://www.instagram.com/">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start mt-14 gap-8">
            <div className="w-full md:w-1/2">
              <h2 className="font-bold text-lg mb-4">Dubai Office:</h2>
              <div className="space-y-3">
                <p className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                  <span>
                    <strong>Office no:</strong> 202 Rania Business Center Al
                    Barsha First, Dubai, UAE
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <FaPhone className="flex-shrink-0" />
                  <span>+971 444 52101</span>
                </p>
                <p className="flex items-center gap-3">
                  <FaEnvelope className="flex-shrink-0" />
                  <a
                    href="mailto:info@magicalvacation.com"
                    className="underline"
                  >
                    info@magicalvacation.com
                  </a>
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-lg mb-4">Subscribe to Our Newsletter:</h2>
              <div className="flex flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-2  bg-white border flex-1 mr-[-8.5px]"
                  maxLength={40}
                />
                <button className="bg-sky-400 px-4 py-2">Contact Now</button>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="font-semibold text-lg mb-4">
              We Accept Debit and Credit Cards
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <img
                src="https://img.icons8.com/color/48/000000/mastercard.png"
                alt="MasterCard"
              />
              <img
                src="https://img.icons8.com/color/48/000000/visa.png"
                alt="Visa"
              />
              <img
                src="https://img.icons8.com/color/48/000000/unionpay.png"
                alt="UnionPay"
              />
            </div>
          </div>

          <div className="mt-4 border-t border-gray-400 w-full flex  gap-2 items-center pt-2">
            <FaRegCopyright /> 2025 Magical vacation. All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
