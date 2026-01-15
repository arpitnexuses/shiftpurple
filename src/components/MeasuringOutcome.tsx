import React from 'react';
import MORimage from './asset/MORimage.png';
import MOLimage1 from './asset/MOLimage1.png';
import MOLRimage from './asset/MORLimage2.png';
import yellowLine from './asset/yellowline.png';

const MeasuringOutcome = () => {
  return (
    <section className="py-16 w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Main Title */}
        <h2 className="text-[48px] text-center font-normal mb-20">
          If You Are Not Measuring, <span className="text-[#B01B2E] font-medium">You Are Missing Out</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {/* Left Column */}
          <div>
            {/* Left Header */}
            <div className="mb-6">
              <h3 className="text-[40px] leading-tight mb-2 font-normal">How Customers</h3>
              <div className="relative inline-block">
                <h2 className="text-[40px] leading-tight font-bold text-[#B01B2E]">Like You Have Benefited</h2>
                <img 
                  src={yellowLine} 
                  alt="underline" 
                  className="absolute -bottom-3 left-0 w-full"
                />
              </div>
            </div>

            {/* Case Study */}
            <div className="mb-4">
              <h4 className="text-[32px] text-[#B01B2E] font-bold mb-2">Case Study:</h4>
              <p className="text-[24px] text-gray-800 leading-relaxed">
                Leading Compute and Storage Technology Company
              </p>
            </div>

            {/* Left Column Image */}
            <img 
              src={MOLimage1} 
              alt="Analytics" 
              className="w-full rounded-lg"
            />
          </div>

          {/* Right Column */}
          <div className="space-y-2">
            {/* Success Image */}
            <img 
              src={MORimage} 
              alt="Success" 
              className="w-full rounded-lg"
            />
            
            {/* Dashboard Image */}
            <img 
              src={MOLRimage} 
              alt="Analytics Dashboard" 
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeasuringOutcome; 