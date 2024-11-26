'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import { logo } from '@/app/constant/images'
import { useRouter } from 'next/navigation'

const menuItems = [
  { label: 'Home', path: '/' },
  {
    label: 'About Us',
    path: '/about',
    subItems: [
      { label: 'Who We Are', path: '/demo/about/#our_mission' },
      { label: 'Our Leaders', path: '/demo/about/#our_leaders' },
      {
        label: 'Awards & Recognition',
        path: '/demo/about/#awards',
      },
      { label: 'CSR', path: '/demo/about/#csr' },
    ],
  },
  {
    label: 'Projects',
    path: '/projects',
    subItems: [
      { label: 'Ready', path: '/demo/projects' },
      { label: 'Completed', path: '/demo/projects' },
      { label: 'Ongoing', path: '/demo/projects' },
      { label: 'Upcoming', path: '/demo/projects' },
    ],
  },
  { label: 'Our Business', path: '/demo/ourBusiness' },
  { label: 'Career', path: '/demo/career' },
  { label: 'Contact', path: '/demo/contact' },
]

const Navbar = ({ isOpen, setIsOpen }) => {
  const [showOverlay, setShowOverlay] = useState(false)
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const sliderHeight = window.innerHeight - 40
      setIsNavbarVisible(window.scrollY <= sliderHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    setShowOverlay(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
    setShowOverlay(false)
  }

  const toggleDropdown = menuLabel => {
    setActiveDropdown(prev => (prev === menuLabel ? null : menuLabel))
  }

  return (
    <motion.div
      className={`fixed top-0 left-0 w-full z-30 bg-primary md:bg-transparent shadow-none ${
        isNavbarVisible ? 'visible' : 'hidden'
      }`}
      initial={{ opacity: 1 }}
      animate={{ opacity: isNavbarVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <motion.div
          animate={isOpen ? { x: '75%' } : { x: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="w-full"
        >
          <nav className="flex justify-between items-center p-4 bg-primary md:bg-transparent">
            <img
              onClick={() => router.push('/')}
              className="w-16 cursor-pointer"
              src={logo.src}
              alt=""
            />
            <div className="md:hidden" onClick={toggleMenu}>
              <div className="w-8 h-0.5 bg-white mb-1"></div>
              <div className="w-8 h-0.5 bg-white mb-1"></div>
              <div className="w-8 h-0.5 bg-white"></div>
            </div>
            <div className="hidden md:flex space-x-4">
              {menuItems.map((menu, index) => (
                <div key={menu.label} className="relative flex items-center">
                  {/* Show dropdown only for items with subItems */}
                  {menu.subItems ? (
                    <>
                      <div
                        onClick={e => {
                          e.preventDefault()
                          toggleDropdown(menu.label)
                        }}
                        className="buttonFont flex items-center space-x-1 py-2 text-white cursor-pointer"
                      >
                        <span>{menu.label}</span>
                        <motion.div
                          animate={{
                            rotate: activeDropdown === menu.label ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <FiChevronDown />
                        </motion.div>
                      </div>
                      {activeDropdown === menu.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className={`absolute top-full mt-2 w-56 bg-white text-gray-700 rounded shadow-lg`}
                        >
                          {menu.subItems.map(subItem => (
                            <a
                              key={subItem.label}
                              href={subItem.path}
                              className="buttonFont block px-4 py-2 hover:bg-gray-100"
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </>
                  ) : (
                    <a
                      href={menu.path}
                      className="buttonFont flex items-center py-2 text-white cursor-pointer"
                    >
                      {menu.label}
                    </a>
                  )}
                </div>
              ))}
              <div>
                <button className="buttonFont bg-[#B07E5B] text-slate-900 px-4 py-2 rounded-full">
                  Sel connect
                </button>
              </div>
            </div>
          </nav>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Navbar
