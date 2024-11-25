'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'ReHomes Riverside',
    location: 'West Virginia, USA',
    imageSrc:
      'https://demo2.wpopal.com/rehomes/wp-content/uploads/2019/11/project_1.jpg',
    number: '01',
  },
  {
    title: 'Smart City',
    location: 'Oklahoma, USA',
    imageSrc:
      'https://demo2.wpopal.com/rehomes/wp-content/uploads/2019/11/project_1.jpg',
    number: '03',
  },
  {
    title: 'Centre Park',
    location: 'Tennessee, USA',
    imageSrc:
      'https://demo2.wpopal.com/rehomes/wp-content/uploads/2019/11/project_3.jpg',
    number: '02',
  },
  {
    title: 'ReHomes Gardenia',
    location: 'South Carolina, USA',
    imageSrc:
      'https://demo2.wpopal.com/rehomes/wp-content/uploads/2019/11/project_1.jpg',
    number: '04',
  },
  {
    title: 'Golden River',
    location: 'North Carolina, USA',
    imageSrc:
      'https://demo2.wpopal.com/rehomes/wp-content/uploads/2019/11/project_1.jpg',
    number: '05',
  },
];

export default function ProjectsComponent() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        {/* Animate h1 tag */}
        <motion.h1
          className="text-sm text-hover"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          featured projects.
        </motion.h1>

        <div className="flex justify-between items-center mb-8 px-4 md:px-0">
          {/* Animate h2 tag */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-headingText"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Where happiness lives
          </motion.h2>

          <a href="#" className="text-sm text-hover hover:text-gray-800">
            VIEW ALL PROJECTS →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0">
          {/* First Column */}
          <div className="grid gap-6">
            {projects.slice(0, 2).map((project, index) => (
              <motion.div
                key={index}
                className="group relative shadow-lg rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 100 }}  // Initial position (invisible and below)
                whileInView={{ opacity: 1, y: 0 }} // Final position (visible and in place)
                viewport={{ once: true }} // Trigger animation only once when in view
                transition={{ duration: 0.6, ease: "easeOut" }} // Transition settings
              >
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  width={500}
                  height={250}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h4 className="text-lg font-semibold">{project.title}</h4>
                  <p className="text-sm">{project.location}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Column */}
          <motion.div
            className="group relative shadow-lg rounded-lg overflow-hidden row-span-2"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src={projects[2].imageSrc}
              alt={projects[2].title}
              width={500}
              height={500}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
            />
            <div className="absolute inset-0 bg-black opacity-60 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <h4 className="text-lg font-semibold">{projects[2].title}</h4>
              <p className="text-sm">{projects[2].location}</p>
            </div>
          </motion.div>

          {/* Third Column */}
          <div className="grid gap-6">
            {projects.slice(3, 5).map((project, index) => (
              <motion.div
                key={index}
                className="group relative shadow-lg rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  width={500}
                  height={250}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black opacity-60 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h4 className="text-lg font-semibold">{project.title}</h4>
                  <p className="text-sm">{project.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
