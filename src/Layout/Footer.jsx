import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useLocation, useMatch } from 'react-router-dom';
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  const navigate = useNavigate();

  const location = useLocation();
  const hideFooter = /^\/attraction\/[^/]+$/.test(location.pathname) || 
    /^\/landcombos\/[^/]+$/.test(location.pathname) || /^\/packages\/[^/]+$/.test(location.pathname);
  if (hideFooter) return null;


  return (
    <div className='font-style'>
    <footer className="bg-[#dff5ff] text-black w-full py-8 pl-20  pr-20  bottom-0">
      <div className="w-full mx-auto">
        <div className=" flex relative justify-center gap-[17rem]">

          <div>
            <h2 className="font-bold text-lg mb-4">CORPORATE</h2>
            <ul className="list-disc ml-4 space-y-2 cursor-pointer">
              <li onClick={()=>navigate("/aboutus")}>About us</li>
              <li onClick={()=>navigate("/privacy")}>Privacy Policy</li>
              <li onClick={()=>navigate("/condition")}>Terms & Conditions</li>
              <li onClick={()=>navigate("/contactus")}>Contact Us</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-4">SERVICES</h2>
            <ul className="list-disc ml-4 space-y-2 cursor-pointer">
              <li onClick={()=>navigate("/packages")}>Packages</li>
              <li onClick={()=>navigate("/attractions")}>Attractions</li>
              <li onClick={()=>navigate("/landcombos")}>Land combos</li>
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
         
          <div className=''>
            <h2 className="font-bold text-lg mb-4">FOLLOW US</h2>
                <div className="flex gap-4 text-xl mt-4  md:mt-0">
                    <a href="https://www.facebook.com/"><FaFacebookF /></a>
                    <a href="https://twitter.com/"><FaTwitter /></a>
                    <a href="https://www.youtube.com/"><FaYoutube /></a>
                    <a href="https://www.instagram.com/"><FaInstagram /></a>
                </div>    
          </div>
        </div>

        
        <div className="flex md:flex-row justify-between items-center mt-14 gap-4">
          <div className="flex flex-col">
            <h2 className="font-bold text-lg mb-4">Dubai Office:</h2>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> <strong>Office no:</strong> 202 Rania Business Center Al Barsha First, Dubai, UAE
            </p>
            <p className="flex items-center gap-2 mt-2">
              <FaPhone /> +971 444 52101
            </p>
            <p className="flex items-center gap-2 mt-2">
              <FaEnvelope /> <a href="mailto:info@magicalvacation.com" className="underline">info@magicalvacation.com</a>
            </p>
          </div>
          
          <div className="flex flex-col">
            <div className=' items-center'>
            <h2 className="text-lg mb-4">Subscribe to Our NewsLette:</h2>
            <input
              type="email"
              id="newsletter"
              placeholder="Your Email"
              className="px-4 py-2 rounded bg-white w-full md:w-64"
              maxLength={40}
            />
            <button className="bg-sky-400 px-4 py-2 cursor-pointer">Contact Now</button>
            </div>
          </div>
        </div>


        <div className="text-center mt-10">
          <p className="font-semibold text-lg mb-4">We Accept Debit and Credit Cards</p>
          <div className="flex justify-center gap-6">
            <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="MasterCard" />
            <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
            <img src="https://img.icons8.com/color/48/000000/unionpay.png" alt="UnionPay" />
          </div>
        </div>

        <div className='mt-2 mb-0 flex gap-2 items-center mx-auto'>
          <FaRegCopyright /> 2025 Magical vacation. All right Reserved
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Footer;
