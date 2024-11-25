import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-xl text-blue-100">
            Please read these terms carefully before using our real estate
            services
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          {/* Introduction Section */}
          <div className="p-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Welcome to [Real Estate Company Name]
            </h2>
            <p className="text-gray-600 leading-relaxed">
              These terms and conditions outline the rules and regulations for
              the use of our real estate services, website, and all related
              platforms. By accessing our services, you accept these terms and
              conditions in full.
            </p>
          </div>

          {/* Definitions Section */}
          <div className="p-8 bg-gray-50 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              1. Definitions
            </h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-blue-800 mb-2">Company</h4>
                <p className="text-gray-600">
                  "Company," "we," "our," or "us" refers to [Real Estate Company
                  Name].
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-blue-800 mb-2">Services</h4>
                <p className="text-gray-600">
                  All real estate related services, including property listings,
                  consultations, and transactions.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-blue-800 mb-2">Client</h4>
                <p className="text-gray-600">
                  "Client," "you," or "your" refers to the user of our services.
                </p>
              </div>
            </div>
          </div>

          {/* Property Listings Section */}
          <div className="p-8 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              2. Property Listings
            </h3>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-800 font-semibold text-sm">
                  a
                </div>
                <p className="ml-4">
                  All property listings are subject to availability and prior
                  sale.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-800 font-semibold text-sm">
                  b
                </div>
                <p className="ml-4">
                  Property information is believed to be accurate but should be
                  independently verified.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-800 font-semibold text-sm">
                  c
                </div>
                <p className="ml-4">
                  Prices are subject to change without notice.
                </p>
              </div>
            </div>
          </div>

          {/* Services Agreement */}
          <div className="p-8 bg-gray-50 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              3. Services Agreement
            </h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-medium text-blue-800 mb-3">
                  Brokerage Services
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Property showing and viewing arrangements</li>
                  <li>Market analysis and property valuation</li>
                  <li>Negotiation assistance</li>
                  <li>Transaction documentation support</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-medium text-blue-800 mb-3">
                  Client Obligations
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Provide accurate information</li>
                  <li>Cooperate with property viewings</li>
                  <li>Timely response to communications</li>
                  <li>Meet financial obligations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="p-8 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              4. Payment Terms
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>Our commission structure is as follows:</p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Residential Sales: [X]% of sale price</li>
                  <li>Commercial Sales: [X]% of sale price</li>
                  <li>Rental Properties: [X] month's rent</li>
                </ul>
              </div>
              <p className="mt-4">Additional fees may apply for:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Marketing services</li>
                <li>Professional photography</li>
                <li>Virtual tours</li>
                <li>Administrative services</li>
              </ul>
            </div>
          </div>

          {/* Termination */}
          <div className="p-8 bg-gray-50 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              5. Termination
            </h3>
            <div className="prose text-gray-600">
              <p>
                Either party may terminate the service agreement under the
                following conditions:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Mutual written agreement</li>
                <li>Material breach of terms</li>
                <li>Failure to meet obligations</li>
                <li>Written notice period of [X] days</li>
              </ul>
            </div>
          </div>

          {/* Liability */}
          <div className="p-8 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              6. Liability
            </h3>
            <p className="text-gray-600 mb-4">
              Our company shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages resulting from your
              use of our services.
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
              <p className="text-yellow-800">
                We recommend all clients to conduct their own due diligence and
                seek independent legal advice when necessary.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              7. Contact Information
            </h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-2">
                For any questions regarding these terms, please contact us at:
              </p>
              <div className="space-y-2">
                <p className="text-blue-800">
                  Email:{' '}
                  <a
                    href="mailto:legal@realestate.com"
                    className="hover:text-blue-600"
                  >
                    legal@realestate.com
                  </a>
                </p>
                <p className="text-blue-800">Phone: (555) 123-4567</p>
                <p className="text-blue-800">Address: [Company Address]</p>
              </div>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-8 text-center text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </main>
    </div>
  )
}

export default page
