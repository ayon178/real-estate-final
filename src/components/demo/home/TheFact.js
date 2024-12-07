import { projectCountImg } from '@/app/constant/images'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import counterBg from '../../../assets/home/counter_bg.png'

export default function TheFact() {
  return (
    <div className="flex flex-col lg:flex-row gap-10 justify-between items-center p-6 lg:p-12 bg-[#F9F7F7] min-h-full">
      {/* Left Side: Text and Numbers */}
      <div className="flex flex-col items-center lg:items-start space-y-10 w-full lg:w-1/2 h-full lg:h-auto flex-grow lg:mb-32">
        {/* Text Animations */}
        <motion.h2
          className="headingFont text-2xl lg:text-6xl text-blue-900 text-center lg:text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          One of the leading
          <br /> real estate companies
        </motion.h2>

        <div className="grid grid-cols-2 gap-4 w-full justify-center lg:justify-start">
          {/* Numbers and Titles */}
          <div className="flex flex-col items-center lg:items-start lg:mt-10">
            <CountUp
              start={0}
              end={37}
              duration={2}
              delay={0}
              useEasing={true}
              suffix="+"
            >
              {({ countUpRef }) => (
                <span
                  ref={countUpRef}
                  className="md:text-7xl headingFont text-4xl text-hover"
                />
              )}
            </CountUp>
            <p className="text-gray-500 buttonFont mt-2">Ongoing Projects</p>
          </div>
          <div className="flex flex-col items-center lg:items-start lg:mt-10">
            <CountUp
              start={0}
              end={10}
              duration={3}
              delay={0}
              useEasing={true}
              suffix="+"
            >
              {({ countUpRef }) => (
                <span
                  ref={countUpRef}
                  className="headingFont md:text-7xl text-4xl text-hover"
                />
              )}
            </CountUp>
            <p className="text-gray-500 buttonFont mt-2">Upcoming Projects</p>
          </div>
        </div>
      </div>

      {/* Right Side: Image (only for md+ devices) */}
      <div className="hidden lg:block w-full lg:w-1/2 mt-8 lg:mt-0 flex-grow justify-center lg:h-full ">
        <div className="relative h-full">
          {/* Image Animation from Right */}
          <motion.img
            src={projectCountImg.src}
            alt="Real estate image"
            className="rounded-lg shadow-lg h-full object-cover"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
          {/* White box on image with zoom-out animation */}
          <div
            style={{
              backgroundImage: `url(${counterBg.src})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '50%',
            }}
            className="absolute transform lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 bg-white p-3 md:p-10 rounded-lg shadow-lg w-36 md:w-72 lg:w-[50%]"
          >
            <h3 className="lg:text-5xl text-center font-bold text-gray-800">
              <CountUp
                start={0}
                end={300}
                duration={5}
                delay={0}
                useEasing={true}
                suffix="+"
              >
                {({ countUpRef }) => (
                  <span
                    ref={countUpRef}
                    className="headingFont md:text-7xl text-2xl text-center text-[#BDA588]"
                  />
                )}
              </CountUp>
            </h3>
            <p className="text-gray-500 buttonFont text-center">Completed projects</p>
          </div>
        </div>
      </div>
    </div>
  )
}
