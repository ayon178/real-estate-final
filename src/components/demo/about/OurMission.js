'use client'
import React from 'react'
import { motion } from 'framer-motion'

const OurMission = () => {
  const cards = [
    {
      title: 'Strategy',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: '📊',
    },
    {
      title: 'Ideas',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: '💡',
    },
    {
      title: 'Expertise',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: '⚙️',
    },
    {
      title: 'Quick Support',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: '⏱️',
    },
  ]

  return (
    <div className="bg-[#F7F7F7]">
      <div className="container mx-auto px-4 py-12 flex justify-between items-start gap-7">
        
        {/* Wrap both h2 and p with motion components */}
        <div className="mb-8">
          <motion.h2
            className="text-2xl md:text-4xl text-headingText font-bold mb-4"
            initial={{ opacity: 0, y: 20 }} // Start from bottom with 0 opacity
            whileInView={{ opacity: 1, y: 0 }} // Animate to original position
            transition={{ duration: 0.6 }}
          >
            Our goal then and now is to provide quality projects
          </motion.h2>
          <motion.p
            className="text-[#66717A] text-[15px] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }} // Start from bottom with 0 opacity
            whileInView={{ opacity: 1, y: 0 }} // Animate to original position
            transition={{ duration: 0.6 }}
          >
            As a process transformation company, we rethink and rebuild
            processes for the digital age by combining the speed and insight of
            design thinking with the scale and accuracy of data analytics.
          </motion.p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:bg-hover hover:text-white transition-colors duration-300 group"
              initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and positioned below
              whileInView={{ opacity: 1, y: 0 }} // Animate to fully visible and original position
              viewport={{ once: true }} // Trigger animation only once when in view
              transition={{ duration: 0.6, delay: 0.2 * index }} // Stagger animation for each card
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl group-hover:text-white">
                  {card.icon}
                </span>
                <h3 className="text-2xl font-semibold ml-4 group-hover:text-white">
                  {card.title}
                </h3>
              </div>

              <motion.p
                className="text-gray-600 group-hover:text-white"
                initial={{ opacity: 0, y: 20 }}  // Start with opacity 0 and slightly down
                whileInView={{ opacity: 1, y: 0 }} // Animate to full visibility and to the normal position
                transition={{ duration: 0.6 }} // Control the timing of the animation
              >
                {card.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurMission
