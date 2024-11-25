import Image from 'next/image'

const Overview = () => {
  return (
    <div className="container mx-auto p-6 mt-10">
      <h2 className="text-3xl font-semibold mb-8 text-primary text-center">
        Overview
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left side: Image */}
        <div className="lg:col-span-5">
          <Image
            width={500}
            height={300}
            src="https://demo2.wpopal.com/rehomes/wp-content/uploads/2019/10/project_9-700x394.jpg"
            alt="Building Image"
            className="rounded-lg"
          />
        </div>

        {/* Center: Paragraphs */}
        <div className="lg:col-span-4 text-center lg:text-left">
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
        </div>

        {/* Right side: Details */}
        <div className="lg:col-span-3 grid grid-cols-1 gap-4 border-l ps-4 border-gray-300 pt-4 text-gray-800">
          <div className="flex items-center justify-between">
            <p className="font-semibold">Status:</p>
            <p className="whitespace-nowrap">Under Construction</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold">Area:</p>
            <p className="whitespace-nowrap">1000 - 1500 Sq ft</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold">Location:</p>
            <p className="whitespace-nowrap">New York, USA</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold">Type:</p>
            <p className="whitespace-nowrap">Apartment</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold">Apartments:</p>
            <p className="whitespace-nowrap">1200</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold">Total Towers:</p>
            <p className="whitespace-nowrap">6</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold">Flat Size:</p>
            <p className="whitespace-nowrap">100 - 150 Sq ft</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold">Price Range:</p>
            <p className="whitespace-nowrap">$1mil - $1mil</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
