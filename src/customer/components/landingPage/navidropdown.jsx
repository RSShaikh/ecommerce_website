import React, { useState } from 'react';
import Navbar from '../navigation/navigation'; // Import Navigation
import { UserCircleIcon, ClipboardDocumentCheckIcon, XCircleIcon, KeyIcon } from '@heroicons/react/24/outline';
// import  Carousel from './carousel'; 
const NaviDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
        
      {/* Full Navigation */}
      <Navbar toggleDropdown={toggleDropdown} />

      {/* Dropdown Content - Adjusted position & reduced gap */}
      {isOpen && (
        <div className="absolute top-16 right-10 w-52 bg-gradient-to-b from-black to-gray-800 text-white rounded-md shadow-lg z-[999]">
          <a href="#" className="flex items-center px-5 py-2 hover:bg-gray-700">
            <UserCircleIcon className="w-6 h-6 mr-3" />
            Sign In
          </a>
          <a href="#" className="flex items-center px-5 py-2 hover:bg-gray-700">
            <KeyIcon className="w-6 h-6 mr-3" />
            Log In
          </a>
        </div>
      )}
      {/* carousel */}
    {/* <div className="mb-8">
    <Carousel />
  </div> */}
    </div>
    
  );
};

export default NaviDropdown;
