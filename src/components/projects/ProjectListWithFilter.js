'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

const projects = [
  {
    title: 'ReHomes Riverside',
    location: 'New York, USA',
    status: 'Under Construction',
    area: '1000 - 1500 Sq ft',
    type: 'Apartment',
    number: '01',
    imageSrc:
      'https://demo2.wpopal.com/rehomes/wp-content/uploads/2019/10/project_9-1400x700.jpg',
  },
  {
    title: 'Resort & Villas',
    location: 'New York, USA',
    status: 'Under Construction',
    area: '1000 - 1500 Sq ft',
    type: 'Villa',
    number: '02',
    imageSrc:
      'https://demo2.wpopal.com/rehomes/wp-content/uploads/2019/10/project_14-1400x700.jpg',
  },
  {
    title: 'ReHomes Golden River',
    location: 'New York, USA',
    status: 'Under Construction',
    area: '800 - 2000 Sq ft',
    type: 'Apartment',
    number: '03',
    imageSrc:
      'https://demo2.wpopal.com/rehomes/wp-content/uploads/2019/10/project_14-1400x700.jpg',
  },
  {
    title: 'ReHomes Golden River',
    location: 'New York, USA',
    status: 'Under Construction',
    area: '800 - 2000 Sq ft',
    type: 'Apartment',
    number: '03',
    imageSrc:
      'https://demo2.wpopal.com/rehomes/wp-content/uploads/2019/10/project_14-1400x700.jpg',
  },
  {
    title: 'ReHomes Golden River',
    location: 'New York, USA',
    status: 'Under Construction',
    area: '800 - 2000 Sq ft',
    type: 'Apartment',
    number: '03',
    imageSrc:
      'https://demo2.wpopal.com/rehomes/wp-content/uploads/2019/10/project_14-1400x700.jpg',
  },
  {
    title: 'ReHomes Golden River',
    location: 'New York, USA',
    status: 'Under Construction',
    area: '800 - 2000 Sq ft',
    type: 'Apartment',
    number: '03',
    imageSrc:
      'https://demo2.wpopal.com/rehomes/wp-content/uploads/2019/10/project_14-1400x700.jpg',
  },
  {
    title: 'ReHomes Golden River',
    location: 'New York, USA',
    status: 'Under Construction',
    area: '800 - 2000 Sq ft',
    type: 'Apartment',
    number: '03',
    imageSrc:
      'https://demo2.wpopal.com/rehomes/wp-content/uploads/2019/10/project_14-1400x700.jpg',
  },
  {
    title: 'ReHomes Golden River',
    location: 'New York, USA',
    status: 'Under Construction',
    area: '800 - 2000 Sq ft',
    type: 'Apartment',
    number: '03',
    imageSrc:
      'https://demo2.wpopal.com/rehomes/wp-content/uploads/2019/10/project_14-1400x700.jpg',
  },
]

export default function ProjectListWithFilter() {
  const router = useRouter()
  return (
    <section className="flex flex-col md:flex-row md:space-x-8 py-16 px-4 md:px-8 bg-gray-50">
    {/* Left: Project List */}
    <div className="flex-1 w-full md:w-2/3 space-y-8 order-2 md:order-1">
      {projects.map((project, index) => (
        <div
          onClick={() => router.push(`/projects/details/${index}`)}
          key={index}
          className="group flex cursor-pointer bg-white rounded-lg shadow-md relative items-center"
          style={{ height: '250px' }}
        >
          <div className="w-2/5 h-full relative overflow-hidden rounded-l-lg">
            {/* Image with Zoom Effect on Hover */}
            <div className="w-full h-full relative">
              <Image
                src={project.imageSrc}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                quality={100} // Ensure the image quality is high
                className="transform transition-transform duration-1000 ease-in-out group-hover:scale-110" // Apply scale effect on hover of the whole card
              />
            </div>
          </div>
          <div className="w-3/5 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-headingText">
                {project.title}
              </h3>
              <p className="text-sm text-[#66717A] mt-2">
                {project.location}
              </p>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600 flex justify-between">
                <span className="font-semibold">Status</span>
                <span className="text-sm text-[#66717A]">
                  {project.status}
                </span>
              </p>
              <p className="text-sm text-gray-600 flex justify-between my-3">
                <span className="font-semibold">Area</span>
                <span className="text-sm text-[#66717A]">{project.area}</span>
              </p>
              <p className="text-sm text-gray-600 flex justify-between">
                <span className="font-semibold">Type</span>
                <span className="text-sm text-[#66717A]">{project.type}</span>
              </p>
            </div>
          </div>
          <div className="absolute right-6 top-6 text-4xl font-bold text-gray-200">
            {project.number}
          </div>
        </div>
      ))}
    </div>

    {/* Right: Filter Box */}
    <div className="order-1 w-full md:w-1/3 md:order-2 md:sticky top-4 self-start bg-white p-6 rounded-lg shadow-md -mt-32">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-bold mb-1 text-black">
            Project Status
          </label>
          <select className="mt-1 block w-full p-2 py-4 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option>Any</option>
            <option>Under Construction</option>
            <option>Completed</option>
          </select>
        </div>
        <div className="pt-4">
          <label className="block text-sm font-bold mb-1 text-black">
            Project Type
          </label>
          <select className="mt-1 block w-full p-2 py-3 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option>Any</option>
            <option>Apartment</option>
            <option>Villa</option>
          </select>
        </div>
        <div className="pt-4">
          <label className="block text-sm font-bold mb-1 text-black">
            Location
          </label>
          <select className="mt-1 block w-full p-2 py-4 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option>Any</option>
            <option>New York, USA</option>
            <option>California, USA</option>
            <option>Florida, USA</option>
            <option>Texas, USA</option>
            <option>Nevada, USA</option>
            <option>Hawaii, USA</option>
          </select>
        </div>
        <div className="pt-4">
          <label className="block text-sm font-bold mb-1 text-black">
            Budget
          </label>
          <select className="mt-1 block w-full p-2 py-4 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option>Any</option>
            <option>$0 - $1000</option>
            <option>$1000 - $5000</option>
          </select>
        </div>
        <button className="mt-10 w-full bg-hover text-white font-semibold py-3 rounded-md hover:bg-gray-900">
          SEARCH
        </button>
      </div>
    </div>
  </section>
  )
}
