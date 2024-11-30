'use client'
import Form from '@/components/demo/career/Form'
import HalfBanner from '@/components/demo/career/HalfBanner'
import Navbar from '@/components/shared/Navbar'
import React from 'react'
import pdfImage from '../../../assets/pdfImage.png'
import { motion } from 'framer-motion'
import Button from '@/components/demo/career/Button'

const page = () => {
  return (
    <div>
      <Navbar />
      <HalfBanner />
      <motion.h1
        className="text-4xl headingFont text-gray-800 mb-5 mt-16 text-center"
        initial={{ opacity: 0, y: 50 }} // Initial state (down and transparent)
        whileInView={{ opacity: 1, y: 0 }} // Final state (normal position and visible)
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our Sister Concerns
      </motion.h1>

      {/* Animation for p */}
      <motion.p
        className="text-center paragraphFont text-gray-600 mx-auto max-w-2xl"
        initial={{ opacity: 0, y: 50 }} // Initial state (down and transparent)
        whileInView={{ opacity: 1, y: 0 }} // Final state (normal position and visible)
        transition={{ duration: 0.8, delay: 0.2 }} // Slight delay for p element
        viewport={{ once: true }}
      >
        Our mission is to engage in issues that are of concern to individuals,
        families, and communities through an uncompromising commitment to create
        outstanding living, work, and leisure environments.
      </motion.p>
      <div className=" mx-auto my-24 h-screen w-full overflow-hidden pb-10">
        {/* <iframe
          src="https://beige-aviva-90.tiiny.site/"
          // src="https://heyzine.com/flip-book/c86c8f5d0a.html"
          style={{ width: '100%', height: '400px', border: 'none' }}
          title="PDF Viewer"
          className="overflow-y-hidden"
        /> */}
        <img className="w-auto mx-auto h-full" src={pdfImage.src} alt="" />
      </div>
      <Button/>
      <Form />
    </div>
  )
}

export default page
