import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
// Importing images from assets folder
import shoeImg from '../images/shoes.jpg';
import hoodieImg from '../images/hoodies.jpg';
import tshirtImg from '../images/tshirt.jpg';
import hatImg from '../images/hat.jpg';
const categories = [
    {
      name: "Clothes",
      subcategories: [
        { name: "Shirt", count: 300 },
        { name: "Shorts & Jeans", count: 60 },
        { name: "Jacket", count: 50 },
        { name: "Dress & Frock", count: 87 },
      ],
    },
    {
         name: "Footwear",
          subcategories: [ 
        { name: "Sports", count: 45 },
        { name: "Formal", count: 75 },
        { name: "Casual", count: 35 },
        { name: "Safety Shoes", count: 26 },
    ],
},
    { 
        name: "Jewellery",
         subcategories: [
        { name: "Earrings", count: 46 },
        { name: "Couple Rings", count: 73 },
        { name: "Necklace", count: 61 },
    ],
 },
    {
         name: "Perfume", subcategories: [
        { name: "Clothes Perfume", count: 50 },
        { name: "Deodorant", count: 60 },
        { name: "Room Freshener", count: 40 },
    ], 
},
    {
         name: "Cosmetics", 
        subcategories: [
        { name: "Shampoo", count: 70 },
        { name: "Makeup Kit", count: 50 },
        { name: "Body Wash", count: 67 },
        { name: "Sunscreen", count: 90 },
    ],
 },
    {
         name: "Glasses", 
        subcategories: [
        { name: "Sun Glasses", count: 50 },
        { name: "Lenses", count:48 },
    ],
 },
    {
         name: "Bags",
        subcategories: [
        { name: "Purse", count: 65 },
        { name: "Wallet", count: 60 },
    ],
},
  ];
  const bestSellers = [
    { id: 1, name: "Baby Fabric Shoes", price: "₹699.00", originalPrice: "₹1500.00", rating: 4.5, image: shoeImg },
    { id: 2, name: "Men's Hoodies T-Shirt", price: "₹799.00", originalPrice: "₹1600.00", rating: 4.7, image: hoodieImg },
    { id: 3, name: "Girls T-Shirt", price: "₹699.00", originalPrice: "₹1200.00", rating: 4.3, image: tshirtImg},
    { id: 4, name: "Woolen Hat For Men", price: "₹779.00", originalPrice: "₹1300.00", rating: 4.2, image: hatImg }
  ];
const productSections = [
  {
    title: "New Arrivals",
    products: [
      { id: 1, name: 'Relaxed Short Full Sleeve', category: 'Clothes', price: '₹599.00', originalPrice: '₹1500.00' },
      { id: 2, name: 'Girls Pink Embro Design', category: 'Clothes', price: '₹799.00', originalPrice: '₹1200.00' },
      { id: 3, name: 'Black Floral Wrap Midi', category: 'Clothes', price: '₹899.00', originalPrice: '₹1300.00' },
      { id: 4, name: 'Pure Garment Dyed Cotton', category: 'Mens Fashion', price: '₹699.00', originalPrice: '₹1300.00' },
      { id: 5, name: 'Classic Cotton Shirt', category: 'Men Fashion', price: '₹599.00', originalPrice: '₹1300.00' },
      { id: 6, name: 'Stylish Blue Denim Jeans', category: 'Denim', price: '₹799.00', originalPrice: '₹1300.00' },
      { id: 7, name: 'Sleeveless Maxi Dress', category: 'Women Fashion', price: '₹899.00', originalPrice: '₹1300.00' },
      { id: 8, name: 'Casual Hoodie', category: 'Mens Fashion', price: '₹999.00', originalPrice: '₹35.00' },
    ],
  },
  {
    title: "Trending",
    products: [
      { id: 9, name: 'Running & Trekking Shoes', category: 'Sports', price: '799999.00', originalPrice: '₹1300.00' },
      { id: 10, name: 'Trekking & Running Shoes', category: 'Sports', price: '₹999.00', originalPrice: '₹1500.00' },
      { id: 11, name: "Women's Party Wear Shoes", category: 'Party Wear', price: '₹999.00', originalPrice: '₹1200.00' },
      { id: 12, name: "Sports Claw Women's Sneakers", category: 'Sports', price: '₹699.00', originalPrice: '₹1600.00' },
      { id: 13, name: 'Running & Trekking Shoes', category: 'Sports', price: '₹899.00', originalPrice: '₹1400.00' },
      { id: 14, name: 'Trekking & Running Shoes', category: 'Sports', price: '₹499.00', originalPrice: '₹1300.00' },
      { id: 15, name: "Women's Party Wear Shoes", category: 'Party Wear', price: '₹799.00', originalPrice: '₹1600.00' },
      { id: 16, name: "Sports Claw Women's Sneakers", category: 'Sports', price: '₹899.00', originalPrice: '₹1900.00' },
    ],
  },
  {
    title: "Top Rated",
    products: [
      { id: 13, name: 'Pocket Watch Leather', category: 'Watches', price: '₹899.00', originalPrice: '₹1400.00' },
      { id: 14, name: 'Silver Deer Heart Necklace', category: 'Jewellery', price: '₹699.00', originalPrice: '₹1600.00' },
      { id: 15, name: 'Titan 100 Ml Women Perfume', category: 'Perfume', price: '₹799.00', originalPrice: '₹1800.00' },
      { id: 16, name: "Men's Leather Reversible Belt", category: 'Accessories', price: '₹599.00', originalPrice: '₹1400.00' },
      { id: 17, name: 'Pocket Watch Leather', category: 'Watches', price: '₹699.00', originalPrice: '₹1700.00' },
      { id: 18, name: 'Silver Deer Heart Necklace', category: 'Jewellery', price: '₹899.00', originalPrice: '₹1200.00' },
      { id: 19, name: 'Titan 100 Ml Women Perfume', category: 'Perfume', price: '₹999.00', originalPrice: '₹1400.00' },
      { id: 20, name: "Men's Leather Reversible Belt", category: 'Accessories', price: '₹799.00', originalPrice: '₹1500.00' },
    ],
  }
];

