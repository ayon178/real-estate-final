'use client'
import Image from 'next/image'
import React from 'react'
import { FaRegBuilding } from 'react-icons/fa'
import { motion } from 'framer-motion'

const HighQualityProduct = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white px-6 md:px-16 container mx-auto lg:mt-32 md:mt-20 mt-12">
      {/* Left Side - Image */}
      <motion.div
        className="w-full md:w-3/5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src="https://demo2.wpopal.com/rehomes/wp-content/uploads/2019/10/about-why1.jpg"
          alt="High Quality Kitchen"
          width={700}
          height={455}
          className="w-full rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Right Side - Text */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 text-center md:text-left">
        {/* Icon */}
        <motion.div
          className="flex justify-center md:justify-start mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="p-3 rounded-full">
            <FaRegBuilding className="text-8xl text-[#173E62]" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          High quality products
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          The luxurious and exquisite design harmonious with the surrounding
          architecture provide the best living conditions for every family.
        </motion.p>
      </div>
    </div>
  )
}

export default HighQualityProduct
