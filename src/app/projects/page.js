import HalfBanner from '@/components/projects/HalfBanner'
import ProjectListWithFilter from '@/components/projects/ProjectListWithFilter'
import Navbar from '@/components/shared/Navbar'
import React from 'react'

const Projects = () => {
  return (
    <div>
      <Navbar />
      <HalfBanner />
      <ProjectListWithFilter />
    </div>
  )
}

export default Projects
