'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import commonImage from '../../../../assets/a.jpg'
import { mapImage } from '@/app/constant/images'

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState('Tower Plan')

  const plans = [
    { label: 'Master Plan', image: mapImage },
    // { label: 'Tower Plan', image: commonImage },
    // { label: '1 bedroom', image: commonImage },
    // { label: '2 bedroom', image: commonImage },
    // { label: '3 bedroom', image: commonImage },
  ]

  return (
    <div className="max-w-6xl mx-auto text-center py-10">
      <h2 className="text-4xl font-semibold mb-8 text-gray-800">Plans</h2>

      {/* Toggle Menu */}
      <div className="flex flex-wrap justify-center space-x-8 mb-8">
        {plans.map(plan => (
          <button
            key={plan.label}
            className={`font-medium pb-2 border-b-2 ${
              selectedPlan === plan.label
                ? 'border-gray-800'
                : 'border-transparent'
            } transition-colors duration-300`}
            onClick={() => setSelectedPlan(plan.label)}
          >
            {plan.label}
          </button>
        ))}
      </div>

      {/* Animated Image */}
      <div className="flex justify-center">
        {plans.map(
          plan =>
            selectedPlan === plan.label && (
              <motion.div
                key={plan.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-3xl"
              >
                <Image
                  src={plan.image.src}
                  alt={`${plan.label} Image`}
                  layout="responsive"
                  width={700}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            )
        )}
      </div>
    </div>
  )
}

export default Plans
