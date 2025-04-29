import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import {
  MagnifyingGlassIcon,
  UserIcon,
  HeartIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <div className="w-full">
      {/* Top bar */}
      <div className="bg-white text-gray-600 text-sm py-1 px-4 flex justify-between items-center border-b border-gray-200">
        {/* Social Icons */}
        <div className="flex gap-2">
          <a href="#" className="bg-gray-200 text-blue-600 rounded-full p-2 hover:bg-blue-600 hover:text-white transition">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="bg-gray-200 text-blue-400 rounded-full p-2 hover:bg-blue-400 hover:text-white transition">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="bg-gray-200 text-pink-500 rounded-full p-2 hover:bg-pink-500 hover:text-white transition">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="bg-gray-200 text-blue-700 rounded-full p-2 hover:bg-blue-700 hover:text-white transition">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        {/* Free Shipping Text */}
        <div className="text-center">FREE SHIPPING THIS WEEK ORDER OVER - $55</div>

        {/* Currency and Language */}
        <div className="flex gap-4 text-sm">
          <div>USD $</div>
          <div>ENGLISH</div>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
        {/* Logo */}
        <h1 className="text-3xl font-bold font-cinzel">TRENDORA</h1>

        {/* Search Bar */}
        <div className="relative w-[30%]">
          <input
            type="text"
            placeholder="Enter your product name..."
            className="w-full border border-gray-300 rounded-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-pink-500">
            <MagnifyingGlassIcon className="w-5 h-5" />
          </button>
        </div>

        {/* User Icons */}
        <div className="flex items-center gap-4 text-gray-700">
          <UserIcon className="w-8 h-8" />
          <div className="relative">
            <HeartIcon className="w-8 h-8" />
            <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white rounded-full px-1">0</span>
          </div>
          <div className="relative">
            <ShoppingBagIcon className="w-8 h-8" />
            <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white rounded-full px-1">0</span>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <ul className="flex gap-8 justify-center py-2 text-md font-semibold text-gray-700">
          <li className="hover:text-pink-500 cursor-pointer">HOME</li>
          <li className="hover:text-pink-500 cursor-pointer">CATEGORIES</li>
          <li className="hover:text-pink-500 cursor-pointer">MEN'S</li>
          <li className="hover:text-pink-500 cursor-pointer">WOMEN'S</li>
          <li className="hover:text-pink-500 cursor-pointer">JEWELRY</li>
          <li className="hover:text-pink-500 cursor-pointer">PERFUME</li>
          <li className="hover:text-pink-500 cursor-pointer">BLOG</li>
          <li className="hover:text-pink-500 cursor-pointer">HOT OFFERS</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
