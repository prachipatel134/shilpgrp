import React, { useRef, useState } from 'react';

import { Container, Row,Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Services from './Services';

export default function ServicesSlider() {
  return (
    <>
      <div className='section-padding'>
      {/* <Container> */}
      <Swiper navigation={true} modules={[Navigation]} className="ServiceSwiper">
        <SwiperSlide><Services /></SwiperSlide>
        <SwiperSlide><Services /></SwiperSlide>
        <SwiperSlide><Services /></SwiperSlide>
      
      </Swiper>
      {/* </Container> */}
      
      </div>
    </>
  );
}
