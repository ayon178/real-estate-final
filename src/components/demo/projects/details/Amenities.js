import {
  AiOutlineCamera,
  AiOutlineUser,
  AiOutlineAlert,
  AiOutlineShop,
} from 'react-icons/ai'
import { FaSwimmingPool, FaTree, FaChild, FaDumbbell } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Amenities = () => {
  const amenities = [
    { icon: <AiOutlineCamera size={40} />, label: 'Surveillance System' },
    { icon: <AiOutlineUser size={40} />, label: '24x7 Security' },
    { icon: <AiOutlineAlert size={40} />, label: 'Firefighting System' },
    { icon: <FaSwimmingPool size={40} />, label: 'Swimming Pool' },
    { icon: <FaChild size={40} />, label: "Children's Play Area" },
    { icon: <FaTree size={40} />, label: 'Landscape Garden' },
    { icon: <AiOutlineShop size={40} />, label: 'AC Community Hall' },
    { icon: <FaDumbbell size={40} />, label: 'Fitness Center' },
  ]

  return (
    <div className="bg-[#f9f4ef] py-20 mt-16 lg:px-0 px-10">
      <motion.h2
        className="text-3xl headingFont mb-4 text-primary text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Amenities
      </motion.h2>
      <motion.p
        className="text-center paragraphFont max-w-xl mx-auto text-gray-500 mb-14"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        SEL brings to you the Building Revolution. It all started
        with realistic appraisal of your living needs.
      </motion.p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-24 text-center">
        {amenities.map((amenity, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.4, ease: 'easeOut' }}
          >
            <div className="text-[#d4a373] mb-4">{amenity.icon}</div>
            <p className="text-gray-700 buttonFont font-medium">
              {amenity.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Amenities
