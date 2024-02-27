import { Swiper } from 'swiper/react';
import 'swiper/css/bundle'; // Import Swiper styles for all modules
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import React, { ReactNode } from 'react';

type SwiperCarouselProps = {
  children: ReactNode;
  rotate?: number;
  depth?: number;
  slideShadows?: boolean;
};

const SwiperCarousel: React.FC<SwiperCarouselProps> = ({ children, rotate, depth, slideShadows }) => {
  return (
    <Swiper
    autoplay={{
        delay: 2000,
        disableOnInteraction: false,
    }}
    className="cursor-pointer hover:cursor-grab"
    effect={'coverflow'}
    loop={true}
    centeredSlides={true}
    slidesPerView={'auto'}
    coverflowEffect={{
      rotate: rotate || 40,
      stretch: 0,
      depth: depth || 10,
      modifier: 1,
      slideShadows: slideShadows || false,
    }}
    modules={[EffectCoverflow, Pagination]}
    >
      {children}
    </Swiper>
  );
};

export default SwiperCarousel;

