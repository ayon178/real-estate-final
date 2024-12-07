'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import { motion } from 'framer-motion'
import {
  completedProject,
  ongoingProject,
  readyProject,
  upcomingProject,
} from '@/app/constant/images'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'

const FeaturedProject = () => {
  const projects = [
    {
      id: 1,
      title: 'Completed Projects',
      location: 'View our completed projects',
      imageUrl: completedProject,
      number: '01',
    },
    {
      id: 2,
      title: 'Ongoing Projects',
      location: 'View our ongoing projects',
      imageUrl: ongoingProject,
      number: '02',
    },
    {
      id: 3,
      title: 'Ready Projects',
      location: 'View our ready projects',
      imageUrl: readyProject,
      number: '03',
    },
    {
      id: 4,
      title: 'Upcoming Projects',
      location: 'View our upcoming projects',
      imageUrl: upcomingProject,
      number: '04',
    },
  ]

  return (
    <div className=" px-4 py-12 md:py-24 bg-[#F3F4F6]">
      <div className="container mx-auto">
        {/* Title Section */}
        <motion.p
          className="paragraphFont text-secondary text-[12px] md:text-[14px]  text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          FEATURED PROJECTS.
        </motion.p>

        <motion.h1
          className="headingFont text-headingText text-[30px] md:text-[40px] mt-3 mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Where happiness lives
        </motion.h1>

        {/* Swiper Section */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          loop={true}
          // centeredSlides={true}
          autoplay={{
            delay: 3800,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            600: { slidesPerView: 1 }, // For mobile devices, show 1 slide
            768: { slidesPerView: 2 }, // For tablets, show 2 slides
            1024: { slidesPerView: 4 }, // For desktops, show 3 slides
          }}
          className="w-full"
        >
          {projects.map(project => (
            <SwiperSlide key={project.id}>
              <motion.div
                className="relative group w-full mx-auto bg-[#BABABA] mb-20"
                // initial={{ opacity: 0, y: 50 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.8, delay: 0.3 }}
                // viewport={{ once: true }}
              >
                {/* Project Image Container */}
                <div className="w-full z-10 relative h-[500px] sm:h-[650px] md:h-[400px] lg:h-[450px]">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transform group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#173E62] to-transparent opacity-80"></div>
                </div>

                {/* Project Info */}
                <div className="absolute left-[-5px] z-40 bottom-0 bg-white p-4 md:p-6 lg:w-[250px] w-80 shadow-lg">
                  <h2 className="headingFont text-lg lg:text-xl text-headingText">
                    {project.title}
                  </h2>
                  <p className="paragraphFont text-sm lg:text-md text-gray-500">
                    {project.location}
                  </p>
                </div>

                {/* Number Overlay */}
                <div className="absolute bottom-5 right-5 text-7xl lg:text-9xl font-bold text-white/30">
                  {project.number}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default FeaturedProject
