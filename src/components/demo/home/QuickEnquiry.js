export default function QuickEnquiry() {
  return (
    <div className="flex flex-col lg:flex-row w-full h-full mb-10">
      {/* Left Side: Image */}
      <div className="w-full lg:w-1/2">
        <img
          src="https://demo2.wpopal.com/rehomes/wp-content/uploads/2022/11/h7_bg-1.jpg"
          alt="Cityscape"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side: Form */}
      <div className="w-full lg:w-1/2 bg-blue-900 text-white flex items-center justify-center p-8 lg:p-16">
        <div className="max-w-md w-full">
          {/* Header */}
          <p className="uppercase tracking-wide text-sm text-gray-300">
            Quick Enquiry
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Want more information?
          </h2>

          {/* Form */}
          <form className="space-y-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg text-gray-800"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg text-gray-800"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg text-gray-800"
              />
              <select className="w-full px-4 py-3 rounded-lg text-gray-800">
                <option value="">Project</option>
                <option value="project1">Project 1</option>
                <option value="project2">Project 2</option>
                <option value="project3">Project 3</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#c7a17a] text-white py-3 rounded-lg font-bold hover:bg-opacity-90"
            >
              Get a Call Back
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
