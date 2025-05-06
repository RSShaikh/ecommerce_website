import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import NaviDropdown from './navidropdown';
import  ProductGridCarousel from './ProductGrid';
// Import React Icons for Categories
import { GiDress, GiMonclerJacket, GiSunglasses, GiTrousers, GiTShirt, GiWatch, GiWesternHat,GiHoodie } from "react-icons/gi";

const slides = [
  {
    id: 1,
    image: require('../images/banner-1.jpg'),
    title: "Trending Item",
    subtitle: "WOMEN'S LATEST FASHION SALE",
    price: "Up to 70% off",
    buttonText: "SHOP NOW",
  },
  {
    id: 2,
    image: require('../images/banner-2.jpg'),
    title: "Exclusive Offer",
    subtitle: "BEST SUMMER COLLECTION",
    price: "Up to 50% off",
    buttonText: "VIEW COLLECTION",
  },
  {
    id: 3,
    image: require('../images/banner-3.jpg'),
    title: "Just for You",
    subtitle: "STYLISH TRENDING APPAREL",
    price: "Limited Time Deals",
    buttonText: "EXPLORE NOW",
  },
];

const categoriesSlide1 = [
  { id: 1, icon: <GiDress className="w-14 h-14 text-red-500" />, name: "DRESS & FROCK", itemCount: 53 },
  { id: 2, icon: <GiMonclerJacket className="w-14 h-14 text-blue-500" />, name: "WINTER WEAR", itemCount: 58 },
  { id: 3, icon: <GiSunglasses className="w-14 h-14 text-yellow-500" />, name: "GLASSES & LENS", itemCount: 68 },
  { id: 4, icon: <GiTrousers className="w-14 h-14 text-green-500" />, name: "SHORTS & JEANS", itemCount: 84 },
];

const categoriesSlide2 = [
  { id: 5, icon: <GiTShirt className="w-14 h-14 text-orange-500" />, name: "T-SHIRTS", itemCount: 45 },
  { id: 6, icon: <GiHoodie className="w-14 h-14 text-blue-600" />, name: "HOODIES", itemCount: 30 },
  { id: 7, icon: <GiWatch className="w-14 h-14 text-gray-500" />, name: "WATCHES", itemCount: 27 },
  { id: 8, icon: <GiWesternHat className="w-14 h-14 text-purple-500" />, name: "HATS & CAPS", itemCount: 39 },
];

const Carousel = () => {
  const swiperRef = useRef(null);

  return (
    <div className="relative w-full max-w-[1200px] mx-auto mt-4">
      {/* Navigation Dropdown */}
      <div className="mb-8">
        <NaviDropdown />
      </div>

      {/* Autoplay Swiper Carousel */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        grabCursor={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="h-[450px] rounded-lg overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover rounded-lg"
              onMouseEnter={() => swiperRef.current.autoplay.stop()}
              onMouseLeave={() => swiperRef.current.autoplay.start()}
            />
            <div className="absolute left-10 top-1/4 flex flex-col items-start text-left text-black p-6">
              <h2 className="text-[18px] font-semibold text-pink-500">{slide.title}</h2>
              <p className="text-[36px] font-extrabold">{slide.subtitle}</p>
              <p className="text-[20px] mt-2 text-gray-600">{slide.price}</p>
              <button 
                className="mt-4 px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-md"
                onMouseEnter={() => swiperRef.current.autoplay.stop()}
                onMouseLeave={() => swiperRef.current.autoplay.start()}
              >
                {slide.buttonText}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Manual Swipe Carousel - Two Slides for Categories */}
      <div className="mt-10">
        <Swiper
          modules={[Pagination]} 
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          grabCursor={true}
          className="h-[250px] rounded-lg overflow-hidden"
        >
          {/* First Slide - Existing Categories */}
          <SwiperSlide className="relative bg-gray-100 rounded-lg p-6">
            <div className="flex justify-around items-center">
              {categoriesSlide1.map((category) => (
                <div key={category.id} className="flex flex-col items-center text-center">
                  {category.icon} {/* React Icons */}
                  <h2 className="text-lg font-bold">{category.name}</h2>
                  <p className="text-sm text-gray-600">{category.itemCount} items</p>
                  <a href="#" className="mt-2 text-pink-500 underline">Show All</a>
                </div>
              ))}
            </div>
          </SwiperSlide>

          {/* Second Slide - New Categories */}
          <SwiperSlide className="relative bg-gray-100 rounded-lg p-6">
            <div className="flex justify-around items-center">
              {categoriesSlide2.map((category) => (
                <div key={category.id} className="flex flex-col items-center text-center">
                  {category.icon} {/* React Icons */}
                  <h2 className="text-lg font-bold">{category.name}</h2>
                  <p className="text-sm text-gray-600">{category.itemCount} items</p>
                  <a href="#" className="mt-2 text-pink-500 underline">Show All</a>
                </div>
              ))}
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
      {/* ✅ Product Grid Below Carousel */}
      < ProductGridCarousel />
    </div>
  );
};

export default Carousel;
