import React from 'react';
import BDimage from './asset/BDimage.png';

const BookDemo = () => {
  return (
    <section className="relative w-full min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${BDimage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark Overlay - reduced opacity from 0.6 to 0.4 */}
        {/* <div className=""></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 py-24">
        <div className="max-w-[600px] ml-8">
          <h2 className="text-[42px] leading-tight mb-8 text-white mt-10">
            <span className="">Transform your operations with </span>
            <span className="font-bold">Calibrate and embrace</span>
            <span className="font-bold block">
              the future of work with confidence.
            </span>
          </h2>
          <button className="bg-[#B01B2E] text-white px-10 py-4 rounded-lg text-2xl font-medium hover:bg-[#8B1624] transition-colors mt-10">
            Book A Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookDemo; 