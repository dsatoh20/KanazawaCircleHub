'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ImgMediaCard from './Card';

interface SwiperComponentProps {
    items: Circle[];
}
export default function SwiperComponent({items}: SwiperComponentProps) {
  return (
    <Swiper
      spaceBetween={2}
      slidesPerView={2.1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {items.map((item, index:number) => (
          <SwiperSlide key={index}><ImgMediaCard item={item}/></SwiperSlide>
        ))}
    </Swiper>
  );
};