'use client'
import Form from '@/components/demo/career/Form'
import HalfBanner from '@/components/demo/career/HalfBanner'
import Text from '@/components/demo/ourBusiness/Text copy'
import Navbar from '@/components/shared/Navbar'
import React from 'react'
import pdfImage from '../../../assets/pdfImage.png'

const page = () => {
  return (
    <div>
      <Navbar />
      <HalfBanner />
      <Text />
      <div className=" mx-auto my-24 h-screen w-full overflow-hidden pb-10">
        {/* <iframe
          src="https://beige-aviva-90.tiiny.site/"
          // src="https://heyzine.com/flip-book/c86c8f5d0a.html"
          style={{ width: '100%', height: '400px', border: 'none' }}
          title="PDF Viewer"
          className="overflow-y-hidden"
        /> */}
        <img className="w-auto mx-auto h-full" src={pdfImage.src} alt="" />
      </div>
      <Form />
    </div>
  )
}

export default page
