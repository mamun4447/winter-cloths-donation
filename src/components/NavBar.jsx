import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-[#13221b] p-4 text-white flex items-center justify-between">
      {/* Logo */}
      <NavLink to={"/"} className="flex items-center">
        {/* Replace with your actual logo image */}
        <img
          src="/src/assets/preview.jpg"
          alt="Charino Logo"
          className="h-10 mr-2 rounded-xl"
        />
        <span className="text-xl font-bold">Winter Donation</span>
      </NavLink>

      {/* Navigation Links (Desktop) */}
      <div className="hidden md:flex space-x-6">
        <NavLink
          to="/"
          className="text-yellow-500 hover:text-white font-medium"
        >
          Home
        </NavLink>
        <NavLink
          to={"/campaigns"}
          className="hover:text-yellow-500 font-medium"
        >
          Donation Campaigns
        </NavLink>
        <NavLink
          to={"/how-to-help"}
          className="hover:text-yellow-500 font-medium"
        >
          How to Help
        </NavLink>
        <NavLink
          to={"/dashboard"}
          className="hover:text-yellow-500 font-medium"
        >
          Dashboard
        </NavLink>
      </div>

      {/* Search Icon and Donate Button */}
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full border border-gray-600 hover:bg-gray-700">
          <FaSearch className="text-gray-400" />
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-md">
          Donate Now
        </button>
      </div>

      {/* Mobile Menu Button (if you decide to add a mobile menu) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu (if you decide to add a mobile menu) */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#1a1a1a] p-4 z-10">
          <a href="#" className="block py-2 hover:bg-gray-700">
            Home
          </a>
          <a href="#" className="block py-2 hover:bg-gray-700">
            About
          </a>
          <a href="#" className="block py-2 hover:bg-gray-700">
            Causes
          </a>
          <a href="#" className="block py-2 hover:bg-gray-700">
            Event
          </a>
          <a href="#" className="block py-2 hover:bg-gray-700">
            Blog
          </a>
          <a href="#" className="block py-2 hover:bg-gray-700">
            Page's
          </a>
          <a href="#" className="block py-2 hover:bg-gray-700">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
