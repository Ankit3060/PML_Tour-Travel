import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const logo =
    "https://res.cloudinary.com/ddxawuqwy/image/upload/v1708420873/packages/mvlogo_mc4ai4.png";

  
  const isAttractionActive =
    location.pathname.startsWith("/attractions") ||
    location.pathname.startsWith("/attraction");

  return (
    <nav className="bg-white px-10 py-1 shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center ml-2">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-14 w-50 relative left-5" />
        </Link>

        <div className="flex space-x-10 relative right-[-7.5rem] font-medium text-gray-800">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `inline-block pb-3 ${
                isActive ? "border-b-4 text-black border-black" : ""
              } text-[#625d5d] hover:text-black text-[17.5px]`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/packages"
            className={({ isActive }) =>
              `inline-block pb-3 ${
                isActive ? "border-b-4 text-black border-black" : ""
              } text-[#625d5d] hover:text-black text-[17.5px]`
            }
          >
            Packages
          </NavLink>

          <Link
            to="/attractions"
            className={`inline-block pb-3 ${
              isAttractionActive ? "border-b-4 text-black border-black" : ""
            } text-[#625d5d] hover:text-black text-[17.5px]`}
          >
            Attractions
          </Link>

          <NavLink
            to="/landcombos"
            className={({ isActive }) =>
              `inline-block pb-3 ${
                isActive ? "border-b-4 text-black border-black" : ""
              } text-[#625d5d] hover:text-black text-[17.5px]`
            }
          >
            Land Combos
          </NavLink>

          <NavLink
            to="/contactus"
            className={({ isActive }) =>
              `inline-block pb-3 ${
                isActive ? "border-b-4 text-black border-black" : ""
              } text-[#625d5d] hover:text-black text-[17.5px]`
            }
          >
            Contact us
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header;
