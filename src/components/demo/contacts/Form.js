'use client'
import React from 'react'
import { motion } from 'framer-motion'
const Form = () => {
  return (
    <div className="max-w-2xl mx-auto p-10 shadow-xl  mb-10">
      <div className="flex flex-col items-start space-y-4 p-6">
        <span className="text-sm headingFont uppercase tracking-widest text-amber-700">
          Leave a message
        </span>
        <h2 className=" headingFont text-4xl font-serif text-navy-900 text-[#14274A]">
          We love to hear from you
        </h2>
      </div>
      <form className="space-y-6">
        <div className="space-y-4">
          {/* Name Input */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full paragraphFont px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B39B7D] focus:border-transparent transition duration-200 placeholder-gray-400"
              required
            />
          </motion.div>

          {/* Email Input */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B39B7D] paragraphFont focus:border-transparent transition duration-200 placeholder-gray-400"
              required
            />
          </motion.div>

          {/* Subject Input */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full paragraphFont px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B39B7D] focus:border-transparent transition duration-200 placeholder-gray-400"
              required
            />
          </motion.div>

          {/* Message Input */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
          >
            <textarea
              name="message"
              placeholder="Message"
              rows={6}
              className="w-full paragraphFont px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B39B7D] focus:border-transparent transition duration-200 placeholder-gray-400 resize-y"
              required
            />
          </motion.div>
        </div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
        >
          <button
            type="submit"
            className="buttonFont w-full md:w-32 px-6 py-3 bg-[#B39B7D] hover:bg-[#9F8B70] text-white font-medium rounded text-center uppercase tracking-wider text-sm transition-colors duration-200"
          >
            Submit →
          </button>
        </motion.div>
      </form>
    </div>
  )
}

export default Form
