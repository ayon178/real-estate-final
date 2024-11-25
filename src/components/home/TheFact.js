import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { useRef } from 'react';

export default function TheFact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const textRef = useRef(null);
  const textIsInView = useInView(textRef, { once: true, amount: 0.3 });

  const statsRef = useRef(null);
  const statsIsInView = useInView(statsRef, { once: true, amount: 0.3 });

  const imageRef = useRef(null);
  const imageIsInView = useInView(imageRef, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="flex flex-col lg:flex-row gap-10 justify-between items-center p-6 lg:p-12 bg-[#F9F7F7] min-h-full container mx-auto">
      {/* Left Side: Text and Numbers */}
      <div className="flex flex-col items-start space-y-6 w-full lg:w-1/2 h-full lg:h-auto flex-grow">
        <div ref={textRef}>
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            animate={textIsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl lg:text-4xl font-bold text-blue-900"
          >
            One of the leading real estate companies
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={textIsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-[#66717A] text-md py-7"
          >
            Our mission is to engage in issues that are of concern to individuals,
            families, and communities through an uncompromising commitment to
            create outstanding living, work, and leisure environments.
          </motion.p>
        </div>

        <div ref={statsRef} className="grid grid-cols-2 gap-4 w-full">
          {/* Numbers and Titles */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={statsIsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <CountUp start={0} end={49} duration={2} delay={0}>
              {({ countUpRef }) => (
                <span ref={countUpRef} className="md:text-7xl text-4xl font-semibold text-hover" />
              )}
            </CountUp>
            <p className="text-gray-500 mt-2">Completed projects</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={statsIsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <CountUp start={0} end={19} duration={2} delay={0.5}>
              {({ countUpRef }) => (
                <span ref={countUpRef} className="md:text-7xl text-4xl font-semibold text-hover" />
              )}
            </CountUp>
            <p className="text-gray-500 mt-2">Projects underway</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={statsIsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <CountUp start={0} end={21} duration={2} delay={1}>
              {({ countUpRef }) => (
                <span ref={countUpRef} className="md:text-7xl text-4xl font-semibold text-hover" />
              )}
            </CountUp>
            <p className="text-gray-500 mt-2">Green building under construction</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={statsIsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <CountUp start={0} end={116} duration={2} delay={1.5}>
              {({ countUpRef }) => (
                <span ref={countUpRef} className="md:text-7xl text-4xl font-semibold text-hover" />
              )}
            </CountUp>
            <p className="text-gray-500 mt-2">Joint ventures completed</p>
          </motion.div>
        </div>
      </div>

      {/* Right Side: Image */}
      <motion.div
        ref={imageRef}
        initial={{ opacity: 0, x: 300 }}
        animate={imageIsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 300 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full lg:w-1/2 mt-8 lg:mt-0 flex-grow justify-center lg:h-full"
      >
        <div className="relative h-full">
          <img
            src="https://demo2.wpopal.com/rehomes/wp-content/uploads/2022/11/h5_img1.jpg"
            alt="Real estate image"
            className="rounded-lg shadow-lg h-full object-cover"
          />

          {/* White box on image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3, y: 100 }}
            animate={imageIsInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.3, y: 100 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            className="absolute bottom-0 md:bottom-8 lg:-left-[20%] transform lg:-translate-x-1/2 lg:translate-x-[-50%] bg-white p-3 md:p-8 rounded-lg shadow-lg w-36 md:w-72 lg:w-[50%]"
          >
            <h3 className="text-5xl text-center font-bold text-gray-800">
              <CountUp start={0} end={25} duration={2} delay={1.2}>
                {({ countUpRef }) => (
                  <span ref={countUpRef} className="md:text-7xl text-2xl text-center font-bold text-gray-800" />
                )}
              </CountUp>
            </h3>
            <p className="text-gray-500 text-center">Completed projects</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}