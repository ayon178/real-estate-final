import { projectCountImg } from '@/app/constant/images'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import counterBg from '../../../assets/home/counter_bg.png'

export default function TheFact() {
  return (
    <div className="flex flex-col lg:flex-row gap-10 justify-between items-center p-6 lg:p-12 bg-[#F9F7F7] min-h-full ">
      {/* Left Side: Text and Numbers */}
      <div className="flex flex-col items-start space-y-6 w-full lg:w-1/2 h-full lg:h-auto flex-grow">
        {/* Text Animations */}
        <motion.h2
          className="headingFont text-2xl lg:text-4xl text-blue-900"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          One of the leading<br/> real estate companies
        </motion.h2>
        {/* added animation here */}
        <motion.p
          className="paragraphFont text-[#66717A] text-md pb-7 pt-0 md:pr-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our mission is to engage in issues that are of concern to individuals,
          families and communities through an uncompromising commitment to
          create outstanding living, work and leisure environments.
        </motion.p>

        <div className="grid grid-cols-2 gap-4 w-full">
          {/* Numbers and Titles */}
          <div className="flex flex-col items-start">
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
            <p className="text-gray-500 buttonFont mt-2">Ongoing Projects </p>
          </div>
          <div className="flex flex-col items-start">
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

      {/* Right Side: Image */}
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex-grow justify-center lg:h-full">
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
            className="absolute bottom-0 md:bottom-8 transform lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 bg-white p-3 md:p-10 rounded-lg shadow-lg w-36 md:w-72 lg:w-[50%]"
          >
            <h3 className="text-5xl text-center font-bold text-gray-800">
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
            <p className="text-gray-500 buttonFont text-center">
              Completed projects
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
