'use client'
import { AiOutlineCamera, AiOutlineUser, AiOutlineAlert, AiOutlineShop } from 'react-icons/ai';
import { FaSwimmingPool, FaTree, FaChild, FaDumbbell } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Amenities = () => {
  const amenities = [
    { icon: <AiOutlineCamera size={40} />, label: 'Surveillance System' },
    { icon: <FaChild size={40} />, label: "Children's Play Area" },
    { icon: <AiOutlineUser size={40} />, label: '24x7 Security' },
    { icon: <FaTree size={40} />, label: 'Landscape Garden' },
    { icon: <AiOutlineAlert size={40} />, label: 'Firefighting System' },
    { icon: <AiOutlineShop size={40} />, label: 'AC Community Hall' },
    { icon: <FaSwimmingPool size={40} />, label: 'Swimming Pool' },
    { icon: <FaDumbbell size={40} />, label: 'Fitness Center' },
  ];

  return (
    <div className="bg-[#f9f4ef] py-10">
      {/* Title with scroll-triggered animation */}
      <motion.h2 
        className="text-3xl font-semibold mb-8 text-primary text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Amenities
      </motion.h2>

      {/* Description with scroll-triggered animation */}
      <motion.p 
        className='text-center max-w-xl mx-auto text-gray-500 mb-14'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        ReHomes Realty brings to you the Building Revolution. It all started
        with realistic appraisal of your living needs.
      </motion.p>

      {/* Amenities Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-24 text-center">
        {amenities.map((amenity, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }} // Starts from below and invisible
            whileInView={{ opacity: 1, y: 0 }} // Triggers when the element comes into view
            viewport={{ once: true }} // Ensures it triggers only once
            transition={{ delay: index * 0.2, duration: 0.4, ease: 'easeOut' }} // Staggered animation for smooth reveal
          >
            <div className="text-[#d4a373] mb-4">{amenity.icon}</div>
            <p className="text-gray-700 font-medium">{amenity.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
