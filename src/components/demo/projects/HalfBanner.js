import { projectHanfBanner } from '@/app/constant/images'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const HalfBanner = () => {
  return (
    <div
      className="h-screen md:h-[80vh] bg-no-repeat bg-cover flex items-center justify-center flex-col"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.65)), url(${projectHanfBanner.src})`,
      }}
    >
      <h1 className="headingFont text-3xl md:text-5xl text-white">Projects</h1>
      <div className="paragraphFont flex items-center gap-3 mt-3">
        <p className="border-b text-[15px] text-white">Home Page</p>
        <FaArrowRightLong className="text-white" />
        <p className="text-[15px] text-white">Projects</p>
      </div>
    </div>
  )
}

export default HalfBanner
