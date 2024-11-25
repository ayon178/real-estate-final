'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { mapImage } from '@/app/constant/images'

const PlansTwo = () => {
  return (
    <div className="relative container mx-auto mt-32">
      <h2 className="text-4xl headingFont text-center mb-2 text-gray-800">
        Plans
      </h2>
      <p className=" text-center paragraphFont mb-8 text-gray-800">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
        blanditiis?
      </p>
      <motion.img
        src={mapImage.src}
        alt="Map Image"
        className="w-full h-auto object-cover rounded-lg" // Adjust the class as per your styling needs
        initial={{ opacity: 0, scale: 0.9 }} // Initial state: invisible and slightly zoomed out
        animate={{ opacity: 1, scale: 1 }} // Animate to visible and fully zoomed in
        transition={{ duration: 1.5 }} // Duration of the animation
      />
    </div>
  )
}

export default PlansTwo
