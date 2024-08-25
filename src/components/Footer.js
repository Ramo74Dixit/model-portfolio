import React from 'react';

const Footer = () => {
  return (
    <div className="bg-white p-4 flex items-center justify-between w-full sticky bottom-0">
      <div className="flex space-x-4">
        <a href="https://www.instagram.com/yourprofile" aria-label="Instagram">
          <img src="/insta.png" alt="Instagram" className="h-8 w-8 hover:opacity-75 transition-opacity" />
        </a>
        <a href="https://twitter.com/yourprofile" aria-label="Twitter">
          <img src="/twitter.png" alt="Twitter" className="h-8 w-8 hover:opacity-75 transition-opacity" />
        </a>
        <a href="https://www.facebook.com/yourprofile" aria-label="Facebook">
          <img src="/facebook.png" alt="Facebook" className="h-8 w-8 hover:opacity-75 transition-opacity" />
        </a>
        <a href="https://www.tiktok.com/@yourprofile" aria-label="Tiktok">
          <img src="/tiktok.png" alt="Tiktok" className="h-8 w-8 hover:opacity-75 transition-opacity" />
        </a>
      </div>
      <div className="text-gray-600 space-x-4 text-lg lg:text-xl">
        M/M
      </div>
    </div>
  );
}

export default Footer;
