import React from 'react';

const CategoriesDropdown = () => {
  return (
    <div className="dropdown-panel absolute top-[6px] left-1/2 transform -translate-x-1/3 w-[80vw] bg-white text-gray-600 shadow-lg border border-gray-300 py-8 px-8 hidden group-hover:flex justify-between gap-12 z-50 rounded-lg">
      {/* Electronics Section */}
      <div className="dropdown-section flex flex-col gap-4 w-[22%]">
        <ul>
          <li className="menu-title text-lg font-medium mb-4 border-b border-gray-300 pb-2 text-gray-800">
            <a href="#" className="hover:text-pink-500">Electronics</a>
          </li>
          {['Desktop', 'Laptop', 'Camera', 'Tablet', 'Headphone'].map((item) => (
            <li key={item} className="panel-list-item text-base mb-2">
              <a href="#" className="hover:text-pink-500">{item}</a>
            </li>
          ))}
          <li className="panel-list-item mt-6">
            <a href="#">
              <img
                src={require('../images/electronics-banner-1.jpg')}
                alt="Headphone Collection"
                className="rounded-md shadow-md hover:scale-105 transition-transform"
                width="250"
                height="150"
              />
            </a>
          </li>
        </ul>
      </div>

      {/* Men's Section */}
      <div className="dropdown-section flex flex-col gap-4 w-[22%]">
        <ul>
          <li className="menu-title text-lg font-medium mb-4 border-b border-gray-300 pb-2 text-gray-800">
            <a href="#" className="hover:text-pink-500">Men's</a>
          </li>
          {['Formal', 'Casual', 'Sports', 'Jacket', 'Sunglasses'].map((item) => (
            <li key={item} className="panel-list-item text-base mb-2">
              <a href="#" className="hover:text-pink-500">{item}</a>
            </li>
          ))}
          <li className="panel-list-item mt-6">
            <a href="#">
              <img
                src={require('../images/mens-banner.jpg')}
                alt="Men's Fashion"
                className="rounded-md shadow-md hover:scale-105 transition-transform"
                width="250"
                height="150"
              />
            </a>
          </li>
        </ul>
      </div>

      {/* Women's Section */}
      <div className="dropdown-section flex flex-col gap-4 w-[22%]">
        <ul>
          <li className="menu-title text-lg font-medium mb-4 border-b border-gray-300 pb-2 text-gray-800">
            <a href="#" className="hover:text-pink-500">Women's</a>
          </li>
          {['Formal', 'Casual', 'Perfume', 'Cosmetics', 'Bags'].map((item) => (
            <li key={item} className="panel-list-item text-base mb-2">
              <a href="#" className="hover:text-pink-500">{item}</a>
            </li>
          ))}
          <li className="panel-list-item mt-6">
            <a href="#">
              <img
                src={require('../images/womens-banner.jpg')}
                alt="Women's Fashion"
                className="rounded-md shadow-md hover:scale-105 transition-transform"
                width="250"
                height="150"
              />
            </a>
          </li>
        </ul>
      </div>

      {/* Additional Electronics Section */}
      <div className="dropdown-section flex flex-col gap-4 w-[22%]">
        <ul>
          <li className="menu-title text-lg font-medium mb-4 border-b border-gray-300 pb-2 text-gray-800">
            <a href="#" className="hover:text-pink-500">More Electronics</a>
          </li>
          {['Smart Watch', 'Smart TV', 'Keyboard', 'Mouse', 'Microphone'].map((item) => (
            <li key={item} className="panel-list-item text-base mb-2">
              <a href="#" className="hover:text-pink-500">{item}</a>
            </li>
          ))}
          <li className="panel-list-item mt-6">
            <a href="#">
              <img
                src={require('../images/electronics-banner-2.jpg')}
                alt="Mouse Collection"
                className="rounded-md shadow-md hover:scale-105 transition-transform"
                width="250"
                height="150"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoriesDropdown;
