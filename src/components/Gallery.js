import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/gallery/gal-1.png";
import img2 from "../assets/gallery/gal-2.png";
import img3 from "../assets/gallery/gal-3.png";
import img4 from "../assets/gallery/gal-4.png";
import img5 from "../assets/gallery/gal-5.png";
import img6 from "../assets/gallery/gal-6.png";
import img7 from "../assets/gallery/gal-7.png";
import img8 from "../assets/gallery/gal-8.png";
import img9 from "../assets/gallery/gal-9.png";
import img10 from "../assets/gallery/gal-10.png";
import img11 from "../assets/gallery/gal-11.png";
import img12 from "../assets/gallery/gal-12.png";
import img13 from "../assets/gallery/gal-13.png";
import img14 from "../assets/gallery/gal-14.png";
import img15 from "../assets/gallery/gal-15.png";
import img16 from "../assets/gallery/gal-16.png";
import img17 from "../assets/gallery/gal-17.png";
import img18 from "../assets/gallery/gal-18.png";

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="md:w-1/4 bg-gradient-to-b from-pink-200 to-white flex flex-col items-center justify-center p-4">
        <h2 className="text-3xl font-bold">MAGGY MOON</h2>
        <ul className="mt-8 space-y-4">
          <li className="text-lg">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="text-lg">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="text-lg">
            <Link to="/booking">Booking</Link>
          </li>
        </ul>
        <div className="mt-auto mb-4 flex space-x-2">
          <i className="fab fa-instagram"></i>
          <i className="fas fa-envelope"></i>
          <i className="fas fa-globe"></i>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="md:w-3/4 p-4 grid grid-flow-dense " style={{ gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(9, auto)" }}>
        {/* First Row */}
        <img src={img1} alt="Gallery Image 1" className="col-span-1 row-span-1" />
        <img src={img2} alt="Gallery Image 2" className="col-span-2 row-span-1" />

        {/* Second Row */}
        <img src={img3} alt="Gallery Image 3" className="col-span-1 row-span-1" />
        <img src={img4} alt="Gallery Image 4" className="col-span-1 row-span-1" />
        <img src={img5} alt="Gallery Image 5" className="col-span-1 row-span-1" />

        <img src={img8} alt="Gallery Image 8" className="col-span-1 row-span-1" />
        {/* Third Row */}
        <img src={img6} alt="Gallery Image 6" className="col-span-1 row-span-1 mt-0" />
        <img src={img7} alt="Gallery Image 7" className="col-span-1 row-span-1" />

        {/* Fourth Row */}
        <img src={img9} alt="Gallery Image 9" className="col-span-1 row-span-1" />

        {/* Fifth Row */}
        <img src={img10} alt="Gallery Image 10" className="col-span-2 row-span-1" />
        <img src={img11} alt="Gallery Image 11" className="col-span-1 row-span-1" />

        {/* Sixth Row */}
        <img src={img12} alt="Gallery Image 12" className="col-span-1 row-span-1" />
        <img src={img13} alt="Gallery Image 13" className="col-span-1 row-span-2" />
        <img src={img14} alt="Gallery Image 14" className="col-span-1 row-span-2" />

        {/* Seventh Row */}
        <img src={img15} alt="Gallery Image 15" className="col-span-2 row-span-1" />

        {/* Eighth Row */}
        <img src={img16} alt="Gallery Image 16" className="col-span-1 row-span-2" />
        <img src={img17} alt="Gallery Image 17" className="col-span-1 row-span-1" />

        {/* Ninth Row */}
        <img src={img18} alt="Gallery Image 18" className="col-span-2 row-span-1" />
      </div>
    </div>
  );
};

export default Gallery;
