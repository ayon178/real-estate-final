'use client'
import React from 'react'
import { FaFacebookF, FaTwitter, FaYoutube, FaGoogle } from 'react-icons/fa'
import { motion } from 'framer-motion'

const teamMembers = [
  {
    title: 'Executive Director',
    name: 'Julie Quinn',
    imageUrl:
      'https://demo2.wpopal.com/rehomes/wp-content/uploads/2019/10/about-leader-3.jpg',
    contact: {
      phone: '+(84) 4 1800 33555',
      email: 'contact@example.com',
      social: [
        { icon: <FaFacebookF />, link: '#' },
        { icon: <FaTwitter />, link: '#' },
        { icon: <FaYoutube />, link: '#' },
        { icon: <FaGoogle />, link: '#' },
      ],
    },
  },
  {
    title: 'Manager',
    name: 'Samantha Carroll',
    imageUrl:
      'https://demo2.wpopal.com/rehomes/wp-content/uploads/2019/10/about-leader-4.jpg',
    contact: {
      phone: '+(84) 4 1800 33555',
      email: 'contact@example.com',
      social: [
        { icon: <FaFacebookF />, link: '#' },
        { icon: <FaTwitter />, link: '#' },
        { icon: <FaYoutube />, link: '#' },
        { icon: <FaGoogle />, link: '#' },
      ],
    },
  },
  {
    title: 'Designer',
    name: 'Marc Simpson',
    imageUrl:
      'https://demo2.wpopal.com/rehomes/wp-content/uploads/2019/10/about-leader-5.jpg',
    contact: {
      phone: '+(84) 4 1800 33555',
      email: 'contact@example.com',
      social: [
        { icon: <FaFacebookF />, link: '#' },
        { icon: <FaTwitter />, link: '#' },
        { icon: <FaYoutube />, link: '#' },
        { icon: <FaGoogle />, link: '#' },
      ],
    },
  },
  {
    title: 'Photographer',
    name: 'Cynthia Fletcher',
    imageUrl:
      'https://demo2.wpopal.com/rehomes/wp-content/uploads/2019/10/about-leader-6.jpg',
    contact: {
      phone: '+(84) 4 1800 33555',
      email: 'contact@example.com',
      social: [
        { icon: <FaFacebookF />, link: '#' },
        { icon: <FaTwitter />, link: '#' },
        { icon: <FaYoutube />, link: '#' },
        { icon: <FaGoogle />, link: '#' },
      ],
    },
  },
]

const TeamSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header with motion animation */}
      <motion.h2
        className="text-center text-4xl text-headingText font-bold mb-12"
        initial={{ opacity: 0, y: 50 }}  // Starts from below and hidden
        whileInView={{ opacity: 1, y: 0 }}  // Animates to visible state and original position
        transition={{ duration: 0.6 }}  // Animation duration
      >
        Awesome team
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Team members mapped to cards */}
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="relative group bg-white rounded-lg overflow-hidden shadow-lg transition duration-300"
            initial={{ opacity: 0, y: 50 }}  // Start below with opacity 0
            whileInView={{ opacity: 1, y: 0 }}  // Animate to visible state and original position
            viewport={{ once: true }}  // Trigger animation only once when in view
            transition={{ duration: 0.6, delay: 0.2 * index }}  // Stagger delay based on index for sequential animation
          >
            {/* Image with hover effect */}
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-full h-72 object-cover transition-opacity duration-300 group-hover:opacity-80"
            />

            {/* Overlay content */}
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
              {member.contact && (
                <div className="text-center space-y-2">
                  <p className="text-lg">{member.contact.phone}</p>
                  <p className="text-sm">{member.contact.email}</p>
                  <div className="flex justify-center space-x-4 mt-4">
                    {member.contact.social.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.link}
                        className="text-white hover:text-primary transition duration-300"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Title and Name */}
            <div className="p-4 text-center">
              <h3 className="text-sm text-hover">{member.title}</h3>
              <h4 className="text-xl md:text-2xl font-semibold text-headingText mt-2">
                {member.name}
              </h4>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default TeamSection
