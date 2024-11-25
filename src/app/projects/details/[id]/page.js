import Amenities from '@/components/projects/details/Amenities'
import FilterSection from '@/components/projects/details/FilterSection'
import HalfBanner from '@/components/projects/details/HalfBanner'
import InquiryForm from '@/components/projects/details/InquiryForm'
import MapCard from '@/components/projects/details/MapCard'
import Overview from '@/components/projects/details/Overview'
import Plans from '@/components/projects/details/Plans'
import ProjectGallery from '@/components/projects/details/ProjectGallery'
import Navbar from '@/components/shared/Navbar'
import React from 'react'

const ProjectDetails = () => {
  return (
    <div>
      <Navbar />
      <HalfBanner />
      <FilterSection />
      <Overview />
      <Amenities />
      <Plans />
      <ProjectGallery />
      <MapCard />
      <InquiryForm />
    </div>
  )
}

export default ProjectDetails
