'use client'
import { motion } from 'framer-motion'
import { FaFacebookF, FaTwitter, FaYoutube, FaGoogle } from 'react-icons/fa'

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
      <motion.h2
        className="text-center text-4xl text-headingText font-bold mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Awesome team
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
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
            className="relative group bg-white rounded-lg overflow-hidden shadow-lg transition duration-300"
          >
            {/* Image with hover effect */}
            <motion.img
              src={member.imageUrl}
              alt={member.name}
              className="w-full h-72 object-cover transition-opacity duration-300 group-hover:opacity-80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />

            {/* Overlay content */}
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              whileHover={{ y: '0%', opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
              }}
              className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white"
            >
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
            </motion.div>

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
