import React from 'react';
import MORimage from './asset/MORimage.png';
import MOLimage1 from './asset/MOLimage1.png';
import MOLRimage from './asset/MORLimage2.png';
import yellowLine from './asset/yellowline.png';

const MeasuringOutcome = () => {
  return (
    <section className="py-24 w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Main Title */}
        <h2 className="text-[40px] text-center font-bold mb-16">
          If You Are Not Measuring, <span className="text-[#B01B2E]">You Are Missing Out</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            {/* Left Header */}
            <div className="mb-8 ml-10 mt-10">
              <h3 className="text-[32px] leading-tight mb-1">How Customers</h3>
              <div className="relative inline-block">
                <h2 className="text-[32px] leading-tight font-bold text-[#B01B2E]">Like You Have Benefited</h2>
                <img 
                  src={yellowLine} 
                  alt="underline" 
                  className="absolute -bottom-2 left-0 w-full"
                />
              </div>
            </div>

            {/* Case Study */}
            <div className="mb-8 ml-10 max-w-[300px] mt-10">
              <h4 className="text-[28px] text-[#B01B2E] font-bold mb-2">Case Study:</h4>
              <p className="text-xl text-gray-800">
                Leading Compute and Storage Technology Company
              </p>
            </div>

            {/* Analytics Image */}
            <img 
              src={MOLimage1} 
              alt="Analytics" 
              className="w-full rounded-2xl"
            />
          </div>

          {/* Right Column */}
          <div className="space-y-8 mt-5">
            {/* Success Image */}
            <img 
              src={MORimage} 
              alt="Success" 
              className="w-full rounded-2xl"
            />
            
            {/* Dashboard Image */}
            <img 
              src={MOLRimage} 
              alt="Analytics Dashboard" 
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeasuringOutcome; 