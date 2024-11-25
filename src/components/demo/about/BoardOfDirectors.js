'use client'
import React from 'react'
import { motion } from 'framer-motion'

const directors = [
  {
    title: 'Managing Director',
    name: 'Engr. Md. Abdul Awal',
    description:
      'The Founder and the Managing Director of The Structural Engineers Ltd. Engr. Md. Abdul Awal, was born in 1954.',
    secDescription:
      'abroad to augment his experience in his chosen profession, later he decided to emulate these techniques and propagate the standards in Bangladesh in order to improve the professionalism of Bangladeshi professionals in construction industry. In 1983, on his return home, he established a Civil Engineering Firm, The Structural Engineers. which was converted into a Limited company in 1987. ',
    imageUrl:
      'https://i.ibb.co/4K1xqWG/Managing-Director-Engr-Md-Abdul-Awal.png',
  },
  {
    title: 'Additional Managing Director',
    name: 'Engr. A.H.M. Zahirul Haque',
    description:
      'Born in Dhaka in 1953. Completed School & College education from the Residential Model School & College, Dhaka. Completed B. Sc. Engineering (Chemical) from BUET. in 1977.',
    secDescription:
      'Completed Masters of Engineering (Energy Technology) from the Asian Institute of Technology (Jan. 1983 to Aug. 1984). Then joined the Ministry of Engineering & Mineral Resources, Govt. of Bangladesh as Energy Auditor, Then joined The Structural Engineers Ltd. as Director in 1989. Now, holding the position of the Additional Managing Director (AMD).',
    imageUrl:
      'https://i.ibb.co/HHwnzmQ/Additional-Managing-Director-Engr-A-H-M-Zahirul-Haque.png',
  },
  {
    title: 'Deputy Managing Director',
    name: 'Engr. A.K.M. Abdullah',
    description:
      'Born on August, 1983. He completed MBA from Brock University, St. Catharines, Ontario, Canada in 2018. He did his B.Sc. in Civil Engineering from The University of Asia Pacific in 2008.',
    secDescription:
      ' regarding the resistance of the structure against earthquake. The findings of his thesis contributed in the practical field of structural design in the company. In August of the same year, he joined The Structural Engineers Ltd as Director. Now, He is holding the position of the Deputy Managing Director (DMD). Engr. Abdullah is also the Director of SEL Readymix  & Concrete Products Ltd and SEL NIBASH Hotel, sister concerns of SEL and is the Managing Director of SYNERGY Elevators Ltd.',
    imageUrl:
      'https://i.ibb.co/k4tkVQS/Deputy-Managing-Director-Engr-A-K-M-Abdullah.png',
  },
  {
    title: 'Additional Deputy Managing Director',
    name: 'Arch. A.K.M. Abdur Rahman',
    description:
      'Arch. Mohammad Abdur Rahman was born in 1990. Mr. Rahman passed S.S.C. in 2007 from Government Laboratory High School & H.S.C. from Engineering University School & College.',
    secDescription:
      'from the Department of Architecture, BRAC University, Dhaka in 2014. Immediately after graduation he has joined “The Structural Engineers Ltd.” as Director in February 2015. In this August 2022, he was given the responsibility of Additional Deputy Managing Director of the company. ',
    imageUrl:
      'https://i.ibb.co/89hDsm6/Additional-Deputy-Managing-Director-Arch-A-K-M-Abdur-Rahman.png',
  },
  {
    title: 'Executive Director',
    name: 'Major General Monirul Islam Akand',
    description:
      'Major General Monirul Islam Akand, NDC, PSC (LPR) was born in Oct, 1967. He has three Master Degrees (MBA/University of South Florida USA, MSS/ Bangladesh ',
    secDescription:
      'University of Professionals, MDS/ National University of Bangladesh). Gen Monir served in Bangladesh Army for 36 years & was the recipient of the prestigious “Sword of Honor” during his commission. He is a graduate of National Defense College, Defense service command/staff college BD and War academy of Turkey. He joined SEL as Executive Director in July 2022. He advises/ assists senior Management on leadership, management related matters and overseas HR and IT aspects of SEL.',
    imageUrl:
      'https://i.ibb.co/fxVDYVF/Executive-Director-Major-General-Monirul-Islam-Akand.png',
  },
]

const BoardOfDirectors = () => {
  return (
    <div className="container mx-auto px-4  py-32 ">
      {/* Title animation */}
      <motion.h2
        className="headingFont text-2xl text-center mb-16 md:text-4xl text-headingText"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Our Leaders
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7  mx-20  ">
        {directors.map((director, index) => (
          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden pt-3"
            key={index}
          >
            <motion.div
              className=" flex flex-col lg:flex-row "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={director.imageUrl}
                alt={director.name}
                className="w-full md:w-2/5 h-[300px] object-cover"
              />

              <div className="p-8 pb-0">
                {/* Title */}
                <motion.h3
                  className="buttonFont text-sm text-hover"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  {director.title}
                </motion.h3>
                {/* Name */}
                <motion.h4
                  className="headingFont text-[18px] md:text-[20px] text-headingText mb-4"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  {director.name}
                </motion.h4>
                {/* Description */}
                <motion.p
                  className="paragraphFont text-[#66717A] text-[13px] leading-6"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  {director.description}
                </motion.p>
              </div>
            </motion.div>
            {/* <motion.p
              className="text-[#66717A] text-[16px] leading-7 w-full px-4 pb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {director.secDescription}
            </motion.p> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default BoardOfDirectors
