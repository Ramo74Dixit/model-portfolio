import React from 'react';
import mainImg1 from '../assets/main/main-img-1.png';
import mainImg2 from '../assets/main/main-img-2.png';
import mainImg3 from '../assets/main/main-img-3.png';
import mainImg4 from '../assets/main/main-img-4.png';
import { Link } from 'react-router-dom';
const MainPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="flex flex-col md:flex-row flex-grow">
        <div className="w-full md:w-[86px] h-[20vh] md:h-auto bg-cover" style={{ backgroundImage: `url(${mainImg1})` }}></div>
        <div className="w-full md:w-[344px] h-[20vh] md:h-auto bg-cover flex flex-col justify-between">
        <div className="w-[344px] relative bg-cover bg-center flex flex-col justify-center items-center text-center h-full"
           style={{ backgroundImage: `url(${mainImg4})` }}>
        <div className="hidden md:flex flex-col justify-center items-center text-center h-full">
          <ul className="z-10">
            <li className="my-4 text-lg text-black cursor-pointer "><Link to="/profile">Profile</Link></li>
            <li className="my-4 text-lg text-black cursor-pointer "><Link to="/gallery">Gallery</Link></li>
            <li className="my-4 text-lg text-black cursor-pointer "> <Link to="/booking">Booking</Link></li>
          </ul>
        </div>
      </div>
        </div>
        <div className="w-full md:w-[517px] h-[20vh] md:h-auto bg-cover" style={{ backgroundImage: `url(${mainImg2})` }}></div>
        <div className="w-full md:w-[493px] h-[20vh] md:h-auto bg-cover" style={{ backgroundImage: `url(${mainImg3})` }}></div>
      </div>
    </div>
  );
}

export default MainPage;
