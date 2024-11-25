'use client'

import { useState } from 'react'

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
  })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="bg-[#fff] my-28 py-8 px-4 lg:px-0">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl headingFont text-primary mb-4">
          Enquiry
        </h2>
        <p className="text-gray-600 paragraphFont mb-10">
          Wish to get a call back from our team? Fill in your details.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-14"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="col-span-1 md:col-span-1 paragraphFont bg-[#F5F5F5] rounded-lg px-4 py-3 text-gray-700 focus:outline-none"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="col-span-1 md:col-span-1 paragraphFont bg-[#F5F5F5] rounded-lg px-4 py-3 text-gray-700 focus:outline-none"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="col-span-1 paragraphFont md:col-span-1 bg-[#F5F5F5] rounded-lg px-4 py-3 text-gray-700 focus:outline-none"
            value={formData.phone}
            onChange={handleChange}
          />
          <select
            name="project"
            className="col-span-1 md:col-span-1 bg-[#F5F5F5] rounded-lg px-4 py-3 text-gray-700 focus:outline-none paragraphFont"
            value={formData.project}
            onChange={handleChange}
          >
            <option value="">Project</option>
            <option value="project1">Project 1</option>
            <option value="project2">Project 2</option>
            {/* Add more options as needed */}
          </select>
          <button
            type="submit"
            className="col-span-1 buttonFont md:col-span-1 bg-[#B89D7D] text-white rounded-lg px-6 py-2 font-semibold hover:bg-[#A5856A] transition"
          >
            Submit
          </button>
        </form>

        {/* Buttons */}
        <div className="flex justify-center space-x-12 mb-6">
          <button className="buttonFont border-2 border-dotted border-hover text-gray-700 py-3 px-4 rounded-full hover:text-gray-500">
            DOWNLOAD BROCHURE
          </button>
          <button className=" buttonFont border-2 border-dotted border-hover text-gray-700 py-3 px-4 rounded-full hover:text-gray-500">
            PAYMENT SCHEDULE
          </button>
        </div>

        {/* Footer */}
        <p className="text-gray-500 text-sm mb-2 paragraphFont">
          If any of our persons ask for cash payment, kindly call or inform
          directly at{' '}
          <a href="tel:+84418003355" className="text-[#B89D7D] buttonFont">
            +84418003355
          </a>{' '}
        </p>
        <p className="text-gray-500 text-sm buttonFont">
          {' '}
          or raise your complaint to{' '}
          <a href="mailto:contact@example.com" className="text-[#B89D7D]">
            contact@example.com
          </a>
        </p>
      </div>
    </div>
  )
}
