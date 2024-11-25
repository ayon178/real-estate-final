'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { FiChevronDown } from 'react-icons/fi'
import { logo } from '@/app/constant/images'
import { useRouter } from 'next/navigation'

const menuItems = [
  {
    label: 'Home',
    path: '/',
    subItems: [
      { label: 'Home Theme', path: '/' },
      { label: 'Home Demo', path: '/demo/home' },
    ],
  },
  {
    label: 'About Us',
    path: '/about',
    subItems: [
      { label: 'About Us Theme', path: '/about' },
      { label: 'About Us Demo', path: '/demo/about' },
    ],
  },
  {
    label: 'Projects',
    path: '/projects',
    subItems: [
      { label: 'Projects Theme', path: '/projects' },
      { label: 'Projects Demo', path: '/demo/projects' },
    ],
  },

  {
    label: 'Our Business',
    path: '/Our Business',
    subItems: [
      { label: 'Our Business Theme', path: '/ourBusiness' },
      { label: 'Our Business Demo', path: '/demo/ourBusiness' },
    ],
  },
  {
    label: 'Career',
    path: '/career',
    subItems: [
      { label: 'Career Theme', path: '/career' },
      { label: 'Career Demo', path: '/demo/career' },
    ],
  },
  {
    label: 'Contact',
    path: '/contact',
    subItems: [
      { label: 'Contact Theme', path: '/contact' },
      { label: 'Contact Demo', path: '/demo/contact' },
    ],
  },
  // {
  //   label: 'Sel Connect',
  //   path: '/sel-connect',
  //   subItems: [
  //     { label: 'Sel Connect Theme', path: '/sel-connect' },
  //     { label: 'Sel Connect Demo', path: '/demo/sel-connect' },
  //   ],
  // },
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
                <div key={menu.label} className="relative">
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
                      className={`absolute mt-2 w-48 bg-white text-gray-700 rounded shadow-lg ${
                        index === menuItems.length - 1 ? 'right-0' : 'left-0'
                      }`}
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
                </div>
              ))}
              <div>
                {/* <p className="text-white mb-1">After sales service</p> */}
                <button className="buttonFont bg-[#B07E5B] text-slate-900 px-4 py-2 rounded-full">
                  Sel connect
                </button>
              </div>
            </div>
          </nav>
        </motion.div>

        {/* Sidebar Menu */}
        <motion.div
          initial={{ x: '-100%' }}
          animate={isOpen ? { x: 0 } : { x: '-100%' }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 md:hidden z-20"
        >
          <div className="bg-white w-3/4 h-full p-4 relative">
            <button
              onClick={closeMenu}
              className="absolute top-4 right-4 text-[#173E62] text-2xl"
            >
              &times;
            </button>
            <ul className="flex flex-col mt-8 text-[#173E62]">
              {menuItems.map(menu => (
                <li key={menu.label} className="py-2">
                  <div className="flex justify-between items-center">
                    <a
                      href={menu.path}
                      onClick={e => {
                        e.preventDefault()
                        toggleDropdown(menu.label)
                      }}
                      className="cursor-pointer"
                    >
                      {menu.label}
                    </a>
                    <button onClick={() => toggleDropdown(menu.label)}>
                      {activeDropdown === menu.label ? (
                        <AiOutlineMinus size={15} />
                      ) : (
                        <AiOutlinePlus size={15} />
                      )}
                    </button>
                  </div>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: activeDropdown === menu.label ? 'auto' : 0,
                      opacity: activeDropdown === menu.label ? 1 : 0,
                    }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4 mt-2 flex flex-col space-y-2 overflow-hidden"
                  >
                    {menu.subItems.map(subItem => (
                      <a
                        key={subItem.label}
                        href={subItem.path}
                        className="text-[#173E62]"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Background Overlay */}
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={closeMenu}
          />
        )}
      </div>
    </motion.div>
  )
}

export default Navbar
