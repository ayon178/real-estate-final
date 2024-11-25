'use client'

import Amenities from '@/components/demo/projects/details/Amenities'
import FilterSection from '@/components/demo/projects/details/FilterSection'
import HalfBanner from '@/components/demo/projects/details/HalfBanner'
import InquiryForm from '@/components/demo/projects/details/InquiryForm'
import MapCard from '@/components/demo/projects/details/MapCard'
import Overview from '@/components/demo/projects/details/Overview'
import PlansTwo from '@/components/demo/projects/details/PlansTwo'
import ProjectGallery from '@/components/demo/projects/details/ProjectGallery'
import Navbar from '@/components/shared/Navbar'
import React from 'react'

const ProjectDetails = ({ params }) => {
  // const { id } = params

  return (
    <div>
      <Navbar />
      <HalfBanner />
      <FilterSection />
      <Overview  />
      <Amenities />
      <PlansTwo />
      {/* <ProjectGallery /> */}
      <MapCard />
      <InquiryForm />
    </div>
  )
}

export default ProjectDetails
