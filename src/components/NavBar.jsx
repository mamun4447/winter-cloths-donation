import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
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
        {user ? (
          <button
            onClick={logOut}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-md"
          >
            Sign Out
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-md"
          >
            Log In
          </Link>
        )}
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
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#13221b] p-4 z-10">
          <NavLink to="/" className="block py-2 hover:bg-gray-700">
            Home
          </NavLink>
          <NavLink to="campaigns" className="block py-2 hover:bg-gray-700">
            Donation Campaigns
          </NavLink>
          <NavLink to="how-to-help" className="block py-2 hover:bg-gray-700">
            How to Help
          </NavLink>
          <NavLink to="dashboard" className="block py-2 hover:bg-gray-700">
            Dashboard
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
