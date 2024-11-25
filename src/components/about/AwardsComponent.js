// components/AwardsComponent.js
'use client'
import { motion } from 'framer-motion'; // Import framer motion
import Image from 'next/image';

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
];

export default function AwardsComponent() {
  return (
    <section className="py-16 container mx-auto bg-white text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        A name that has stood tall for over 30 years
      </motion.h2>

      <motion.p
        className="text-gray-600 max-w-xl mx-auto mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      >
        ReHomes Group started its journey almost 3 decades back. The Group has
        firmly established itself as a trustworthy and dependable organization
        in the Real Estate industry that delivers quality.
      </motion.p>

      <div className="grid gap-8 md:grid-cols-3 px-4 md:px-0">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            className="shadow-md p-4 rounded-md"
            initial={{ opacity: 0, y: 50 }} // Start with hidden and below
            whileInView={{ opacity: 1, y: 0 }} // Move to full opacity and normal position
            viewport={{ once: true }} // Trigger animation when element comes into view
            transition={{
              duration: 0.6,
              ease: 'easeOut',
              delay: index * 0.2, // Delay staggered animation
            }}
          >
            <div className="group relative shadow-lg rounded-lg overflow-hidden">
              <Image
                src={award.imageSrc}
                alt={award.title}
                width={500}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="p-6 flex items-center justify-center flex-col text-left">
              <h4 className="text-[15px] font-semibold text-hover">{award.year}</h4>
              <p className="font-bold text-[20px] text-headingText my-3">{award.title}</p>
              <p className="text-sm text-[#66717A]">{award.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
