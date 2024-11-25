'use client'
import React from 'react'
import { motion } from 'framer-motion'

const ProfileCard = () => {
  const profiles = [
    {
      name: 'John Doe',
      position: 'Senior Marketing Manager',
      phone: '+ 844 123 444 77 88',
      email: 'contact@example.com',
      image:
        'https://demo2.wpopal.com/rehomes/wp-content/uploads/elementor/thumbs/about-leader-3-og0eqt9bp7t2pmsu3goqvvh7xzgvn69q137ew9onqk.jpg',
    },
    {
      name: 'William Smith',
      position: 'Recruiting Manager',
      phone: '+ 844 123 444 77 88',
      email: 'contact@example.com',
      image:
        'https://demo2.wpopal.com/rehomes/wp-content/uploads/elementor/thumbs/about-leader-3-og0eqt9bp7t2pmsu3goqvvh7xzgvn69q137ew9onqk.jpg',
    },
    {
      name: 'Emma Stone',
      position: 'Human Resource',
      phone: '+ 844 123 444 77 88',
      email: 'contact@example.com',
      image:
        'https://demo2.wpopal.com/rehomes/wp-content/uploads/elementor/thumbs/about-leader-3-og0eqt9bp7t2pmsu3goqvvh7xzgvn69q137ew9onqk.jpg',
    },
  ]

  return (
    <div className=" mx-auto w-full p-24 space-y-6 flex justify-around  ">
      {profiles.map((profile, index) => (
        <motion.div
          key={index}
          className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-6 bg-white rounded-lg hover:shadow-md transition-shadow duration-300"
          initial={{ opacity: 0, y: 50 }} // Initial state (hidden and shifted down)
          whileInView={{ opacity: 1, y: 0 }} // End state (visible and in original position)
          viewport={{ once: true }} // Trigger animation when the profile comes into view
          transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.2 }} // Delay to make each card appear sequentially
        >
          {/* Profile Image */}
          <div className="w-24 h-24 shrink-0 ">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          {/* Contact Information */}
          <div className="text-center sm:text-left p-2">
            <h2 className="text-[#1B365C] text-2xl font-semibold mb-1">
              {profile.name}
            </h2>
            <p className="text-gray-600 mb-3">{profile.position}</p>
            <div className="space-y-1 text-gray-500">
              <p className="flex items-center justify-center sm:justify-start gap-1">
                <span className="font-medium">Phone:</span>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, '')}`}
                  className="hover:text-gray-700 transition-colors"
                >
                  {profile.phone}
                </a>
              </p>

              <p className="flex items-center justify-center sm:justify-start gap-1">
                <span className="font-medium">Email:</span>
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:text-gray-700 transition-colors"
                >
                  {profile.email}
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default ProfileCard
