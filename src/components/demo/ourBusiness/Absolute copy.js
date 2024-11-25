'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Communi = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left p-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Icon */}
          <motion.div
            className="flex justify-center md:justify-start "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-4 rounded-full">
              <Image
                src="https://i.ibb.co/GRf5KHP/Logo.png"
                width={300}
                height={300}
                alt="icon"
              />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-2xl headingFont text-gray-800 mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Green and Clean Environment
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="text-gray-600 paragraphFont leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Each urban area of Rehomes is built on the basis of "A place that
            living is in harmony with nature" with greeneries, parks, squares,
            water surfaces designed and arranged harmoniously. Ecological and
            environmental protection criteria, that Vinhomes.
          </motion.p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://i.ibb.co/1bsHjvb/Interi-Arch-Image.webp"
            alt="Green environment"
            width={700}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Communi
