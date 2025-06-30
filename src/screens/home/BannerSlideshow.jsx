// src/components/BannerSlideshow.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import banner1 from '../../assets/images/slider_1_master.webp';
import banner2 from '../../assets/images/slider_2_master.webp';
import banner3 from '../../assets/images/slider_3_master.webp';
import banner4 from '../../assets/images/slider_4_master.webp';
import banner5 from '../../assets/images/slider_5_master.webp';
import banner6 from '../../assets/images/slider_6_master.webp';
import banner7 from '../../assets/images/slider_7_master.webp';
import banner8 from '../../assets/images/slider_9_master.webp';
const banners = [banner1, banner2, banner3, banner4, banner5, banner6, banner7, banner8];

const BannerSlideshow = () => {
  return (
    <div className="w-[86%] h-[400px] pt-[12px] mx-auto">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {banners.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlideshow;
