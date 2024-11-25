import {
    completedProject,
    ongoingProject,
    readyProject,
    upcomingProject,
  } from '@/app/constant/images'
  import Image from 'next/image'
  import { motion } from 'framer-motion'
  
  const ScrollHorizontal = () => {
    const projects = [
      {
        id: 1,
        title: 'Completed Projects',
        location: 'New York, USA',
        imageUrl: completedProject,
        number: '01',
      },
      {
        id: 2,
        title: 'Ongoing Projects',
        location: 'Texas, USA',
        imageUrl: ongoingProject,
        number: '02',
      },
      {
        id: 3,
        title: 'Ready Projects',
        location: 'Los Angeles, USA',
        imageUrl: readyProject,
        number: '03',
      },
      {
        id: 4,
        title: 'Upcoming Projects',
        location: 'South Carolina, USA',
        imageUrl: upcomingProject,
        number: '04',
      },
    ]
  
    return (
      <div className="container mx-auto px-4 py-12 md:py-24">
        {/* Motion for p tag */}
        <motion.p
          className="text-secondary text-[10px] md:text-[11px] text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          FEATURED PROJECTS.
        </motion.p>
  
        {/* Motion for h1 tag */}
        <motion.h1
          className="text-headingText text-[30px] md:text-[40px] mt-6 mb-10 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Where happiness lives
        </motion.h1>
  
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div key={project.id} className="relative group">
              <div
                className={`relative group ${index % 2 !== 0 ? 'lg:mt-20' : ''}`}
              >
                {/* Project Image Wrapper */}
                <motion.div
                  className="w-11/12 mx-auto overflow-hidden relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                  />
  
                  {/* Gradient Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#173E62] to-transparent"></div>
                </motion.div>
  
                {/* Project Info */}
                <div
                  className="absolute left-[-20px] bottom-0 bg-white w-52 md:w-64 lg:w-72 p-4 md:p-5"
                >
                  <h2 className="md:text-4xl text-2xl text-headingText font-semibold">
                    {project.title}
                  </h2>
                </div>
  
                {/* Number Overlay */}
                <div className="absolute bottom-5 right-16 text-6xl font-bold text-white opacity-70">
                  {project.number}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default ScrollHorizontal;
  