'use client'
import React from 'react'
import { PiLampLight } from "react-icons/pi"
import { motion } from 'framer-motion'

const Comprehensive = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center p-6 md:p-12 lg:px-24 container mx-auto">
      {/* Left Side Content */}
      <motion.div
        className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left p-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Centering the Icon on Small Devices */}
        <motion.div
          className="flex items-center justify-center md:justify-start mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <PiLampLight className="text-8xl text-[#173E62]" />
        </motion.div>

        <motion.h2
          className="text-2xl font-bold mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Comprehensive Amenities
        </motion.h2>

        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Stable water supply system with ready hot water. Strong backup power
          system in public areas. The landscape infrastructures of streets are
          arranged in harmony with the common amenities for residents.
        </motion.p>
      </motion.div>

      {/* Right Side Image */}
      <motion.div
        className="md:w-3/5 w-full flex justify-center md:justify-end p-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src="https://demo2.wpopal.com/rehomes/wp-content/uploads/2019/10/about-why2-700x455.jpg"
          alt="Comprehensive Amenities"
          width={700}
          height={455}
          className="rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  )
}

export default Comprehensive
