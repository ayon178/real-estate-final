'use client'
import React from 'react'
import { FaMapLocationDot } from 'react-icons/fa6'
import { TfiEmail } from 'react-icons/tfi'
import { FaPhone } from 'react-icons/fa'
import { FaRegClock } from 'react-icons/fa'
import { motion } from 'framer-motion'

const GetInTouch = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center px-4 items-center justify-center mx-auto md:px-16 mt-20 bg-white">
      <motion.div
        className="w-full md:w-3/6 pr-0 md:pr-32"
        initial={{ opacity: 0, y: 50 }} // Initial state (hidden and moved down)
        whileInView={{ opacity: 1, y: 0 }} // Final state (visible and in place)
        viewport={{ once: true }} // Trigger animation when in view
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }} // Animation with delay
      >
        <p className="text-secondary headingFont text-[10px] md:text-[16px]">
          Get In Touch
        </p>
        <h1 className="text-headingText headingFont text-[20px] md:text-[32px] mt-6">
          To be the most trusted name in real estate globally
        </h1>

        <div>
          <p className="text-headingText paragraphFont text-[14px] md:text-[20px] leading-7 my-7">
            Head Office
          </p>
          <div className="space-y-3">
            <motion.div
              className="flex paragraphFont items-center gap-6"
              initial={{ opacity: 0, y: 50 }} // Initial state (hidden and moved down)
              whileInView={{ opacity: 1, y: 0 }} // Final state (visible and in place)
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            >
              <FaMapLocationDot className="text-lg" />
              <p className="text-paraText text-sm">
                56 Glassford Street Glasgow G1 1UL New York
              </p>
            </motion.div>
            <motion.div
              className="flex paragraphFont items-center gap-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
            >
              <TfiEmail className="text-lg" />
              <p className="text-paraText text-sm">contact@example.com</p>
            </motion.div>
            <motion.div
              className="flex paragraphFont items-center gap-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
            >
              <FaPhone className="text-lg" />
              <p className="text-paraText text-sm">+844 123 456 78</p>
            </motion.div>

            <motion.div
              className="flex paragraphFont items-center gap-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 1 }}
            >
              <FaRegClock className="text-xl" />
              <p className="text-paraText text-sm">
                Monday to Saturday: 9.00am to 16.00pm
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Column 2 */}
      <motion.div
        className="w-full h-[400px] md:h-[600px]"
        initial={{ opacity: 0, y: 50 }} // Initial state (hidden and moved down)
        whileInView={{ opacity: 1, y: 0 }} // Final state (visible and in place)
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 1.2 }}
      >
        <img
          className="w-full h-full object-cover"
          src="https://demo2.wpopal.com/rehomes/wp-content/uploads/2019/10/bg_contact.png"
          alt="About Us"
        />
      </motion.div>
    </div>
  )
}

export default GetInTouch
