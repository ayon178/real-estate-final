import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import {
  MdOutlineKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from 'react-icons/md'
import {
  whyImg1,
  whyImg2,
  whyImg3,
  whyImg4,
  whyImg5,
  whyImg6,
} from '@/app/constant/images'

const WhyChooseSlide = () => {
  const slides = [
    {
      id: 1,
      title: 'Quality',
      description:
        'At SEL, quality is the cornerstone of every project. From material selection to the final touches, we ensure excellence at every stage, delivering homes and spaces that exceed expectations and set a benchmark in the industry.',
      imageUrl: whyImg1,
    },
    {
      id: 2,
      title: 'Trust',
      description:
        'Our clients’ trust is our most valued asset. With transparency and integrity in every interaction, we build strong relationships that are grounded in honesty, ensuring peace of mind throughout the journey.',
      imageUrl: whyImg2,
    },
    {
      id: 3,
      title: 'Faith',
      description:
        'Faith drives us forward. We believe in what we build, and our clients believe in us. This mutual faith has been key to our success, enabling us to create spaces that fulfill promises and inspire confidence.',
      imageUrl: whyImg3,
    },
    {
      id: 3,
      title: 'Comitted',
      description:
        'Our commitment to each project is unwavering. We are dedicated to realizing our clients’ visions, going above and beyond to deliver on time, on budget, and beyond expectations.',
      imageUrl: whyImg4,
    },
    {
      id: 3,
      title: 'Realiability',
      description:
        'Reliability is at the heart of SEL. We take pride in consistently delivering on our promises, providing dependable services that clients can count on for every detail, every time.',
      imageUrl: whyImg5,
    },
    {
      id: 3,
      title: 'Timeliness',
      description:
        'Time is valuable, and we respect it. SEL is committed to meeting deadlines without compromising on quality, ensuring timely project delivery that respects both client timelines and expectations.',
      imageUrl: whyImg6,
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState('right')

  const nextSlide = () => {
    setDirection('right')
    setCurrentSlide(prev => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setDirection('left')
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const imageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  }

  const textVariants = {
    initial: direction => ({
      opacity: 0,
      x: direction === 'right' ? 30 : -30,
    }),
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: direction => ({
      opacity: 0,
      x: direction === 'right' ? -30 : 30,
    }),
  }

  return (
    <div className="container mx-auto lg:mr-auto pr-32 py-12 md:py-24 xl:mx-auto mt-16">
      <motion.p
        className="text-[12px] md:text-[14px] text-secondary paragraphFont text-center md:text-left pl-20 "
        initial={{ opacity: 0, y: 50 }} // Start from bottom
        whileInView={{ opacity: 1, y: 0 }} // Move to normal position
        transition={{ duration: 0.8, delay: 0.3 }} // Delay for sequential animation
        viewport={{ once: true }}
      >
        WHY CHOOSE US.
      </motion.p>
      <div className="grid grid-cols-4 md:grid-cols-3">
        <motion.h1
          className="headingFont col-span-4 md:col-span-1 text-headingText text-[28px] md:text-[30px] mt-3 text-center md:text-left pl-20"
          initial={{ opacity: 0, y: 50 }} // Start from bottom
          whileInView={{ opacity: 1, y: 0 }} // Move to normal position
          transition={{ duration: 0.8, delay: 0.5 }} // Delay for sequential animation
          viewport={{ once: true }}
        >
          Making living
          <br /> spaces affordable
        </motion.h1>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-3">
        <h1 className="col-span-4 md:col-span-1 text-headingText text-[30px] md:text-[40px] mt-6 mb-10 text-center md:text-left"></h1>
        <div className="col-span-4 md:col-span-2 bg-[#F9F7F7] md:h-full">
          {/* Background Color Here */}
        </div>
      </div>
      <div className="flex  relative z-0">
        {/* Image Section */}
        <div className="relative h-72 w-[55%] md:h-[30rem] lg:h-[34rem]  z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${currentSlide}`}
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.8 }}
              className="w-full h-full overflow-hidden "
            >
              <Image
                src={slides[currentSlide].imageUrl}
                alt={slides[currentSlide].title}
                layout="fill"
                objectFit="cover"
                className="rounded-l-md "
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Text Section */}
        <div className="flex w-[45%] flex-col justify-center p-4 md:p-8 bg-[#F9F7F7] relative z-20   ">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`text-${currentSlide}`}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.8 }}
              custom={direction}
            >
              <h2 className="headingFont text-headingText text-[20px] md:text-[30px] mt-6 mb-10 translate-x-5 ">
                {slides[currentSlide].title}
              </h2>
              <p className="paragraphFont text-gray-600 mt-4 text-sm text-justify translate-x-5  w-96">
                {slides[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Slider Buttons */}
          <div className="flex items-center space-x-4 mt-18 translate-x-5 ">
            <button
              onClick={prevSlide}
              className="p-4 bg-white text-gray-600 border border-gray-300 rounded-md hover:bg-hover focus:outline-none hover:text-white transition-all delay-75 "
            >
              <MdOutlineKeyboardArrowLeft size={30} />
            </button>
            <button
              onClick={nextSlide}
              className="p-4 bg-white text-gray-600 border border-gray-300 rounded-md hover:bg-hover focus:outline-none hover:text-white transition-all delay-75"
            >
              <MdKeyboardArrowRight size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseSlide
