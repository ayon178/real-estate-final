'use client'

import { project1, project2, project3 } from '@/app/constant/images'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const projects = [
  {
    title: 'SEL Karnafuli',
    location: 'Dhanmondi, Dhanmondi, Dhaka',
    status:
      'Holding Number-08 (New), 19/A (Old),<br/> Road-06, Dhanmondi, Dhaka', // address
    area: 'Residential', // Project Type
    type: '2399(sft) -- 2650 (sft)', // Flat Size
    number: '01',
    imageSrc: project2,
  },
]

export default function ProjectListWithFilter() {
  const router = useRouter()
  return (
    <section className="flex flex-col lg:flex-row lg:space-x-8 py-16 lg:gap-8 gap-20 lg:px-20 bg-gray-50">
      {/* Filter Box remains unchanged */}
      <div className="w-full lg:w-1/4 lg:order-2 bg-white p-6 sm:p-10 rounded-sm shadow-md flex flex-col lg:-mt-32 -mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 flex-grow">
          <div className="col-span-1">
            <label className="buttonFont block text-sm font-bold mb-3 text-black">
              Project Status
            </label>
            <select className="mt-1 block w-full p-2 py-5 bg-gray-100 paragraphFont rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option>Any</option>
              <option>Under Construction</option>
              <option>Completed</option>
            </select>
          </div>
          <div className="col-span-1">
            <label className="buttonFont block pt-4 text-sm font-bold mb-2 text-black">
              Project Type
            </label>
            <select className="paragraphFont mt-1 block w-full p-2 py-5 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option>Any</option>
              <option>Apartment</option>
              <option>Villa</option>
            </select>
          </div>
          <div className="col-span-1">
            <label className="buttonFont block text-sm font-bold mb-2 text-black pt-4">
              Location
            </label>
            <select className="paragraphFont mt-1 block w-full p-2 py-5 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option>Any</option>
              <option>Dhanmondi, Dhanmondi, Dhaka</option>
              <option>California, USA</option>
            </select>
          </div>
        </div>
        
        <div className="flex justify-center mt-6">
          <button className="buttonFont w-full max-w-xs bg-hover text-white font-semibold py-3 rounded-sm hover:bg-gray-900">
            SEARCH
          </button>
        </div>
      </div>

    
{/* Project List - Responsive for small and medium devices */}
<div className="w-full lg:w-3/4 lg:order-1 space-y-10 lg:px-0 px-10">
  {projects.map((project, index) => (
    <div
      onClick={() => router.push(`/demo/projects/details/${index}`)}
      key={index}
      className="flex flex-col sm:flex-col lg:flex-row cursor-pointer bg-white rounded-lg shadow-md relative group"
    >
      {/* Image - Responsive placement */}
      <div className="w-full sm:w-full lg:w-2/5 h-[250px] sm:h-[250px] lg:h-[250px] relative overflow-hidden order-1 sm:order-1 lg:order-none">
        <Image
          src={project.imageSrc}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          quality={100}
          className="sm:rounded-t-lg lg:rounded-l-lg transform group-hover:scale-110 transition-transform duration-1000 ease-in-out"
        />
      </div>

      {/* Project Details - Responsive placement */}
      <div className="w-full sm:w-full lg:w-3/5 p-6 flex flex-col justify-between relative order-2 sm:order-2 lg:order-none">
        <div>
          <h3 className="headingFont text-lg text-headingText">
            {project.title}
          </h3>
          <p className="paragraphFont text-sm text-[#66717A] mt-2">
            {project.location}
          </p>
        </div>
        <div className="mt-4 paragraphFont">
          <p className="text-sm text-gray-600 flex justify-between">
            <span className="font-semibold mr-3 text-[13px]">
              Address
            </span>
            <span
              className="text-[12px] text-right text-[#66717A]"
              dangerouslySetInnerHTML={{ __html: project.status }}
            />
          </p>
          <p className="text-sm text-gray-600 flex justify-between my-3">
            <span className="font-semibold text-[13px]">
              Project Type
            </span>
            <span className="text-[12px] text-[#66717A]">
              {project.area}
            </span>
          </p>
          <p className="text-sm text-gray-600 flex justify-between">
            <span className="font-semibold text-[13px]">Flat Size</span>
            <span className="text-[12px] text-[#66717A]">
              {project.type}
            </span>
          </p>
        </div>
        <div className="headingFont absolute right-6 top-6 text-6xl font-bold text-gray-200">
          {project.number}
        </div>
      </div>
    </div>
  ))}
</div>
    </section>
  )
}