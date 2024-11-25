// components/ProjectGallery.js

import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
} from '@/app/constant/images'
import Image from 'next/image'

const projects = [
  {
    date: 'Jul 2019',
    title: 'Aqua (Block-E)',
    stage: '9th Floor Roof Stage',
    imageSrc: project1, // Update with the correct path
  },
  {
    date: 'Jul 2019',
    title: 'Flora (Block-D)',
    stage: '8th Floor Roof Stage',
    imageSrc: project2,
  },
  {
    date: 'Jul 2019',
    title: 'Flora (Block-B)',
    stage: '8th Floor Roof Stage',
    imageSrc: project3,
  },
  {
    date: 'Jul 2019',
    title: 'Meadows (Block-A)',
    stage: '2nd Floor Roof Stage',
    imageSrc: project4,
  },
  {
    date: 'Aug 2019',
    title: 'Aqua (Block-E)',
    stage: '9th Roof',
    imageSrc: project5,
  },
  {
    date: 'Aug 2019',
    title: 'Club House',
    stage: 'Structure Complete',
    imageSrc: project6,
  },
  {
    date: 'Aug 2019',
    title: 'Meadows (Block-A)',
    stage: '4th Roof',
    imageSrc: project7,
  },
  {
    date: 'Aug 2019',
    title: 'Rainbow (Block-B & C)',
    stage: '6th Roof',
    imageSrc: project8,
  },
]

export default function ProjectGallery() {
  return (
    <div className="bg-[#F9F2EA] py-8 px-4 lg:px-0">
      <div className="container mx-auto">
        {/* Navigation */}
        <div className="flex justify-center space-x-8 text-lg text-gray-800 font-medium mb-8">
          <a
            href="#"
            className="text-gray-800 hover:text-gray-600 border-b-2 border-gray-400"
          >
            Project Status
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-600">
            Interior Design
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-600">
            External Views
          </a>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="relative">
              <Image
                src={project.imageSrc}
                alt={project.title}
                width={400}
                height={300}
                className="rounded-md object-cover w-full h-full"
              />
              <div className="absolute top-2 left-2 bg-blue-500 text-white text-sm font-semibold px-2 py-1 rounded-md">
                {project.date}
              </div>
              <div className="absolute bottom-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
                {project.title} - {project.stage}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
