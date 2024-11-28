'use client'

import {
  bannerImage1,
  bannerImage2,
  bannerImage3,
  whatWeDo1,
  whatWeDo2,
  whatWeDo3,
  whatWeDo4,
  whatWeDo5,
} from '@/app/constant/images'
import AboutUs from '@/components/demo/home/AboutUs'
import TheFact from '@/components/demo/home/TheFact'
import WhatWeDoSlide from '@/components/demo/home/WhatWeDoSlide'
import WhyChooseSlide from '@/components/demo/home/WhyChooseSlide'
import FeaturedProject from '@/components/home/FeaturedProject'
import ScrollHorizontal from '@/components/home/ScrollHorizontal'
import Navbar from '@/components/shared/Navbar'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaFacebookF, FaLinkedin } from 'react-icons/fa'

const slides = [
  {
    title: 'SEL Ready-mix & Concrete Products Ltd.',
    description:
      'Specializing in ready-mix concrete and concrete products, SEL RMC & Concrete Products Ltd. complements the services offered by SEL, ensuring strength and durability.',
    imageUrl: whatWeDo1,
    link: 'https://selrmc.com.bd/',
  },
  {
    title: 'SEL NIBASH',
    description:
      'This three-star hotel and serviced apartment is thoughtfully designed to offer a luxurious yet comfortable stay for business and leisure travelers alike.',
    imageUrl: whatWeDo2,
    link: 'http://selnibash.com.bd/',
  },
  {
    title: 'MC Elevators Ltd.',
    description:
      'MC Elevator is a leading player in the elevator industry, committed to quality, innovation, and unmatched customer service.',
    imageUrl: whatWeDo3,
    link: 'https://mcelevators.com.bd/',
  },
  {
    title: 'InteriArch',
    description:
      'We are a one-stop solution for interior design and renovation, combining architectural precision with an efficient budget.',
    imageUrl: whatWeDo4,
    link: 'https://www.interiarch.com/',
  },
  {
    title: 'Orchard Convention Hall',
    description:
      'From corporate conferences and exhibitions to weddings and gala dinners, Orchard Convention Hall caters to a diverse range of events with finesse and flair.',
    imageUrl: whatWeDo5,
    link: 'https://och.com.bd/',
  },
]

