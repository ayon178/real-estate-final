// components/Footer.js

import { footerBanner } from '@/app/constant/images'
import Link from 'next/link'
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa'
import { FaAngleRight } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center relative min-h-screen"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(23, 62, 98, 0.6) 0%, rgba(23, 62, 98, 1) 95%), url(${footerBanner.src})`,
      }}
    >
      {/* Contact Info Section */}
      <div className="container mx-auto py-12 px-4 md:px-8 lg:px-16 text-white">
        <h1 className="headingFont text-4xl pt-10 pb-16">Get in touch</h1>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-16">
          {/* Phone & Address */}
          <div className="space-y-2 paragraphFont">
            <p className="text-sm uppercase tracking-widest">Phone</p>
            <p className="text-2xl font-medium">(8802) 41020909-19</p>
            <p className="text-sm uppercase tracking-widest pt-6">Mobile</p>
            <p className="text-2xl font-medium">+880181955814</p>
            <p className="text-sm">
              SEL Centre, 29, West Panthapath,
              <br />
              Bir Uttam Kazi Nuruzzaman Road, Dhaka 1205
            </p>
          </div>

          {/* Email & Social Media Icons */}
          <div className="paragraphFont space-y-2">
            <p className="text-sm uppercase tracking-widest">
              Email (For Information)
            </p>
            <p className="text-2xl font-medium">info@sel.com.bd</p>
            <div className="flex space-x-4 mt-2">
              <FaFacebookF className="text-white text-md hover:text-[#bfa980]" />
              <FaTwitter className="text-white text-md hover:text-[#bfa980]" />
              <FaGoogle className="text-white text-md hover:text-[#bfa980]" />
              <FaInstagram className="text-white text-md hover:text-[#bfa980]" />
              <FaLinkedin className="text-white text-md hover:text-[#bfa980]" />
            </div>
          </div>
        </div>
        <div className="border-b border-white opacity-30 my-28"></div>

        {/* About Us, Links, and Newsletter Sections */}
        <div className="grid md:grid-cols-4 gap-8 lg:gap-16 text-sm">
          {/* About Us */}
          <div className="space-y-4">
            <h3 className="headingFont uppercase">About Us</h3>
            <p className="paragraphFont opacity-70 text-[12px] text-justify">
              SEL has been in the construction arena for the last 41 years,
              alleviating the living accommodation problem of the mega city
              Dhaka. SEL has completed and handed over 236 apartment and
              commercial projects in Dhaka, Cumilla and stepped forward also in
              Khulna, Chittagong, Bogura and Savar to establish itself as an
              embodiment of quality, competence and efficiency.
            </p>
          </div>

          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="headingFont uppercase">Company Info</h3>
            <ul className="space-y-2">
              {[
                'About Us',
                'Terms & Conditions',
                "User's Guide",
                'Support Center',
                'Press Info',
              ].map(item => (
                <li key={item} className="flex paragraphFont items-center">
                  <FaAngleRight className="mr-2 text-white" />
                  <a href="#" className="hover:text-[#bfa980]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h3 className="headingFont uppercase">Useful Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Features', 'Pricing', 'Blog'].map(item => (
                <li key={item} className="paragraphFont flex items-center">
                  <FaAngleRight className="mr-2 text-white" />
                  <a href="#" className="hover:text-[#bfa980]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="headingFont uppercase">Newsletter</h3>
            <p className="opacity-70 paragraphFont">Get latest news & update</p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="your email"
                className="px-4 paragraphFont py-2 rounded-md bg-white text-gray-800 focus:outline-none"
              />
              <button className="px-4 py-2 bg-[#bfa980] hover:bg-[#a38c6e] rounded-md text-white">
                <span className="buttonFont uppercase tracking-wide">
                  Subscribe
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between w-full pt-24 pb-14">
          <p className="paragraphFont">© 2024 – XYZ. All rights reserved.</p>
          {/* privacy & policy  */}
          <div className="flex buttonFont justify-center md:gap-6">
            <Link
              href="/privacy"
              className="underline decoration-blue-500 cursor-pointer"
            >
              Privacy & Policy
            </Link>
            <Link
              href="/terms"
              className="underline decoration-blue-500 cursor-pointer"
            >
              Terms & Condition
            </Link>
          </div>
          <p className="paragraphFont">Carefully crafted by XYZ</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