const ProductGridCarousel = () => {
    const [expandedCategory, setExpandedCategory] = useState(null);
    const swiperRef = useRef(null);
  
    const toggleCategory = (categoryName) => {
      setExpandedCategory(expandedCategory === categoryName ? null : categoryName);
    };

  return (
    <div className="flex max-w-[1200px] mx-auto mt-10 gap-8">
      {/* Sidebar Categories */}
      <aside className="w-1/2 bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-lg font-bold mb-4 border-b pb-2">Categories</h2>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index} className="cursor-pointer">
              <div 
                className="flex justify-between items-center text-gray-600 hover:text-black py-2"
                onClick={() => toggleCategory(category.name)}
              >
                <span>{category.name}</span>
                <span className="font-bold">{expandedCategory === category.name ? '-' : '+'}</span>
              </div>
              {expandedCategory === category.name && category.subcategories.length > 0 && (
                <ul className="ml-4 space-y-1">
                  {category.subcategories.map((sub, idx) => (
                    <li key={idx} className="text-gray-500 text-sm hover:text-pink-500 cursor-pointer">
                      {sub.name} ({sub.count})
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        {/* Best Sellers Section */}
        <h2 className="text-lg font-bold mt-6 mb-4 border-b pb-2">Best Sellers</h2>
        <div className="space-y-3">
          {bestSellers.map((product) => (
            <div key={product.id} className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
              <img src={product.image} alt={product.name} className="w-14 h-14 rounded-md" />
              <div className="text-left">
                <h3 className="text-sm font-semibold">{product.name}</h3>
                <div className="text-yellow-500 text-xs">★ {product.rating}</div>
                <p className="text-pink-500 font-bold">{product.price}</p>
                <p className="text-gray-400 line-through text-xs">{product.originalPrice}</p>
              </div>
            </div>
          ))}
        </div>
      </aside>
      {/* Main Swiper Carousel with Three Sections */}
      <div className="w-3/4 relative">
        {/* Custom Pagination Styling */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 swiper-pagination"></div>
      <Swiper
        modules={[Pagination]}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        grabCursor={true}
        className="h-auto overflow-hidden"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {productSections.map((section) => (
          <SwiperSlide key={section.title} className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-pink-500 border-b pb-2">{section.title}</h2>
            <div className="relative overflow-x-auto scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400">
              <div className="flex gap-4 w-max">
                {section.products.map((product) => (
                  <div key={product.id} className="w-56 p-4 border bg-gray-100 rounded-lg text-left">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.category}</p>
                    <p className="text-pink-500 font-bold">{product.price}</p>
                    {product.originalPrice !== '-' && (
                      <p className="text-gray-400 line-through">{product.originalPrice}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};

export default ProductGridCarousel;
