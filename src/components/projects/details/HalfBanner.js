import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const HalfBanner = () => {
  return (
    <div
      className="h-screen md:h-[80vh] bg-no-repeat bg-cover flex items-center justify-center flex-col"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.01)), url(https://demo2.wpopal.com/rehomes/wp-content/uploads/2019/11/background-blog.jpg)`,
      }}
    >
      <h1 className="text-3xl md:text-5xl text-white">ReHomes Riverside</h1>
      <div className="flex items-center gap-3 mt-3">
        <p className="border-b text-[15px] text-white">visit website</p>
        <FaArrowRightLong className="text-white" />
      </div>
    </div>
  )
}

export default HalfBanner