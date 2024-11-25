import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import {
  MdOutlineKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from 'react-icons/md'

const WhyChooseSlide = () => {
  const slides = [
    {
      id: 1,
      title: 'Making living spaces affordable',
      description:
        'The luxurious and exquisite design harmonious with the surrounding architecture provide optimal comfort, modernity and the best living conditions for every family.',
      imageUrl:
        'https://demo2.wpopal.com/rehomes/wp-content/uploads/2022/11/h7_project-4.jpg',
    },
    {
      id: 2,
      title: 'gfhfgghj',
      description:
        'The luxurious and exquisite design harmonious with the surrounding architecture provide optimal comfort, modernity and the best living conditions for every family.',
      imageUrl:
        'https://demo2.wpopal.com/rehomes/wp-content/uploads/2022/11/h7_project-3.jpg',
    },
    {
      id: 3,
      title: '53232135',
      description:
        'The luxurious and exquisite design harmonious with the surrounding architecture provide optimal comfort, modernity and the best living conditions for every family.',
      imageUrl:
        'https://demo2.wpopal.com/rehomes/wp-content/uploads/2022/11/h7_project-1.jpg',
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
    <div className="container mx-auto lg:mr-auto pr-4 py-12 md:py-24 xl:mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-secondary text-[10px] md:text-[11px] text-center md:text-left"
      >
        WHY CHOOSE US.
      </motion.p>
      <div className="grid grid-cols-4 md:grid-cols-3">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="col-span-4 md:col-span-1 text-headingText text-[30px] md:text-[40px] mt-6 text-center md:text-left"
        >
          Making living spaces affordable
        </motion.h1>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-3">
        <h1 className="col-span-4 md:col-span-1 text-headingText text-[30px] md:text-[40px] mt-6 mb-10 text-center md:text-left"></h1>
        <div className="col-span-4 md:col-span-2 bg-gray-100 md:h-full">
          {/* Background Color Here */}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2  relative z-0">
        {/* Image Section */}
        <div className="relative h-72 md:h-[30rem] lg:h-[34rem] z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${currentSlide}`}
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.8 }}
              className="w-full h-full overflow-hidden"
            >
              <Image
                src={slides[currentSlide].imageUrl}
                alt={slides[currentSlide].title}
                layout="fill"
                objectFit="cover"
                className="rounded-l-md"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center p-4 md:p-8 bg-gray-100 relative z-20">
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
              <h2 className="text-headingText text-[20px] md:text-[30px] mt-6 mb-10">
                {slides[currentSlide].title}
              </h2>
              <p className="text-gray-600 mt-4 text-sm md:text-base">
                {slides[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Slider Buttons */}
          <div className="flex items-center space-x-4 mt-18">
            <button
              onClick={prevSlide}
              className="p-4 bg-white text-gray-600 border border-gray-300 rounded-md hover:bg-hover focus:outline-none hover:text-white transition-all delay-75"
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