const textData = [
  {
    // smallLine: 'The Structural Engineers Ltd.',
    firstLine: 'Dedicated to  ',
    secondLine: 'developing homes',
    thirdLine: 'with precision',
    buttonText: 'View Projects',
    buttonLink: '#',
  },
  {
    // smallLine: 'The Structural Engineers Ltd.',
    firstLine: 'Modern design',
    secondLine: 'with craftsmanship',
    thirdLine: 'in every project',
    buttonText: 'View Projects',
    buttonLink: '#explore',
  },
  {
    // smallLine: 'The Structural Engineers Ltd.',
    firstLine: 'Spaces resonating with ',
    secondLine: 'comfort and elegance,',
    thirdLine: 'reflecting value ',
    buttonText: 'View Projects',
    buttonLink: '#get-started',
  },
]

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const [variantIndex, setVariantIndex] = useState(0)

  const images = [bannerImage1, bannerImage2, bannerImage3]

  const nextImage = () => {
    setCurrentImage(prevIndex => (prevIndex + 1) % images.length)
    setVariantIndex(prevIndex => (prevIndex + 1) % imageVariants.length)
  }

  const prevImage = () => {
    setCurrentImage(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
    setVariantIndex(prevIndex => (prevIndex + 1) % imageVariants.length)
  }

  const goToImage = index => {
    setCurrentImage(index)
  }

  const imageVariants = [
    {
      enter: { opacity: 0 },
      center: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: '-100vw' }, // Exit to the left
    },
    {
      enter: { opacity: 0, x: '100vw' }, // Enter from the right
      center: { opacity: 1, x: 0 },
      exit: { opacity: 0, y: '-100vh' }, // Exit to the top
    },
    {
      enter: { opacity: 0, y: '100vh' }, // Enter from the bottom
      center: { opacity: 1, y: 0 },
      exit: { opacity: 0, x: '100vw' }, // Exit to the right
    },
    {
      enter: { opacity: 0, x: '-100vw' }, // Enter from the left
      center: { opacity: 1, x: 0 },
      exit: { opacity: 0, y: '100vh' }, // Exit to the bottom
    },

    {
      enter: { opacity: 0, y: '-100vh' }, // Enter from the top
      center: { opacity: 1, y: 0 },
      exit: { opacity: 0 },
    },
  ]

  const headerVariants = {
    smallLine: {
      hidden: { opacity: 0, x: -60 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: 'easeInOut' },
      },
    },
    firstLine: {
      hidden: { opacity: 0, x: -50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: 'easeInOut', delay: 0.8 },
      },
    },
    secondLine: {
      hidden: { opacity: 0, x: -40 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: 'easeInOut', delay: 1 },
      },
    },
    thirdLine: {
      hidden: { opacity: 0, x: -30 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: 'easeInOut', delay: 1.2 },
      },
    },
    viewProjectsButton: {
      hidden: { opacity: 0, x: -20 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, ease: 'easeInOut', delay: 1.4 },
      },
    },
    callUs: {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: 'easeInOut', delay: 1.5 },
      },
    },
  }

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextImage, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative overflow-hidden">
      <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />

      {/* Fullscreen Banner with Text Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          variants={imageVariants[variantIndex]}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="h-screen bg-cover bg-center flex items-center justify-center relative px-4 md:px-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${images[currentImage].src})`,
          }}
        >
          <div className="container mx-auto flex gap-14 items-start">
            {/* Social Media Icons and Line */}
            <div className="flex flex-col items-center space-y-6">
              <div className="w-[1px] h-32 bg-white"></div>
              <FaLinkedin className="text-white text-lg hover:text-[#bfa980]" />
              <FaFacebookF className="text-white text-lg hover:text-[#bfa980]" />
              {/* <FaYoutube className="text-white text-lg hover:text-[#bfa980]" /> */}
            </div>

            {/* Dynamic Text Overlay */}
            <div className="text-right lg:translate-x-[1000px] md:translate-x-96 translate-x-20">
              <motion.h1
                className="buttonFont text-sm text-white tracking-wide mb-2"
                initial="hidden"
                animate="visible"
                variants={headerVariants.smallLine}
              >
                {textData[currentImage].smallLine}
              </motion.h1>

              <motion.h1
                className="headingFont text-2xl md:text-3xl lg:text-5xl text-white mt-6 leading-tight"
                initial="hidden"
                animate="visible"
                variants={headerVariants.firstLine}
              >
                {textData[currentImage].firstLine}
              </motion.h1>
              <motion.h1
                className="headingFont text-2xl md:text-3xl lg:text-5xl text-white leading-tight"
                initial="hidden"
                animate="visible"
                variants={headerVariants.secondLine}
              >
                {textData[currentImage].secondLine}
              </motion.h1>
              <motion.h1
                className="headingFont text-2xl md:text-3xl lg:text-5xl text-white mb-12 leading-tight"
                initial="hidden"
                animate="visible"
                variants={headerVariants.thirdLine}
              >
                {textData[currentImage].thirdLine}
              </motion.h1>

              <motion.a
                href={textData[currentImage].buttonLink}
                className="buttonFont inline-block  text-white text-md px-8 py-3 rounded-lg"
                initial="hidden"
                animate="visible"
                variants={headerVariants.viewProjectsButton}
              >
                {textData[currentImage].buttonText}
              </motion.a>
            </div>
          </div>

          {/* Slider Controls */}
          <div className="absolute bottom-10 right-10 flex items-center space-x-2 z-10">
            {/* Previous button */}
            <button
              onClick={prevImage}
              className="font-bold hover:bg-gray text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out shadow-lg"
            >
              &lt;
            </button>
            {/* Next button */}
            <button
              onClick={nextImage}
              className="font-bold hover:bg-gray text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out shadow-lg"
            >
              &gt;
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* About us */}
      <AboutUs />
      <ScrollHorizontal/>

      {/* Featured projects */}
      <FeaturedProject />

      {/* WHy choose slide */}
      <WhyChooseSlide />
      {/* What we do slide */}
      <div className="container mx-auto py-10 mt-14">
        <p className="text-[12px] md:text-[14px] paragraphFont text-secondary  text-center">
          WHAT WE DO.
        </p>
        <h1 className="headingFont text-headingText text-[30px] md:text-[40px] mt-6 mb-28 text-center">
          Our Sister Concerns <br /> of The Structural Engineers Ltd (SEL).
        </h1>
        <WhatWeDoSlide slides={slides} slidesPerView={3} />
      </div>

      {/* The fact */}
      <TheFact />
      {/* Quick enquery */}
      {/* <QuickEnquiry /> */}
    </div>
  )
}

export default Home
