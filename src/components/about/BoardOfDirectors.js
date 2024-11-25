'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const directors = [
  {
    title: 'Chairman',
    name: 'Mr. Johnathan Doe',
    description:
      'Mr. Doe Jain is the founder and visionary behind the Jain Group. Started almost 38 years back, he laid the foundation of Jain Group when the Group owned mines of China Clay in eastern Rajasthan. The company further forayed into manufacturing and trading of China Clay and its products.',
    imageUrl:
      'https://demo2.wpopal.com/rehomes/wp-content/uploads/2019/10/about-leader-1.jpg',
  },
  {
    title: 'Vice Chairman',
    name: 'Mr. Ron Perman',
    description:
      'Mr. Perman has done his graduation in commerce from Kolkata and studied contemporary Architecture and monument studies. Under his visionary leadership, the Real Estate division of The Jain Group was christened as Dream Developers in the early years of 2000.',
    imageUrl:
      'https://demo2.wpopal.com/rehomes/wp-content/uploads/2019/10/about-leader-2.jpg',
  },
]

const BoardOfDirectors = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h2
        className="text-2xl text-center mb-16 md:text-4xl text-headingText font-bold"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Board of directors
      </motion.h2>

      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {directors.map((director, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row"
          >
            <img
              src={director.imageUrl}
              alt={director.name}
              className="w-full md:w-3/5 h-96 object-cover"
            />
            <div className="p-6">
              <h3 className="text-sm text-hover">{director.title}</h3>
              <h4 className="text-[18px] md:text-[20px] font-semibold text-headingText mb-4">
                {director.name}
              </h4>
              <p className="text-[#66717A] text-[15px] leading-7">
                {director.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default BoardOfDirectors
