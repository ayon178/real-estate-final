'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { logo2 } from '@/app/constant/images'

const Text = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:mt-32 md:mt-20 mt-16 bg-white">
      <img src={logo2.src} className='lg:w-60 w-20 md:w-28' alt="" />
      {/* Animation for h1 */}
      <motion.h1
        className="text-4xl headingFont text-gray-800 mb-5 mt-6"
        initial={{ opacity: 0, y: 50 }} // Initial state (down and transparent)
        whileInView={{ opacity: 1, y: 0 }} // Final state (normal position and visible)
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our Sister Concerns
      </motion.h1>

      {/* Animation for p */}
      <motion.p
        className="text-center paragraphFont text-gray-600 max-w-2xl"
        initial={{ opacity: 0, y: 50 }} // Initial state (down and transparent)
        whileInView={{ opacity: 1, y: 0 }} // Final state (normal position and visible)
        transition={{ duration: 0.8, delay: 0.2 }} // Slight delay for p element
        viewport={{ once: true }}
      >
        Our mission is to engage in issues that are of concern to individuals,
        families, and communities through an uncompromising commitment to create
        outstanding living, work, and leisure environments.
      </motion.p>
    </div>
  )
}

export default Text
