// components/ProjectsComponent.js

import Image from 'next/image'

const projects = [
  {
    title: 'ReHomes Riverside',
    location: 'West Virginia, USA',
    imageSrc: 'https://i.ibb.co/c3Gj0hr/CSR1.png',
    number: '01',
  },
  {
    title: 'Smart City',
    location: 'Oklahoma, USA',
    imageSrc: 'https://i.ibb.co/n8BTyS1/CSR2.png',
    number: '03',
  },
  {
    title: 'Centre Park',
    location: 'Tennessee, USA',
    imageSrc: 'https://i.ibb.co/G0WZ2tG/CSR5.png',

    number: '02',
  },
  {
    title: 'ReHomes Gardenia',
    location: 'South Carolina, USA',
    imageSrc: 'https://i.ibb.co/wRBbh5D/CSR4.png',
    number: '04',
  },
  {
    title: 'Golden River',
    location: 'North Carolina, USA',
    imageSrc: 'https://i.ibb.co/pdwBjxc/CSR3.png',
    number: '05',
  },
]

export default function FeaturedProject() {
  return (
    <section id="csr" className="py-16 bg-gray-100 mt-24">
      <div className=" container mx-auto">
        <h1 className="text-[12px] md:text-[14px] paragraphFont text-center text-hover">
          CSR
        </h1>
        <div className="flex text-center justify-center items-center mb-8 px-4 md:px-0">
          <h2 className="headingFont text-center text-3xl md:text-4xl text-headingText">
            SEL CHARITABLE FOUNDATION
          </h2>
          {/* <a
            href="#"
            className="buttonFont text-sm text-hover hover:text-gray-800"
          >
            VIEW ALL PROJECTS →
          </a> */}
        </div>
        <p className="text-gray-600 text-center paragraphFont max-w-xl mx-auto mb-12 text-[14px]">
          Service to the cause of humanity had always been the cherished desire
          and dream of our honorable Managing Director since his childhood. With
          this mindset, he started helping the “Have nots” from his savings in a
          sporadic way. This spirit was institutionalized in the name and style
          “SEL charitable Foundation” that dates back in 2009. The foundation
          under the close supervision of our Managing Director is functioning in
          a very smooth and meticulous way since its inception.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0">
          {/* First Column */}
          <div className="grid gap-6">
            {projects.slice(0, 2).map((project, index) => (
              <div
                key={index}
                className="group relative shadow-lg rounded-lg overflow-hidden"
              >
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  width={500}
                  height={250}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                {/* <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h4 className="headingFont text-lg ">{project.title}</h4>
                  <p className="paragraphFont text-sm">{project.location}</p>
                </div> */}
              </div>
            ))}
          </div>

          {/* Center Column */}
          <div className="group relative shadow-lg rounded-lg overflow-hidden row-span-2">
            <Image
              src={projects[2].imageSrc}
              alt={projects[2].title}
              width={500}
              height={500}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            {/* <div className="absolute inset-0 bg-black opacity-60 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <h4 className="text-lg headingFont">
                {projects[2].title}
              </h4>
              <p className="paragraphFont text-sm">{projects[2].location}</p>
            </div> */}
          </div>

          {/* Third Column */}
          <div className="grid gap-6">
            {projects.slice(3, 5).map((project, index) => (
              <div
                key={index}
                className="group relative shadow-lg rounded-lg overflow-hidden"
              >
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  width={500}
                  height={250}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                {/* <div className="absolute inset-0 bg-black opacity-60 transition-opacity duration-300"></div> */}
                {/* <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h4 className="headingFont text-lg">
                    {project.title}
                  </h4>
                  <p className="paragraphFont text-sm">{project.location}</p>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
