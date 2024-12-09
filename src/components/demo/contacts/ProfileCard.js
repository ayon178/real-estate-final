'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Form from './Form'

const ProfileCard = () => {
  const profiles = [
    {
      name: 'John Doe',
      position: 'Senior Marketing Manager',
      phone: '+ 844 123 444 77 88',
      email: 'contact@example.com',
      image: 'https://demo2.wpopal.com/rehomes/wp-content/uploads/elementor/thumbs/about-leader-3-og0eqt9bp7t2pmsu3goqvvh7xzgvn69q137ew9onqk.jpg',
    },
    {
      name: 'William Smith',
      position: 'Recruiting Manager',
      phone: '+ 844 123 444 77 88',
      email: 'contact@example.com',
      image: 'https://demo2.wpopal.com/rehomes/wp-content/uploads/elementor/thumbs/about-leader-3-og0eqt9bp7t2pmsu3goqvvh7xzgvn69q137ew9onqk.jpg',
    },
    {
      name: 'Emma Stone',
      position: 'Human Resource',
      phone: '+ 844 123 444 77 88',
      email: 'contact@example.com',
      image: 'https://demo2.wpopal.com/rehomes/wp-content/uploads/elementor/thumbs/about-leader-3-og0eqt9bp7t2pmsu3goqvvh7xzgvn69q137ew9onqk.jpg',
    },
  ]

  return (
    <div className="md:p-12 flex flex-col md:flex-col lg:flex-row-reverse lg:gap-12">
      {/* Form Section */}
      <div className="md:w-full lg:w-1/2 order-1 md:order-1 lg:order-2 mb-8 md:mb-8 lg:mb-0">
        <div className="bg-white p-6 rounded-lg">
          <Form />
        </div>
      </div>

      {/* Profiles Section */}
      <div className="md:w-full lg:w-1/2 order-2 md:order-2 lg:order-1 space-y-6">
        {profiles.map((profile, index) => (
          <motion.div
            key={index}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-6 bg-white rounded-lg hover:shadow-md transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.2 }}
          >
            {/* Profile Image */}
            <div className="w-24 h-24 shrink-0">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            {/* Contact Information */}
            <div className="text-center sm:text-left p-2">
              <h2 className="text-[#1B365C] headingFont text-2xl mb-1">
                {profile.name}
              </h2>
              <p className="text-gray-600 headingFont mb-3">
                {profile.position}
              </p>
              <div className="space-y-1 paragraphFont text-gray-500">
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
    </div>
  )
}

export default ProfileCard