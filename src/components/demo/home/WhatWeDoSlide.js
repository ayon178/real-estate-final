// components/ImageSlider.js
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination } from 'swiper'

const WhatWeDoSlide = ({ slides, slidesPerView }) => {
  return (
    <Swiper
      spaceBetween={20} // Adjusted space for better alignment
      slidesPerView={1} // Default for extra-small screens
      pagination={{ clickable: true }}
      centeredSlides={true}
      autoplay={{
        delay: 3800,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
      breakpoints={{
        640: {
          slidesPerView: 1, // Small screens
        },
        768: {
          slidesPerView: 2, // Medium screens
        },
        1024: {
          slidesPerView: slidesPerView, // Large screens
        },
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="w-full mx-auto rounded-lg overflow-hidden mb-12 shadow-md bg-white">
            {/* Image Section */}
            <img
              src={slide.imageUrl.src}
              alt={slide.title}
              className="w-[80%] h-[180px] mx-auto object-cover rounded-lg"
            />

            {/* Text Section */}
            <div className="p-4 flex flex-col items-center">
              <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">
                {slide.title}
              </h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed mb-4">
                {slide.description.length > 100
                  ? `${slide.description.slice(0, 100)}...`
                  : slide.description}
              </p>
              <a
                href="#"
                className="text-primary text-sm font-medium hover:underline flex items-center"
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
