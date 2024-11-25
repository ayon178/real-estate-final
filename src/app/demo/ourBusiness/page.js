'use client'
import Absolute from '@/components/demo/ourBusiness/Absolute copy'
import Comprehensive from '@/components/demo/ourBusiness/Comprehensive copy'
import HighQualityProduct from '@/components/demo/ourBusiness/HighQualityProduct copy'
import Humanitarian from '@/components/demo/ourBusiness/Humanitarian copy'
import Service from '@/components/demo/ourBusiness/Service copy'
import Text from '@/components/demo/ourBusiness/Text copy'
import HalfBanner from '@/components/ourBusiness/HalfBanner'
import Navbar from '@/components/shared/Navbar'

const page = () => {
  return (
    <div>
      <Navbar />
      <HalfBanner />
      <Text />
      {/* RMc */}
      <Humanitarian />
      {/* Nibesh */}
      <Service />
      {/* MEC */}
      <HighQualityProduct />
      {/* Inter */}
      <Absolute />
      {/* ORC */}
      <Comprehensive />
    </div>
  )
}

export default page
