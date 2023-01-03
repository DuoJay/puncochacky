import { v4 as uuidv4 } from 'uuid';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';

import React from 'react';

function Slider({ images }) {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        style={{ height: '18rem', width: '18rem' }}
      >
        {images.map(image => (
          <SwiperSlide key={uuidv4()}>
            <div
              className="product__images"
              style={{
                background: `url(${image}) center no-repeat`,
                backgroundSize: 'cover',
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slider;
