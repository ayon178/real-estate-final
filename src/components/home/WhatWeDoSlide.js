import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper';
import { motion } from 'framer-motion';

const ImageSlider = ({ slides, slidesPerView }) => {
  // Define a single animation configuration for h1 and p elements
  const textAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay: 0.2 }
  };

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={slidesPerView}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: slidesPerView,
        },
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="w-full flex-shrink-0 mx-auto rounded-lg shadow-lg overflow-hidden mb-20">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              src={slide.imageUrl}
              alt={slide.title}
              className="w-full h-96 object-cover"
            />
            <div className="p-6 flex flex-col items-center">
              <motion.h3
                {...textAnimation}
                className="text-2xl text-center text-headingText font-semibold mb-8"
              >
                {slide.title}
              </motion.h3>
              <motion.p
                {...textAnimation}
                className="text-gray-600 mb-4 text-center"
              >
                {slide.description}
              </motion.p>
              <motion.a
                {...textAnimation}
                href="#"
                className="text-primary text-center hover:underline flex items-center"
              >
                Explore More &rarr;
              </motion.a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;