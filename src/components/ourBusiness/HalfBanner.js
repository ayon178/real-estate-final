'use client'
import { ourBusinessHalfBanner } from '@/app/constant/images'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const HalfBanner = () => {
  return (
    <div
      className="h-screen md:h-[80vh] bg-no-repeat bg-cover flex items-center justify-center flex-col"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.65)), url(${ourBusinessHalfBanner.src})`,
        backgroundPosition: 'bottom',
      }}
    >
      <h1 className="text-3xl md:text-5xl headingFont text-white">
        Our Business
      </h1>
      <div className="flex paragraphFont items-center gap-3 mt-3">
        <p className="border-b text-[15px] text-white">Home Page</p>
        <FaArrowRightLong className="text-white" />
        <p className="text-[15px] text-white">Our Business</p>
      </div>
    </div>
  )
}

export default HalfBanner
