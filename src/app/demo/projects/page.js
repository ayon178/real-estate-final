import HalfBanner from '@/components/demo/projects/HalfBanner'
import ProjectListWithFilter from '@/components/demo/projects/ProjectListWithFilter'
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
