import { missionImage } from '@/app/constant/images'
import React from 'react'
import { motion } from 'framer-motion'

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-24 items-center mb-10 px-4 md:px-0 container mx-auto">
      {/* Motion for the image (animating from the left) */}
      <motion.div
        className="w-full md:w-1/2 h-[400px] md:h-[600px]"
        initial={{ opacity: 0, x: -100 }} // Start from the left
        animate={{ opacity: 1, x: 0 }} // Animation to normal position
        transition={{ duration: .8 }}
        whileInView={{ opacity: 5, x: 5 }} // Animation trigger once in viewport
        viewport={{ once: true }} // Trigger animation only once
      >
        <motion.img
          className="w-full h-full object-cover"
          src={missionImage.src}
          alt="About Us"
        />
      </motion.div>

      {/* Motion for the text (animating from the right) */}
      <motion.div
        className="w-full md:w-1/2 pr-0 md:pr-32 lg:pr-64"
        initial={{ opacity: 0, x: 100 }} // Start from the right
        animate={{ opacity: 1, x: 0 }} // Animation to normal position
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, x: 0 }} // Animation trigger once in viewport
        viewport={{ once: true }} // Trigger animation only once
      >
        <motion.p
          className="text-secondary text-[10px] md:text-[11px]"
          initial={{ opacity: 0, x: 100 }} // Start from the right
          whileInView={{ opacity: 1, x: 0 }} // Move to normal position
          transition={{ duration: 0.8, delay: 0.2 }} // Delay for sequential animation
          viewport={{ once: true }}
        >
          OUR MISSION.
        </motion.p>
        {/* added animation here */}

        <motion.h1
          className="text-headingText text-[30px] md:text-[40px] mt-6"
          initial={{ opacity: 0, x: 100 }} // Start from the right
          whileInView={{ opacity: 1, x: 0 }} // Move to normal position
          transition={{ duration: 0.8, delay: 0.5 }} // Delay for sequential animation
          viewport={{ once: true }}
        >
          To be the most trusted name in real estate globally 
        </motion.h1>
        {/* added animation here */}

        <motion.p
          className="text-paraText text-[14px] md:text-[15px] leading-7 my-10"
          initial={{ opacity: 0, x: 100 }} // Start from the right
          whileInView={{ opacity: 1, x: 0 }} // Move to normal position
          transition={{ duration: 0.8, delay: 0.7 }} // Delay for sequential animation
          viewport={{ once: true }}
        >
          We continuously strive to provide the best living experience. Today,
          better than yesterday. Tomorrow, better than today. By developing
          landmark buildings and expansive residences in record time, ensuring
          the most fulfilling lives to their occupants.
        </motion.p>

        <motion.a
          href="#"
          className="inline-block bg-[#bfa980] hover:bg-[#a38c6e]  text-white text-md px-6 md:px-8 py-2 md:py-3 rounded-lg transition duration-300 ease-in-out"
          initial={{ opacity: 0, x: 100 }} // Start from the right
          whileInView={{ opacity: 1, x: 0 }} // Move to normal position
          transition={{ duration: 0.3, delay: 0.6 }} // Delay for sequential animation
          viewport={{ once: true }}
        >
          More About Us ➝
        </motion.a>
      </motion.div>
    </div>
  )
}

export default AboutUs
