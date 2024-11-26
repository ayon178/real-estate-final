'use client'

import { missionImage } from '@/app/constant/images'
import React from 'react'
import { motion } from 'framer-motion'

const Mission = () => {
  return (
    <section id="our_mission" className="bg-[#FAF8F6] px-6 lg:px-28 py-40 flex flex-col lg:flex-row items-center lg:gap-14 container mx-auto ">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
        <div className=" h-72 lg:w-[600px] lg:h-full">
          <img
            src={missionImage.src} // Replace with your image path
            alt="Team"
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2">
        <h3 className="paragraphFont text-[12px] md:text-[14px] text-[#C2AC9D] uppercase mb-4 tracking-widest">
          Our Mission
        </h3>
        <h2 className="headingFont text-2xl lg:text-4xl w-[500px] text-[#243E63] mb-4">
          To be the most trusted name in real estate globally
        </h2>
        <motion.p
          className="paragraphFont text-paraText text-[13px] leading-6 mt-5 mb-4 w-96 text-justify"
          initial={{ opacity: 0, x: 100 }} // Start from the right
          whileInView={{ opacity: 1, x: 0 }} // Move to normal position
          transition={{ duration: 0.8, delay: 0.7 }} // Delay for sequential animation
          viewport={{ once: true }}
        >
          It is our great pleasure to introduce to you The Structural Engineers
          Ltd., affectionately called SEL by its innumerable customers and
          patrons.
        </motion.p>
        <motion.p
          className="paragraphFont text-paraText text-[13px] leading-6 text-justify mb-4 w-96"
          initial={{ opacity: 0, x: 100 }} // Start from the right
          whileInView={{ opacity: 1, x: 0 }} // Move to normal position
          transition={{ duration: 0.8, delay: 0.9 }} // Delay for sequential animation
          viewport={{ once: true }}
        >
          SEL has been in the construction arena for the last 41 years,
          alleviating the living accommodation problem of the mega city Dhaka.
          SEL has completed and handed over 236 apartment and commercial
          projects in Dhaka, Cumilla and stepped forward also in Khulna,
          Chittagong, Bogura and Savar to establish itself as an embodiment of
          quality, competence and efficiency.
        </motion.p>
        <motion.p
          className="paragraphFont text-paraText text-[13px] leading-6 text-justify mb-10 w-96"
          initial={{ opacity: 0, x: 100 }} // Start from the right
          whileInView={{ opacity: 1, x: 0 }} // Move to normal position
          transition={{ duration: 0.8, delay: 1 }} // Delay for sequential animation
          viewport={{ once: true }}
        >
          We believe - Quality comes first, Profit is its logical sequence.
        </motion.p>
        <a
          href="#"
          className="text-[#C2AC9D] buttonFont font-medium p-2  border-b-2 border-[#C2AC9D] hover:text-[#A77D6F]"
        >
          Explore More
        </a>
      </div>
    </section>
  )
}

export default Mission
