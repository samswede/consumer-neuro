import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle'; // Import Swiper styles for all modules
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCards } from 'swiper/modules';
import React, { ReactNode } from 'react';

type CardsCarouselProps = {
  children: ReactNode;
};

const CardsCarousel: React.FC<CardsCarouselProps> = ({ children }) => {
  return (
    <Swiper
      className="cardSwiperContainer"
      effect={'cards'}
      centeredSlides={true}
      slidesPerView={'auto'}
      modules={[EffectCards]}
    >
      {children}
    </Swiper>
  );
};

export default CardsCarousel;

