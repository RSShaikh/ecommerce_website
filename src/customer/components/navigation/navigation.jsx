import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import {
  MagnifyingGlassIcon,
  UserIcon,
  HeartIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline';
import CategoriesDropdown from './CategoriesDropdown'; // Import the Categories dropdown component
import MensDropdown from './MensDropdown'; // Import the Mens dropdown component
import WomensDropdown from './WomensDropdown'; // Import the Womens dropdown component
import JwelleryDropdown from './JwelleryDropdown'; // Import the Jwellery dropdown component
import PerfumesDropdown from './PerfumesDropdown'; // Import the Perfumes dropdown component
import Footer from '../footer/footer'; // Import the Footer
const Navbar = () => {
  return (
    <div className="w-full relative">
      {/* Main Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        {/* Logo */}
        <h1 className="text-3xl font-bold font-cinzel text-black">TRENDORA</h1>

        {/* Search Bar */}
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border border-gray-300 rounded-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-pink-500">
            <MagnifyingGlassIcon className="w-6 h-6" />
          </button>
        </div>

        {/* User Icons */}
        <div className="flex items-center gap-4 text-gray-700">
          <UserIcon className="w-6 h-6 hover:text-pink-500 cursor-pointer" />
          <div className="relative">
            <HeartIcon className="w-6 h-6 hover:text-pink-500 cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs px-1">0</span>
          </div>
          <div className="relative">
            <ShoppingBagIcon className="w-6 h-6 hover:text-pink-500 cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs px-1">0</span>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-black shadow-sm border-b border-gray-200 relative">
        <ul className="flex gap-6 justify-center py-3 text-md font-semibold text-white">
          <li className="relative cursor-pointer group">
            <a
              href="#"
              className="hover:text-pink-500 before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-pink-500 before:transition-all before:duration-300 hover:before:w-full"
            >
              HOME
            </a>
          </li>
          <li className="relative cursor-pointer group">
            <a
              href="#"
              className="hover:text-pink-500 before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-pink-500 before:transition-all before:duration-300 hover:before:w-full"
            >
              CATEGORIES
            </a>
            {/* Dropdown Component */}
            <div className="absolute top-full left-0 w-full invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-40">
              <CategoriesDropdown />
            </div>
          </li>
          <li className="relative cursor-pointer group">
            <a
              href="#"
              className="hover:text-pink-500 before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-pink-500 before:transition-all before:duration-300 hover:before:w-full"
            >
              MEN'S
            </a>
            {/* Mens Dropdown Component */}
            <div className="absolute top-full left-0 w-[300px] invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-40">
              <MensDropdown />
            </div>
          </li>
          <li className="relative cursor-pointer group">
            <a
              href="#"
              className="hover:text-pink-500 before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-pink-500 before:transition-all before:duration-300 hover:before:w-full"
            >
              WOMEN'S
            </a>
            {/* Womens Dropdown Component */}
            <div className="absolute top-full left-0 w-[300px] invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-40">
              <WomensDropdown/>
            </div>
          </li>
          <li className="relative cursor-pointer group">
            <a
              href="#"
              className="hover:text-pink-500 before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-pink-500 before:transition-all before:duration-300 hover:before:w-full"
            >
              JEWELRY
            </a>
             {/* Jwellery Dropdown Component */}
             <div className="absolute top-full left-0 w-[300px] invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-40">
              <JwelleryDropdown/>
            </div>
          </li>
          <li className="relative cursor-pointer group">
            <a
              href="#"
              className="hover:text-pink-500 before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-pink-500 before:transition-all before:duration-300 hover:before:w-full"
            >
              PERFUME
            </a>
            {/* Perfumes Dropdown Component */}
            <div className="absolute top-full left-0 w-[300px] invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-40">
              <PerfumesDropdown/>
            </div>
          </li>
          <li className="relative cursor-pointer group">
            <a
              href="#"
              className="hover:text-pink-500 before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-pink-500 before:transition-all before:duration-300 hover:before:w-full"
            >
              BLOG
            </a>
          </li>
          <li className="relative cursor-pointer group">
            <a
              href="#"
              className="hover:text-pink-500 before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-pink-500 before:transition-all before:duration-300 hover:before:w-full"
            >
              HOT OFFERS
            </a>
          </li>
        </ul>
      </div>
      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Navbar;
