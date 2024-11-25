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
  // {
  //   title: 'SEL MOMO',
  //   location: 'Dhanmondi, Dhanmondi, Dhaka',
  //   status:
  //     'Holding Number-08 (New), 19/A (Old),<br/> Road-06, Dhanmondi, Dhaka', // address
  //   area: 'Residential', // Project Type
  //   type: '2399(sft) -- 2650 (sft)', // Flat Size
  //   number: '02',
  //   imageSrc: project2,
  // },
  // {
  //   title: 'SEL Ashirbad',
  //   location: 'Dhanmondi, Dhanmondi, Dhaka',
  //   status:
  //     'Holding Number-08 (New), 19/A (Old),<br/> Road-06, Dhanmondi, Dhaka', // address
  //   area: 'Residential', // Project Type
  //   type: '2399(sft) -- 2650 (sft)', // Flat Size
  //   number: '03',
  //   imageSrc: project3,
  // },
  // {
  //   title: 'ReHomes Golden River',
  //   location: 'Dhanmondi, Dhanmondi, Dhaka',
  //   status: 'Under Construction',
  //   area: '800 - 2000 Sq ft',
  //   type: 'Apartment',
  //   number: '03',
  //   imageSrc:
  //     'https://demo2.wpopal.com/rehomes/wp-content/uploads/2019/10/project_14-1400x700.jpg',
  // },
  // {
  //   title: 'ReHomes Golden River',
  //   location: 'Dhanmondi, Dhanmondi, Dhaka',
  //   status: 'Under Construction',
  //   area: '800 - 2000 Sq ft',
  //   type: 'Apartment',
  //   number: '03',
  //   imageSrc:
  //     'https://demo2.wpopal.com/rehomes/wp-content/uploads/2019/10/project_14-1400x700.jpg',
  // },
  // {
  //   title: 'ReHomes Golden River',
  //   location: 'Dhanmondi, Dhanmondi, Dhaka',
  //   status: 'Under Construction',
  //   area: '800 - 2000 Sq ft',
  //   type: 'Apartment',
  //   number: '03',
  //   imageSrc:
  //     'https://demo2.wpopal.com/rehomes/wp-content/uploads/2019/10/project_14-1400x700.jpg',
  // },
  // {
  //   title: 'ReHomes Golden River',
  //   location: 'Dhanmondi, Dhanmondi, Dhaka',
  //   status: 'Under Construction',
  //   area: '800 - 2000 Sq ft',
  //   type: 'Apartment',
  //   number: '03',
  //   imageSrc:
  //     'https://demo2.wpopal.com/rehomes/wp-content/uploads/2019/10/project_14-1400x700.jpg',
  // },
  // {
  //   title: 'ReHomes Golden River',
  //   location: 'Dhanmondi, Dhanmondi, Dhaka',
  //   status: 'Under Construction',
  //   area: '800 - 2000 Sq ft',
  //   type: 'Apartment',
  //   number: '03',
  //   imageSrc:
  //     'https://demo2.wpopal.com/rehomes/wp-content/uploads/2019/10/project_14-1400x700.jpg',
  // },
]

export default function ProjectListWithFilter() {
  const router = useRouter()
  return (
    <section className="flex flex-col md:flex-row md:space-x-8 py-16 gap-8 px-20 bg-gray-50 ">
      {/* Left: Project List */}
      <div className="flex-1 w-full md:w-3/4 space-y-10 order-2 md:order-1 ">
        {projects.map((project, index) => (
          <div
            onClick={() => router.push(`/demo/projects/details/${index}`)}
            key={index}
            className="flex cursor-pointer bg-white rounded-lg shadow-md relative items-center group " // Add `group` class
            style={{ height: '250px' }}
          >
            {/* added hover here   */}
            <div className="w-2/5 h-full relative overflow-hidden">
              <Image
                src={project.imageSrc}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                quality={100}
                className="rounded-l-lg transform group-hover:scale-110 transition-transform duration-1000 ease-in-out" // Use `group-hover`
              />
            </div>
            {/* text */}
            <div className="w-3/5 p-6 flex flex-col justify-between">
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
            </div>
            <div className="headingFont absolute right-6 top-6 text-6xl font-bold text-gray-200">
              {project.number}
            </div>
          </div>
        ))}
      </div>

      {/* Right: Filter Box */}
      <div className="order-1 w-full md:w-1/4 md:order-2 md:sticky top-4 self-start bg-white p-10 rounded-sm shadow-md -mt-32 ">
        <div className="space-y-4">
          <div>
            <label className="buttonFont block text-sm font-bold mb-3 text-black">
              Project Status
            </label>
            <select className="mt-1 block w-full p-2 py-5 bg-gray-100 paragraphFont rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option>Any</option>
              <option>Under Construction</option>
              <option>Completed</option>
            </select>
          </div>
          <div className="">
            <label className="buttonFont block pt-4 text-sm font-bold mb-2 text-black">
              Project Type
            </label>
            <select className="paragraphFont mt-1 block w-full p-2 py-5 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option>Any</option>
              <option>Apartment</option>
              <option>Villa</option>
            </select>
          </div>
          <div>
            <label className="buttonFont block text-sm font-bold mb-2 text-black pt-4">
              Location
            </label>
            <select className="paragraphFont mt-1 block w-full p-2 py-5 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option>Any</option>
              <option>Dhanmondi, Dhanmondi, Dhaka</option>
              <option>California, USA</option>
            </select>
          </div>
          {/* <div>
            <label className="block text-sm font-bold mb-1 text-black pt-4">
              Budget
            </label>
            <select className="mt-1 block w-full p-2 py-4 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option>Any</option>
              <option>$0 - $1000</option>
              <option>$1000 - $5000</option>
            </select>
          </div> */}
          <button className="mt-10 buttonFont w-full bg-hover text-white font-semibold py-3 rounded-sm hover:bg-gray-900">
            SEARCH
          </button>
        </div>
      </div>
    </section>
  )
}
