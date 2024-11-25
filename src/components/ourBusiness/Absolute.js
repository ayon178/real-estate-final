'use client'
import Image from 'next/image'
import React from 'react'
import { CiLock } from "react-icons/ci"
import { motion } from 'framer-motion'

const Absolute = () => {
  return (
    <div className="flex flex-col md:flex-row flex-col-reverse items-center justify-between p-6 md:p-12 container mx-auto">
      {/* Left Section - Text Content */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center md:items-start">
          {/* Icon */}
          <motion.div
            className="text-blue-700 text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <CiLock className="text-8xl text-[#173E62]" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-2xl font-bold mb-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Absolute Security
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="text-gray-600 pr-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Advanced security system with modern equipment, professional 24/7
            security staff. Regular security patrols along with guard posts at
            streets’ ends. At Rehomes Riverside, there is a public camera system
            at 100% of the roads.
          </motion.p>
        </div>
      </motion.div>

      {/* Right Section - Image */}
      <motion.div
        className="flex-1 mt-6 md:mt-0 md:ml-6 flex justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="https://demo2.wpopal.com/rehomes/wp-content/uploads/2019/10/about-why4.jpg"
          alt="Security Staff"
          width={700}
          height={400}
          className="rounded-lg object-cover"
        />
      </motion.div>
    </div>
  )
}

export default Absolute
