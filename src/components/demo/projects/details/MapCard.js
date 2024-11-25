import { motion } from 'framer-motion'
const MapCard = () => {
  return (
    <div className="bg-[#F7F2EC] py-28 mt-36">
      <motion.h1
        className="text-4xl headingFont mb-8 text-primary text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Location
      </motion.h1>
      <div className=" bg-white shadow-lg rounded-lg p-4 md:p-8 container mx-auto">
        {/* Map Section */}
        <div className=" w-full h-[500px] md:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3651.987643566207!2d90.37106577418947!3d23.7478200388775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sdhanmondi%2011%2Fa!5e0!3m2!1sen!2sbd!4v1732355968744!5m2!1sen!2sbd"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Info Section */}
        {/* <div className="md:w-1/2 w-full bg-gray-50 p-6 md:p-10">
        
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-700">Address</h2>
            <p className="text-gray-600">
              46B Matheswartala Road, Kolkata 700 046
            </p>
            <p className="text-gray-600">New York, USA</p>
          </div>

      
          <div>
            <h2 className="text-xl font-bold text-gray-700 mb-4">
              Key transport
            </h2>
            <div className="grid grid-cols-2 gap-4 text-gray-600">
              <p>
                <span className="font-semibold">Coast:</span> 300m
              </p>
              <p>
                <span className="font-semibold">State Bank:</span> 190m
              </p>
              <p>
                <span className="font-semibold">Supermarket:</span> 200m
              </p>
              <p>
                <span className="font-semibold">Railway Station:</span> 1,800m
              </p>
              <p>
                <span className="font-semibold">Airport:</span> 2,790m
              </p>
              <p>
                <span className="font-semibold">University:</span> 250m
              </p>
              <p>
                <span className="font-semibold">Hospital:</span> 500m
              </p>
              <p>
                <span className="font-semibold">Bus Station:</span> 150m
              </p>
              
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default MapCard
