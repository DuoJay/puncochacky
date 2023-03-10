import { v4 as uuidv4 } from 'uuid';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';

import React from 'react';

function Slider({ images, productName }) {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        style={{ height: '100%', width: '100%' }}
      >
        {images.map(image => (
          <SwiperSlide key={uuidv4()}>
            <div
              style={{
                background: `url(${image}) center no-repeat`,
                backgroundSize: 'cover',
                width: '100%',
                height: '100%',
              }}
              role="img"
              alt={productName}
              aria-label={productName}
              title={productName}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slider;
