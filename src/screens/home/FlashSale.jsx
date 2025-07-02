import React, { useState } from "react";
import Countdown from "react-countdown";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProductCard from "../../component/ProductCard";

const FlashSale = ({ products }) => {
  const [isEnded, setIsEnded] = useState(false);
  const flashProducts = products.filter((p) => p.discount);
  const saleEndTime = Date.now() + 3600000; // 1 giờ

  if (isEnded || flashProducts.length === 0) return null;

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      setIsEnded(true);
      return null;
    }
    return (
      <span className="text-white font-bold text-lg">
        {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
      </span>
    );
  };

  return (
    <section className="relative bg-gradient-to-r from-pink-200 via-red-100 to-pink-100 py-16 border-t-4 border-red-400">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Tiêu đề nổi bật */}
        <h2 className="text-4xl md:text-5xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-red-500 to-pink-500 animate-pulse tracking-wide drop-shadow-lg mb-6">
  🔥 FLASH SALE 🔥
</h2>


        {/* Countdown */}
        <div className="text-center font-semibold text-gray-800 mb-8">
          Kết thúc sau:{" "}
          <span className="inline-block px-3 py-1 bg-red-500 text-white rounded-full">
            <Countdown date={saleEndTime} renderer={renderer} />
          </span>
        </div>

        {/* Nút trái/phải */}
        <button className="flash-prev absolute left-0 top-[65%] -translate-y-1/2 z-10 bg-white shadow-lg border border-red-300 p-2 rounded-full hover:bg-red-500 hover:text-white transition">
          <MdChevronLeft size={24} />
        </button>
        <button className="flash-next absolute right-0  top-[65%] -translate-y-1/2 z-10 bg-white shadow-lg border border-red-300 p-2 rounded-full hover:bg-red-500 hover:text-white transition">
          <MdChevronRight size={24} />
        </button>

        {/* Slide sản phẩm */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".flash-next",
            prevEl: ".flash-prev",
          }}
          
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {flashProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FlashSale;
