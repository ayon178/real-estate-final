import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function QuickEnquiry() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, amount: 0.2 });

  return (
    <div ref={containerRef} className="flex flex-col lg:flex-row w-full h-full mb-10">
      {/* Left Side: Image */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-1/2"
      >
        <img
          src="https://demo2.wpopal.com/rehomes/wp-content/uploads/2022/11/h7_bg-1.jpg"
          alt="Cityscape"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Right Side: Form */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-1/2 bg-blue-900 text-white flex items-center justify-center p-8 lg:p-16"
      >
        <div ref={formRef} className="max-w-md w-full">
          {/* Header */}
          <motion.p 
            initial={{ opacity: 0, x: 100 }}
            animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="uppercase tracking-wide text-sm text-gray-300"
          >
            Quick Enquiry
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, x: 100 }}
            animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-3xl lg:text-4xl font-bold mb-6"
          >
            Want more information?
          </motion.h2>

          {/* Form */}
          <form className="space-y-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <motion.input
                initial={{ opacity: 0, x: 100 }}
                animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg text-gray-800"
              />
              <motion.input
                initial={{ opacity: 0, x: 100 }}
                animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                type="text"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg text-gray-800"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              <motion.input
                initial={{ opacity: 0, x: 100 }}
                animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg text-gray-800"
              />
              <motion.select 
                initial={{ opacity: 0, x: 100 }}
                animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                className="w-full px-4 py-3 rounded-lg text-gray-800"
              >
                <option value="">Project</option>
                <option value="project1">Project 1</option>
                <option value="project2">Project 2</option>
                <option value="project3">Project 3</option>
              </motion.select>
            </div>

            <motion.button
              initial={{ opacity: 0, x: 100 }}
              animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              type="submit"
              className="w-full bg-[#c7a17a] text-white py-3 rounded-lg font-bold hover:bg-opacity-90"
            >
              Get a Call Back
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}