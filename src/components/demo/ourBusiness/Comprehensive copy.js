'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Comprehensive = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center p-6 md:p-12 lg:px-24 container mx-auto">
      {/* Left Side Image */}
      <motion.div
        className="md:w-3/5 w-full flex justify-center md:justify-end p-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src="https://i.ibb.co/Qf3FnqC/Orchard-Convention-Hall-Image.jpg"
          alt="Comprehensive Amenities"
          width={700}
          height={455}
          className="rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Right Side Content */}
      <motion.div
        className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left p-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Centering the Icon on Small Devices */}
        <motion.div
          className="flex items-center justify-center md:justify-start "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://i.ibb.co/DGcSm6C/OCHLogo-1.png"
            width={300}
            height={300}
            alt="icon"
          />
        </motion.div>

        <motion.h2
          className="text-2xl headingFont mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Comprehensive Amenities
        </motion.h2>

        <motion.p
          className="text-gray-600 paragraphFont"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Stable water supply system with ready hot water. Strong backup power
          system in public areas. The landscape infrastructures of streets are
          arranged in harmony with the common amenities for residents.
        </motion.p>
      </motion.div>
    </div>
  )
}

export default Comprehensive
