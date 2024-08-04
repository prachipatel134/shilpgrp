import React from 'react'
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import avtar from '../Images/Avatar.png'



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';

export default function  () {
  return (
    <div className='bg-blue section-padding py-[50px]'>
      {/* <Container > */}
        <div className='text-center lg:mb-[70px] mb-[30px]'>
      <h2 className="lg:text-[50px] text-[36px] font-bold">Our Testimonials
      <br/>  <span className='font-bold  text-[40px ]lg:text-[60px] text-[#0061E0] '>What people say’s</span></h2></div>

      <Swiper
        spaceBetween={30}
 
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // slidesPerView={3}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
      
          640: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          
          768: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1024:{
            slidesPerView: 3,
            spaceBetween: 50,
          }
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><TestimonialCard testimonialname="Lorem ipsum " testimonialtitle="Worem ipsum " testimonialtext="Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia " testimonialimg={avtar}/> </SwiperSlide>
        <SwiperSlide><TestimonialCard testimonialname="Lorem ipsum " testimonialtitle="Worem ipsum " testimonialtext="Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia " testimonialimg={avtar}/> </SwiperSlide>
        <SwiperSlide><TestimonialCard testimonialname="Lorem ipsum " testimonialtitle="Worem ipsum " testimonialtext="Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia " testimonialimg={avtar}/> </SwiperSlide>
        <SwiperSlide><TestimonialCard testimonialname="Lorem ipsum " testimonialtitle="Worem ipsum " testimonialtext="Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia " testimonialimg={avtar}/> </SwiperSlide>
        <SwiperSlide><TestimonialCard testimonialname="Lorem ipsum " testimonialtitle="Worem ipsum " testimonialtext="Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia " testimonialimg={avtar}/> </SwiperSlide>
        <SwiperSlide><TestimonialCard testimonialname="Lorem ipsum " testimonialtitle="Worem ipsum " testimonialtext="Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia " testimonialimg={avtar}/> </SwiperSlide> <SwiperSlide><TestimonialCard testimonialname="Lorem ipsum " testimonialtitle="Worem ipsum " testimonialtext="Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia " testimonialimg={avtar}/> </SwiperSlide>

      </Swiper>
      {/* </Container> */}
    </div>
  )
}
