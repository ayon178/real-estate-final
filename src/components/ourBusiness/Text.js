'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Text = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:mt-32 md:mt-20 mt-16 bg-white">
      {/* Animation for h1 */}
      <motion.h1
        className="text-4xl font-bold text-gray-800 mb-4"
        initial={{ opacity: 0, y: 50 }} // Initial state (down and transparent)
        whileInView={{ opacity: 1, y: 0 }} // Final state (normal position and visible)
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Where happiness lives
      </motion.h1>

      {/* Animation for p */}
      <motion.p
        className="text-center text-gray-600 max-w-2xl"
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
