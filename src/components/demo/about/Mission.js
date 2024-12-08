'use client'
import { missionImage } from '@/app/constant/images'
import React from 'react'
import { motion } from 'framer-motion'

const Mission = () => {
  return (
    <section 
      id="our_mission" 
      className="bg-[#FAF8F6] px-4 sm:px-6 lg:px-28 py-16 sm:py-20 lg:py-40 
                 flex flex-col sm:flex-row items-center sm:gap-6 lg:gap-14 
                 lg:container mx-auto space-y-8 sm:space-y-0"
    >
      {/* Image Section */}
      <div className="w-full sm:w-1/2 flex justify-center sm:justify-start">
        <div className="w-full max-w-md sm:max-w-sm lg:max-w-[600px] h-72 sm:h-[500px] lg:h-[500px]">
          <img
            src={missionImage.src}
            alt="Team"
            className="w-full h-full rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
      
      {/* Text Section */}
      <div className="w-full sm:w-1/2 max-w-full px-4 sm:px-0">
        <h3 className="paragraphFont text-xs sm:text-sm text-[#C2AC9D] 
                       uppercase mb-3 tracking-widest">
          Our Mission
        </h3>
        
        <h2 className="headingFont text-2xl sm:text-3xl lg:text-4xl 
                       text-[#243E63] mb-4 max-w-full">
          To be the most trusted name in real estate globally
        </h2>
        
        <div className="space-y-4">
          <motion.p
            className="paragraphFont text-paraText text-xs sm:text-sm 
                       leading-relaxed text-justify"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            It is our great pleasure to introduce to you The Structural Engineers 
            Ltd., affectionately called SEL by its innumerable customers and patrons.
          </motion.p>
          
          <motion.p
            className="paragraphFont text-paraText text-xs sm:text-sm 
                       leading-relaxed text-justify"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            SEL has been in the construction arena for the last 41 years, 
            alleviating the living accommodation problem of the mega city Dhaka. 
            SEL has completed and handed over 236 apartment and commercial projects 
            in Dhaka, Cumilla and stepped forward also in Khulna, Chittagong, 
            Bogura and Savar to establish itself as an embodiment of quality, 
            competence and efficiency.
          </motion.p>
          
          <motion.p
            className="paragraphFont text-paraText text-xs sm:text-sm 
                       leading-relaxed text-justify mb-6"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            We believe - Quality comes first, Profit is its logical sequence.
          </motion.p>
        </div>
        
        <a
          href="#"
          className="inline-block text-[#C2AC9D] buttonFont font-medium 
                     pb-2 border-b-2 border-[#C2AC9D] 
                     hover:text-[#A77D6F] hover:border-[#A77D6F] 
                     transition-colors duration-300"
        >
          Explore More
        </a>
      </div>
    </section>
  )
}

export default Mission