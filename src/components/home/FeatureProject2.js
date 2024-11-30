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

  const variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <div className="pt-8 min-h-screen flex flex-col justify-center container mx-auto">
      {/* Top Section */}
      <motion.p
        className="paragraphFont text-secondary text-[12px] md:text-[14px] text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        FEATURED PROJECTS.
      </motion.p>

      <motion.h1
        className="headingFont text-headingText text-[30px] md:text-[40px] mt-3  text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        Where happiness lives
      </motion.h1>

      {/* Bottom Section - Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 p-6  ">
        {projects.map(item => (
          <motion.div
            key={item.id}
            initial="hidden"
            whileInView="visible"
            variants={variants}
            viewport={{ once: true, amount: 0.1 }} // Trigger animation when 10% of the element is in view
            className="relative border-2 border-black overflow-hidden cursor-pointer group"
          >
            {/* Grid Item */}
            <div
              className="h-72 bg-cover bg-center flex flex-col justify-end p-6 relative hover:scale-105 transition-all duration-1000"
              style={{ backgroundImage: `url(${item.imageUrl.src})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:scale-105 transition-transform duration-300"></div>
              {/* Content */}
              <h3 className="text-white text-lg font-semibold border-b-2 border-[#f26622] w-max z-10">
                {item.title}
              </h3>
              <p className="text-white mt-2 z-10">{item.description}</p>
              <button className="mt-4 px-4 py-2 bg-yellow-400 text-[#f26622] font-bold z-10 hover:bg-yellow-500 transition-all w-36 md:w-40 rounded-md">
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default FeatureProject2
