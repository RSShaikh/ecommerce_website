import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6">

      
      {/* BRAND DIRECTORY Heading */}
      <h2 className="text-xl font-bold text-pink-500 text-center mb-6">BRAND DIRECTORY</h2>

      {/* Brand Directory Section */}
      <div className="max-w-screen-xl mx-auto flex flex-col gap-4 text-sm">
        {/* Fashion */}
        <div className="flex items-center gap-8">
          <h3 className="text-lg font-bold w-[120px]">Fashion: </h3>
          <ul className="flex flex-wrap items-center gap-4">
            {["T-Shirt", "Shirts", "Shorts & Jeans", "Jacket", "Dress & Frock", "Innerwear", "Hosiery"].map((item, index) => (
              <li key={item} className="hover:text-pink-500 cursor-pointer transition-colors duration-300">
                {item}
                {index < 6 && <span className="border-r border-gray-500 h-5 mx-2"></span>}
              </li>
            ))}
          </ul>
        </div>

        {/* Footwear */}
        <div className="flex items-center gap-8">
          <h3 className="text-lg font-bold w-[120px]">Footwear: </h3>
          <ul className="flex flex-wrap items-center gap-4">
            {["Sport", "Formal", "Boots", "Casual", "Cowboy Shoes", "Safety Shoes", "Party Wear Shoes"].map((item, index) => (
              <li key={item} className="hover:text-pink-500 cursor-pointer transition-colors duration-300">
                {item}
                {index < 6 && <span className="border-r border-gray-500 h-5 mx-2"></span>}
              </li>
            ))}
          </ul>
        </div>

        {/* Jewellery */}
        <div className="flex items-center gap-8">
          <h3 className="text-lg font-bold w-[120px]">Jewellery: </h3>
          <ul className="flex flex-wrap items-center gap-4">
            {["Necklace", "Earrings", "Couple Rings", "Pendants", "Crystal", "Bangles"].map((item, index) => (
              <li key={item} className="hover:text-pink-500 cursor-pointer transition-colors duration-300">
                {item}
                {index < 5 && <span className="border-r border-gray-500 h-5 mx-2"></span>}
              </li>
            ))}
          </ul>
        </div>

        {/* Cosmetics */}
        <div className="flex items-center gap-8">
          <h3 className="text-lg font-bold w-[120px]">Cosmetics: </h3>
          <ul className="flex flex-wrap items-center gap-4">
            {["Shampoo", "Bodywash", "Facewash", "Makeup Kit", "Liner", "Lipstick", "Perfume"].map((item, index) => (
              <li key={item} className="hover:text-pink-500 cursor-pointer transition-colors duration-300">
                {item}
                {index < 6 && <span className="border-r border-gray-500 h-5 mx-2"></span>}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Separator Line */}
      <hr className="my-8 border-gray-500" />

      {/* Lower Section */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-5 gap-8">
        {/* Popular Categories */}
        <div className="footer-column">
          <h3 className="text-lg font-bold pb-2">Popular Categories</h3>
          <ul className="space-y-2">
            {["Fashion", "Electronic", "Cosmetic", "Health", "Watches"].map((item) => (
              <li key={item}><a href="#" className="hover:text-pink-500">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div className="footer-column">
          <h3 className="text-lg font-bold pb-2">Products</h3>
          <ul className="space-y-2">
            {["Prices Drop", "New Products", "Best Sales", "Contact Us", "Sitemap"].map((item) => (
              <li key={item}><a href="#" className="hover:text-pink-500">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Our Company */}
        <div className="footer-column">
          <h3 className="text-lg font-bold pb-2">Our Company</h3>
          <ul className="space-y-2">
            {["Delivery", "Legal Notice", "Terms And Conditions", "About Us", "Secure Payment"].map((item) => (
              <li key={item}><a href="#" className="hover:text-pink-500">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3 className="text-lg font-bold pb-2">Services</h3>
          <ul className="space-y-2">
            {["Prices Drop", "New Products", "Best Sales", "Contact Us", "Sitemap"].map((item) => (
              <li key={item}><a href="#" className="hover:text-pink-500">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
      <div className="footer-column">
        <h3 className="text-lg font-bold pb-2">Contact</h3>
        <p className="flex items-center justify-center gap-2"><i className="fas fa-map-marker-alt"></i> Navi Mumbai, India</p>
        <p className="flex items-center justify-center gap-2"><i className="fas fa-phone"></i> (+91) 8873542617</p>
        <p className="flex items-center justify-center gap-2"><i className="fas fa-envelope"></i> trendora@gmail.com</p>
      </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm text-gray-400">
        <p>Copyright © TRENDORA All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
