import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import ProductCard from "../../component/ProductCard";

const FeaturedSlider = ({ products }) => {
  const featured = products.filter((p) => p.featured);

  if (featured.length <= 3) return null;

  return (
    <section className="bg-pink-50 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">
          🌟 Sản phẩm nổi bật
        </h2>

        {/* Custom navigation buttons */}
        <button
          className="swiper-button-prev-custom absolute left-0 top-[60%] -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-pink-500 hover:text-white transition"
        >
          <MdChevronLeft size={24} />
        </button>
        <button
          className="swiper-button-next-custom absolute right-0 top-[60%] -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-pink-500 hover:text-white transition"
        >
          <MdChevronRight size={24} />
        </button>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-10"
        >
          {featured.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedSlider;
