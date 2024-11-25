'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Service = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 py-8 px-4 md:px-16 container mx-auto">
      {/* Text Section */}
      <div className="flex flex-col md:w-1/2 text-center md:text-left">
        {/* Icon */}
        <motion.div
          className="flex items-center justify-center md:justify-start "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://i.ibb.co/Ykmzs8v/Logo-1.png"
            width={300}
            height={300}
            alt="icon"
          />
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-2xl headingFont mb-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Professional Services
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-600 paragraphFont"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          The customer service center is ready to serve 24/7, support the
          residents to provide information about the urban area, utility
          services, and receive requests for services of ReHomes.
        </motion.p>
      </div>

      {/* Image Section */}
      <motion.div
        className="w-full md:w-3/5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src="https://i.ibb.co/TtkDt7Q/SEL-Nibash-Image.jpg"
          alt="Professional Services"
          width={700}
          height={455}
          className="rounded-lg"
        />
      </motion.div>
    </div>
  )
}

export default Service
