'use client'
import Image from 'next/image'
import React from 'react'
import { RiCustomerService2Fill } from "react-icons/ri"
import { motion } from 'framer-motion'

const Service = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 py-8 px-4 md:px-16 container mx-auto">
      {/* Image Section */}
      <motion.div
        className="w-full md:w-3/5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src="https://demo2.wpopal.com/rehomes/wp-content/uploads/2019/10/about-why3.jpg"
          alt="Professional Services"
          width={700}
          height={455}
          className="rounded-lg"
        />
      </motion.div>

      {/* Text Section */}
      <div className="flex flex-col md:w-1/2 text-center md:text-left">
        {/* Icon */}
        <motion.div
          className="flex items-center justify-center md:justify-start mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <RiCustomerService2Fill className='text-8xl text-[#173E62]' />
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-xl font-semibold mb-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Professional Services
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          The customer service center is ready to serve 24/7, support the
          residents to provide information about the urban area, utility
          services, and receive requests for services of ReHomes.
        </motion.p>
      </div>
    </div>
  )
}

export default Service
