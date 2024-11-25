import GetInTouch from '@/components/demo/contacts/GetInTouch'
import HalfBanner from '@/components/demo/contacts/HalfBanner'
import ProfileCard from '@/components/demo/contacts/ProfileCard'
import Navbar from '@/components/shared/Navbar'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HalfBanner />
      <GetInTouch />

      <ProfileCard/>
    
    </div>
  )
}

export default Contact
