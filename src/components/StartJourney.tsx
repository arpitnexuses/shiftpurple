import React from 'react';
import SJlogo1 from './asset/SJlogo1.png';
import SJlogo2 from './asset/SJlogo2.png';
import SJlogo3 from './asset/SJlogo3.png';
import RSJvideo from './asset/RSJvideo.mp4';

const StartJourney = () => {
  const features = [
    {
      icon: SJlogo1,
      title: 'Seamless Integration',
      description: 'Pre-built adaptors connect seamlessly with Oracle ERP platforms.'
    },
    {
      icon: SJlogo2,
      title: 'Business Transformation',
      description: 'Expert consulting to reshape your enterprise for tomorrow'
    },
    {
      icon: SJlogo3,
      title: 'Unparalleled Support',
      description: 'Dedicated to user adoption and maximizing business gains.'
    }
  ];

  return (
    <section className="py-12 md:py-24 w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Header Part */}
        <div className="mb-10 md:mb-16 max-w-[700px]">
          <h2 className="text-[32px] md:text-[40px] leading-tight font-bold mb-4">
            Start Your Journey with <span className="text-[#B01B2E]">Calibrate</span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-gray-800">
            Leverage Shiftpurple's deep industry expertise and pre-built 
            solution accelerators for Oracle Cloud ERP and eBS.
          </p>
        </div>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          {/* Left Features */}
          <div className="flex-1 w-full">
            <div className="space-y-8 md:space-y-14 max-w-[500px] pl-4 md:pl-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 md:gap-8">
                  <div className="min-w-[60px] md:min-w-[84px] flex items-center">
                    <img 
                      src={feature.icon} 
                      alt={feature.title}
                      className="w-16 h-16 md:w-20 md:h-20 mt-4"
                    />
                  </div>
                  <div className="pt-3">
                    <h3 className="text-[20px] md:text-[22px] font-semibold mb-2 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-[15px] md:text-[16px] leading-relaxed text-gray-700">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 hidden lg:flex justify-center">
            <video 
              src={RSJvideo} 
              autoPlay
              muted
              loop
              playsInline
              className="max-w-[600px] w-full h-auto object-contain mt-[-100px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartJourney; 