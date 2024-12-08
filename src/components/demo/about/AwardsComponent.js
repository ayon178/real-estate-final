// components/AwardsComponent.js
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion' // Import motion from framer-motion

const awards = [
  {
    year: '2017',
    title: 'National Real Estate Excellence Awards',
    description: 'Best Luxury Real Estate Company',
    imageSrc:
      'https://demo2.wpopal.com/rehomes/wp-content/uploads/2019/10/about-1.jpg',
  },
  {
    year: '2019',
    title: 'ET Now Real Estate Awards',
    description: 'Most Promising Delivery',
    imageSrc:
      'https://demo2.wpopal.com/rehomes/wp-content/uploads/2019/10/about-2.jpg',
  },
  {
    year: '2018',
    title: 'BAM Awards Real Best',
    description: 'Builder Award of the Year',
    imageSrc:
      'https://demo2.wpopal.com/rehomes/wp-content/uploads/2019/10/about-3.jpg',
  },
]
// const awards = [
//   {
//     year: '2017',
//     title: 'National Real Estate Excellence Awards',
//     description: 'Best Luxury Real Estate Company',
//     imageSrc: 'https://i.ibb.co/c3Gj0hr/CSR1.png',
//   },
//   {
//     year: '2019',
//     title: 'ET Now Real Estate Awards',
//     description: 'Most Promising Delivery',
//     imageSrc: 'https://i.ibb.co/n8BTyS1/CSR2.png',
//   },
//   {
//     year: '2018',
//     title: 'BAM Awards Real Best',
//     description: 'Builder Award of the Year',
//     imageSrc: 'https://i.ibb.co/pdwBjxc/CSR3.png',
//   },
//   {
//     year: '2018',
//     title: 'BAM Awards Real Best',
//     description: 'Builder Award of the Year',
//     imageSrc: 'https://i.ibb.co/wRBbh5D/CSR4.png',
//   },
//   {
//     year: '2018',
//     title: 'BAM Awards Real Best',
//     description: 'Builder Award of the Year',
//     imageSrc: 'https://i.ibb.co/G0WZ2tG/CSR5.png',
//   },
// ]

export default function AwardsComponent() {
  return (
    <section id="awards" className="lg:py-16 container mx-auto bg-white text-center">
      <motion.h2
        className="headingFont text-3xl md:text-4xl text-gray-800 mb-4"
        initial={{ opacity: 0, y: 50 }} // Start from below with 0 opacity
        whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
        viewport={{ once: true }} // Trigger animation only once when in view
        transition={{ duration: 0.6 }}
      >
        Awards & Recognition 
      </motion.h2>
      <motion.p
        className="text-gray-600 paragraphFont max-w-xl mx-auto mb-12 text-[14px] px-4 lg:px-0"
        initial={{ opacity: 0, y: 50 }} // Start from below with 0 opacity
        whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
        viewport={{ once: true }} // Trigger animation only once when in view
        transition={{ duration: 0.6 }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
        perspiciatis nam quod fuga nostrum dolorem cupiditate aut non veritatis
        tenetur. Nulla delectus quibusdam dolor, eaque nostrum illo deleniti
        aliquam neque veritatis ex sequi molestiae quo! Nihil illo veritatis ea
        magnam omnis officiis nulla, ad corporis molestias quidem quia in
        cupiditate, expedita sapiente! Veritatis reiciendis et dicta placeat
        sint, ipsum at ad accusantium? Doloremque asperiores quia nam
      </motion.p>

      <div className="grid gap-8 md:grid-cols-3 px-4 md:px-0">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            className="shadow-md p-4 rounded-md"
            initial={{ opacity: 0, y: 50 }} // Start from below with 0 opacity
            whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
            viewport={{ once: true }} // Trigger animation only once when in view
            transition={{ duration: 0.6, delay: 0.2 * index }} // Delay staggered animation for each card
          >
            <div className="group relative shadow-lg rounded-lg overflow-hidden">
              <Image
                src={award.imageSrc}
                alt={award.title}
                width={500}
                height={300}
                className="w-full h-full max-h-[250px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="p-6 flex items-center justify-center flex-col text-left">
              <motion.h4
                className="text-[15px] font-semibold text-hover"
                initial={{ opacity: 0, y: 50 }} // Initial animation for <h4>
                whileInView={{ opacity: 1, y: 0 }} // Animate when in view
                transition={{ duration: 0.6 }}
              >
                {award.year}
              </motion.h4>
              <motion.p
                className="headingFont text-center text-[20px] text-headingText my-3"
                initial={{ opacity: 0, y: 50 }} // Initial animation for <p>
                whileInView={{ opacity: 1, y: 0 }} // Animate when in view
                transition={{ duration: 0.6 }}
              >
                {award.title}
              </motion.p>
              <motion.p
                className="text-sm buttonFont text-[#66717A]"
                initial={{ opacity: 0, y: 50 }} // Initial animation for <p>
                whileInView={{ opacity: 1, y: 0 }} // Animate when in view
                transition={{ duration: 0.6 }}
              >
                {award.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
