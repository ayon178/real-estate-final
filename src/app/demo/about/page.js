import AwardsComponent from '@/components/demo/about/AwardsComponent'
import BoardOfDirectors from '@/components/demo/about/BoardOfDirectors'
import FeaturedProject from '@/components/demo/about/FeaturedProject'
import HalfBanner from '@/components/demo/about/HalfBanner'
import Mission from '@/components/demo/about/Mission'
// import OurMission from '@/components/demo/about/OurMission'
import TeamSection from '@/components/demo/about/TeamSection'
import Navbar from '@/components/shared/Navbar'
import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <HalfBanner />
      {/* <OurMission /> */}
      <Mission/>
      <BoardOfDirectors />
      
      {/* <TeamSection /> */}
      <AwardsComponent />
      <FeaturedProject />
    </div>
  )
}

export default AboutUs
