import React from 'react'
import {
  completedProject,
  ongoingProject,
  readyProject,
  upcomingProject,
} from '@/app/constant/images'
import { motion } from 'framer-motion'

const FeatureProject2 = () => {
  const projects = [
    {
      id: 1,
      title: 'Completed Projects',
      location: 'View our completed projects',
      imageUrl: completedProject,
      description: 'Explore our portfolio of completed projects.',
      number: '01',
    },
    {
      id: 2,
      title: 'Ongoing Projects',
      location: 'View our ongoing projects',
      imageUrl: ongoingProject,
      description: 'Check out what we are currently working on.',
      number: '02',
    },
    {
      id: 3,
      title: 'Ready Projects',
      location: 'View our ready projects',
      imageUrl: readyProject,
      description: 'Discover projects that are ready to launch.',
      number: '03',
    },
    {
      id: 4,
      title: 'Upcoming Projects',
      location: 'View our upcoming projects',
      imageUrl: upcomingProject,
      description: 'Take a look at our future plans.',
      number: '04',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        ease: 'easeInOut',
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <div className="pt-8 flex flex-col justify-center max-w-6xl mx-auto mt-28">
      {/* Top Section */}
      <motion.p
        className="paragraphFont text-secondary text-[12px] md:text-[14px] text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.3 }}
        viewport={{ once: true }}
      >
        FEATURED PROJECTS.
      </motion.p>

      <motion.h1
        className="headingFont text-headingText text-[30px] md:text-[40px] mt-3 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.5 }}
        viewport={{ once: true }}
      >
        Where happiness lives
      </motion.h1>

      {/* Bottom Section - Image Grid */}
      <motion.div
        className="grid grid-cols-1 w-full md:grid-cols-2 gap-1 mx-auto mt-14 min-h-screen"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: false }}
      >
        {projects.map(item => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            className="relative border-2 border-black overflow-hidden cursor-pointer group"
          >
            {/* Grid Item */}
            <div
              className="lg:h-full md:[500px] h-[400px] bg-cover bg-center flex flex-col justify-end p-6 relative hover:scale-105 transition-transform duration-700 "
              style={{ backgroundImage: `url(${item.imageUrl.src})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:scale-105 transition-transform duration-700"></div>
              {/* Content */}
              <h3 className="text-white text-lg font-semibold border-b-2 border-[#f26622] w-max z-10">
                {item.title}
              </h3>
              <p className="text-white mt-2 z-10">{item.description}</p>
              <button className="mt-4 px-4 py-2 bg-white/30 text-[#000] font-bold z-10 hover:bg-yellow-500 transition-all w-36 md:w-40 rounded-md">
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default FeatureProject2
