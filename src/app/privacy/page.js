// this is the privacy page
import React from 'react';
import { FaEnvelope, FaInfoCircle, FaLock, FaServer, FaShieldAlt } from 'react-icons/fa';

const page = () => {
    return (
        <div>
         <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <FaShieldAlt className="w-16 h-16 mx-auto mb-6 text-indigo-600" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your privacy matters to us. Learn how we protect and manage your information.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Introduction Card */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <FaInfoCircle className="w-8 h-8 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">Welcome</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Welcome to our website. Your privacy is extremely important to us. This policy explains how we collect, use, and protect your information when you use our services.
          </p>
        </div>

        {/* Information Collection Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaServer className="w-8 h-8 text-indigo-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Personal Information</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
                Full Name
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
                Email Address
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
                Phone Number
              </li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaLock className="w-8 h-8 text-indigo-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Device Information</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
                IP Address
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
                Browser Information
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
                Device Type
              </li>
            </ul>
          </div>
        </div>

        {/* Data Usage Section */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <FaServer className="w-8 h-8 text-indigo-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-800">How We Use Your Information</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h4 className="font-medium text-indigo-900 mb-2">Service Improvement</h4>
              <p className="text-gray-600">We analyze usage patterns to enhance our website and services</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h4 className="font-medium text-indigo-900 mb-2">Communication</h4>
              <p className="text-gray-600">We send important updates and respond to your inquiries</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <FaEnvelope className="w-8 h-8 text-indigo-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-800">Contact Us</h3>
          </div>
          <p className="text-gray-600 mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <a 
            href="mailto:contact@example.com" 
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300"
          >
            <FaEnvelope className="w-4 h-4 mr-2" />
            contact@example.com
          </a>
        </div>

        {/* Last Updated */}
        <div className="text-center text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </main>
    </div>
            
        </div>
    );
};

export default page;