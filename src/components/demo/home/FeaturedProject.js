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
      location: 'New York, USA',
      imageUrl: completedProject,
      number: '01',
    },
    {
      id: 2,
      title: 'Ongoing Projects',
      location: 'Texas, USA',
      imageUrl: ongoingProject,
      number: '02',
    },
    {
      id: 3,
      title: 'Ready Projects',
      location: 'Los Angeles, USA',
      imageUrl: readyProject,
      number: '03',
    },
    {
      id: 4,
      title: 'Upcoming Projects',
      location: 'South Carolina, USA',
      imageUrl: upcomingProject,
      number: '04',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12 md:py-24 bg-[#F3F4F6]">
      {/* Title Section */}
      <motion.p
        className="text-secondary text-[10px] md:text-[11px] text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        FEATURED PROJECTS.
      </motion.p>

      <motion.h1
        className="text-headingText text-[30px] md:text-[40px] mt-6 mb-10 text-center"
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
        spaceBetween={30}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
       
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <motion.div
              className="relative group w-full mx-auto bg-[#BABABA] "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {/* Project Image */}
              <div className="w-full overflow-hidden relative aspect-[4/6] sm:aspect-[4/3] md:aspect-[4/3.5] bg-[#BABABA]  ">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#173E62] to-transparent opacity-80"></div>
              </div>

              {/* Project Info */}
              <div className="absolute left-0 bottom-0 bg-white p-4 md:p-6 lg:w-[300px] w-96  shadow-lg">
                <h2 className="text-2xl lg:text-4xl text-headingText font-semibold">
                  {project.title}
                </h2>
                <p className="text-sm lg:text-lg text-gray-500">{project.location}</p>
              </div>

              {/* Number Overlay */}
              <div className="absolute bottom-5 right-10 text-7xl lg:text-9xl font-bold text-white/30">
                {project.number}
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default FeaturedProject;
