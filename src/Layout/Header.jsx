import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const logo =
    "https://res.cloudinary.com/ddxawuqwy/image/upload/v1708420873/packages/mvlogo_mc4ai4.png";

  const isAttractionActive =
    location.pathname.startsWith("/attractions") ||
    location.pathname.startsWith("/attraction");

  return (
    <nav className="bg-white px-6 py-3 shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-14 w-auto" />
        </Link>

        <div className="hidden md:flex space-x-10 font-medium text-gray-800">
          <NavLink
            to="/"
            className={`inline-block pb-3 ${
              location.pathname === "/"
                ? "border-b-4 text-black border-black"
                : ""
            } text-[#625d5d] hover:text-black text-[17.5px]`}
          >
            Home
          </NavLink>

          <NavLink
            to="/packages"
            className={`inline-block pb-3 ${
              location.pathname.startsWith("/packages") ||
              location.pathname.startsWith("/packagebycategory")
                ? "border-b-4 text-black border-black"
                : ""
            } text-[#625d5d] hover:text-black text-[17.5px]`}
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
            className={`inline-block pb-3 ${
              location.pathname.startsWith("/landcombos")
                ? "border-b-4 text-black border-black"
                : ""
            } text-[#625d5d] hover:text-black text-[17.5px]`}
          >
            Land Combos
          </NavLink>

          <NavLink
            to="/contactus"
            className={`inline-block pb-3 ${
              location.pathname.startsWith("/contactus")
                ? "border-b-4 text-black border-black"
                : ""
            } text-[#625d5d] hover:text-black text-[17.5px]`}
          >
            Contact us
          </NavLink>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      <div
        className={`md:hidden absolute bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ top: "64px", left: "1rem" }}
      >
        <div className="flex flex-col space-y-3 font-medium text-gray-800 p-4 w-max">
          <NavLink
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className={`${
              location.pathname === "/" ? "font-bold text-black border-b border-black" : ""
            } hover:text-black`}
          >
            Home
          </NavLink>
          <NavLink
            to="/packages"
            onClick={() => setIsMenuOpen(false)}
            className={`${
              location.pathname.startsWith("/packages")
                ? "font-bold text-black border-b border-black"
                : ""
            } hover:text-black`}
          >
            Packages
          </NavLink>
          <NavLink
            to="/attractions"
            onClick={() => setIsMenuOpen(false)}
            className={`${
              isAttractionActive ? "font-bold text-black border-b border-black" : ""
            } hover:text-black`}
          >
            Attractions
          </NavLink>
          <NavLink
            to="/landcombos"
            onClick={() => setIsMenuOpen(false)}
            className={`${
              location.pathname.startsWith("/landcombos")
                ? "font-bold text-black border-b border-black"
                : ""
            } hover:text-black`}
          >
            Land Combos
          </NavLink>
          <NavLink
            to="/contactus"
            onClick={() => setIsMenuOpen(false)}
            className={`${
              location.pathname.startsWith("/contactus")
                ? "font-bold text-black border-b border-black"
                : ""
            } hover:text-black`}
          >
            Contact us
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header;
