import { project1, project2, project3 } from '@/app/constant/images'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Overview = ({ id }) => {
  return (
    <div className="container mx-auto p-6 mt-10">
      <h2 className="headingFont text-3xl mb-8 text-primary text-center">
        Overview
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        {/* Left side: Image */}
        <div className="lg:col-span-6 ">
          <Image
            width={600}
            height={300}
            src={project2}
            alt="Building Image"
            className="rounded-lg"
          />
        </div>

        {/* Center: Paragraphs */}
        {/* <div className="lg:col-span-4 text-center lg:text-left">
          <p className="text-gray-700 mb-6">
            Sprawling across 9 acres, the most spacious, densely green
            residential development, designed for childhood. With wide open
            spaces to run free, wander, explore, learn and grow. “Give your
            children a childhood they’ll cherish forever.”
          </p>
          <p className="text-gray-600 mb-6">
            Nestled between a lake and the east Kolkata wetlands, One10 is
            located in the prime neighborhood of Newtown, Action Area 1. It
            features an Olympic length swimming pool with water slides, Nature
            Trail, Multi-sport Game Courts, Triple height Sports Arena, Centre
            for Extra-curricular activities, Montessori and Daycare.
          </p>
        </div> */}

        {/* Right side: Details */}
        {/* Right side: Details with animation */}
        <motion.div
          className="lg:col-span-6 grid grid-cols-1 gap-4 border-l ps-4 border-gray-300 pt-4 text-gray-800"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Right side: Details with animation */}
          <motion.div
            className="flex paragraphFont gap-3 items-center justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="font-semibold">Location:</p>
            <p className="whitespace-nowrap">Dhanmondi, Dhanmondi, Dhaka</p>
          </motion.div>

          <motion.div
            className="flex paragraphFont gap-3 items-center justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="font-semibold">Address:</p>
            <p className="whitespace-nowrap">
              Holding Number-08 (New), 19/A (Old), Road-06, Dhanmondi, Dhaka
            </p>
          </motion.div>

          {/* <motion.div
            className="flex paragraphFont gap-3 items-center justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="font-semibold">Land Area (Katha):</p>
            <p className="whitespace-nowrap">20</p>
          </motion.div> */}

          <motion.div
            className="flex paragraphFont items-center justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <p className="font-semibold whitespace-nowrap">Project Type:</p>
            <p className="whitespace-nowrap">Residential</p>
          </motion.div>

          {/* <motion.div
            className="flex paragraphFont items-center justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
            <p className="font-semibold whitespace-nowrap">
              Number of Building Blocks:
            </p>
            <p className="whitespace-nowrap">1</p>
          </motion.div> */}

          <motion.div
            className="flex paragraphFont gap-3 items-center justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            viewport={{ once: true }}
          >
            <p className="font-semibold whitespace-nowrap">Number of Floor:</p>
            <p className="whitespace-nowrap">
              14 storied building with Two Basement(s)
            </p>
          </motion.div>

          <motion.div
            className="flex paragraphFont gap-3 items-center justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <p className="font-semibold whitespace-nowrap">Flat Size:</p>
            <p className="whitespace-nowrap">2399(sft) -- 2650 (sft)</p>
          </motion.div>

          {/* <motion.div
            className="flex paragraphFont gap-3 items-center justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            viewport={{ once: true }}
          >
            <p className="font-semibold whitespace-nowrap">Launch Date:</p>
            <p className="whitespace-nowrap">Thursday, May 16, 2019</p>
          </motion.div> */}

          <motion.div
            className="flex paragraphFont gap-3 items-center justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            viewport={{ once: true }}
          >
            <p className="font-semibold whitespace-nowrap">
              Estimated Completion Date:
            </p>
            <p className="whitespace-nowrap">Friday, June 30, 2023</p>
          </motion.div>

          {/* <motion.div
            className="flex paragraphFont gap-3 items-center justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            viewport={{ once: true }}
          >
            <p className="font-semibold whitespace-nowrap">
              RAJUK Approval Date:
            </p>
            <p className="whitespace-nowrap">Sunday, January 12, 2020</p>
          </motion.div> */}

          {/* <motion.div
            className="flex paragraphFont gap-3 items-center justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            viewport={{ once: true }}
          >
            <p className="font-semibold whitespace-nowrap">
              Rajuk Approval No:
            </p>
            <p className="whitespace-nowrap">25.39.0000.116.34.229.19</p>
          </motion.div> */}

          <motion.div
            className="flex paragraphFont gap-3 items-center justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.7 }}
            viewport={{ once: true }}
          >
            <p className="font-semibold">Status:</p>
            <p className="whitespace-wrap">Handover</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Overview
