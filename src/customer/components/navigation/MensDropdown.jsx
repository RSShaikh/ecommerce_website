import React from 'react';

const MensDropdown = () => {
  return (
    <div className="dropdown-panel absolute top-[6px] left-0 w-[160px] bg-white text-gray-600 shadow-lg border border-gray-300 py-4 px-6 hidden group-hover:block z-50 rounded-lg">
      <ul className="flex flex-col gap-3">
        <li className="panel-list-item text-sm font-medium text-left">
          <a href="#" className="hover:text-pink-500">Shirt</a>
        </li>
        <li className="panel-list-item text-sm font-medium text-left">
          <a href="#" className="hover:text-pink-500">Shorts & Jeans</a>
        </li>
        <li className="panel-list-item text-sm font-medium text-left">
          <a href="#" className="hover:text-pink-500">Safety Shoes</a>
        </li>
        <li className="panel-list-item text-sm font-medium text-left">
          <a href="#" className="hover:text-pink-500">Wallet</a>
        </li>
      </ul>
    </div>
  );
};

export default MensDropdown;
