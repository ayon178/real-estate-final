import AwardsComponent from '@/components/about/AwardsComponent'
import BoardOfDirectors from '@/components/about/BoardOfDirectors'
import FeaturedProject from '@/components/about/FeaturedProject'
import HalfBanner from '@/components/about/HalfBanner'
import OurMission from '@/components/about/OurMission'
import TeamSection from '@/components/about/TeamSection'
import Navbar from '@/components/shared/Navbar'
import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <HalfBanner />
      <OurMission />
      <BoardOfDirectors />
      <TeamSection />
      <AwardsComponent />
      <FeaturedProject />
    </div>
  )
}

export default AboutUs
