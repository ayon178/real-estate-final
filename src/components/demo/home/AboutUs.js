import { missionImage } from '@/app/constant/images'
import React from 'react'
import { motion } from 'framer-motion'
import aboutBg from '../../../assets/home/about_bg.png'

const AboutUs = () => {
  return (
    <div className="relative flex flex-col-reverse md:flex-row px-4 md:px-0 justify-start lg:mb-28 bg-white">
    
      {/* Image Animation - Visible on medium and large devices */}
      <motion.div
        className="hidden md:block w-full md:w-[55%] h-[400px] md:h-[600px] z-0 bg-white"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <motion.img
          className="object-cover w-full h-full"
          src={missionImage.src}
          alt="About Us"
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="w-full md:w-[45%] lg::p-14 p-4 flex flex-col justify-center items-center text-center z-0 bg-white"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        style={{
          backgroundImage: `url(${aboutBg.src})`,
          backgroundPosition: 'right top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          minHeight: '700px',
        }}
      >
        <motion.p
          className="paragraphFont text-secondary text-[12px] md:text-[14px] lg:w-96"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Who we are
        </motion.p>

        <motion.h1
          className="headingFont text-headingText text-[30px] md:text-[40px] mt-2 lg:w-96"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: false, amount: 0 }}
        >
          About SEL
        </motion.h1>

        <motion.p
          className="paragraphFont text-paraText text-[13px] leading-6 mt-5 mb-4 lg:w-96 text-center lg:text-justify"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false, amount: 0 }}
        >
          It is our great pleasure to introduce to you The Structural Engineers Ltd., affectionately called SEL by its innumerable customers and patrons.
        </motion.p>

        <motion.p
          className="paragraphFont text-paraText text-[13px] leading-6 text-center lg:text-justify lg:mb-4 lg:w-96"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: false, amount: 0 }}
        >
          SEL has been in the construction arena for the last 41 years, alleviating the living accommodation problem of the mega city Dhaka. SEL has completed and handed over 236 apartment and commercial projects in Dhaka, Cumilla and stepped forward also in Khulna, Chittagong, Bogura and Savar to establish itself as an embodiment of quality, competence and efficiency.
        </motion.p>

        <motion.p
          className="paragraphFont text-paraText text-[13px] leading-6 text-center lg:text-justify lg:mb-8 lg:w-96 p-4"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: false, amount: 0 }}
        >
          We believe - Quality comes first, Profit is its logical sequence.
        </motion.p>

        <motion.a
          href="#"
          className="inline-block bg-[#bfa980] w-52 buttonFont hover:bg-[#a38c6e] text-white text-md px-6 md:px-8 py-2 md:py-3 rounded-sm transition duration-300 ease-in-out"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          More About Us ➝
        </motion.a>
      </motion.div>
    </div>
  )
}

export default AboutUs