import React from 'react'

const footer = () => {
  return (
    <div className="bg-gray-400 h-16 flex items-center justify-center">
        <div className="text-black">© 2023 Your Company Name</div>
        <div className="flex space-x-4 ml-4">
          <a href="#" className="text-black hover:text-gray-700">
            Privacy Policy
          </a>
          <a href="#" className="text-black hover:text-gray-700">
            Terms of Service
          </a>
          <a href="#" className="text-black hover:text-gray-700">
            Sitemap
          </a>
          <a href="#" className="text-black hover:text-gray-700">
            Contact Us
          </a>
        </div>
      </div>  
  )
}

export default footer