// components/ImageSlider.js
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay } from 'swiper'
import { Pagination } from 'swiper'

const WhatWeDoSlide = ({ slides, slidesPerView }) => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={slidesPerView}
      pagination={{ clickable: true }}
      centeredSlides={true}
      autoplay={{
        delay: 3800, // Delay between slides in ms
        disableOnInteraction: false, // Continue autoplay after user interaction
      }}
      modules={[Autoplay, Pagination]} // Include modules correctly here
      breakpoints={{
        // Define breakpoints for responsive behavior
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: slidesPerView, // Pass the slidesPerView prop for larger screens
        },
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className={`w-full mx-auto rounded-lg overflow-hidden mb-20`}>
            <img
              src={slide.imageUrl.src}
              alt={slide.title}
              className="w-[70%] mx-auto object-cover"
            />
            <div
              style={{ height: '20.625rem' }}
              className="p-6 flex flex-col items-center"
            >
              {/* <h3 className="text-2xl text-center text-headingText font-semibold mb-8">
                {slide.title}
              </h3> */}
              <p className="text-gray-600 paragraphFont mb-4 text-center text-[14px] ">
                {slide.description}
              </p>
              <a
                href="#"
                className="text-primary paragraphFont text-center hover:underline flex items-center"
              >
                Explore More &rarr;
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default WhatWeDoSlide
