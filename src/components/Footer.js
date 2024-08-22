import React from 'react'

const Footer = () => {
  return (
    <div className="bg-white p-4 flex justify-between items-center">
      <div className="flex space-x-4">
        <a href="#">
          <img src="/insta.png" alt="Instagram" className="h-8 w-8" />
        </a>
        <a href="#">
          <img src="/twitter.png" alt="Twitter" className="h-8 w-8" />
        </a>
        <a href="#">
          <img src="/twitter.png" alt="Facebook" className="h-8 w-8" />
        </a>
        <a href="#">
          <img src="/twitter.png" alt="Tiktok" className="h-8 w-8" />
        </a>
      </div>
      <div className="text-right text-gray-600">
        M/M
      </div>
    </div>
  )
}

export default Footer
