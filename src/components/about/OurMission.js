// components/QualityProjects.js
'use client'
import { motion } from 'framer-motion'

const OurMission = () => {
  const cards = [
    {
      title: 'Strategy',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: '📊', // Replace with a relevant icon if using an icon library
    },
    {
      title: 'Ideas',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: '💡', // Replace with a relevant icon if using an icon library
    },
    {
      title: 'Expertise',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: '⚙️', // Replace with a relevant icon if using an icon library
    },
    {
      title: 'Quick Support',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: '⏱️', // Replace with a relevant icon if using an icon library
    },
  ]

  return (
    <div className="bg-[#F7F7F7]">
      <div className="container mx-auto px-4 py-12 flex justify-between items-start gap-7">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h2
            className="text-2xl md:text-4xl text-headingText font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Our goal then and now is to provide quality projects
          </motion.h2>
          <motion.p
            className="text-[#66717A] text-[15px] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
          >
            As a process transformation company, we rethink and rebuild
            processes for the digital age by combining the speed and insight of
            design thinking with the scale and accuracy of data analytics.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.3,
                ease: 'easeOut',
              }}
              className="p-6 bg-white rounded-lg shadow-lg hover:bg-hover hover:text-white transition-colors duration-300 group"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl group-hover:text-white">
                  {card.icon}
                </span>
                <h3 className="text-2xl font-semibold ml-4 group-hover:text-white">
                  {card.title}
                </h3>
              </div>
              <p className="text-gray-600 group-hover:text-white">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurMission
