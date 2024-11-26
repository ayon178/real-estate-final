'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Humanitarian = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
        {/* Text Section */}
        <motion.div
          className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left p-4"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Icon */}
          <motion.div
            className="flex items-center justify-center md:justify-start "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://i.ibb.co/p4CmJ8D/RMCLogo-2.png"
              width={300}
              height={300}
              alt="icon"
            />
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-2xl headingFont mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Humanitarian Community
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="text-gray-600 paragraphFont"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            At the housing projects in Rehomes, cultural and sports activities
            are built and developed widely and vibrantly, contributing to the
            creation of a civilized community, fostering relationships, and
            enhancing the city's culture.
          </motion.p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-6/12"
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="https://i.ibb.co/5shRfzh/SEL-RMC-Image.jpg"
            alt="Humanitarian community"
            width={700}
            height={500}
            className="w-full h-auto rounded-lg shadow-xl object-cover"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Humanitarian
